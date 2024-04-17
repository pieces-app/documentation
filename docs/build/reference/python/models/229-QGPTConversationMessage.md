---
title: QGPTConversationMessage | Python SDK
---

# QGPTConversationMessage

This will take a single message, and a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** |  | 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | 
**timestamp** | [**GroupedTimestamp**](GroupedTimestamp) |  | 

## Example

```python
from pieces_os_client.models.qgpt_conversation_message import QGPTConversationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversationMessage from a JSON string
qgpt_conversation_message_instance = QGPTConversationMessage.from_json(json)
# print the JSON string representation of the object
print(QGPTConversationMessage.to_json())

# convert the object into a dict
qgpt_conversation_message_dict = qgpt_conversation_message_instance.to_dict()
# create an instance of QGPTConversationMessage from a dict
qgpt_conversation_message_form_dict = qgpt_conversation_message.from_dict(qgpt_conversation_message_dict)
```


