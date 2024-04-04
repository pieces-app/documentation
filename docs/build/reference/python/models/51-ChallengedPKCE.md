# ChallengedPKCE

A model that Generates A PKCE Challenge Object with the needed requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**state** | **str** | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | 
**nonce** | **str** | A local key that is held as the comparator to state, thus they should be the same. | 
**challenge** | **str** | Generated challenge from the code_verifier. | 
**method** | **str** | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | 
**verifier** | **str** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 

## Example

```python
from pieces_os_client.models.challenged_pkce import ChallengedPKCE

# TODO update the JSON string below
json = "{}"
# create an instance of ChallengedPKCE from a JSON string
challenged_pkce_instance = ChallengedPKCE.from_json(json)
# print the JSON string representation of the object
print(ChallengedPKCE.to_json())

# convert the object into a dict
challenged_pkce_dict = challenged_pkce_instance.to_dict()
# create an instance of ChallengedPKCE from a dict
challenged_pkce_form_dict = challenged_pkce.from_dict(challenged_pkce_dict)
```



