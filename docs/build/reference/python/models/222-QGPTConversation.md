# QGPTConversation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[QGPTConversationMessage]**](QGPTConversationMessage) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_conversation import QGPTConversation

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversation from a JSON string
qgpt_conversation_instance = QGPTConversation.from_json(json)
# print the JSON string representation of the object
print(QGPTConversation.to_json())

# convert the object into a dict
qgpt_conversation_dict = qgpt_conversation_instance.to_dict()
# create an instance of QGPTConversation from a dict
qgpt_conversation_form_dict = qgpt_conversation.from_dict(qgpt_conversation_dict)
```



