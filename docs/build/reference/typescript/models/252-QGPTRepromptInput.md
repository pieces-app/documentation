---
title: QGPTRepromptInput | TypeScript SDK
---


# QGPTRepromptInput

Query is your followup question.  Conversation is a list of the back and fourth with the qgpt bot. where the first entry in the array was the last message sent.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**
**conversation** | [**QGPTConversation**](QGPTConversation)
**application** | **string**
**model** | **string**
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)


