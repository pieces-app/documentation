# TLPCodeProcessing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**fragment** | [**TLPCodeSnippetAnalytics**](TLPCodeSnippetAnalytics) |  | [optional] 
**file** | [**TLPCodeFileAnalytics**](TLPCodeFileAnalytics) |  | [optional] 
**directory** | [**TLPCodeDirectoryAnalytics**](TLPCodeDirectoryAnalytics) |  | [optional] 
**repository** | [**TLPCodeRepositoryAnalytics**](TLPCodeRepositoryAnalytics) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_processing import TLPCodeProcessing

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeProcessing from a JSON string
tlp_code_processing_instance = TLPCodeProcessing.from_json(json)
# print the JSON string representation of the object
print TLPCodeProcessing.to_json()

# convert the object into a dict
tlp_code_processing_dict = tlp_code_processing_instance.to_dict()
# create an instance of TLPCodeProcessing from a dict
tlp_code_processing_form_dict = tlp_code_processing.from_dict(tlp_code_processing_dict)
```



