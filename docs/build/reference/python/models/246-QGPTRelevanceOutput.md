---
title: QGPTRelevanceOutput | Python SDK
---

# QGPTRelevanceOutput

This is the returned value from /code_gpt/relevance.  This will return the snippets that we found are relevant to the query you provided.  (optional) answer: in the case you provided question: true, then we will also return to you the answer to your question.  Note: - relevant: this is required property and will represent the relevant snippets, to your specific query.(NOTE: these snippet will all have respective id's and seed defined. even though id and seed are optional)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**answer** | [**QGPTQuestionOutput**](QGPTQuestionOutput) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 


