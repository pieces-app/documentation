# TokenizedPKCE

This is the flow that mobile apps use to access an API. Use this endpoint to exchange an Authorization Code for a Token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**grant_type** | **str** | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | 
**client_id** | **str** | Your application&#39;s Client ID. | 
**code** | **str** | The Authorization Code received from the initial /authorize call. | 
**redirect_uri** | **str** | This is required only if it was set at the GET /authorize endpoint. The values must match. | 
**code_verifier** | **str** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 
**audience** | **str** | The audience domain: i.e. https://pieces.us.auth0.com | [optional] 

## Example

```python
from pieces_os_client.models.tokenized_pkce import TokenizedPKCE

# TODO update the JSON string below
json = "{}"
# create an instance of TokenizedPKCE from a JSON string
tokenized_pkce_instance = TokenizedPKCE.from_json(json)
# print the JSON string representation of the object
print TokenizedPKCE.to_json()

# convert the object into a dict
tokenized_pkce_dict = tokenized_pkce_instance.to_dict()
# create an instance of TokenizedPKCE from a dict
tokenized_pkce_form_dict = tokenized_pkce.from_dict(tokenized_pkce_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


