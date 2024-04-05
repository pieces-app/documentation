# Hint

This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.

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
from pieces_os_client.models.hint import Hint

# TODO update the JSON string below
json = "{}"
# create an instance of Hint from a JSON string
hint_instance = Hint.from_json(json)
# print the JSON string representation of the object
print(Hint.to_json())

# convert the object into a dict
hint_dict = hint_instance.to_dict()
# create an instance of Hint from a dict
hint_form_dict = hint.from_dict(hint_dict)
```



