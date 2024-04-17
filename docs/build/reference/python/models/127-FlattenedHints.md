# FlattenedHints

This is the flattened Version of plural hints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedHint]**](ReferencedHint) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an hint id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_hints import FlattenedHints

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedHints from a JSON string
flattened_hints_instance = FlattenedHints.from_json(json)
# print the JSON string representation of the object
print(FlattenedHints.to_json())

# convert the object into a dict
flattened_hints_dict = flattened_hints_instance.to_dict()
# create an instance of FlattenedHints from a dict
flattened_hints_form_dict = flattened_hints.from_dict(flattened_hints_dict)
```


