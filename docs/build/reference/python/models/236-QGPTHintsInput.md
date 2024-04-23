---
title: QGPTHintsInput | Python SDK
---

# QGPTHintsInput

Query is your hints question. Relevant is the relevant snippets. Answer is the previous answer.(that we are asking a hint up for.)  Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | [optional] 
**answer** | [**QGPTQuestionAnswer**](QGPTQuestionAnswer) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 
**application** | **str** | optional application id | [optional] 
**model** | **str** | optional model id | [optional] 


