---
title: FlattenedAnnotation | Python SDK
---

# FlattenedAnnotation

This is the flattened Version of the annotation, IMPORTANT: when referencing these, ONLY Take the UUID, do NOT polinate(ie w/ asset/person/model) the FlattenedAnnotation as it can create an infinite loop.

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

## Example

```python
from pieces_os_client.models.flattened_annotation import FlattenedAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedAnnotation from a JSON string
flattened_annotation_instance = FlattenedAnnotation.from_json(json)
# print the JSON string representation of the object
print(FlattenedAnnotation.to_json())

# convert the object into a dict
flattened_annotation_dict = flattened_annotation_instance.to_dict()
# create an instance of FlattenedAnnotation from a dict
flattened_annotation_form_dict = flattened_annotation.from_dict(flattened_annotation_dict)
```


