---
title: AssetFilterPhraseOptions | TypeScript SDK
---


# AssetFilterPhraseOptions


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**annotation** | [**AnnotationTypeEnum**](AnnotationTypeEnum)

## Example

```typescript
import { AssetFilterPhraseOptions } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetFilterPhraseOptions = {
    "schema": null,
    "annotation": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilterPhraseOptions
console.log(exampleParsed)
```


