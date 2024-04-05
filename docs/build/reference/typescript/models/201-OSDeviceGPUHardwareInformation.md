
# OSDeviceGPUHardwareInformation

This will let us know specific hardware information related to the GPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**memory** | **number** |  | [optional] [default to undefined]
**capabilities** | [**OSDeviceGPUHardwareCapabilitiesInformation**](OSDeviceGPUHardwareCapabilitiesInformation) |  | [optional] [default to undefined]

## Example

```typescript
import { OSDeviceGPUHardwareInformation } from '';

// TODO: Update the object below with actual values
const example: OSDeviceGPUHardwareInformation = {
    "schema": null, // 
    "name": null, // 
    "memory": null, // 
    "capabilities": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceGPUHardwareInformation;
console.log(exampleParsed);
```




