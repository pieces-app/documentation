---
title: FlattenedConversationMessage | TypeScript SDK
---


# FlattenedConversationMessage

This is a flattened DAG safe version of a ConversationMessage.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**model** | [**Model**](Model)
**fragment** | [**FragmentFormat**](FragmentFormat)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum)
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum)
**score** | [**Score**](Score)
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)


