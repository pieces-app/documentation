# TLPCodeFragmentSuggestedSave

Model for monitoring and evaluating the suggested save feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**user** | **str** |  | 
**model** | **str** |  | 
**created** | **str** |  | 
**os** | **str** |  | 
**context** | **str** | context from where suggestion came from | [optional] 
**score** | **float** | maximum similarity score | [optional] 
**candidates** | **int** | number of candidates | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_suggested_save import TLPCodeFragmentSuggestedSave

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentSuggestedSave from a JSON string
tlp_code_fragment_suggested_save_instance = TLPCodeFragmentSuggestedSave.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFragmentSuggestedSave.to_json())

# convert the object into a dict
tlp_code_fragment_suggested_save_dict = tlp_code_fragment_suggested_save_instance.to_dict()
# create an instance of TLPCodeFragmentSuggestedSave from a dict
tlp_code_fragment_suggested_save_form_dict = tlp_code_fragment_suggested_save.from_dict(tlp_code_fragment_suggested_save_dict)
```



