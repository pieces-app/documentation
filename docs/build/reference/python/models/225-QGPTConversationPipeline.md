# QGPTConversationPipeline

This model is specifically for QGPT Conversation pipelines, the model is used to group conversational prompts for instance a conversation around generating code.  here are some use cases- 1. contextualized_code_generation- This is for users that want to have conversations around generating code, when there is provided context. 2. generalized_code- This is for users that want to have conversations without context around code. 3. contextualized_code- This is for users that want to have conversation around code with Context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**contextualized_code_generation** | [**QGPTConversationPipelineForContextualizedCodeGeneration**](QGPTConversationPipelineForContextualizedCodeGeneration) |  | [optional] 
**generalized_code_dialog** | [**QGPTConversationPipelineForGeneralizedCodeDialog**](QGPTConversationPipelineForGeneralizedCodeDialog) |  | [optional] 
**contextualized_code_dialog** | [**QGPTConversationPipelineForContextualizedCodeDialog**](QGPTConversationPipelineForContextualizedCodeDialog) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_conversation_pipeline import QGPTConversationPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversationPipeline from a JSON string
qgpt_conversation_pipeline_instance = QGPTConversationPipeline.from_json(json)
# print the JSON string representation of the object
print(QGPTConversationPipeline.to_json())

# convert the object into a dict
qgpt_conversation_pipeline_dict = qgpt_conversation_pipeline_instance.to_dict()
# create an instance of QGPTConversationPipeline from a dict
qgpt_conversation_pipeline_form_dict = qgpt_conversation_pipeline.from_dict(qgpt_conversation_pipeline_dict)
```



