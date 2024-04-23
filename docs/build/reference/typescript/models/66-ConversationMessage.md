---
title: ConversationMessage | TypeScript SDK
---


# ConversationMessage

This is a fully referenced ConversationMessage.  This has the minimum amount of properties to keep this light weight  (will consider additional properties in the future like people/tags/links xyz)

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


