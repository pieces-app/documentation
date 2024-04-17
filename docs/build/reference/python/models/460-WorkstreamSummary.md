---
title: WorkstreamSummary | Python SDK
---

# WorkstreamSummary

This is representation or a summarized version of the highly relevant WorkstreamEvent events from a given time period, 1 day, 1 week, 1 month, dependinng on your given flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**score** | [**Score**](Score) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents) |  | [optional] 
**name** | **str** |  | 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**ranges** | [**FlattenedRanges**](FlattenedRanges) |  | [optional] 
**model** | [**Model**](Model) |  | 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**applications** | [**Applications**](Applications) |  | [optional] 

## Example

```python
from pieces_os_client.models.workstream_summary import WorkstreamSummary

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstreamSummary from a JSON string
workstream_summary_instance = WorkstreamSummary.from_json(json)
# print the JSON string representation of the object
print(WorkstreamSummary.to_json())

# convert the object into a dict
workstream_summary_dict = workstream_summary_instance.to_dict()
# create an instance of WorkstreamSummary from a dict
workstream_summary_form_dict = workstream_summary.from_dict(workstream_summary_dict)
```


