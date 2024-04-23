---
title: QGPTStreamOutput | TypeScript SDK
---


# QGPTStreamOutput

This is the out for the /qgpt/stream endpoint.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

## Properties

Name | Type
------------ | -------------
**request** | **string**
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput)
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput)
**status** | [**QGPTStreamEnum**](QGPTStreamEnum)
**conversation** | **string**
**statusCode** | **number**
**errorMessage** | **string**
**agentRoutes** | [**QGPTAgentRoutes**](QGPTAgentRoutes)


