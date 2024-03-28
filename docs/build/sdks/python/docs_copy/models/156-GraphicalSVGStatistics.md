# GraphicalSVGStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.graphical_svg_statistics import GraphicalSVGStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalSVGStatistics from a JSON string
graphical_svg_statistics_instance = GraphicalSVGStatistics.from_json(json)
# print the JSON string representation of the object
print GraphicalSVGStatistics.to_json()

# convert the object into a dict
graphical_svg_statistics_dict = graphical_svg_statistics_instance.to_dict()
# create an instance of GraphicalSVGStatistics from a dict
graphical_svg_statistics_form_dict = graphical_svg_statistics.from_dict(graphical_svg_statistics_dict)
```



