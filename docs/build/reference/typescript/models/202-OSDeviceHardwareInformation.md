
# OSDeviceHardwareInformation

this will let us know specific hardware information

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**cpu** | [**OSDeviceCPUHardwareInformation**](OSDeviceCPUHardwareInformation)
**gpu** | [**OSDeviceGPUHardwareInformation**](OSDeviceGPUHardwareInformation)

## Example

```typescript
import { OSDeviceHardwareInformation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: OSDeviceHardwareInformation = {
    "schema": null,
    "cpu": null,
    "gpu": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceHardwareInformation;
console.log(exampleParsed);
```


