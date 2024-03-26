# QGPTPromptPipeline

This is a model related to switching between different prompts based on if we are dealing with  various tasks or if we are attempting to converse with LLMs via conversation.  You will have 2 options-  1) task- This is specifically for 1 off task operations for instance explaning a bit of code 2) conversation- This is specifically for conversing with our LLMs, will provide better results && high fedility                responses for instance contextualize code conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**task** | [**QGPTTaskPipeline**](QGPTTaskPipeline) |  | [optional] 
**conversation** | [**QGPTConversationPipeline**](QGPTConversationPipeline) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_prompt_pipeline import QGPTPromptPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTPromptPipeline from a JSON string
qgpt_prompt_pipeline_instance = QGPTPromptPipeline.from_json(json)
# print the JSON string representation of the object
print QGPTPromptPipeline.to_json()

# convert the object into a dict
qgpt_prompt_pipeline_dict = qgpt_prompt_pipeline_instance.to_dict()
# create an instance of QGPTPromptPipeline from a dict
qgpt_prompt_pipeline_form_dict = qgpt_prompt_pipeline.from_dict(qgpt_prompt_pipeline_dict)
```



