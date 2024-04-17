---
title: OSPermissions | Python SDK
---

# OSPermissions

This will return the permission of this specific operating system w/ relation to given features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**processing** | [**OSProcessingPermissions**](OSProcessingPermissions) |  | [optional] 

## Example

```python
from pieces_os_client.models.os_permissions import OSPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of OSPermissions from a JSON string
os_permissions_instance = OSPermissions.from_json(json)
# print the JSON string representation of the object
print(OSPermissions.to_json())

# convert the object into a dict
os_permissions_dict = os_permissions_instance.to_dict()
# create an instance of OSPermissions from a dict
os_permissions_form_dict = os_permissions.from_dict(os_permissions_dict)
```


