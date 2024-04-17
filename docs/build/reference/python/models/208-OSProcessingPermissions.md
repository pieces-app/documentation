---
title: OSProcessingPermissions | Python SDK
---

# OSProcessingPermissions

These are the permissions relating to the vision models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**vision** | **bool** | if true it is granted, if not then it is not granted. | [optional] 
**accessibility** | **bool** | if true it is granted, if not then it is not granted. | [optional] 

## Example

```python
from pieces_os_client.models.os_processing_permissions import OSProcessingPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of OSProcessingPermissions from a JSON string
os_processing_permissions_instance = OSProcessingPermissions.from_json(json)
# print the JSON string representation of the object
print(OSProcessingPermissions.to_json())

# convert the object into a dict
os_processing_permissions_dict = os_processing_permissions_instance.to_dict()
# create an instance of OSProcessingPermissions from a dict
os_processing_permissions_form_dict = os_processing_permissions.from_dict(os_processing_permissions_dict)
```


