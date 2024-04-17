
# PseudoAssets

This is a model of all optional properties, that will get returned from /assets/pseudo.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifiers** | [**FlattenedAssets**](FlattenedAssets)

## Example

```typescript
import { PseudoAssets } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PseudoAssets = {
    "schema": null,
    "identifiers": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PseudoAssets
console.log(exampleParsed)
```


