---
title: TLPCodeDirectoryAnalytics | Python SDK
---

# TLPCodeDirectoryAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_directory_analytics import TLPCodeDirectoryAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeDirectoryAnalytics from a JSON string
tlp_code_directory_analytics_instance = TLPCodeDirectoryAnalytics.from_json(json)
# print the JSON string representation of the object
print(TLPCodeDirectoryAnalytics.to_json())

# convert the object into a dict
tlp_code_directory_analytics_dict = tlp_code_directory_analytics_instance.to_dict()
# create an instance of TLPCodeDirectoryAnalytics from a dict
tlp_code_directory_analytics_form_dict = tlp_code_directory_analytics.from_dict(tlp_code_directory_analytics_dict)
```


