---
title: QGPTTaskPipelineForCodeModification | Python SDK
---

# QGPTTaskPipelineForCodeModification

This task is for modifying a bit of code, IE modify this code to do xyz.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be modified should be within the QGPTQuestionInput.relevant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**instruction** | **str** | This is the instruction that we will use to modify this snippet. | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_task_pipeline_for_code_modification import QGPTTaskPipelineForCodeModification

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTTaskPipelineForCodeModification from a JSON string
qgpt_task_pipeline_for_code_modification_instance = QGPTTaskPipelineForCodeModification.from_json(json)
# print the JSON string representation of the object
print(QGPTTaskPipelineForCodeModification.to_json())

# convert the object into a dict
qgpt_task_pipeline_for_code_modification_dict = qgpt_task_pipeline_for_code_modification_instance.to_dict()
# create an instance of QGPTTaskPipelineForCodeModification from a dict
qgpt_task_pipeline_for_code_modification_form_dict = qgpt_task_pipeline_for_code_modification.from_dict(qgpt_task_pipeline_for_code_modification_dict)
```


