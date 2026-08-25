# C# Union Types in Blazor — Validation for Issue #68480

Validation of C# union types used as Blazor component parameters, persisted component state, and nested values across Interactive Server, Interactive WebAssembly, and Interactive Auto render modes.

Tested under Debug, Published Release, and Trimmed WebAssembly builds. One confirmed product finding and one diagnostic observation were recorded.

## Environment

| Detail | Value |
|--------|-------|
| SDK | `11.0.100-preview.7.26381.103` |
| Target framework | `net11.0` |
| Language version | `preview` |
| App type | Blazor Web App with Client project |
| OS | Windows |
| Browser | Microsoft Edge |

## Union Types Under Test

```csharp
public union IntOrString(int, string);
public union NullableIntOrString(int?, string);

// With JSON discriminator and classifier factory
[JsonUnion(TypeClassifier = typeof(ClassifiedRecordUnionClassifierFactory))]
public union ClassifiedRecordUnion(ClassifiedCustomerName, ClassifiedProductName);

// Without classifier — intentionally ambiguous JSON shapes
public union UnclassifiedRecordUnion(CustomerName, ProductName);

// Nested union inside a container
public class OrderPayload
{
    public int OrderId { get; set; }
    public IntOrString PaymentRef { get; set; }
}
```

All five types live in `UnionValidationApp.Client/Models/UnionModels.cs`.

## What Was Tested

### 1. Runtime tests — union values as local component state

Three pages (`/union-server`, `/union-wasm`, `/union-auto`) keep unions as local fields and pass them to ordinary child components. These cover construction, rendering, mutation, JS interop, and basic persisted state within a single interactive tree.

### 2. Boundary tests — union parameters crossing the prerender boundary

A static SSR parent passes a union value to an interactive-root child component. The child receives it through the Blazor parameter serialization path — not from a field initializer.

```
Static SSR parent → serialized [Parameter] → Interactive child
```

Ten isolated cases (B01–B10), each tested in Server, WebAssembly, and Auto = 30 boundary pages.

### 3. Persistence tests — union values surviving prerender-to-interactive handoff

Each component creates a union value during prerender, persists it with `PersistAsJson`, and restores it with `TryTakeFromJson` during interactive activation. No parameters are passed in — the component owns the entire lifecycle.

```
Prerender instance → PersistAsJson → PersistentComponentState → TryTakeFromJson → Interactive instance
```

Eight isolated cases (P01–P08), each tested in Server, WebAssembly, and Auto = 24 persistence pages.

### 4. Unsupported query-string binding

A page uses `[SupplyParameterFromQuery]` on an `IntOrString` parameter. The binding pipeline rejects it with an explicit error instead of silently producing a default value.

## Project Structure

```
UnionValidationApp/                          # ASP.NET Core host (static SSR)
├── Program.cs
├── Components/
│   ├── App.razor
│   ├── Routes.razor
│   ├── Layout/
│   └── Pages/
│       ├── BoundaryTests/
│       │   ├── Server/    (B01–B10)
│       │   ├── WASM/      (B01–B10)
│       │   └── Auto/      (B01–B10)
│       └── PersistenceTests/
│           ├── Server/    (P01–P08)
│           ├── WASM/      (P01–P08)
│           └── Auto/      (P01–P08)
└── wwwroot/
    └── lib/bootstrap/                       # Bootstrap CSS committed

UnionValidationApp.Client/                   # Blazor WebAssembly client
├── Models/
│   └── UnionModels.cs                       # All union declarations
├── Components/
│   ├── BoundaryTests/                       # B01–B10 child components
│   ├── PersistenceTests/                    # P01–P08 persistence components
│   └── RuntimeTests/                        # Display components for runtime pages
├── Pages/
│   ├── RuntimeTests/                        # UnionServer, UnionWebAssembly, UnionAuto
│   └── UnsupportedQueryBinding.razor
└── UnionValidationApp.Client.csproj         # PublishTrimmed=true

evidence/
├── build/                                   # Build output logs
├── environment/                             # dotnet --info, SDK/runtime lists
├── findings/                                # Final validation report
├── Images/                                  # Screenshots (Debug, Published, Trimmed)
└── Errorlogs/                               # Console/terminal error captures
    ├── Debug/
    ├── Published/
    └── Trimmed/
```

## How to Run

You need .NET 11 preview SDK `11.0.100-preview.7.26381.103` or later.

```powershell
cd UnionValidationApp
dotnet run --launch-profile https
```

Opens at `https://localhost:7031`. HTTP alternative at `http://localhost:5128`.

To publish:

```powershell
dotnet publish -c Release -o ../publish
cd ../publish
dotnet UnionValidationApp.dll
```

The Client project already has `<PublishTrimmed>true</PublishTrimmed>` set, so published output includes trimmed WebAssembly assemblies.

## Test URLs

### Runtime tests

| Page | URL |
|------|-----|
| Server | `/union-server` |
| WebAssembly | `/union-wasm` |
| Auto | `/union-auto` |

### Boundary tests (B01–B10)

| Mode | URL pattern |
|------|-------------|
| Server | `/boundary-b01` through `/boundary-b10` |
| WebAssembly | `/boundary-b01-wasm` through `/boundary-b10-wasm` |
| Auto | `/boundary-b01-auto` through `/boundary-b10-auto` |

### Persistence tests (P01–P08)

| Mode | URL pattern |
|------|-------------|
| Server | `/persistence/server/p01` through `/persistence/server/p08` |
| WebAssembly | `/persistence/wasm/p01` through `/persistence/wasm/p08` |
| Auto | `/persistence/auto/p01` through `/persistence/auto/p08` |

### Binding test

| Page | URL |
|------|-----|
| Unsupported query binding | `/unsupported-union-query` |

## Boundary Results

| Test | Case | Server | WASM | Auto Cold | Auto Warm |
|------|------|--------|------|-----------|-----------|
| B01 | `IntOrString` int | Pass | Pass | Pass | Pass |
| B02 | `IntOrString` string | Pass | Pass | Pass | Pass |
| B03 | `NullableIntOrString` null | Pass | **Fail** | Pass | **Fail** |
| B04 | `NullableIntOrString` int | Pass | Pass | Pass | Pass |
| B05 | Classified customer | Pass | Pass | Pass | Pass |
| B06 | Classified product | Pass | Pass | Pass | Pass |
| B07 | Unclassified customer | Fail | Fail | Fail | Fail |
| B08 | Unclassified product | Fail | Fail | Fail | Fail |
| B09 | Nested int | Pass | Pass | Pass | Pass |
| B10 | Nested string | Pass | Pass | Pass | Pass |

B07/B08 fail in every mode because the two record types share the same JSON shape. The failure is visible and doesn't silently pick the wrong case.

## Persistence Results

| Test | Case | Server | WASM | Auto Cold | Auto Warm |
|------|------|--------|------|-----------|-----------|
| P01 | `IntOrString` string token | Pass | Pass | Pass | Pass |
| P02 | `NullableIntOrString` null | Pass | Pass | Pass | Pass |
| P03 | Classified customer | Pass | Pass | Pass | Pass |
| P04 | Classified product | Pass | Pass | Pass | Pass |
| P05 | Unclassified customer | Explicit ambiguity | Explicit ambiguity | Explicit ambiguity | Explicit ambiguity |
| P06 | Unclassified product | Explicit ambiguity | Explicit ambiguity | Explicit ambiguity | Explicit ambiguity |
| P07 | Nested int | Pass | Pass | Pass | Pass |
| P08 | Nested string | Pass | Pass | Pass | Pass |

P05/P06 throw `JsonException` with a clear message: "JSON value type 'Object' is ambiguous for union type ... Specify a custom type classifier to support deserialization." This is the correct and safe behavior.

## Confirmed Finding

**Active-null union parameter fails through WebAssembly.**

`NullableIntOrString` with an active `int?` case containing `null` passes through Interactive Server but fails during Interactive WebAssembly parameter restoration. Static SSR renders correctly, but the component never becomes interactive.

WebAssembly error:

```
Could not parse the parameter value for parameter 'Value'
of type 'UnionValidationApp.Client.Models.NullableIntOrString'
and assembly 'UnionValidationApp.Client'.
```

The equivalent non-null case (B04) passes in all modes. The equivalent active-null value also persists and restores correctly through `PersistentComponentState` in all modes (P02). This isolates the problem to the WebAssembly interactive-root parameter restoration path.

Reproduced in Debug, Published Release, and Trimmed WebAssembly builds.

## Diagnostic Observation

The JSON serializer explains unclassified union ambiguity clearly — it names the union type, identifies the value type conflict, and tells you to add a classifier. But the Blazor interactive-root boundary wraps this in a generic "Could not parse the parameter value" message. The underlying cause doesn't surface to the developer without checking server-side logs.

## DX Notes

Union-typed parameters need the `@` prefix in Razor markup:

```razor
<ChildComponent Value="@unionVariable" />
```

Without `@`, Razor treats the value as a string literal.

Union parameters should use the exact union type, not `object?`:

```csharp
[Parameter]
public IntOrString Value { get; set; }
```

## Related

- [#68480](https://github.com/dotnet/aspnetcore/issues/68480) — C# unions in component parameters and prerendered state
