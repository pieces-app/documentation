
# SeededMacOSAsset

An Seeded Asset specific to MacOS which takes in a Value, and Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [optional] [default to undefined]
**value** | **string** | The value of the text that you want to save as an asset. | [default to undefined]

## Example

```typescript
import { SeededMacOSAsset } from '';

// TODO: Update the object below with actual values
const example: SeededMacOSAsset = {
    "schema": null, // 
    "application": null, // 
    "value": console.log("hello world"), // The value of the text that you want to save as an asset.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededMacOSAsset;
console.log(exampleParsed);
```




