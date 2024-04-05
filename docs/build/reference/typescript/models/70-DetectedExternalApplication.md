
# DetectedExternalApplication

This is a detected External Application that comes from our endpoint that will get a snapshot of the installed applications on your machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** | this is the name of the application | [default to undefined]
**version** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DetectedExternalApplication } from '';

// TODO: Update the object below with actual values
const example: DetectedExternalApplication = {
    "schema": null, // 
    "name": null, // this is the name of the application
    "version": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DetectedExternalApplication;
console.log(exampleParsed);
```




