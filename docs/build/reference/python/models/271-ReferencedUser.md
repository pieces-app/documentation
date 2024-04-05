# ReferencedUser

A object to reference a user's ID and optionally a FlattenedUserProfile Instance 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_user import ReferencedUser

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedUser from a JSON string
referenced_user_instance = ReferencedUser.from_json(json)
# print the JSON string representation of the object
print(ReferencedUser.to_json())

# convert the object into a dict
referenced_user_dict = referenced_user_instance.to_dict()
# create an instance of ReferencedUser from a dict
referenced_user_form_dict = referenced_user.from_dict(referenced_user_dict)
```



