
# QGPTHintsInput

Query is your hints question. Relevant is the relevant snippets. Answer is the previous answer.(that we are asking a hint up for.)  Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** |  | [optional] [default to undefined]
**answer** | [**QGPTQuestionAnswer**](QGPTQuestionAnswer) |  | [optional] [default to undefined]
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | [default to undefined]
**application** | **string** | optional application id | [optional] [default to undefined]
**model** | **string** | optional model id | [optional] [default to undefined]

## Example

```typescript
import { QGPTHintsInput } from '';

// TODO: Update the object below with actual values
const example: QGPTHintsInput = {
    "query": null, // 
    "answer": null, // 
    "relevant": null, // 
    "application": null, // optional application id
    "model": null, // optional model id
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTHintsInput;
console.log(exampleParsed);
```




