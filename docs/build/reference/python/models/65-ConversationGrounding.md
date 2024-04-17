---
title: ConversationGrounding | Python SDK
---

# ConversationGrounding

This is the context used for grounding the ml models with reguard to a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] 

## Example

```python
from pieces_os_client.models.conversation_grounding import ConversationGrounding

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationGrounding from a JSON string
conversation_grounding_instance = ConversationGrounding.from_json(json)
# print the JSON string representation of the object
print(ConversationGrounding.to_json())

# convert the object into a dict
conversation_grounding_dict = conversation_grounding_instance.to_dict()
# create an instance of ConversationGrounding from a dict
conversation_grounding_form_dict = conversation_grounding.from_dict(conversation_grounding_dict)
```


