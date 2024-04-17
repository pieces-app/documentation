---
title: QGPTRelevanceInputOptions | TypeScript SDK
---


# QGPTRelevanceInputOptions


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**database** | **boolean**
**question** | **boolean**
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)

## Example

```typescript
import { QGPTRelevanceInputOptions } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTRelevanceInputOptions = {
    "schema": null,
    "database": null,
    "question": null,
    "pipeline": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRelevanceInputOptions
console.log(exampleParsed)
```


