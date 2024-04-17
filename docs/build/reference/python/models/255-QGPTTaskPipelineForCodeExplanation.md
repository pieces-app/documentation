# QGPTTaskPipelineForCodeExplanation

This task is for explaining a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be explaned should be within the QGPTQuestionInput.relevant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_task_pipeline_for_code_explanation import QGPTTaskPipelineForCodeExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTTaskPipelineForCodeExplanation from a JSON string
qgpt_task_pipeline_for_code_explanation_instance = QGPTTaskPipelineForCodeExplanation.from_json(json)
# print the JSON string representation of the object
print(QGPTTaskPipelineForCodeExplanation.to_json())

# convert the object into a dict
qgpt_task_pipeline_for_code_explanation_dict = qgpt_task_pipeline_for_code_explanation_instance.to_dict()
# create an instance of QGPTTaskPipelineForCodeExplanation from a dict
qgpt_task_pipeline_for_code_explanation_form_dict = qgpt_task_pipeline_for_code_explanation.from_dict(qgpt_task_pipeline_for_code_explanation_dict)
```


