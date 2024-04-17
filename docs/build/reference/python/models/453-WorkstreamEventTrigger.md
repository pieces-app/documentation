---
title: WorkstreamEventTrigger | Python SDK
---

# WorkstreamEventTrigger

This is the specific event that represent the Shadow Activity ie the copy/paste ...xyz

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**check_in** | **bool** | this is a sort of check-in event(ie when ever your application is in the forground on there is an interaction) | [optional] 
**copy** | **bool** |  | [optional] 
**paste** | **bool** |  | [optional] 
**file_open** | **bool** |  | [optional] 
**file_close** | **bool** |  | [optional] 
**tab_switch** | **bool** |  | [optional] 
**tab_close** | **bool** |  | [optional] 
**tab_open** | **bool** |  | [optional] 
**tab_enter** | **bool** |  | [optional] 
**tab_leave** | **bool** |  | [optional] 
**url_changed** | **bool** |  | [optional] 
**application_enter** | **bool** |  | [optional] 
**application_leave** | **bool** |  | [optional] 
**application_switch** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_event_trigger import WorkstreamEventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamEventTrigger from a JSON string
workstream_event_trigger_instance = WorkstreamEventTrigger.from_json(json)
# print the JSON string representation of the object
print(WorkstreamEventTrigger.to_json())

# convert the object into a dict
workstream_event_trigger_dict = workstream_event_trigger_instance.to_dict()
# create an instance of WorkstreamEventTrigger from a dict
workstream_event_trigger_form_dict = workstream_event_trigger.from_dict(workstream_event_trigger_dict)
```


