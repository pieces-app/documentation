# SeededTrackedInteractionEvent

This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**description** | **str** | These need structure | 
**element** | **str** |  | [optional] 
**identifier_description_pair** | [**SeededTrackedInteractionEventIdentifierDescriptionPairs**](SeededTrackedInteractionEventIdentifierDescriptionPairs) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_interaction_event import SeededTrackedInteractionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedInteractionEvent from a JSON string
seeded_tracked_interaction_event_instance = SeededTrackedInteractionEvent.from_json(json)
# print the JSON string representation of the object
print SeededTrackedInteractionEvent.to_json()

# convert the object into a dict
seeded_tracked_interaction_event_dict = seeded_tracked_interaction_event_instance.to_dict()
# create an instance of SeededTrackedInteractionEvent from a dict
seeded_tracked_interaction_event_form_dict = seeded_tracked_interaction_event.from_dict(seeded_tracked_interaction_event_dict)
```



