# OAuthGroup

A model to group all of the properties associated with OAuthGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**OAuthToken**](OAuthToken) |  | [optional] 
**account** | [**OAuthAccount**](OAuthAccount) |  | [optional] 

## Example

```python
from pieces_os_client.models.o_auth_group import OAuthGroup

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthGroup from a JSON string
o_auth_group_instance = OAuthGroup.from_json(json)
# print the JSON string representation of the object
print(OAuthGroup.to_json())

# convert the object into a dict
o_auth_group_dict = o_auth_group_instance.to_dict()
# create an instance of OAuthGroup from a dict
o_auth_group_form_dict = o_auth_group.from_dict(o_auth_group_dict)
```



