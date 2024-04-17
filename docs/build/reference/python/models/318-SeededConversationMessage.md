---
title: SeededConversationMessage | Python SDK
---

# SeededConversationMessage

This is a seeded version of a ConversationMessage.  conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**model** | [**Model**](Model) |  | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  | [optional] 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | 


