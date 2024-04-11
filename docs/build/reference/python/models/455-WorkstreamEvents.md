# WorkstreamEvents

This is a collection of many Shadow Activity events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[WorkstreamEvent]**](WorkstreamEvent) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an activity id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_events import WorkstreamEvents

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamEvents from a JSON string
workstream_events_instance = WorkstreamEvents.from_json(json)
# print the JSON string representation of the object
print(WorkstreamEvents.to_json())

# convert the object into a dict
workstream_events_dict = workstream_events_instance.to_dict()
# create an instance of WorkstreamEvents from a dict
workstream_events_form_dict = workstream_events.from_dict(workstream_events_dict)
```


