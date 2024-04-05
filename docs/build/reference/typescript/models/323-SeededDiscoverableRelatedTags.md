
# SeededDiscoverableRelatedTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;SeededDiscoverableRelatedTag&gt;**](SeededDiscoverableRelatedTag) |  | [default to undefined]
**application** | **string** | This is the application id that this request is sent from. | [default to undefined]

## Example

```typescript
import { SeededDiscoverableRelatedTags } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableRelatedTags = {
    "schema": null, // 
    "iterable": null, // 
    "application": null, // This is the application id that this request is sent from.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableRelatedTags;
console.log(exampleParsed);
```




