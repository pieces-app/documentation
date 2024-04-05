# RevokedPKCE

A model to support revoking a Token Generated Through PKCE  The behaviour of this endpoint depends on the state of the Refresh Token Revocation Deletes Grant toggle.  If this toggle is enabled, then each revocation request invalidates not only the specific token, but all other tokens based on the same authorization grant.  This means that all Refresh Tokens that have been issued for the same user, application, and audience will be revoked. If this toggle is disabled, then only the refresh token is revoked, while the grant is left intact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**client_id** | **str** | Your application&#39;s Client ID. The application should match the one the Refresh Token was issued for. | 
**token** | **str** | The Refresh Token you want to revoke. | 

## Example

```python
from pieces_os_client.models.revoked_pkce import RevokedPKCE

# TODO update the JSON string below
json = "{}"
# create an instance of RevokedPKCE from a JSON string
revoked_pkce_instance = RevokedPKCE.from_json(json)
# print the JSON string representation of the object
print(RevokedPKCE.to_json())

# convert the object into a dict
revoked_pkce_dict = revoked_pkce_instance.to_dict()
# create an instance of RevokedPKCE from a dict
revoked_pkce_form_dict = revoked_pkce.from_dict(revoked_pkce_dict)
```



