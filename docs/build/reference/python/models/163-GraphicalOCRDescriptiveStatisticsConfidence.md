---
title: GraphicalOCRDescriptiveStatisticsConfidence | Python SDK
---

# GraphicalOCRDescriptiveStatisticsConfidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean** | **str** |  | 

## Example

```python
from pieces_os_client.models.graphical_ocr_descriptive_statistics_confidence import GraphicalOCRDescriptiveStatisticsConfidence

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicalOCRDescriptiveStatisticsConfidence from a JSON string
graphical_ocr_descriptive_statistics_confidence_instance = GraphicalOCRDescriptiveStatisticsConfidence.from_json(json)
# print the JSON string representation of the object
print(GraphicalOCRDescriptiveStatisticsConfidence.to_json())

# convert the object into a dict
graphical_ocr_descriptive_statistics_confidence_dict = graphical_ocr_descriptive_statistics_confidence_instance.to_dict()
# create an instance of GraphicalOCRDescriptiveStatisticsConfidence from a dict
graphical_ocr_descriptive_statistics_confidence_form_dict = graphical_ocr_descriptive_statistics_confidence.from_dict(graphical_ocr_descriptive_statistics_confidence_dict)
```


