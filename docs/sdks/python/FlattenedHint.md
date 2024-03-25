# FlattenedHint

This is the flattened version of a hint. Ensure that you DO NOT reference the Asset here as you can create an infinite loop within the packaging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**type** | [**HintTypeEnum**](HintTypeEnum) |  | 
**text** | **str** | This is the text of the hint. | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_hint import FlattenedHint

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedHint from a JSON string
flattened_hint_instance = FlattenedHint.from_json(json)
# print the JSON string representation of the object
print FlattenedHint.to_json()

# convert the object into a dict
flattened_hint_dict = flattened_hint_instance.to_dict()
# create an instance of FlattenedHint from a dict
flattened_hint_form_dict = flattened_hint.from_dict(flattened_hint_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


