
# OSDeviceHardwareInformation

this will let us know specific hardware information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**cpu** | [**OSDeviceCPUHardwareInformation**](OSDeviceCPUHardwareInformation) |  | [optional] [default to undefined]
**gpu** | [**OSDeviceGPUHardwareInformation**](OSDeviceGPUHardwareInformation) |  | [optional] [default to undefined]

## Example

```typescript
import { OSDeviceHardwareInformation } from '';

// TODO: Update the object below with actual values
const example: OSDeviceHardwareInformation = {
    "schema": null, // 
    "cpu": null, // 
    "gpu": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceHardwareInformation;
console.log(exampleParsed);
```




