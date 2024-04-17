---
title: Hints | Python SDK
---

# Hints

This is the plural of a Hint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Hint]**](Hint) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an hint id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.hints import Hints

# TODO update the JSON string below
json = "{}"
# create an instance of Hints from a JSON string
hints_instance = Hints.from_json(json)
# print the JSON string representation of the object
print(Hints.to_json())

# convert the object into a dict
hints_dict = hints_instance.to_dict()
# create an instance of Hints from a dict
hints_form_dict = hints.from_dict(hints_dict)
```


