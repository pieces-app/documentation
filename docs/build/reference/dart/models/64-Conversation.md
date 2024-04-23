---
title: Conversation | Dart SDK
---

# Conversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**name** | **String** | This is a name that is customized. | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**application** | [**Application**](Application) |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] 
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | 
**grounding** | [**ConversationGrounding**](ConversationGrounding) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 
**demo** | **bool** | This will let us know if this conversation was generated as a 'demo' conversation | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 


