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

## Example

```python
from pieces_os_client.models.seeded_annotation import SeededAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAnnotation from a JSON string
seeded_annotation_instance = SeededAnnotation.from_json(json)
# print the JSON string representation of the object
print(SeededAnnotation.to_json())

# convert the object into a dict
seeded_annotation_dict = seeded_annotation_instance.to_dict()
# create an instance of SeededAnnotation from a dict
seeded_annotation_form_dict = seeded_annotation.from_dict(seeded_annotation_dict)
```


