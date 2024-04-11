# FlattenedConversationMessages

This is a flattened plural version of ConversationMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedConversationMessage]**](ReferencedConversationMessage) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an ConversationMessage id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_conversation_messages import FlattenedConversationMessages

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedConversationMessages from a JSON string
flattened_conversation_messages_instance = FlattenedConversationMessages.from_json(json)
# print the JSON string representation of the object
print(FlattenedConversationMessages.to_json())

# convert the object into a dict
flattened_conversation_messages_dict = flattened_conversation_messages_instance.to_dict()
# create an instance of FlattenedConversationMessages from a dict
flattened_conversation_messages_form_dict = flattened_conversation_messages.from_dict(flattened_conversation_messages_dict)
```


