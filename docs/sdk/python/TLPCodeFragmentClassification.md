# TLPCodeFragmentClassification

Model for ML big query classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**model** | **str** |  | 
**created** | **str** |  | 
**classification** | **str** |  | 
**probability** | **float** |  | 
**context** | **str** |  | 
**distribution** | **str** |  | [optional] 
**metadata** | [**TLPCodeFragmentClassificationMetadata**](TLPCodeFragmentClassificationMetadata) |  | [optional] 
**user** | **str** | identifier for the user | 
**latency** | **float** | this is the time it takes to run this model. | [optional] 
**system** | [**SystemExecutionInformation**](SystemExecutionInformation) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_classification import TLPCodeFragmentClassification

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentClassification from a JSON string
tlp_code_fragment_classification_instance = TLPCodeFragmentClassification.from_json(json)
# print the JSON string representation of the object
print TLPCodeFragmentClassification.to_json()

# convert the object into a dict
tlp_code_fragment_classification_dict = tlp_code_fragment_classification_instance.to_dict()
# create an instance of TLPCodeFragmentClassification from a dict
tlp_code_fragment_classification_form_dict = tlp_code_fragment_classification.from_dict(tlp_code_fragment_classification_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


