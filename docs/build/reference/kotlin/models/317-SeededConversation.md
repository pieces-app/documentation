---
title: SeededConversation | Kotlin SDK
---


# SeededConversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**name** | **kotlin.String** | This is a name that is customized. |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**application** | [**Application**](Application) |  |  [optional]
**annotations** | [**kotlin.collections.List&lt;SeededAnnotation&gt;**](SeededAnnotation) |  |  [optional]
**messages** | [**kotlin.collections.List&lt;SeededConversationMessage&gt;**](SeededConversationMessage) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  |  [optional]
**anchors** | [**kotlin.collections.List&lt;SeededAnchor&gt;**](SeededAnchor) |  |  [optional]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this conversation was generated as a &#39;demo&#39; conversation |  [optional]



