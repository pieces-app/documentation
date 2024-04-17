---
title: FlattenedRanges | Python SDK
---

# FlattenedRanges

This is a DAG-Safe minimal representation of many Ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedRange]**](ReferencedRange) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an range id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**continuous** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_ranges import FlattenedRanges

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedRanges from a JSON string
flattened_ranges_instance = FlattenedRanges.from_json(json)
# print the JSON string representation of the object
print(FlattenedRanges.to_json())

# convert the object into a dict
flattened_ranges_dict = flattened_ranges_instance.to_dict()
# create an instance of FlattenedRanges from a dict
flattened_ranges_form_dict = flattened_ranges.from_dict(flattened_ranges_dict)
```


