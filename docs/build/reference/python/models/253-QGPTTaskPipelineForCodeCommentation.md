# QGPTTaskPipelineForCodeCommentation

This task is for commenting a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be commented should be within the QGPTQuestionInput.relevant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_task_pipeline_for_code_commentation import QGPTTaskPipelineForCodeCommentation

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTTaskPipelineForCodeCommentation from a JSON string
qgpt_task_pipeline_for_code_commentation_instance = QGPTTaskPipelineForCodeCommentation.from_json(json)
# print the JSON string representation of the object
print(QGPTTaskPipelineForCodeCommentation.to_json())

# convert the object into a dict
qgpt_task_pipeline_for_code_commentation_dict = qgpt_task_pipeline_for_code_commentation_instance.to_dict()
# create an instance of QGPTTaskPipelineForCodeCommentation from a dict
qgpt_task_pipeline_for_code_commentation_form_dict = qgpt_task_pipeline_for_code_commentation.from_dict(qgpt_task_pipeline_for_code_commentation_dict)
```


