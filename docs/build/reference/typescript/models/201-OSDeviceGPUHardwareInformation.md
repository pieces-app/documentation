
# OSDeviceGPUHardwareInformation

This will let us know specific hardware information related to the GPU.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**memory** | **number**
**capabilities** | [**OSDeviceGPUHardwareCapabilitiesInformation**](OSDeviceGPUHardwareCapabilitiesInformation)

## Example

```typescript
import { OSDeviceGPUHardwareInformation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: OSDeviceGPUHardwareInformation = {
    "schema": null,
    "name": null,
    "memory": null,
    "capabilities": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceGPUHardwareInformation;
console.log(exampleParsed);
```


