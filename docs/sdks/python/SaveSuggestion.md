# SaveSuggestion

This is the SaveSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)  **Note: suggested is required here because we will want to say if we reccomend to take this action of save or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**suggested** | **bool** | This is a boolean, that will say if you should or should not take action. | 

## Example

```python
from pieces_os_client.models.save_suggestion import SaveSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of SaveSuggestion from a JSON string
save_suggestion_instance = SaveSuggestion.from_json(json)
# print the JSON string representation of the object
print SaveSuggestion.to_json()

# convert the object into a dict
save_suggestion_dict = save_suggestion_instance.to_dict()
# create an instance of SaveSuggestion from a dict
save_suggestion_form_dict = save_suggestion.from_dict(save_suggestion_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


