# TLPCodeFragmentDescriptiveStatistics

Model for ML big query Data collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**user** | **str** |  | 
**os** | **str** |  | 
**language** | **str** |  | 
**length** | **float** |  | 
**ast** | **str** |  | 
**timestamp** | **str** |  | 
**asset** | **str** |  | 
**context** | **str** | this is the application in which this was created from. | 
**snippet** | **str** | this is the value of the snippet | 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_descriptive_statistics import TLPCodeFragmentDescriptiveStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentDescriptiveStatistics from a JSON string
tlp_code_fragment_descriptive_statistics_instance = TLPCodeFragmentDescriptiveStatistics.from_json(json)
# print the JSON string representation of the object
print TLPCodeFragmentDescriptiveStatistics.to_json()

# convert the object into a dict
tlp_code_fragment_descriptive_statistics_dict = tlp_code_fragment_descriptive_statistics_instance.to_dict()
# create an instance of TLPCodeFragmentDescriptiveStatistics from a dict
tlp_code_fragment_descriptive_statistics_form_dict = tlp_code_fragment_descriptive_statistics.from_dict(tlp_code_fragment_descriptive_statistics_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


