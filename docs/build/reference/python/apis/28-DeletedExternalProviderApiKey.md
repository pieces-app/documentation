---
title: DeletedExternalProviderApiKey | Python SDK
---

# DeletedExternalProviderApiKey

This is the returnable for the \"\"/external_provider/api_key/delete\" endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema) |  | [optional] 
**metadata** | [**Auth0UserMetadata**](../models/Auth0UserMetadata) |  | 

## Example

```python
from pieces_os_client.models.deleted_external_provider_api_key import DeletedExternalProviderApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedExternalProviderApiKey from a JSON string
deleted_external_provider_api_key_instance = DeletedExternalProviderApiKey.from_json(json)
# print the JSON string representation of the object
print(DeletedExternalProviderApiKey.to_json())

# convert the object into a dict
deleted_external_provider_api_key_dict = deleted_external_provider_api_key_instance.to_dict()
# create an instance of DeletedExternalProviderApiKey from a dict
deleted_external_provider_api_key_form_dict = deleted_external_provider_api_key.from_dict(deleted_external_provider_api_key_dict)
```


