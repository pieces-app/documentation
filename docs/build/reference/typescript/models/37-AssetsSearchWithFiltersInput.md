---
title: AssetsSearchWithFiltersInput | TypeScript SDK
---


# AssetsSearchWithFiltersInput


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**
**space** | [**AssetSearchSpace**](AssetSearchSpace)
**filters** | [**AssetFilters**](AssetFilters)
**casing** | **boolean**

## Example

```typescript
import { AssetsSearchWithFiltersInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetsSearchWithFiltersInput = {
    "schema": null,
    "query": null,
    "space": null,
    "filters": null,
    "casing": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsSearchWithFiltersInput
console.log(exampleParsed)
```


