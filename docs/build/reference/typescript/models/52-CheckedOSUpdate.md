
# CheckedOSUpdate

This is the returnable for /os/update/check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**status** | [**UpdatingStatusEnum**](UpdatingStatusEnum) |  | [default to undefined]

## Example

```typescript
import { CheckedOSUpdate } from '';

// TODO: Update the object below with actual values
const example: CheckedOSUpdate = {
    "schema": null, // 
    "status": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckedOSUpdate;
console.log(exampleParsed);
```




