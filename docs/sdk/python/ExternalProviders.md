# ExternalProviders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ExternalProvider]**](ExternalProvider) |  | 

## Example

```python
from pieces_os_client.models.external_providers import ExternalProviders

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalProviders from a JSON string
external_providers_instance = ExternalProviders.from_json(json)
# print the JSON string representation of the object
print ExternalProviders.to_json()

# convert the object into a dict
external_providers_dict = external_providers_instance.to_dict()
# create an instance of ExternalProviders from a dict
external_providers_form_dict = external_providers.from_dict(external_providers_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


