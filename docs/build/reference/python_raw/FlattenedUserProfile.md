# FlattenedUserProfile

This is a FlattenedUserProfile that includes information that is not sensative in relation to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | this is the uuid that identifies a user. | 
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**picture** | **str** |  | [optional] 
**vanityname** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_user_profile import FlattenedUserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedUserProfile from a JSON string
flattened_user_profile_instance = FlattenedUserProfile.from_json(json)
# print the JSON string representation of the object
print FlattenedUserProfile.to_json()

# convert the object into a dict
flattened_user_profile_dict = flattened_user_profile_instance.to_dict()
# create an instance of FlattenedUserProfile from a dict
flattened_user_profile_form_dict = flattened_user_profile.from_dict(flattened_user_profile_dict)
```



