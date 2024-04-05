
# TrackedAssetEventCreationMetadata

Metadata attached to a creation event on an Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**clipboard** | [**TrackedAssetEventCreationMetadataClipboard**](TrackedAssetEventCreationMetadataClipboard) |  | [optional] [default to undefined]
**file** | [**TrackedAssetEventCreationMetadataFile**](TrackedAssetEventCreationMetadataFile) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventCreationMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventCreationMetadata = {
    "schema": null, // 
    "clipboard": null, // 
    "file": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventCreationMetadata;
console.log(exampleParsed);
```




