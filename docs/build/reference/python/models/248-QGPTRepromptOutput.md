# QGPTRepromptOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**query** | **str** |  | 

## Example

```python
from pieces_os_client.models.qgpt_reprompt_output import QGPTRepromptOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTRepromptOutput from a JSON string
qgpt_reprompt_output_instance = QGPTRepromptOutput.from_json(json)
# print the JSON string representation of the object
print(QGPTRepromptOutput.to_json())

# convert the object into a dict
qgpt_reprompt_output_dict = qgpt_reprompt_output_instance.to_dict()
# create an instance of QGPTRepromptOutput from a dict
qgpt_reprompt_output_form_dict = qgpt_reprompt_output.from_dict(qgpt_reprompt_output_dict)
```


