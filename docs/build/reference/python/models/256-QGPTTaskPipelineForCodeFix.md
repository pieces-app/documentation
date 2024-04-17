---
title: QGPTTaskPipelineForCodeFix | Python SDK
---

# QGPTTaskPipelineForCodeFix

This task is for fixing a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be fixed should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**error** | **str** | This is the error message provided from the IDE, that we can use to provide the solution. | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_task_pipeline_for_code_fix import QGPTTaskPipelineForCodeFix

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTTaskPipelineForCodeFix from a JSON string
qgpt_task_pipeline_for_code_fix_instance = QGPTTaskPipelineForCodeFix.from_json(json)
# print the JSON string representation of the object
print(QGPTTaskPipelineForCodeFix.to_json())

# convert the object into a dict
qgpt_task_pipeline_for_code_fix_dict = qgpt_task_pipeline_for_code_fix_instance.to_dict()
# create an instance of QGPTTaskPipelineForCodeFix from a dict
qgpt_task_pipeline_for_code_fix_form_dict = qgpt_task_pipeline_for_code_fix.from_dict(qgpt_task_pipeline_for_code_fix_dict)
```


