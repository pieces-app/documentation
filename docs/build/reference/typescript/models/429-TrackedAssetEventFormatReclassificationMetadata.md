
# TrackedAssetEventFormatReclassificationMetadata Model

Metadata of a format reclassification event

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**previous** | [**Classification**](Classification)
**current** | [**Classification**](Classification)

## Example Model

```typescript
import { TrackedAssetEventFormatReclassificationMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetEventFormatReclassificationMetadata = {
    "schema": null,
    "previous": null,
    "current": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventFormatReclassificationMetadata
console.log(exampleParsed)
```


