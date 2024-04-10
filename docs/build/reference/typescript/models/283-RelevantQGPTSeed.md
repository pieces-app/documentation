
# RelevantQGPTSeed Model

This is a generic model used, to wrap a seed, as well as give an identifier used to further identifiy this snippet.  Seed is optional here because you may just want to provide the id, and not the original seed.  id is also optional here as you may provide an id or not here.(however with specific endpoint this ID is a guarentee.)

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**seed** | [**Seed**](Seed)
**path** | **string**
**asset** | [**ReferencedAsset**](ReferencedAsset)

## Example Model

```typescript
import { RelevantQGPTSeed } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: RelevantQGPTSeed = {
    "schema": null,
    "id": null,
    "seed": null,
    "path": null,
    "asset": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RelevantQGPTSeed
console.log(exampleParsed)
```


