---
title: QGPTPromptPipeline | TypeScript SDK
---


# QGPTPromptPipeline

This is a model related to switching between different prompts based on if we are dealing with  various tasks or if we are attempting to converse with LLMs via conversation.  You will have 2 options-  1) task- This is specifically for 1 off task operations for instance explaning a bit of code 2) conversation- This is specifically for conversing with our LLMs, will provide better results && high fedility                responses for instance contextualize code conversations.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**task** | [**QGPTTaskPipeline**](QGPTTaskPipeline)
**conversation** | [**QGPTConversationPipeline**](QGPTConversationPipeline)


