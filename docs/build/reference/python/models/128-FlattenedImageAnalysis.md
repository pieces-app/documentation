---
title: FlattenedImageAnalysis | Python SDK
---

# FlattenedImageAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**ocr** | [**FlattenedOCRAnalysis**](FlattenedOCRAnalysis) |  | [optional] 
**analysis** | **str** | this is a reference to our (parent)analysis | 

## Example

```python
from pieces_os_client.models.flattened_image_analysis import FlattenedImageAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedImageAnalysis from a JSON string
flattened_image_analysis_instance = FlattenedImageAnalysis.from_json(json)
# print the JSON string representation of the object
print(FlattenedImageAnalysis.to_json())

# convert the object into a dict
flattened_image_analysis_dict = flattened_image_analysis_instance.to_dict()
# create an instance of FlattenedImageAnalysis from a dict
flattened_image_analysis_form_dict = flattened_image_analysis.from_dict(flattened_image_analysis_dict)
```


