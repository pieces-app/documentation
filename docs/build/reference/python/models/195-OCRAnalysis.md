# OCRAnalysis

This is the data collected during the ocr analysis of an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**raw** | [**Format**](Format) |  | 
**hocr** | [**Format**](Format) |  | 
**image** | **str** | this is a reference the the imageAnalysis. | 
**model** | [**Model**](Model) |  | 

## Example

```python
from pieces_os_client.models.ocr_analysis import OCRAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of OCRAnalysis from a JSON string
ocr_analysis_instance = OCRAnalysis.from_json(json)
# print the JSON string representation of the object
print(OCRAnalysis.to_json())

# convert the object into a dict
ocr_analysis_dict = ocr_analysis_instance.to_dict()
# create an instance of OCRAnalysis from a dict
ocr_analysis_form_dict = ocr_analysis.from_dict(ocr_analysis_dict)
```


