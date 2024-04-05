
# OSDeviceGPUHardwareCapabilitiesInformation

This will give specific information on task specific capibilites for GPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**llm** | **boolean** | This will let us know if in the case we have a gpu and our gpu has the capabilities to use llms | [optional] [default to undefined]

## Example

```typescript
import { OSDeviceGPUHardwareCapabilitiesInformation } from '';

// TODO: Update the object below with actual values
const example: OSDeviceGPUHardwareCapabilitiesInformation = {
    "schema": null, // 
    "llm": null, // This will let us know if in the case we have a gpu and our gpu has the capabilities to use llms
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceGPUHardwareCapabilitiesInformation;
console.log(exampleParsed);
```




