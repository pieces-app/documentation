---
title: QGPTStreamOutput | Dart SDK
---

# QGPTStreamOutput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **String** | This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one. | [optional] 
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput) |  | [optional] 
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput) |  | [optional] 
**status** | [**QGPTStreamEnum**](QGPTStreamEnum) |  | [optional] 
**conversation** | **String** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | 
**statusCode** | **num** | This will be provided | [optional] 
**errorMessage** | **String** | optional error message is the status code is NOT 200 | [optional] 
**agentRoutes** | [**QGPTAgentRoutes**](QGPTAgentRoutes) |  | [optional] 


