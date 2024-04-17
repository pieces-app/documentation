---
title: QGPTRelevanceOutput | TypeScript SDK
---


# QGPTRelevanceOutput

This is the returned value from /code_gpt/relevance.  This will return the snippets that we found are relevant to the query you provided.  (optional) answer: in the case you provided question: true, then we will also return to you the answer to your question.  Note: - relevant: this is required property and will represent the relevant snippets, to your specific query.(NOTE: these snippet will all have respective id\'s and seed defined. even though id and seed are optional)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**answer** | [**QGPTQuestionOutput**](QGPTQuestionOutput)
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds)

## Example

```typescript
import { QGPTRelevanceOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTRelevanceOutput = {
    "schema": null,
    "answer": null,
    "relevant": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRelevanceOutput
console.log(exampleParsed)
```


