# PKCE

An object representing all of the properties involved in a PKCE Authentication Flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**result** | [**ResultedPKCE**](ResultedPKCE) |  | [optional] 
**challenge** | [**ChallengedPKCE**](ChallengedPKCE) |  | [optional] 
**revocation** | [**RevokedPKCE**](RevokedPKCE) |  | [optional] 
**seed** | [**SeededPKCE**](SeededPKCE) |  | [optional] 
**token** | [**TokenizedPKCE**](TokenizedPKCE) |  | [optional] 
**auth0** | [**Auth0**](Auth0) |  | [optional] 

## Example

```python
from pieces_os_client.models.pkce import PKCE

# TODO update the JSON string below
json = "{}"
# create an instance of PKCE from a JSON string
pkce_instance = PKCE.from_json(json)
# print the JSON string representation of the object
print PKCE.to_json()

# convert the object into a dict
pkce_dict = pkce_instance.to_dict()
# create an instance of PKCE from a dict
pkce_form_dict = pkce.from_dict(pkce_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


