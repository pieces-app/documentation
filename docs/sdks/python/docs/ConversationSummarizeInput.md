# ConversationSummarizeInput

Optionally you may pass in a list of conversation message that you would like to use for the summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 

## Example

```python
from pieces_os_client.models.conversation_summarize_input import ConversationSummarizeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationSummarizeInput from a JSON string
conversation_summarize_input_instance = ConversationSummarizeInput.from_json(json)
# print the JSON string representation of the object
print ConversationSummarizeInput.to_json()

# convert the object into a dict
conversation_summarize_input_dict = conversation_summarize_input_instance.to_dict()
# create an instance of ConversationSummarizeInput from a dict
conversation_summarize_input_form_dict = conversation_summarize_input.from_dict(conversation_summarize_input_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


