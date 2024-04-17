---
title: QGPTConversationPipeline | TypeScript SDK
---


# QGPTConversationPipeline

This model is specifically for QGPT Conversation pipelines, the model is used to group conversational prompts for instance a conversation around generating code.  here are some use cases- 1. contextualized_code_generation- This is for users that want to have conversations around generating code, when there is provided context. 2. generalized_code- This is for users that want to have conversations without context around code. 3. contextualized_code- This is for users that want to have conversation around code with Context. 4. contextualized_code_workstream: this is for the users that want to use context as well as WPE information in their chat (we wiil prioritize WPE infomration, but also support other info as well)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**contextualizedCodeGeneration** | [**QGPTConversationPipelineForContextualizedCodeGeneration**](QGPTConversationPipelineForContextualizedCodeGeneration)
**generalizedCodeDialog** | [**QGPTConversationPipelineForGeneralizedCodeDialog**](QGPTConversationPipelineForGeneralizedCodeDialog)
**contextualizedCodeDialog** | [**QGPTConversationPipelineForContextualizedCodeDialog**](QGPTConversationPipelineForContextualizedCodeDialog)
**contextualizedCodeWorkstreamDialog** | [**QGPTConversationPipelineForContextualizedCodeWorkstreamDialog**](QGPTConversationPipelineForContextualizedCodeWorkstreamDialog)

## Example

```typescript
import { QGPTConversationPipeline } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversationPipeline = {
    "schema": null,
    "contextualizedCodeGeneration": null,
    "generalizedCodeDialog": null,
    "contextualizedCodeDialog": null,
    "contextualizedCodeWorkstreamDialog": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationPipeline
console.log(exampleParsed)
```


