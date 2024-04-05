
# Aesthetics

These are aesthetics properties that will ensure the darkmode + font size and other aesthetics properties persist:)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**theme** | [**Theme**](Theme) |  | [default to undefined]
**font** | [**Font**](Font) |  | [default to undefined]

## Example

```typescript
import { Aesthetics } from '';

// TODO: Update the object below with actual values
const example: Aesthetics = {
    "schema": null, // 
    "theme": null, // 
    "font": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Aesthetics;
console.log(exampleParsed);
```




