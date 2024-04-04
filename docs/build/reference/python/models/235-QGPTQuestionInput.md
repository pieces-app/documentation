# QGPTQuestionInput

This is the body input for the /code_gpt/question.  Note: - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 
**query** | **str** | This is the user asked question. | 
**application** | **str** | optional application id | [optional] 
**model** | **str** | optional model id | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_question_input import QGPTQuestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTQuestionInput from a JSON string
qgpt_question_input_instance = QGPTQuestionInput.from_json(json)
# print the JSON string representation of the object
print(QGPTQuestionInput.to_json())

# convert the object into a dict
qgpt_question_input_dict = qgpt_question_input_instance.to_dict()
# create an instance of QGPTQuestionInput from a dict
qgpt_question_input_form_dict = qgpt_question_input.from_dict(qgpt_question_input_dict)
```



