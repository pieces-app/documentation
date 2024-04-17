---
title: QGPTTaskPipelineForCodeCompletion | Python SDK
---

# QGPTTaskPipelineForCodeCompletion

This task is for code_completion ie auto-complete.  This is a class so that we can add optional properties in the future.  context: This is additional snippet context within the file that will be useful for the autocompletion.(PLEASE ONLY pass in Seed.asset.format.fragment.string.raw for the context snippet values, and for the classificaiton pass in Seed.asset.format.classification)  Note: the snippet && language that needs to be Actually AutoCompleted should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**context** | **List[str]** |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_task_pipeline_for_code_completion import QGPTTaskPipelineForCodeCompletion

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTTaskPipelineForCodeCompletion from a JSON string
qgpt_task_pipeline_for_code_completion_instance = QGPTTaskPipelineForCodeCompletion.from_json(json)
# print the JSON string representation of the object
print(QGPTTaskPipelineForCodeCompletion.to_json())

# convert the object into a dict
qgpt_task_pipeline_for_code_completion_dict = qgpt_task_pipeline_for_code_completion_instance.to_dict()
# create an instance of QGPTTaskPipelineForCodeCompletion from a dict
qgpt_task_pipeline_for_code_completion_form_dict = qgpt_task_pipeline_for_code_completion.from_dict(qgpt_task_pipeline_for_code_completion_dict)
```


