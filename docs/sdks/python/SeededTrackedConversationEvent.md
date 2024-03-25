# SeededTrackedConversationEvent

This is a pre-created(seed) TrackedConversationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**identifier_description_pair** | [**TrackedConversationEventIdentifierDescriptionPairs**](TrackedConversationEventIdentifierDescriptionPairs) |  | 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | 
**metadata** | [**TrackedConversationEventMetadata**](TrackedConversationEventMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_conversation_event import SeededTrackedConversationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedConversationEvent from a JSON string
seeded_tracked_conversation_event_instance = SeededTrackedConversationEvent.from_json(json)
# print the JSON string representation of the object
print SeededTrackedConversationEvent.to_json()

# convert the object into a dict
seeded_tracked_conversation_event_dict = seeded_tracked_conversation_event_instance.to_dict()
# create an instance of SeededTrackedConversationEvent from a dict
seeded_tracked_conversation_event_form_dict = seeded_tracked_conversation_event.from_dict(seeded_tracked_conversation_event_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


