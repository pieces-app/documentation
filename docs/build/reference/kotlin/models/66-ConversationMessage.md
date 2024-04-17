---
title: ConversationMessage | Kotlin SDK
---


# ConversationMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**model** | [**Model**](Model) |  |  [optional]
**fragment** | [**FragmentFormat**](FragmentFormat) |  |  [optional]
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  |  [optional]



