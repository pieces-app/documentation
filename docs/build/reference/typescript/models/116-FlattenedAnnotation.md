---
title: FlattenedAnnotation | TypeScript SDK
---


# FlattenedAnnotation

This is the flattened Version of the annotation, IMPORTANT: when referencing these, ONLY Take the UUID, do NOT polinate(ie w/ asset/person/model) the FlattenedAnnotation as it can create an infinite loop.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**person** | [**ReferencedPerson**](ReferencedPerson)
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum)
**text** | **string**
**model** | [**ReferencedModel**](ReferencedModel)
**pseudo** | **boolean**
**favorited** | **boolean**
**anchor** | [**ReferencedAnchor**](ReferencedAnchor)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**score** | [**Score**](Score)
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary)


