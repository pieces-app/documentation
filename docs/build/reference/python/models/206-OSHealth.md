---
title: OSHealth | Python SDK
---

# OSHealth

This is a specific model for the health of our OS Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | id of your OS | 
**version** | **str** | this is the current OS version | 

## Example

```python
from pieces_os_client.models.os_health import OSHealth

# TODO update the JSON string below
json = "{}"
# create an instance of OSHealth from a JSON string
os_health_instance = OSHealth.from_json(json)
# print the JSON string representation of the object
print(OSHealth.to_json())

# convert the object into a dict
os_health_dict = os_health_instance.to_dict()
# create an instance of OSHealth from a dict
os_health_form_dict = os_health.from_dict(os_health_dict)
```


