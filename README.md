# C# Union Types in Component Parameters - Validation Sample

This repository contains a comprehensive validation sample for **Issue #68480** demonstrating C# union types working correctly as Blazor component parameters across multiple render modes with proper prerendered state restoration.

## Project Overview

A complete Blazor Web App testing union type support in component parameters across:
- ✅ **Interactive Server** render mode
- ✅ **Interactive WebAssembly** render mode  
- ✅ **Interactive Auto** render mode (cold=Static→Server, warm=Static→WebAssembly)
- ✅ **Published** release builds
- ✅ **Trimmed** WebAssembly assemblies (PublishTrimmed=true)

## Union Types Tested

1. **IntOrString** - Simple union of primitive types
2. **NullableIntOrString** - Union with nullable variant
3. **ClassifiedRecordUnion** - Record types with JSON discriminator
4. **UnclassifiedRecordUnion** - Record types without classifier
5. **Nested Unions** - OrderPayload containing IntOrString

## Key Features Validated

| Feature | Status |
|---------|--------|
| Union parameters deserialize correctly | ✅ PASS |
| Pattern matching in components | ✅ PASS |
| Static-to-Interactive persistence | ✅ PASS |
| All render modes functional | ✅ PASS |
| Published builds work | ✅ PASS |
| Trimmed WASM functional | ✅ PASS |
| Unsupported query-binding errors correctly | ✅ PASS |

## Project Structure

```
src/
├── UnionValidationApp/                 # Server (ASP.NET Core host)
│   ├── Program.cs
│   ├── App.razor
│   ├── Routes.razor
│   └── Components/
│       ├── Pages/
│       │   ├── UnionServer.razor        # Server render mode tests
│       │   ├── UnionWebAssembly.razor   # WASM render mode tests
│       │   ├── UnionAuto.razor          # Auto render mode tests (cold/warm)
│       │   └── UnsupportedQueryBinding.razor
│       └── Layout/
│
└── UnionValidationApp.Client/          # Client (Blazor WebAssembly)
    ├── App.razor
    ├── Routes.razor
    ├── Models/
    │   └── UnionModels.cs              # Union type definitions
    ├── Components/
    │   ├── UnionIntOrStringTests.razor
    │   ├── UnionNullableIntOrStringTests.razor
    │   ├── UnionClassifiedRecordUnionTests.razor
    │   ├── UnionUnclassifiedRecordUnionTests.razor
    │   └── UnionNestedUnionTests.razor

evidence/                               # Validation screenshots and logs
└── [28 test case screenshots]
```

## Running the Sample

### Prerequisites
- .NET 11.0 preview SDK (11.0.100-preview.7.26381.103 or later)
- C# language version: `preview` (supports union types)

### Build & Run

```powershell
# Navigate to server project
cd src/UnionValidationApp

# Restore and run
dotnet restore
dotnet run

# Application launches at https://localhost:5001
```

### Run Published Version

```powershell
# Publish server project
dotnet publish -c Release -o ./artifacts/union-validation

# Navigate to published folder
cd artifacts/union-validation
dotnet UnionValidationApp.dll
```

### Run Trimmed WebAssembly

```powershell
# Edit UnionValidationApp.Client.csproj to add <PublishTrimmed>true</PublishTrimmed>
# Then publish server
dotnet publish -c Release -o ./artifacts/union-validation-trimmed
```

## Test Scenarios

Visit http://localhost:5001 and navigate to:

1. **Server Mode** - `/union-server`
   - Tests interactive Server renderer
   - Validates persistence through PersistentComponentState

2. **WebAssembly Mode** - `/union-wasm`
   - Tests interactive WebAssembly renderer
   - Validates client-side deserialization

3. **Auto Mode** - `/union-auto`
   - Tests cold visit (Static prerender → Server interactive)
   - Tests warm visit (Static prerender → WebAssembly interactive)
   - Validates automatic renderer switching

4. **Unsupported Binding** - `/unsupported-union-query`
   - Tests query-string binding rejection
   - Verifies error message naming union type

## Validation Results

**Total Test Cases:** 28  
**Pass Rate:** 100% ✅

For detailed test results with screenshots, see [TEST_VALIDATION_RESULTS.md](./TEST_VALIDATION_RESULTS.md)

### DX Notes

⚠️ **Razor Markup Syntax:** Union-typed component parameters require explicit `@` expression prefix:
```razor
✅ Correct:   <ChildComponent Value="@unionVariable" />
❌ Wrong:     <ChildComponent Value="unionVariable" />  
<!-- Without @, Razor treats it as string literal -->
```

## Component Parameter Definition

Union-typed parameters must use the **exact union type**, not `object?`:

```csharp
// ✅ Correct
[Parameter]
public IntOrString ActiveUnion { get; set; }

// ❌ Wrong - loses type information
[Parameter]  
public object? ActiveUnion { get; set; }
```

## Issues Resolved

This sample validates the fix for **[#68480](https://github.com/dotnet/aspnetcore/issues/68480)**: C# unions in component parameters and prerendered state.

## Build Information

- **.NET Version:** 11.0.100-preview.7.26381.103
- **Language Version:** preview
- **Nullable:** enabled
- **Platform:** Windows 10/11
- **Browser Tested:** Edge, Chrome

## Related Issues

- [#68480](https://github.com/dotnet/aspnetcore/issues/68480) - C# unions in component parameters
- [#68481](https://github.com/dotnet/aspnetcore/issues/68481) - Union serialization
- [#68490](https://github.com/dotnet/aspnetcore/issues/68490) - Related scenarios

## Evidence

All 28 test case screenshots are included in the `evidence/` folder showing:
- Initial rendering state
- Active case mutation after interactivity
- Static-to-interactive persistence transitions
- Error messages for unsupported scenarios

## Questions?

For issues or questions about this validation sample, please refer to the parent issues in the dotnet/aspnetcore repository.
