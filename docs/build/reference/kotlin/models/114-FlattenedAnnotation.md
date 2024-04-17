---
title: FlattenedAnnotation | Kotlin SDK
---


# FlattenedAnnotation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | 
**text** | **kotlin.String** | This is the text of the annotation. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  |  [optional]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  |  [optional]
**person** | [**ReferencedPerson**](ReferencedPerson) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel) |  |  [optional]
**pseudo** | **kotlin.Boolean** |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  |  [optional]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  |  [optional]
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  |  [optional]



