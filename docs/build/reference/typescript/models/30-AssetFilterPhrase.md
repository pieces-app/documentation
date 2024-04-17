---
title: AssetFilterPhrase | TypeScript SDK
---


# AssetFilterPhrase


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**value** | **string**
**annotation** | **boolean**
**title** | **boolean**
**content** | **boolean**
**options** | [**AssetFilterPhraseOptions**](AssetFilterPhraseOptions)

## Example

```typescript
import { AssetFilterPhrase } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetFilterPhrase = {
    "schema": null,
    "value": null,
    "annotation": null,
    "title": null,
    "content": null,
    "options": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilterPhrase
console.log(exampleParsed)
```


