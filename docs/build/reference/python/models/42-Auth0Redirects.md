# Auth0Redirects

The redirect URI for you Auth 0 Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated** | **str** | Where the Auth0 redirects after the user is authorized | [optional] 
**unauthenticated** | **str** | The redirect where a user returns once unauthenticated | [optional] 

## Example

```python
from pieces_os_client.models.auth0_redirects import Auth0Redirects

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0Redirects from a JSON string
auth0_redirects_instance = Auth0Redirects.from_json(json)
# print the JSON string representation of the object
print(Auth0Redirects.to_json())

# convert the object into a dict
auth0_redirects_dict = auth0_redirects_instance.to_dict()
# create an instance of Auth0Redirects from a dict
auth0_redirects_form_dict = auth0_redirects.from_dict(auth0_redirects_dict)
```


