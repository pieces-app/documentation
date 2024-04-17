---
title: QGPTHintsInput | TypeScript SDK
---


# QGPTHintsInput

Query is your hints question. Relevant is the relevant snippets. Answer is the previous answer.(that we are asking a hint up for.)  Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.

## Properties

Name | Type
------------ | -------------
**query** | **string**
**answer** | [**QGPTQuestionAnswer**](QGPTQuestionAnswer)
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds)
**application** | **string**
**model** | **string**

## Example

```typescript
import { QGPTHintsInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTHintsInput = {
    "query": null,
    "answer": null,
    "relevant": null,
    "application": null,
    "model": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTHintsInput
console.log(exampleParsed)
```


