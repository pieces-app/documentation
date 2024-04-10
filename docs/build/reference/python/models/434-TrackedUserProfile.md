# TrackedUserProfile

A user that will be passed along with each analytics event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The ID of the user that you are tracking. | 
**username** | **str** | This is a username that is attempted to be assigned but is \&quot;Anonymous User\&quot; by default | [default to 'unknown']
**email** | **str** | The user&#39;s email if we have it. | [optional] 
**granularity** | **str** | At what level is this user being tracked. | [default to 'ANONYMOUS']

## Example

```python
from pieces_os_client.models.tracked_user_profile import TrackedUserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedUserProfile from a JSON string
tracked_user_profile_instance = TrackedUserProfile.from_json(json)
# print the JSON string representation of the object
print(TrackedUserProfile.to_json())

# convert the object into a dict
tracked_user_profile_dict = tracked_user_profile_instance.to_dict()
# create an instance of TrackedUserProfile from a dict
tracked_user_profile_form_dict = tracked_user_profile.from_dict(tracked_user_profile_dict)
```


