# ImageAnalysis

This is a model that represents all the information collected during the processing of an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | this is a uuid that represents a imageAnalysis. | 
**analysis** | **str** | this is a reference to the analysis. | 
**ocr** | [**OCRAnalysis**](OCRAnalysis) |  | [optional] 

## Example

```python
from pieces_os_client.models.image_analysis import ImageAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAnalysis from a JSON string
image_analysis_instance = ImageAnalysis.from_json(json)
# print the JSON string representation of the object
print(ImageAnalysis.to_json())

# convert the object into a dict
image_analysis_dict = image_analysis_instance.to_dict()
# create an instance of ImageAnalysis from a dict
image_analysis_form_dict = image_analysis.from_dict(image_analysis_dict)
```



