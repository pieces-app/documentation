
# QGPTQuestionAnswer

This will be a simple model with a score and a text value that will represent the value returned for this answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**score** | **number** | This is the score from 0-1 on how good this answer is. | [default to undefined]
**text** | **string** |  | [default to undefined]

## Example

```typescript
import { QGPTQuestionAnswer } from '';

// TODO: Update the object below with actual values
const example: QGPTQuestionAnswer = {
    "schema": null, // 
    "score": null, // This is the score from 0-1 on how good this answer is.
    "text": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTQuestionAnswer;
console.log(exampleParsed);
```




