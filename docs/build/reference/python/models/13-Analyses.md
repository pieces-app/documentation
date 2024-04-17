---
title: Analyses | Python SDK
---

# Analyses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Analysis]**](Analysis) |  | 

## Example

```python
from pieces_os_client.models.analyses import Analyses

# TODO update the JSON string below
json = "{}"
# create an instance of Analyses from a JSON string
analyses_instance = Analyses.from_json(json)
# print the JSON string representation of the object
print(Analyses.to_json())

# convert the object into a dict
analyses_dict = analyses_instance.to_dict()
# create an instance of Analyses from a dict
analyses_form_dict = analyses.from_dict(analyses_dict)
```


