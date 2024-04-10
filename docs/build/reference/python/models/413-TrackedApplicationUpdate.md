# TrackedApplicationUpdate

This is a model used to track when an Application is Updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**current** | [**TrackedApplication**](TrackedApplication) |  | 
**previous** | [**TrackedApplication**](TrackedApplication) |  | [optional] 
**user** | [**TrackedUserProfile**](TrackedUserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_application_update import TrackedApplicationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedApplicationUpdate from a JSON string
tracked_application_update_instance = TrackedApplicationUpdate.from_json(json)
# print the JSON string representation of the object
print(TrackedApplicationUpdate.to_json())

# convert the object into a dict
tracked_application_update_dict = tracked_application_update_instance.to_dict()
# create an instance of TrackedApplicationUpdate from a dict
tracked_application_update_form_dict = tracked_application_update.from_dict(tracked_application_update_dict)
```


