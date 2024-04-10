
# AssetReclassification

This is a model that will represent the miminum properties required to update the classification of this asset.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**asset** | [**Asset**](Asset)

## Example

```typescript
import { AssetReclassification } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetReclassification = {
    "schema": null,
    "ext": null,
    "asset": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetReclassification
console.log(exampleParsed)
```


