# PrecreatedExternalProviderApiKey

This is the input model for /external_provider/api_key/create

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**user** | **str** | This is the ID of the User. | 
**open_ai** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.precreated_external_provider_api_key import PrecreatedExternalProviderApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of PrecreatedExternalProviderApiKey from a JSON string
precreated_external_provider_api_key_instance = PrecreatedExternalProviderApiKey.from_json(json)
# print the JSON string representation of the object
print PrecreatedExternalProviderApiKey.to_json()

# convert the object into a dict
precreated_external_provider_api_key_dict = precreated_external_provider_api_key_instance.to_dict()
# create an instance of PrecreatedExternalProviderApiKey from a dict
precreated_external_provider_api_key_form_dict = precreated_external_provider_api_key.from_dict(precreated_external_provider_api_key_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


