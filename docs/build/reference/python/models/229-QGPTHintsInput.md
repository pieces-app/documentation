# QGPTHintsInput

Query is your hints question. Relevant is the relevant snippets. Answer is the previous answer.(that we are asking a hint up for.)  Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | [optional] 
**answer** | [**QGPTQuestionAnswer**](QGPTQuestionAnswer) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 
**application** | **str** | optional application id | [optional] 
**model** | **str** | optional model id | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_hints_input import QGPTHintsInput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTHintsInput from a JSON string
qgpt_hints_input_instance = QGPTHintsInput.from_json(json)
# print the JSON string representation of the object
print(QGPTHintsInput.to_json())

# convert the object into a dict
qgpt_hints_input_dict = qgpt_hints_input_instance.to_dict()
# create an instance of QGPTHintsInput from a dict
qgpt_hints_input_form_dict = qgpt_hints_input.from_dict(qgpt_hints_input_dict)
```



