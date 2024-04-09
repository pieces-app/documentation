
# OSDeviceGPUHardwareCapabilitiesInformation

This will give specific information on task specific capibilites for GPU.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**llm** | **boolean**

## Example

```typescript
import { OSDeviceGPUHardwareCapabilitiesInformation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: OSDeviceGPUHardwareCapabilitiesInformation = {
    "schema": null,
    "llm": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceGPUHardwareCapabilitiesInformation;
console.log(exampleParsed);
```


