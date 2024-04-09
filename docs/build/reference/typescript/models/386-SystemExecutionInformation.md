
# SystemExecutionInformation

This is system information that we are able to get from the users machine(rust package TBD). TODO potentially pull this out of TLP.

## Properties

Name | Type
------------ | -------------
**memory** | **number**
**os** | **string**
**kernel** | **string**
**cpu** | [**SystemExecutionCpuInformation**](SystemExecutionCpuInformation)

## Example

```typescript
import { SystemExecutionInformation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SystemExecutionInformation = {
    "memory": null,
    "os": null,
    "kernel": null,
    "cpu": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemExecutionInformation;
console.log(exampleParsed);
```


