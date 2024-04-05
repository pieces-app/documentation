
# DetectedExternalApplications

This is used as the returnable for the /applications/external && /applications/external/related endpoints.  This will return an iterable of Deteched Application a detected Application is an application that is currently installed on your machine.  the /applications/external/related endpoint, will return a subset of the applications returned mainly applications that we detect are Pieces Applications that you have yet to install + names of applications where Pieces is coming soon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;DetectedExternalApplication&gt;**](DetectedExternalApplication) |  | [default to undefined]

## Example

```typescript
import { DetectedExternalApplications } from '';

// TODO: Update the object below with actual values
const example: DetectedExternalApplications = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DetectedExternalApplications;
console.log(exampleParsed);
```




