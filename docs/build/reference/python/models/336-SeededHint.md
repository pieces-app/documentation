# SeededHint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | **str** | This is an asset id that we are using to link this to an asset. | [optional] 
**type** | [**HintTypeEnum**](HintTypeEnum) |  | 
**text** | **str** | This is the text of the hint. | 
**model** | **str** | this is a model id. that we are using to link this to a model. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_hint import SeededHint

# TODO update the JSON string below
json = "{}"
# create an instance of SeededHint from a JSON string
seeded_hint_instance = SeededHint.from_json(json)
# print the JSON string representation of the object
print(SeededHint.to_json())

# convert the object into a dict
seeded_hint_dict = seeded_hint_instance.to_dict()
# create an instance of SeededHint from a dict
seeded_hint_form_dict = seeded_hint.from_dict(seeded_hint_dict)
```


