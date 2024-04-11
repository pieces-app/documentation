# ReferencedWorkstreamEvent

This is a minimal representation of a WorkstreamEvent event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedWorkstreamEvent**](FlattenedWorkstreamEvent) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_workstream_event import ReferencedWorkstreamEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedWorkstreamEvent from a JSON string
referenced_workstream_event_instance = ReferencedWorkstreamEvent.from_json(json)
# print the JSON string representation of the object
print(ReferencedWorkstreamEvent.to_json())

# convert the object into a dict
referenced_workstream_event_dict = referenced_workstream_event_instance.to_dict()
# create an instance of ReferencedWorkstreamEvent from a dict
referenced_workstream_event_form_dict = referenced_workstream_event.from_dict(referenced_workstream_event_dict)
```


