# QGPTStreamInput

This is the input for the /qgpt/stream endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevance** | [**QGPTRelevanceInput**](QGPTRelevanceInput) |  | [optional] 
**question** | [**QGPTQuestionInput**](QGPTQuestionInput) |  | [optional] 
**request** | **str** | This is an optional Id you can use to identify the result from your request. | [optional] 
**conversation** | **str** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | [optional] 
**stop** | **bool** |  | [optional] 
**agent** | **bool** | This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput. | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_stream_input import QGPTStreamInput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTStreamInput from a JSON string
qgpt_stream_input_instance = QGPTStreamInput.from_json(json)
# print the JSON string representation of the object
print QGPTStreamInput.to_json()

# convert the object into a dict
qgpt_stream_input_dict = qgpt_stream_input_instance.to_dict()
# create an instance of QGPTStreamInput from a dict
qgpt_stream_input_form_dict = qgpt_stream_input.from_dict(qgpt_stream_input_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


