---
title: ReferencedRange | Python SDK
---

# ReferencedRange

This is a minimal version of a Range, with mainly an Id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedRange**](FlattenedRange) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_range import ReferencedRange

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedRange from a JSON string
referenced_range_instance = ReferencedRange.from_json(json)
# print the JSON string representation of the object
print(ReferencedRange.to_json())

# convert the object into a dict
referenced_range_dict = referenced_range_instance.to_dict()
# create an instance of ReferencedRange from a dict
referenced_range_form_dict = referenced_range.from_dict(referenced_range_dict)
```


