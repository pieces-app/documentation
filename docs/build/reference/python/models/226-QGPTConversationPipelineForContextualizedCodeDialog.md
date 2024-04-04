# QGPTConversationPipelineForContextualizedCodeDialog

This is for the users that wants to have contextualized code conversations, meaning conversations around code with Context provided.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_conversation_pipeline_for_contextualized_code_dialog import QGPTConversationPipelineForContextualizedCodeDialog

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversationPipelineForContextualizedCodeDialog from a JSON string
qgpt_conversation_pipeline_for_contextualized_code_dialog_instance = QGPTConversationPipelineForContextualizedCodeDialog.from_json(json)
# print the JSON string representation of the object
print(QGPTConversationPipelineForContextualizedCodeDialog.to_json())

# convert the object into a dict
qgpt_conversation_pipeline_for_contextualized_code_dialog_dict = qgpt_conversation_pipeline_for_contextualized_code_dialog_instance.to_dict()
# create an instance of QGPTConversationPipelineForContextualizedCodeDialog from a dict
qgpt_conversation_pipeline_for_contextualized_code_dialog_form_dict = qgpt_conversation_pipeline_for_contextualized_code_dialog.from_dict(qgpt_conversation_pipeline_for_contextualized_code_dialog_dict)
```



