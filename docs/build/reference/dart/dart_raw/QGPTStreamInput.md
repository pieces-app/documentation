---
title: core_openapi.model.QGPTStreamInput | Dart SDK
---

# core_openapi.model.QGPTStreamInput

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevance** | [**QGPTRelevanceInput**](QGPTRelevanceInput.md) |  | [optional] 
**question** | [**QGPTQuestionInput**](QGPTQuestionInput.md) |  | [optional] 
**request** | **String** | This is an optional Id you can use to identify the result from your request. | [optional] 
**conversation** | **String** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | [optional] 
**stop** | **bool** | This will stop the output of the current LLM | [optional] 
**reset** | **bool** | This will fully reset all current Activity within the QGPT stream Flows. | [optional] 
**agent** | **bool** | This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


