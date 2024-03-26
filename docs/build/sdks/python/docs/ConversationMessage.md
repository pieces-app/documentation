# ConversationMessage

This is a fully referenced ConversationMessage.  This has the minimum amount of properties to keep this light weight  (will consider additional properties in the future like people/tags/links xyz)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**model** | [**Model**](Model) |  | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | 
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  | [optional] 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | 
**score** | [**Score**](Score) |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 

## Example

```python
from pieces_os_client.models.conversation_message import ConversationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationMessage from a JSON string
conversation_message_instance = ConversationMessage.from_json(json)
# print the JSON string representation of the object
print ConversationMessage.to_json()

# convert the object into a dict
conversation_message_dict = conversation_message_instance.to_dict()
# create an instance of ConversationMessage from a dict
conversation_message_form_dict = conversation_message.from_dict(conversation_message_dict)
```



