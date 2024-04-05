
# OSDeviceInformationReturnable

This is the returnable model for the /os/device/information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**dependencies** | [**OSDeviceDependenciesInformation**](OSDeviceDependenciesInformation) |  | [optional] [default to undefined]
**name** | **string** | this is the name of the device | [optional] [default to undefined]
**version** | **string** | this is the version of the device | [optional] [default to undefined]
**hardware** | [**OSDeviceHardwareInformation**](OSDeviceHardwareInformation) |  | [optional] [default to undefined]

## Example

```typescript
import { OSDeviceInformationReturnable } from '';

// TODO: Update the object below with actual values
const example: OSDeviceInformationReturnable = {
    "schema": null, // 
    "dependencies": null, // 
    "name": null, // this is the name of the device
    "version": null, // this is the version of the device
    "hardware": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceInformationReturnable;
console.log(exampleParsed);
```




