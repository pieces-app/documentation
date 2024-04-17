---
title: WorkstreamEventTriggerMetadata | Python SDK
---

# WorkstreamEventTriggerMetadata

This is a free form data object that will enable additional data to be passed into SeededWorkstreamEvent, that corresponds to the event on the WorkstreamEvent.  This is a WIP object.  Need to think if we want to do something like raw:string (that is just a jsonObject) that is stringified, or if we add specific bits of data that we want. and specific fields for each event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_event_trigger_metadata import WorkstreamEventTriggerMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamEventTriggerMetadata from a JSON string
workstream_event_trigger_metadata_instance = WorkstreamEventTriggerMetadata.from_json(json)
# print the JSON string representation of the object
print(WorkstreamEventTriggerMetadata.to_json())

# convert the object into a dict
workstream_event_trigger_metadata_dict = workstream_event_trigger_metadata_instance.to_dict()
# create an instance of WorkstreamEventTriggerMetadata from a dict
workstream_event_trigger_metadata_form_dict = workstream_event_trigger_metadata.from_dict(workstream_event_trigger_metadata_dict)
```


