
# TrackedAssetsEventSearchMetadata

Metadata attached to a search event on an Asset

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**
**results** | [**TrackedAssetsEventSearchMetadataResults**](TrackedAssetsEventSearchMetadataResults)

## Example

```typescript
import { TrackedAssetsEventSearchMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetsEventSearchMetadata = {
    "schema": null,
    "query": null,
    "results": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventSearchMetadata
console.log(exampleParsed)
```


