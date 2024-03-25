# TrackedConversationEventMetadata

This is the metadata for the the ConversationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**rename** | [**TrackedConversationEventRenameMetadata**](TrackedConversationEventRenameMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_conversation_event_metadata import TrackedConversationEventMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedConversationEventMetadata from a JSON string
tracked_conversation_event_metadata_instance = TrackedConversationEventMetadata.from_json(json)
# print the JSON string representation of the object
print TrackedConversationEventMetadata.to_json()

# convert the object into a dict
tracked_conversation_event_metadata_dict = tracked_conversation_event_metadata_instance.to_dict()
# create an instance of TrackedConversationEventMetadata from a dict
tracked_conversation_event_metadata_form_dict = tracked_conversation_event_metadata.from_dict(tracked_conversation_event_metadata_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


