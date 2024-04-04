# TrackedKeyboardEvent

This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**description** | **str** | this is a description of the event, optional. | 
**shortcut** | **List[int]** | this is an array of of ascii values that represent numerics on your keyboard. | 

## Example

```python
from pieces_os_client.models.tracked_keyboard_event import TrackedKeyboardEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedKeyboardEvent from a JSON string
tracked_keyboard_event_instance = TrackedKeyboardEvent.from_json(json)
# print the JSON string representation of the object
print(TrackedKeyboardEvent.to_json())

# convert the object into a dict
tracked_keyboard_event_dict = tracked_keyboard_event_instance.to_dict()
# create an instance of TrackedKeyboardEvent from a dict
tracked_keyboard_event_form_dict = tracked_keyboard_event.from_dict(tracked_keyboard_event_dict)
```



