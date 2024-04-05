
# TrackedFormatEventMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reclassification** | [**TrackedAssetEventFormatReclassificationMetadata**](TrackedAssetEventFormatReclassificationMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedFormatEventMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedFormatEventMetadata = {
    "reclassification": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormatEventMetadata;
console.log(exampleParsed);
```




