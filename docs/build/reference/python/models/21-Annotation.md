---
title: Annotation | Python SDK
---

# Annotation

An Annotation is the replacement for descriptions, this will enable comments, description, summaries and many more.  person on here is a reference to the description/comment/annotation about a person  NOTE: person here is NOT the creator of the annotaion. but rather the descriptions of the person. NOTE****: if we want to add \"who\" wrote the annotation, we will want to add a new field on here called author && will need to also layer in behavior the enable an author(person) and an asset both being referenced(ensure you check the side effect in the AssetsFacade.delete)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**person** | [**ReferencedPerson**](ReferencedPerson) |  | [optional] 
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | 
**text** | **str** | This is the text of the annotation. | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**favorited** | **bool** |  | [optional] 
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] 


