---
title: SeededAnnotation | Python SDK
---

# SeededAnnotation

This is the percursor to a fully referenced Annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | **str** |  | [optional] 
**person** | **str** |  | [optional] 
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | 
**text** | **str** | This is the text of the annotation. | 
**model** | **str** |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**favorited** | **bool** |  | [optional] 
**anchor** | **str** |  | [optional] 
**conversation** | **str** |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 


