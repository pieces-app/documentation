
# TrackedApplicationInstall

A model that allows for us to specifically track Application Installs & Related Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**application** | [**TrackedApplication**](TrackedApplication) |  | [default to undefined]
**user** | [**TrackedUserProfile**](TrackedUserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedApplicationInstall } from '';

// TODO: Update the object below with actual values
const example: TrackedApplicationInstall = {
    "schema": null, // 
    "application": null, // 
    "user": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplicationInstall;
console.log(exampleParsed);
```




