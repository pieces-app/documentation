# FlattenedConversations

Flattened version of conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedConversation]**](ReferencedConversation) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an Conversation id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_conversations import FlattenedConversations

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedConversations from a JSON string
flattened_conversations_instance = FlattenedConversations.from_json(json)
# print the JSON string representation of the object
print(FlattenedConversations.to_json())

# convert the object into a dict
flattened_conversations_dict = flattened_conversations_instance.to_dict()
# create an instance of FlattenedConversations from a dict
flattened_conversations_form_dict = flattened_conversations.from_dict(flattened_conversations_dict)
```



