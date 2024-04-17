---
title: Annotations | Python SDK
---

# Annotations

This is the plural of Annotation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Annotation]**](Annotation) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an annotation id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.annotations import Annotations

# TODO update the JSON string below
json = "{}"
# create an instance of Annotations from a JSON string
annotations_instance = Annotations.from_json(json)
# print the JSON string representation of the object
print(Annotations.to_json())

# convert the object into a dict
annotations_dict = annotations_instance.to_dict()
# create an instance of Annotations from a dict
annotations_form_dict = annotations.from_dict(annotations_dict)
```


