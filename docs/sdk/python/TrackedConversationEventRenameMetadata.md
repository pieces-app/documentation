# TrackedConversationEventRenameMetadata

This will give specific metadata need to determine what the rename was to/from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**previous** | **str** |  | 
**current** | **str** |  | 

## Example

```python
from pieces_os_client.models.tracked_conversation_event_rename_metadata import TrackedConversationEventRenameMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedConversationEventRenameMetadata from a JSON string
tracked_conversation_event_rename_metadata_instance = TrackedConversationEventRenameMetadata.from_json(json)
# print the JSON string representation of the object
print TrackedConversationEventRenameMetadata.to_json()

# convert the object into a dict
tracked_conversation_event_rename_metadata_dict = tracked_conversation_event_rename_metadata_instance.to_dict()
# create an instance of TrackedConversationEventRenameMetadata from a dict
tracked_conversation_event_rename_metadata_form_dict = tracked_conversation_event_rename_metadata.from_dict(tracked_conversation_event_rename_metadata_dict)
```



