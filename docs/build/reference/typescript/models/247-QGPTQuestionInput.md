---
title: QGPTQuestionInput | TypeScript SDK
---


# QGPTQuestionInput

This is the body input for the /code_gpt/question.  Note: - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds)
**query** | **string**
**application** | **string**
**model** | **string**
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding)


