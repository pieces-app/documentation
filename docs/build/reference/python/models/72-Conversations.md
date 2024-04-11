# Conversations

This is a plural version of a Conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Conversation]**](Conversation) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an Conversation id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.conversations import Conversations

# TODO update the JSON string below
json = "{}"
# create an instance of Conversations from a JSON string
conversations_instance = Conversations.from_json(json)
# print the JSON string representation of the object
print(Conversations.to_json())

# convert the object into a dict
conversations_dict = conversations_instance.to_dict()
# create an instance of Conversations from a dict
conversations_form_dict = conversations.from_dict(conversations_dict)
```


