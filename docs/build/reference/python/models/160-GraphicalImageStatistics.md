# GraphicalImageStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**descriptive** | [**GraphicalImageDescriptiveStatistics**](GraphicalImageDescriptiveStatistics) |  | [optional] 

## Example

```python
from pieces_os_client.models.graphical_image_statistics import GraphicalImageStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalImageStatistics from a JSON string
graphical_image_statistics_instance = GraphicalImageStatistics.from_json(json)
# print the JSON string representation of the object
print(GraphicalImageStatistics.to_json())

# convert the object into a dict
graphical_image_statistics_dict = graphical_image_statistics_instance.to_dict()
# create an instance of GraphicalImageStatistics from a dict
graphical_image_statistics_form_dict = graphical_image_statistics.from_dict(graphical_image_statistics_dict)
```


