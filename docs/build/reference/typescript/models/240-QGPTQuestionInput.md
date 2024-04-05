
# QGPTQuestionInput

This is the body input for the /code_gpt/question.  Note: - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | [default to undefined]
**query** | **string** | This is the user asked question. | [default to undefined]
**application** | **string** | optional application id | [optional] [default to undefined]
**model** | **string** | optional model id | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] [default to undefined]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] [default to undefined]
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTQuestionInput } from '';

// TODO: Update the object below with actual values
const example: QGPTQuestionInput = {
    "schema": null, // 
    "relevant": null, // 
    "query": null, // This is the user asked question.
    "application": null, // optional application id
    "model": null, // optional model id
    "messages": null, // 
    "pipeline": null, // 
    "temporal": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTQuestionInput;
console.log(exampleParsed);
```




