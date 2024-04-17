---
title: TLPCodeFileAnalytics | Python SDK
---

# TLPCodeFileAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_file_analytics import TLPCodeFileAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFileAnalytics from a JSON string
tlp_code_file_analytics_instance = TLPCodeFileAnalytics.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFileAnalytics.to_json())

# convert the object into a dict
tlp_code_file_analytics_dict = tlp_code_file_analytics_instance.to_dict()
# create an instance of TLPCodeFileAnalytics from a dict
tlp_code_file_analytics_form_dict = tlp_code_file_analytics.from_dict(tlp_code_file_analytics_dict)
```


