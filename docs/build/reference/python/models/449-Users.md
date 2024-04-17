---
title: Users | Python SDK
---

# Users

A base class for a collection of users and some additional meta properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[UserProfile]**](UserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.users import Users

# TODO update the JSON string below
json = "{}"
# create an instance of Users from a JSON string
users_instance = Users.from_json(json)
# print the JSON string representation of the object
print(Users.to_json())

# convert the object into a dict
users_dict = users_instance.to_dict()
# create an instance of Users from a dict
users_form_dict = users.from_dict(users_dict)
```


