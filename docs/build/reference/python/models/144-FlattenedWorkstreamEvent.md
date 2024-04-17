---
title: FlattenedWorkstreamEvent | Python SDK
---

# FlattenedWorkstreamEvent

This is a singular (DAG Safe) version of a WorkstreamEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**score** | [**Score**](Score) |  | [optional] 
**application** | [**Application**](Application) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger) |  | 
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_workstream_event import FlattenedWorkstreamEvent

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedWorkstreamEvent from a JSON string
flattened_workstream_event_instance = FlattenedWorkstreamEvent.from_json(json)
# print the JSON string representation of the object
print(FlattenedWorkstreamEvent.to_json())

# convert the object into a dict
flattened_workstream_event_dict = flattened_workstream_event_instance.to_dict()
# create an instance of FlattenedWorkstreamEvent from a dict
flattened_workstream_event_form_dict = flattened_workstream_event.from_dict(flattened_workstream_event_dict)
```


