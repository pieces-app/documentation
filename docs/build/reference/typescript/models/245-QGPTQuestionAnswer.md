---
title: QGPTQuestionAnswer | TypeScript SDK
---


# QGPTQuestionAnswer

This will be a simple model with a score and a text value that will represent the value returned for this answer.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**score** | **number**
**text** | **string**

## Example

```typescript
import { QGPTQuestionAnswer } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTQuestionAnswer = {
    "schema": null,
    "score": null,
    "text": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTQuestionAnswer
console.log(exampleParsed)
```


