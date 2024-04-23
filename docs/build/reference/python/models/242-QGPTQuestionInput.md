---
title: QGPTQuestionInput | Python SDK
---

# QGPTQuestionInput

This is the body input for the /code_gpt/question.  Note: - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 
**query** | **str** | This is the user asked question. | 
**application** | **str** | optional application id | [optional] 
**model** | **str** | optional model id | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] 


