# OAuthToken

A model representing a returnable response for a OAuthGroup Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**access_token** | **str** | The Access Token | 
**token_type** | **str** |  | 
**expires_in** | **int** |  | 
**scope** | **str** |  | 
**refresh_token** | **str** |  | [optional] 
**id_token** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.o_auth_token import OAuthToken

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthToken from a JSON string
o_auth_token_instance = OAuthToken.from_json(json)
# print the JSON string representation of the object
print OAuthToken.to_json()

# convert the object into a dict
o_auth_token_dict = o_auth_token_instance.to_dict()
# create an instance of OAuthToken from a dict
o_auth_token_form_dict = o_auth_token.from_dict(o_auth_token_dict)
```



