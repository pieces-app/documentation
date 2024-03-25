# QGPTQuestionAnswer

This will be a simple model with a score and a text value that will represent the value returned for this answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**score** | **float** | This is the score from 0-1 on how good this answer is. | 
**text** | **str** |  | 

## Example

```python
from pieces_os_client.models.qgpt_question_answer import QGPTQuestionAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTQuestionAnswer from a JSON string
qgpt_question_answer_instance = QGPTQuestionAnswer.from_json(json)
# print the JSON string representation of the object
print QGPTQuestionAnswer.to_json()

# convert the object into a dict
qgpt_question_answer_dict = qgpt_question_answer_instance.to_dict()
# create an instance of QGPTQuestionAnswer from a dict
qgpt_question_answer_form_dict = qgpt_question_answer.from_dict(qgpt_question_answer_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


