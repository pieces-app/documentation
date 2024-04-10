# SeededConversationMessage

This is a seeded version of a ConversationMessage.  conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**model** | [**Model**](Model) |  | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  | [optional] 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | 

## Example

```python
from pieces_os_client.models.seeded_conversation_message import SeededConversationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of SeededConversationMessage from a JSON string
seeded_conversation_message_instance = SeededConversationMessage.from_json(json)
# print the JSON string representation of the object
print(SeededConversationMessage.to_json())

# convert the object into a dict
seeded_conversation_message_dict = seeded_conversation_message_instance.to_dict()
# create an instance of SeededConversationMessage from a dict
seeded_conversation_message_form_dict = seeded_conversation_message.from_dict(seeded_conversation_message_dict)
```


