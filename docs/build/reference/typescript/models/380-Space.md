
# Space

This is used in the TrackedAssetsEventSearchMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | This is the size of your current catalog.(number of assets) | [optional] [default to undefined]
**duration** | **number** | this is the number in ms it took to run search. | [optional] [default to undefined]

## Example

```typescript
import { Space } from '';

// TODO: Update the object below with actual values
const example: Space = {
    "size": null, // This is the size of your current catalog.(number of assets)
    "duration": null, // this is the number in ms it took to run search.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Space;
console.log(exampleParsed);
```




