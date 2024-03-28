# SuggestionTarget

This is the target that was sent to pieces. This will return the string that represents this coppied || pasted asset. This will also send along the SeededConnectorCreation and will send along the vector that we created based on the seed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation) |  | 
**vector** | **int** | This is the vector representation of this target that we generated. | 

## Example

```python
from pieces_os_client.models.suggestion_target import SuggestionTarget

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestionTarget from a JSON string
suggestion_target_instance = SuggestionTarget.from_json(json)
# print the JSON string representation of the object
print SuggestionTarget.to_json()

# convert the object into a dict
suggestion_target_dict = suggestion_target_instance.to_dict()
# create an instance of SuggestionTarget from a dict
suggestion_target_form_dict = suggestion_target.from_dict(suggestion_target_dict)
```



