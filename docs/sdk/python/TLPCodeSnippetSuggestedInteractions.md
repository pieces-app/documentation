# TLPCodeSnippetSuggestedInteractions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**save** | [**TLPCodeFragmentSuggestedSave**](TLPCodeFragmentSuggestedSave) |  | [optional] 
**reuse** | [**TLPCodeFragmentSuggestedReuse**](TLPCodeFragmentSuggestedReuse) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_snippet_suggested_interactions import TLPCodeSnippetSuggestedInteractions

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeSnippetSuggestedInteractions from a JSON string
tlp_code_snippet_suggested_interactions_instance = TLPCodeSnippetSuggestedInteractions.from_json(json)
# print the JSON string representation of the object
print TLPCodeSnippetSuggestedInteractions.to_json()

# convert the object into a dict
tlp_code_snippet_suggested_interactions_dict = tlp_code_snippet_suggested_interactions_instance.to_dict()
# create an instance of TLPCodeSnippetSuggestedInteractions from a dict
tlp_code_snippet_suggested_interactions_form_dict = tlp_code_snippet_suggested_interactions.from_dict(tlp_code_snippet_suggested_interactions_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


