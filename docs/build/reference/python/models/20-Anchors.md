---
title: Anchors | Python SDK
---

# Anchors

This is the plural of Anchor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Anchor]**](Anchor) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an Anchor id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.anchors import Anchors

# TODO update the JSON string below
json = "{}"
# create an instance of Anchors from a JSON string
anchors_instance = Anchors.from_json(json)
# print the JSON string representation of the object
print(Anchors.to_json())

# convert the object into a dict
anchors_dict = anchors_instance.to_dict()
# create an instance of Anchors from a dict
anchors_form_dict = anchors.from_dict(anchors_dict)
```


