# QGPTQuestionOutput

This is the output/returned value from the /qgpt/question endpoint. && /qgpt/followup  This will just have a single required property. the possible answers to the question, with a score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**answers** | [**QGPTQuestionAnswers**](QGPTQuestionAnswers) |  | 

## Example

```python
from pieces_os_client.models.qgpt_question_output import QGPTQuestionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTQuestionOutput from a JSON string
qgpt_question_output_instance = QGPTQuestionOutput.from_json(json)
# print the JSON string representation of the object
print(QGPTQuestionOutput.to_json())

# convert the object into a dict
qgpt_question_output_dict = qgpt_question_output_instance.to_dict()
# create an instance of QGPTQuestionOutput from a dict
qgpt_question_output_form_dict = qgpt_question_output.from_dict(qgpt_question_output_dict)
```



