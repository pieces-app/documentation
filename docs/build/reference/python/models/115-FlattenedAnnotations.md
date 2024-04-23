---
title: FlattenedAnnotations | Python SDK
---

# FlattenedAnnotations

This is a flattened plural of Annotation, typically this will just be a list of uuids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedAnnotation]**](ReferencedAnnotation) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an annotation id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 


