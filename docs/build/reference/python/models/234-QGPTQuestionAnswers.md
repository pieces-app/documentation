# QGPTQuestionAnswers

This is the plural of QGPTQuestionAnswer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[QGPTQuestionAnswer]**](QGPTQuestionAnswer) |  | 

## Example

```python
from pieces_os_client.models.qgpt_question_answers import QGPTQuestionAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTQuestionAnswers from a JSON string
qgpt_question_answers_instance = QGPTQuestionAnswers.from_json(json)
# print the JSON string representation of the object
print(QGPTQuestionAnswers.to_json())

# convert the object into a dict
qgpt_question_answers_dict = qgpt_question_answers_instance.to_dict()
# create an instance of QGPTQuestionAnswers from a dict
qgpt_question_answers_form_dict = qgpt_question_answers.from_dict(qgpt_question_answers_dict)
```



