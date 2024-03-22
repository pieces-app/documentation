# GraphicalImageDescriptiveStatistics

Model for collecting descriptive statistics of images uploaded to Pieces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**width** | **str** |  | 
**height** | **str** |  | 
**channels** | **str** |  | 
**asset** | **str** |  | 
**user** | **str** |  | [optional] 
**created** | **str** |  | 
**os** | **str** |  | 

## Example

```python
from pieces_os_client.models.graphical_image_descriptive_statistics import GraphicalImageDescriptiveStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalImageDescriptiveStatistics from a JSON string
graphical_image_descriptive_statistics_instance = GraphicalImageDescriptiveStatistics.from_json(json)
# print the JSON string representation of the object
print GraphicalImageDescriptiveStatistics.to_json()

# convert the object into a dict
graphical_image_descriptive_statistics_dict = graphical_image_descriptive_statistics_instance.to_dict()
# create an instance of GraphicalImageDescriptiveStatistics from a dict
graphical_image_descriptive_statistics_form_dict = graphical_image_descriptive_statistics.from_dict(graphical_image_descriptive_statistics_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


