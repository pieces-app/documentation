# FlattenedConversationMessage

This is a flattened DAG safe version of a ConversationMessage.

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
from pieces_os_client.models.flattened_conversation_message import FlattenedConversationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedConversationMessage from a JSON string
flattened_conversation_message_instance = FlattenedConversationMessage.from_json(json)
# print the JSON string representation of the object
print FlattenedConversationMessage.to_json()

# convert the object into a dict
flattened_conversation_message_dict = flattened_conversation_message_instance.to_dict()
# create an instance of FlattenedConversationMessage from a dict
flattened_conversation_message_form_dict = flattened_conversation_message.from_dict(flattened_conversation_message_dict)
```



