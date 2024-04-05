
# SeededTrackedApplication

A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | [default to undefined]
**version** | **string** | This is the specific version number 0.0.0 | [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [default to undefined]
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] [default to undefined]
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | [optional] [default to undefined]
**automaticUnload** | **boolean** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedApplication } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedApplication = {
    "schema": null, // 
    "name": null, // 
    "version": null, // This is the specific version number 0.0.0
    "platform": null, // 
    "capabilities": null, // 
    "privacy": null, // 
    "automaticUnload": null, // This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedApplication;
console.log(exampleParsed);
```




