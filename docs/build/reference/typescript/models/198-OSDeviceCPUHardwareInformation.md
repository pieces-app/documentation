
# OSDeviceCPUHardwareInformation

This will let us know specific hardware information related to the CPU.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**memory** | **number**

## Example

```typescript
import { OSDeviceCPUHardwareInformation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: OSDeviceCPUHardwareInformation = {
    "schema": null,
    "name": null,
    "memory": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSDeviceCPUHardwareInformation;
console.log(exampleParsed);
```


