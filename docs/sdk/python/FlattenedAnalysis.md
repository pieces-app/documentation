# FlattenedAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code** | [**CodeAnalysis**](CodeAnalysis) |  | [optional] 
**id** | **str** |  | 
**format** | **str** | this is a reference to the format that it belongs too. | 
**image** | [**FlattenedImageAnalysis**](FlattenedImageAnalysis) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_analysis import FlattenedAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedAnalysis from a JSON string
flattened_analysis_instance = FlattenedAnalysis.from_json(json)
# print the JSON string representation of the object
print FlattenedAnalysis.to_json()

# convert the object into a dict
flattened_analysis_dict = flattened_analysis_instance.to_dict()
# create an instance of FlattenedAnalysis from a dict
flattened_analysis_form_dict = flattened_analysis.from_dict(flattened_analysis_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


