# QGPTConversationPipelineForGeneralizedCodeDialog

This is for the users that wants to have generalized code conversations without any context.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_conversation_pipeline_for_generalized_code_dialog import QGPTConversationPipelineForGeneralizedCodeDialog

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversationPipelineForGeneralizedCodeDialog from a JSON string
qgpt_conversation_pipeline_for_generalized_code_dialog_instance = QGPTConversationPipelineForGeneralizedCodeDialog.from_json(json)
# print the JSON string representation of the object
print QGPTConversationPipelineForGeneralizedCodeDialog.to_json()

# convert the object into a dict
qgpt_conversation_pipeline_for_generalized_code_dialog_dict = qgpt_conversation_pipeline_for_generalized_code_dialog_instance.to_dict()
# create an instance of QGPTConversationPipelineForGeneralizedCodeDialog from a dict
qgpt_conversation_pipeline_for_generalized_code_dialog_form_dict = qgpt_conversation_pipeline_for_generalized_code_dialog.from_dict(qgpt_conversation_pipeline_for_generalized_code_dialog_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


