# SeededTrackedKeyboardEventIdentifierDescriptionPairs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets_list_refreshed** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_keyboard_event_identifier_description_pairs import SeededTrackedKeyboardEventIdentifierDescriptionPairs

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedKeyboardEventIdentifierDescriptionPairs from a JSON string
seeded_tracked_keyboard_event_identifier_description_pairs_instance = SeededTrackedKeyboardEventIdentifierDescriptionPairs.from_json(json)
# print the JSON string representation of the object
print(SeededTrackedKeyboardEventIdentifierDescriptionPairs.to_json())

# convert the object into a dict
seeded_tracked_keyboard_event_identifier_description_pairs_dict = seeded_tracked_keyboard_event_identifier_description_pairs_instance.to_dict()
# create an instance of SeededTrackedKeyboardEventIdentifierDescriptionPairs from a dict
seeded_tracked_keyboard_event_identifier_description_pairs_form_dict = seeded_tracked_keyboard_event_identifier_description_pairs.from_dict(seeded_tracked_keyboard_event_identifier_description_pairs_dict)
```



