# ConversationMessages

This is a plural version of ConversationMessage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ConversationMessage]**](ConversationMessage) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an ConversationMessage id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.conversation_messages import ConversationMessages

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationMessages from a JSON string
conversation_messages_instance = ConversationMessages.from_json(json)
# print the JSON string representation of the object
print(ConversationMessages.to_json())

# convert the object into a dict
conversation_messages_dict = conversation_messages_instance.to_dict()
# create an instance of ConversationMessages from a dict
conversation_messages_form_dict = conversation_messages.from_dict(conversation_messages_dict)
```


