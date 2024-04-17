# UpdatedExternalProviderApiKey

This is the update Auth0UserMetadata object, and the specific update output model for \"/external_provider/api_key/update\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema) |  | [optional] 
**metadata** | [**Auth0UserMetadata**](../models/Auth0UserMetadata) |  | 

## Example

```python
from pieces_os_client.models.updated_external_provider_api_key import UpdatedExternalProviderApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedExternalProviderApiKey from a JSON string
updated_external_provider_api_key_instance = UpdatedExternalProviderApiKey.from_json(json)
# print the JSON string representation of the object
print(UpdatedExternalProviderApiKey.to_json())

# convert the object into a dict
updated_external_provider_api_key_dict = updated_external_provider_api_key_instance.to_dict()
# create an instance of UpdatedExternalProviderApiKey from a dict
updated_external_provider_api_key_form_dict = updated_external_provider_api_key.from_dict(updated_external_provider_api_key_dict)
```


