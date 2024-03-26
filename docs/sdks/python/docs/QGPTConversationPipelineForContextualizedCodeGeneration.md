# QGPTConversationPipelineForContextualizedCodeGeneration

This type of conversation is reccomended to be provided when a user want generate code w/ context provided.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_conversation_pipeline_for_contextualized_code_generation import QGPTConversationPipelineForContextualizedCodeGeneration

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTConversationPipelineForContextualizedCodeGeneration from a JSON string
qgpt_conversation_pipeline_for_contextualized_code_generation_instance = QGPTConversationPipelineForContextualizedCodeGeneration.from_json(json)
# print the JSON string representation of the object
print QGPTConversationPipelineForContextualizedCodeGeneration.to_json()

# convert the object into a dict
qgpt_conversation_pipeline_for_contextualized_code_generation_dict = qgpt_conversation_pipeline_for_contextualized_code_generation_instance.to_dict()
# create an instance of QGPTConversationPipelineForContextualizedCodeGeneration from a dict
qgpt_conversation_pipeline_for_contextualized_code_generation_form_dict = qgpt_conversation_pipeline_for_contextualized_code_generation.from_dict(qgpt_conversation_pipeline_for_contextualized_code_generation_dict)
```



