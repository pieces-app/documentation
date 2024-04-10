# PredeletedExternalProviderApiKey

This is a predeleted version relating to the /external_provider/api_key/delete endpoint.  This will ensure we remove this specific provider.(anything that is set to true we will reset to null within the database.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema) |  | [optional] 
**user** | **str** |  | 
**open_ai** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.predeleted_external_provider_api_key import PredeletedExternalProviderApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of PredeletedExternalProviderApiKey from a JSON string
predeleted_external_provider_api_key_instance = PredeletedExternalProviderApiKey.from_json(json)
# print the JSON string representation of the object
print(PredeletedExternalProviderApiKey.to_json())

# convert the object into a dict
predeleted_external_provider_api_key_dict = predeleted_external_provider_api_key_instance.to_dict()
# create an instance of PredeletedExternalProviderApiKey from a dict
predeleted_external_provider_api_key_form_dict = predeleted_external_provider_api_key.from_dict(predeleted_external_provider_api_key_dict)
```


