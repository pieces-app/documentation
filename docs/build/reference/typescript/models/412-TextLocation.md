
# TextLocation

This is a generic model that is used for text location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**text** | **string** | this is the value that was found. | [default to undefined]
**start** | **number** | this is the start index within the original string. | [default to undefined]
**end** | **number** | this is the end index within the original string. | [default to undefined]

## Example

```typescript
import { TextLocation } from '';

// TODO: Update the object below with actual values
const example: TextLocation = {
    "schema": null, // 
    "text": null, // this is the value that was found.
    "start": null, // this is the start index within the original string.
    "end": null, // this is the end index within the original string.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextLocation;
console.log(exampleParsed);
```




