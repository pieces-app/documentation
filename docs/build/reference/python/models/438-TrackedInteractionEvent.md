---
title: TrackedInteractionEvent | Python SDK
---

# TrackedInteractionEvent

This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**description** | **str** | (optional) a description of this button that was clicked. or maybe what it did. | 
**element** | **str** | This is an identifer that will allow the developer to know what unique button/field was interacted with. | [optional] 

## Example

```python
from pieces_os_client.models.tracked_interaction_event import TrackedInteractionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedInteractionEvent from a JSON string
tracked_interaction_event_instance = TrackedInteractionEvent.from_json(json)
# print the JSON string representation of the object
print(TrackedInteractionEvent.to_json())

# convert the object into a dict
tracked_interaction_event_dict = tracked_interaction_event_instance.to_dict()
# create an instance of TrackedInteractionEvent from a dict
tracked_interaction_event_form_dict = tracked_interaction_event.from_dict(tracked_interaction_event_dict)
```


