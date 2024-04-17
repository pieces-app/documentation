---
title: SeededAssetTag | TypeScript SDK
---


# SeededAssetTag

This is similar to an SeededTag, where this is the minimum information of a tag, but this can get added to a seededAsset,  where you may not yet have an asset id.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**TagCategoryEnum**](TagCategoryEnum)

## Example

```typescript
import { SeededAssetTag } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAssetTag = {
    "schema": null,
    "text": null,
    "mechanism": null,
    "category": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetTag
console.log(exampleParsed)
```


