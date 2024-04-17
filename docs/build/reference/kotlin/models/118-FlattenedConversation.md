---
title: FlattenedConversation | Kotlin SDK
---


# FlattenedConversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | 
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**name** | **kotlin.String** | This is a name that is customized. |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**application** | [**Application**](Application) |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  |  [optional]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  |  [optional]
**grounding** | [**ConversationGrounding**](ConversationGrounding) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this conversation was generated as a &#39;demo&#39; conversation |  [optional]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  |  [optional]



