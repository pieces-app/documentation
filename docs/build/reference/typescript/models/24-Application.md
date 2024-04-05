
# Application

A Model to describe what application a format/analytics event originated.  mechanism: This will let us know where this came from. ie.only 2 enums are used here or else throw and error. default mechanism here is MANUAL- meaning that this came from our user Connecting an application. INTERNAL - means that this came from a shareable link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | The ID of the application at the device level | [default to undefined]
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | [default to undefined]
**version** | **string** | This is the specific version number 0.0.0 | [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [default to undefined]
**onboarded** | **boolean** |  | [default to undefined]
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | [default to undefined]
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**automaticUnload** | **boolean** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] [default to undefined]

## Example

```typescript
import { Application } from '';

// TODO: Update the object below with actual values
const example: Application = {
    "schema": null, // 
    "id": null, // The ID of the application at the device level
    "name": null, // 
    "version": null, // This is the specific version number 0.0.0
    "platform": null, // 
    "onboarded": null, // 
    "privacy": null, // 
    "capabilities": null, // 
    "mechanism": null, // 
    "automaticUnload": null, // This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Application;
console.log(exampleParsed);
```




