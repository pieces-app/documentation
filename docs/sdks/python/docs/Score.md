# Score

This is use as the score for an asset.  Manual: will be the raw sum of the asset activity events ranks with mechanismEnum == manual Automatic: will be the raw sum of the asset activity events ranks with mechanismEnum == automatic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**manual** | **int** | These are points assigned via manual user driven events. | 
**automatic** | **int** | These are point assigned via automatic activity events. | 
**priority** | **int** |  | [optional] 
**reuse** | **int** |  | [optional] 
**update** | **int** |  | [optional] 
**reference** | **int** |  | [optional] 

## Example

```python
from pieces_os_client.models.score import Score

# TODO update the JSON string below
json = "{}"
# create an instance of Score from a JSON string
score_instance = Score.from_json(json)
# print the JSON string representation of the object
print Score.to_json()

# convert the object into a dict
score_dict = score_instance.to_dict()
# create an instance of Score from a dict
score_form_dict = score.from_dict(score_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


