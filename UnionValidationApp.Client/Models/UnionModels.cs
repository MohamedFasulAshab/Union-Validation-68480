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
    // BUCKET 3 : Similar Records ambiguation
    // ==========================================
    public record class CustomerName(string Name);
    public record class ProductName(string Name);

    // Scenario B: WITHOUT classifier (Will fail or behave ambiguously during raw JSON loops)
    public union UnclassifiedRecordUnion(CustomerName, ProductName);

    // ==========================================
    // BUCKET 4: Similar Records & Disambiguation
    // ==========================================
    public record class ClassifiedCustomerName([property: JsonPropertyName("name")] string Name)
    {
        [JsonPropertyName("kind")]
        public string Kind => "customer";
    }

    public record class ClassifiedProductName([property: JsonPropertyName("name")] string Name)
    {
        [JsonPropertyName("kind")]
        public string Kind => "product";
    }

    // Scenario A: WITH [JsonUnion] classifier
    [JsonUnion(TypeClassifier = typeof(ClassifiedRecordUnionClassifierFactory))]
    public union ClassifiedRecordUnion(ClassifiedCustomerName, ClassifiedProductName);
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
    public sealed class ClassifiedRecordUnionClassifierFactory
: JsonTypeClassifierFactory
    {
        public override bool CanClassify(
            JsonTypeClassifierContext context)
        {
            return context.DeclaringType ==
                typeof(ClassifiedRecordUnion);
        }

        public override JsonTypeClassifier CreateJsonClassifier(
            JsonTypeClassifierContext context,
            JsonSerializerOptions options)
        {
            return (ref Utf8JsonReader reader) =>
            {
                Utf8JsonReader clone = reader;

                if (clone.TokenType != JsonTokenType.StartObject)
                {
                    return null;
                }

                while (clone.Read())
                {
                    if (clone.TokenType == JsonTokenType.PropertyName)
                    {
                        bool isKindProperty =
                            clone.ValueTextEquals("kind") ||
                            clone.ValueTextEquals("Kind");

                        if (isKindProperty)
                        {
                            if (!clone.Read())
                            {
                                return null;
                            }

                            if (clone.TokenType != JsonTokenType.String)
                            {
                                return null;
                            }

                            string? discriminator = clone.GetString();

                            return discriminator switch
                            {
                                "customer" =>
                                    typeof(ClassifiedCustomerName),

                                "product" =>
                                    typeof(ClassifiedProductName),

                                _ => null
                            };
                        }

                        // Move from the property name to its value.
                        if (!clone.Read())
                        {
                            return null;
                        }

                        // Skip complete nested object/array values safely.
                        clone.Skip();
                    }

                    if (clone.TokenType == JsonTokenType.EndObject)
                    {
                        break;
                    }
                }

                // The payload didn't contain a supported "kind"
                // discriminator.
                return null;
            };
        }
    }
}