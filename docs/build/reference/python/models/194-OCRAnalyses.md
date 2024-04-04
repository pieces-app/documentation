# OCRAnalyses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[OCRAnalysis]**](OCRAnalysis) |  | 

## Example

```python
from pieces_os_client.models.ocr_analyses import OCRAnalyses

# TODO update the JSON string below
json = "{}"
# create an instance of OCRAnalyses from a JSON string
ocr_analyses_instance = OCRAnalyses.from_json(json)
# print the JSON string representation of the object
print(OCRAnalyses.to_json())

# convert the object into a dict
ocr_analyses_dict = ocr_analyses_instance.to_dict()
# create an instance of OCRAnalyses from a dict
ocr_analyses_form_dict = ocr_analyses.from_dict(ocr_analyses_dict)
```



