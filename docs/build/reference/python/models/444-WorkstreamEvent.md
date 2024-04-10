# WorkstreamEvent

This is a Shadow Activity event:  This is used to for 2 collections the internal Shadow Activity collection and the Shadow Activity Collection.  The Internal Shadow Activity will me just a massive growing and shrinkling persisted list activity event that will endup getting rolled up into Workstream summaries. When we roll up the internalWorkstreamEvent events we will do a ton of filtering and only take the highly relevant events and turn them into WorkstreamEvent (these will be used to create a reference to the workstream summary, so we can know what event were used to generate the summary and vise versa).  A Shadow Activity model is a collection of a ton of small interactions with the plugins (copy/paste/file open/file close/tab changed/...etc events) that will also enable use to know what materials are being used to funnel them into our engine to show highly relevant data according to your given flow.

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
from pieces_os_client.models.workstream_event import WorkstreamEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamEvent from a JSON string
workstream_event_instance = WorkstreamEvent.from_json(json)
# print the JSON string representation of the object
print(WorkstreamEvent.to_json())

# convert the object into a dict
workstream_event_dict = workstream_event_instance.to_dict()
# create an instance of WorkstreamEvent from a dict
workstream_event_form_dict = workstream_event.from_dict(workstream_event_dict)
```


