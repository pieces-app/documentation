---
title: QGPTStreamInput | Kotlin SDK
---


# QGPTStreamInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevance** | [**QGPTRelevanceInput**](QGPTRelevanceInput) |  |  [optional]
**question** | [**QGPTQuestionInput**](QGPTQuestionInput) |  |  [optional]
**request** | **kotlin.String** | This is an optional Id you can use to identify the result from your request. |  [optional]
**conversation** | **kotlin.String** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) |  [optional]
**stop** | **kotlin.Boolean** | This will stop the output of the current LLM |  [optional]
**reset** | **kotlin.Boolean** | This will fully reset all current Activity within the QGPT stream Flows. |  [optional]
**agent** | **kotlin.Boolean** | This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput. |  [optional]



