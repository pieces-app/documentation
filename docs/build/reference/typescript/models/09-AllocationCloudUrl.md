
# AllocationCloudUrl

This is one of the 3 possible urls that will route to your cloud :).

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**status** | [**AllocationStatusEnum**](AllocationStatusEnum)
**url** | **string**

## Example

```typescript
import { AllocationCloudUrl } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: AllocationCloudUrl = {
    "schema": null,
    "status": null,
    "url": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloudUrl;
console.log(exampleParsed);
```


