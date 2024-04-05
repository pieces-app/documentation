
# AllocationCloudUrl

This is one of the 3 possible urls that will route to your cloud :).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**status** | [**AllocationStatusEnum**](AllocationStatusEnum) |  | [default to undefined]
**url** | **string** | this is the base url that is used to communicat with your vpc. | [default to undefined]

## Example

```typescript
import { AllocationCloudUrl } from '';

// TODO: Update the object below with actual values
const example: AllocationCloudUrl = {
    "schema": null, // 
    "status": null, // 
    "url": null, // this is the base url that is used to communicat with your vpc.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloudUrl;
console.log(exampleParsed);
```




