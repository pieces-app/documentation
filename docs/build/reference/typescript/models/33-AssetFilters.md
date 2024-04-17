---
title: AssetFilters | TypeScript SDK
---


# AssetFilters


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;AssetFilter&gt;**](AssetFilter)
**type** | [**FilterOperationTypeEnum**](FilterOperationTypeEnum)

## Example

```typescript
import { AssetFilters } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetFilters = {
    "schema": null,
    "iterable": null,
    "type": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilters
console.log(exampleParsed)
```


