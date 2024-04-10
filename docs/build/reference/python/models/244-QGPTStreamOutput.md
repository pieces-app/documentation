# QGPTStreamOutput

This is the out for the /qgpt/stream endpoint.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **str** | This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one. | [optional] 
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput) |  | [optional] 
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput) |  | [optional] 
**status** | [**QGPTStreamEnum**](QGPTStreamEnum) |  | [optional] 
**conversation** | **str** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | 
**status_code** | **float** | This will be provided | [optional] 
**error_message** | **str** | optional error message is the status code is NOT 200 | [optional] 
**agent_routes** | [**QGPTAgentRoutes**](QGPTAgentRoutes) |  | [optional] 

## Example

```python
from pieces_os_client.models.qgpt_stream_output import QGPTStreamOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTStreamOutput from a JSON string
qgpt_stream_output_instance = QGPTStreamOutput.from_json(json)
# print the JSON string representation of the object
print(QGPTStreamOutput.to_json())

# convert the object into a dict
qgpt_stream_output_dict = qgpt_stream_output_instance.to_dict()
# create an instance of QGPTStreamOutput from a dict
qgpt_stream_output_form_dict = qgpt_stream_output.from_dict(qgpt_stream_output_dict)
```


