---
title: SeededConversation | TypeScript SDK
---


# SeededConversation

This is a pre-Conversation object.  This will hold together a conversation. Ie allthe message within a conversation.  All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.  model is a calculated property, and will be the model of the last message sent if applicable.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**favorited** | **boolean**
**application** | [**Application**](Application)
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**messages** | [**Array&lt;SeededConversationMessage&gt;**](SeededConversationMessage)
**model** | [**ReferencedModel**](ReferencedModel)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor)
**type** | [**ConversationTypeEnum**](ConversationTypeEnum)
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)
**demo** | **boolean**


