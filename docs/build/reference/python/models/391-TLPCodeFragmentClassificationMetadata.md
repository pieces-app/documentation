# TLPCodeFragmentClassificationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**context** | [**Classification**](Classification) |  | [optional] 
**prior** | [**Classification**](Classification) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_classification_metadata import TLPCodeFragmentClassificationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentClassificationMetadata from a JSON string
tlp_code_fragment_classification_metadata_instance = TLPCodeFragmentClassificationMetadata.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFragmentClassificationMetadata.to_json())

# convert the object into a dict
tlp_code_fragment_classification_metadata_dict = tlp_code_fragment_classification_metadata_instance.to_dict()
# create an instance of TLPCodeFragmentClassificationMetadata from a dict
tlp_code_fragment_classification_metadata_form_dict = tlp_code_fragment_classification_metadata.from_dict(tlp_code_fragment_classification_metadata_dict)
```


