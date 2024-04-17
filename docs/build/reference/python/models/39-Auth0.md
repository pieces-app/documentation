---
title: Auth0 | Python SDK
---

# Auth0

An object representing all of the properties that are available within a Auth0 PKCE Flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Auth0Identity**](Auth0Identity) |  | [optional] 
**user** | [**Auth0User**](Auth0User) |  | [optional] 
**metadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] 
**domain** | **str** | The domain of your Auth 0 Service | 
**client** | **str** | The Client ID for your Auth0 Service | 
**audience** | **str** | The Server Audience of your Auth0 Service | 
**redirects** | [**Auth0Redirects**](Auth0Redirects) |  | 
**o_auth** | [**OAuthGroup**](OAuthGroup) |  | 
**namespace** | **str** | An optional namespace parameter to add an additional namespace | [optional] 

## Example

```python
from pieces_os_client.models.auth0 import Auth0

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0 from a JSON string
auth0_instance = Auth0.from_json(json)
# print the JSON string representation of the object
print(Auth0.to_json())

# convert the object into a dict
auth0_dict = auth0_instance.to_dict()
# create an instance of Auth0 from a dict
auth0_form_dict = auth0.from_dict(auth0_dict)
```


