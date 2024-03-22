# Auth0OpenAIUserMetadata

Only supporting a single api key per user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**api_key** | **str** |  | [optional] 
**api_key_name** | **str** |  | [optional] 
**organization_key** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.auth0_open_ai_user_metadata import Auth0OpenAIUserMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0OpenAIUserMetadata from a JSON string
auth0_open_ai_user_metadata_instance = Auth0OpenAIUserMetadata.from_json(json)
# print the JSON string representation of the object
print Auth0OpenAIUserMetadata.to_json()

# convert the object into a dict
auth0_open_ai_user_metadata_dict = auth0_open_ai_user_metadata_instance.to_dict()
# create an instance of Auth0OpenAIUserMetadata from a dict
auth0_open_ai_user_metadata_form_dict = auth0_open_ai_user_metadata.from_dict(auth0_open_ai_user_metadata_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


