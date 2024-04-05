
# TrackedApplicationUpdate

This is a model used to track when an Application is Updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**current** | [**TrackedApplication**](TrackedApplication) |  | [default to undefined]
**previous** | [**TrackedApplication**](TrackedApplication) |  | [optional] [default to undefined]
**user** | [**TrackedUserProfile**](TrackedUserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedApplicationUpdate } from '';

// TODO: Update the object below with actual values
const example: TrackedApplicationUpdate = {
    "schema": null, // 
    "current": null, // 
    "previous": null, // 
    "user": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplicationUpdate;
console.log(exampleParsed);
```




