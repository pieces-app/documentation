---
title: Ranges | Python SDK
---

# Ranges

This is a collection of many Ranges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Range]**](Range) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an range id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**continuous** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.ranges import Ranges

# TODO update the JSON string below
json = "{}"
# create an instance of Ranges from a JSON string
ranges_instance = Ranges.from_json(json)
# print the JSON string representation of the object
print(Ranges.to_json())

# convert the object into a dict
ranges_dict = ranges_instance.to_dict()
# create an instance of Ranges from a dict
ranges_form_dict = ranges.from_dict(ranges_dict)
```


