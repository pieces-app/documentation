
# QGPTQuestionOutput

This is the output/returned value from the /qgpt/question endpoint. && /qgpt/followup  This will just have a single required property. the possible answers to the question, with a score.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**answers** | [**QGPTQuestionAnswers**](QGPTQuestionAnswers)

## Example

```typescript
import { QGPTQuestionOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTQuestionOutput = {
    "schema": null,
    "answers": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTQuestionOutput
console.log(exampleParsed)
```


