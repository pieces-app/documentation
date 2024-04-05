
# TrackedAssetEventFormatReclassificationMetadata

Metadata of a format reclassification event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**previous** | [**Classification**](Classification) |  | [optional] [default to undefined]
**current** | [**Classification**](Classification) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventFormatReclassificationMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventFormatReclassificationMetadata = {
    "schema": null, // 
    "previous": null, // 
    "current": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventFormatReclassificationMetadata;
console.log(exampleParsed);
```




