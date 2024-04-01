# CodeAnalysis

This is the ML Analysis object Specific to code.  prediction and similarity are custom types. ** please dont not modify **

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**tokenized** | **List[str]** |  | [optional] 
**language** | **str** |  | [optional] 
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | 
**prediction** | **Dict[str, float]** |  | [optional] 
**similarity** | **Dict[str, float]** |  | [optional] 
**top5_colors** | **List[int]** |  | [optional] 
**top5_sorted** | **List[str]** |  | [optional] 
**id** | **str** |  | 
**analysis** | **str** | this is just a reference to the analysis parent object. | 
**model** | [**Model**](Model) |  | 

## Example

```python
from pieces_os_client.models.code_analysis import CodeAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of CodeAnalysis from a JSON string
code_analysis_instance = CodeAnalysis.from_json(json)
# print the JSON string representation of the object
print CodeAnalysis.to_json()

# convert the object into a dict
code_analysis_dict = code_analysis_instance.to_dict()
# create an instance of CodeAnalysis from a dict
code_analysis_form_dict = code_analysis.from_dict(code_analysis_dict)
```



