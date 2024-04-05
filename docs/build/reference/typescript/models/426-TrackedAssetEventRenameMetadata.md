
# TrackedAssetEventRenameMetadata

This will give specific metadata need to determine what the rename was to/from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**previous** | **string** |  | [default to undefined]
**current** | **string** |  | [default to undefined]

## Example

```typescript
import { TrackedAssetEventRenameMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventRenameMetadata = {
    "schema": null, // 
    "previous": null, // 
    "current": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventRenameMetadata;
console.log(exampleParsed);
```




