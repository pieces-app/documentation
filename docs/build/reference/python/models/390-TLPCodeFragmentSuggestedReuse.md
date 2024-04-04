# TLPCodeFragmentSuggestedReuse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_suggested_reuse import TLPCodeFragmentSuggestedReuse

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentSuggestedReuse from a JSON string
tlp_code_fragment_suggested_reuse_instance = TLPCodeFragmentSuggestedReuse.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFragmentSuggestedReuse.to_json())

# convert the object into a dict
tlp_code_fragment_suggested_reuse_dict = tlp_code_fragment_suggested_reuse_instance.to_dict()
# create an instance of TLPCodeFragmentSuggestedReuse from a dict
tlp_code_fragment_suggested_reuse_form_dict = tlp_code_fragment_suggested_reuse.from_dict(tlp_code_fragment_suggested_reuse_dict)
```



