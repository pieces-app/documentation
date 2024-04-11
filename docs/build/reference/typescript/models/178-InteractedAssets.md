
# InteractedAssets Model

A model which contains a list of InteractedAssets with potentially additional properties.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;InteractedAsset&gt;**](InteractedAsset)

## Example Model

```typescript
import { InteractedAssets } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: InteractedAssets = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAssets
console.log(exampleParsed)
```


