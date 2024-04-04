# ReuseSuggestion

This is the ReuseSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)  **Note: suggested is required here because we will want to say if we suggested to take this action of reuse or not.  ** Thoughts here. We could potentially return Assets: which would be an iterable of assets in most relavent order for the user to reuse if they want.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**suggested** | **bool** | This is a boolean, that will say if you should or should not take action. | 
**assets** | [**Assets**](Assets) |  | 

## Example

```python
from pieces_os_client.models.reuse_suggestion import ReuseSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of ReuseSuggestion from a JSON string
reuse_suggestion_instance = ReuseSuggestion.from_json(json)
# print the JSON string representation of the object
print(ReuseSuggestion.to_json())

# convert the object into a dict
reuse_suggestion_dict = reuse_suggestion_instance.to_dict()
# create an instance of ReuseSuggestion from a dict
reuse_suggestion_form_dict = reuse_suggestion.from_dict(reuse_suggestion_dict)
```



