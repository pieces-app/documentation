
# SeededTrackedAssetsEventMetadata

Additional Metadata as Neeeded i.e. Search + Query, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search** | [**TrackedAssetsEventSearchMetadata**](TrackedAssetsEventSearchMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedAssetsEventMetadata } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedAssetsEventMetadata = {
    "search": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAssetsEventMetadata;
console.log(exampleParsed);
```




