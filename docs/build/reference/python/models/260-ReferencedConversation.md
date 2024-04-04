# ReferencedConversation

This is a DAG-Safe Minimal version of a Conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedConversation**](FlattenedConversation) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_conversation import ReferencedConversation

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedConversation from a JSON string
referenced_conversation_instance = ReferencedConversation.from_json(json)
# print the JSON string representation of the object
print(ReferencedConversation.to_json())

# convert the object into a dict
referenced_conversation_dict = referenced_conversation_instance.to_dict()
# create an instance of ReferencedConversation from a dict
referenced_conversation_form_dict = referenced_conversation.from_dict(referenced_conversation_dict)
```



