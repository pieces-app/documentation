---
title: QGPTQuestionInput | TypeScript SDK
---


# QGPTQuestionInput

This is the body input for the /code_gpt/question.  Note: - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds)
**query** | **string**
**application** | **string**
**model** | **string**
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding)

## Example

```typescript
import { QGPTQuestionInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTQuestionInput = {
    "schema": null,
    "relevant": null,
    "query": null,
    "application": null,
    "model": null,
    "messages": null,
    "pipeline": null,
    "temporal": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTQuestionInput
console.log(exampleParsed)
```


