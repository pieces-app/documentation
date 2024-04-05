
# AllocationCloudStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**cloud** | [**AllocationStatusEnum**](AllocationStatusEnum) |  | [default to undefined]

## Example

```typescript
import { AllocationCloudStatus } from '';

// TODO: Update the object below with actual values
const example: AllocationCloudStatus = {
    "schema": null, // 
    "cloud": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloudStatus;
console.log(exampleParsed);
```




