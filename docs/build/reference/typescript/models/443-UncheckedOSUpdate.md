
# UncheckedOSUpdate

This is the input body for /os/update/check, just a placeholder for now.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]

## Example

```typescript
import { UncheckedOSUpdate } from '';

// TODO: Update the object below with actual values
const example: UncheckedOSUpdate = {
    "schema": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UncheckedOSUpdate;
console.log(exampleParsed);
```




