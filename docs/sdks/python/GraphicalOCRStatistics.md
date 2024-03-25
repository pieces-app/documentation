# GraphicalOCRStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**descriptive** | [**GraphicalOCRDescriptiveStatistics**](GraphicalOCRDescriptiveStatistics) |  | [optional] 

## Example

```python
from pieces_os_client.models.graphical_ocr_statistics import GraphicalOCRStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalOCRStatistics from a JSON string
graphical_ocr_statistics_instance = GraphicalOCRStatistics.from_json(json)
# print the JSON string representation of the object
print GraphicalOCRStatistics.to_json()

# convert the object into a dict
graphical_ocr_statistics_dict = graphical_ocr_statistics_instance.to_dict()
# create an instance of GraphicalOCRStatistics from a dict
graphical_ocr_statistics_form_dict = graphical_ocr_statistics.from_dict(graphical_ocr_statistics_dict)
```



