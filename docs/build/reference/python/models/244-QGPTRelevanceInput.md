---
title: QGPTRelevanceInput | Python SDK
---

# QGPTRelevanceInput

This is the input body for the /code_gpt/relevance endpoint.  There are a couple different options that you may take with this Model.  First we will talk about the space in which you will compare your query too. These are the following cases for the space. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  Note: - for ease of use, we have an additional boolean called 'question', which will also ask your question to gpt3.5, and compare to the relevant snippets that we found. That way you dont need to call /code_gpt/question. Otherwise the next step would be is to take the results and feed them into /code_gpt/question. to get your question answered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**query** | **str** | This is the question that the user is asking. | 
**paths** | **List[str]** | This is an optional list of file || folder paths. | [optional] 
**seeds** | [**Seeds**](Seeds) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**options** | [**QGPTRelevanceInputOptions**](QGPTRelevanceInputOptions) |  | [optional] 
**application** | **str** | optional application id | [optional] 
**model** | **str** | optional model id | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] 


