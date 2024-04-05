
# TrackedAssetsEventSearchMetadata

Metadata attached to a search event on an Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**query** | **string** | The search query itself | [optional] [default to undefined]
**results** | [**TrackedAssetsEventSearchMetadataResults**](TrackedAssetsEventSearchMetadataResults) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetsEventSearchMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetsEventSearchMetadata = {
    "schema": null, // 
    "query": null, // The search query itself
    "results": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventSearchMetadata;
console.log(exampleParsed);
```




