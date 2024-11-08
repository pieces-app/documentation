---
title: QGPTConversationPipeline | Python SDK
---

# QGPTConversationPipeline

This model is specifically for QGPT Conversation pipelines, the model is used to group conversational prompts for instance a conversation around generating code.  here are some use cases- 1. contextualized_code_generation- This is for users that want to have conversations around generating code, when there is provided context. 2. generalized_code- This is for users that want to have conversations without context around code. 3. contextualized_code- This is for users that want to have conversation around code with Context. 4. contextualized_code_workstream: this is for the users that want to use context as well as LTME information in their chat (we will prioritize LTME information, but also support other info as well)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**contextualized_code_generation** | [**QGPTConversationPipelineForContextualizedCodeGeneration**](QGPTConversationPipelineForContextualizedCodeGeneration) |  | [optional] 
**generalized_code_dialog** | [**QGPTConversationPipelineForGeneralizedCodeDialog**](QGPTConversationPipelineForGeneralizedCodeDialog) |  | [optional] 
**contextualized_code_dialog** | [**QGPTConversationPipelineForContextualizedCodeDialog**](QGPTConversationPipelineForContextualizedCodeDialog) |  | [optional] 
**contextualized_code_workstream_dialog** | [**QGPTConversationPipelineForContextualizedCodeWorkstreamDialog**](QGPTConversationPipelineForContextualizedCodeWorkstreamDialog) |  | [optional] 


