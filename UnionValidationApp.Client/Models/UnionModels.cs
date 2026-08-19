using System.Text.Json;
using System.Text.Json.Serialization;

namespace UnionValidationApp.Client.Models
{
        // ==========================================
        // BUCKET 1: Unambiguous Union (int, string)
        // ==========================================
        public union IntOrString(int, string);

        // ==========================================
        // BUCKET 2: Nullable Union (int?, string)
        // ==========================================
        public union NullableIntOrString(int?, string);

        // ==========================================
        // BUCKET 3 & 4: Similar Records & Disambiguation
        // ==========================================
        public record class CustomerName(string Name);
        public record class ProductName(string Name);

        // Scenario A: WITH [JsonUnion] classifier
        [JsonUnion(TypeClassifier = typeof(JsonUnionTypeStructuralClassifier))]
        public union ClassifiedRecordUnion(CustomerName, ProductName);

        // Scenario B: WITHOUT classifier (Will fail or behave ambiguously during raw JSON loops)
        public union UnclassifiedRecordUnion(CustomerName, ProductName);

        // ==========================================
        // BUCKET 5: Nested Union Container
        // ==========================================
        public class OrderPayload
        {
            public int OrderId { get; set; }
            public IntOrString PaymentRef { get; set; }
        }

        // ====================================================================
        // THE MISSING LINK: The Custom JSON Type Disambiguation Classifier Engine
        // ====================================================================
        public class JsonUnionTypeStructuralClassifier : JsonConverter<ClassifiedRecordUnion>
        {
            public override ClassifiedRecordUnion Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                // Parse raw text into a temporary JSON document instance
                using var jsonDoc = JsonDocument.ParseValue(ref reader);
                var rootElement = jsonDoc.RootElement;

                // Inspect metadata properties or fields to identify the correct active case
                if (rootElement.TryGetProperty("Kind", out var kindProp))
                {
                    var discriminatorValue = kindProp.GetString();

                    if (discriminatorValue == "customer")
                    {
                        var name = rootElement.GetProperty("Name").GetString() ?? string.Empty;
                        return new CustomerName(name);
                    }
                    if (discriminatorValue == "product")
                    {
                        var name = rootElement.GetProperty("Name").GetString() ?? string.Empty;
                        return new ProductName(name);
                    }
                }

                // Fallback rule if no metadata label is detected inside the incoming network string stream
                throw new JsonException("Unable to resolve ClassifedRecordUnion active case type: Missing 'Kind' property.");
            }

            public override void Write(Utf8JsonWriter writer, ClassifiedRecordUnion value, JsonSerializerOptions options)
            {
                writer.WriteStartObject();

                // Unwrap the active case pattern matching sequence to write out structural fields safely
                switch (value)
                {
                    case CustomerName customer:
                        writer.WriteString("Kind", "customer");
                        writer.WriteString("Name", customer.Name);
                        break;

                    case ProductName product:
                        writer.WriteString("Kind", "product");
                        writer.WriteString("Name", product.Name);
                        break;
                }

                writer.WriteEndObject();
            }
        }   
}