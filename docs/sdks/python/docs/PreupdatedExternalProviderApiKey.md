# PreupdatedExternalProviderApiKey

This is the endput model for \"/external_provider/api_key/update\". everything but the uder will be optional, anything that is defined will get an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**user** | **str** |  | 
**open_ai** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.preupdated_external_provider_api_key import PreupdatedExternalProviderApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of PreupdatedExternalProviderApiKey from a JSON string
preupdated_external_provider_api_key_instance = PreupdatedExternalProviderApiKey.from_json(json)
# print the JSON string representation of the object
print PreupdatedExternalProviderApiKey.to_json()

# convert the object into a dict
preupdated_external_provider_api_key_dict = preupdated_external_provider_api_key_instance.to_dict()
# create an instance of PreupdatedExternalProviderApiKey from a dict
preupdated_external_provider_api_key_form_dict = preupdated_external_provider_api_key.from_dict(preupdated_external_provider_api_key_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


