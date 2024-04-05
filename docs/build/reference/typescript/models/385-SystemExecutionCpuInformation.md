
# SystemExecutionCpuInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | this is the number of cpus | [default to undefined]
**brand** | **string** | this is the brand of cpu | [default to undefined]
**frequency** | **number** |  | [default to undefined]

## Example

```typescript
import { SystemExecutionCpuInformation } from '';

// TODO: Update the object below with actual values
const example: SystemExecutionCpuInformation = {
    "count": null, // this is the number of cpus
    "brand": null, // this is the brand of cpu
    "frequency": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemExecutionCpuInformation;
console.log(exampleParsed);
```




