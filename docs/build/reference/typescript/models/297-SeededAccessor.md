
# SeededAccessor

This is a pre-created accessor that simply takes an os id and an optional user(flattened)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**os** | **string** | this is an os id. | [default to undefined]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] [default to undefined]
**share** | **string** | this is the share that the asset is apart of. | [default to undefined]

## Example

```typescript
import { SeededAccessor } from '';

// TODO: Update the object below with actual values
const example: SeededAccessor = {
    "schema": null, // 
    "os": null, // this is an os id.
    "user": null, // 
    "share": null, // this is the share that the asset is apart of.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAccessor;
console.log(exampleParsed);
```




