# SeededTrackedKeyboardEvent

This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**description** | **str** | This also needs structure such as key vals or enums | 
**shortcut** | **List[int]** |  | 
**identifier_description_pair** | [**SeededTrackedKeyboardEventIdentifierDescriptionPairs**](SeededTrackedKeyboardEventIdentifierDescriptionPairs) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_keyboard_event import SeededTrackedKeyboardEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedKeyboardEvent from a JSON string
seeded_tracked_keyboard_event_instance = SeededTrackedKeyboardEvent.from_json(json)
# print the JSON string representation of the object
print SeededTrackedKeyboardEvent.to_json()

# convert the object into a dict
seeded_tracked_keyboard_event_dict = seeded_tracked_keyboard_event_instance.to_dict()
# create an instance of SeededTrackedKeyboardEvent from a dict
seeded_tracked_keyboard_event_form_dict = seeded_tracked_keyboard_event.from_dict(seeded_tracked_keyboard_event_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


