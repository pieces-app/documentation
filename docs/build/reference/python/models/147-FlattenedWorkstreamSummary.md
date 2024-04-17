---
title: FlattenedWorkstreamSummary | Python SDK
---

# FlattenedWorkstreamSummary

This is a DAG-Safe minimal representation of a workstream summary

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
from pieces_os_client.models.flattened_workstream_summary import FlattenedWorkstreamSummary

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedWorkstreamSummary from a JSON string
flattened_workstream_summary_instance = FlattenedWorkstreamSummary.from_json(json)
# print the JSON string representation of the object
print(FlattenedWorkstreamSummary.to_json())

# convert the object into a dict
flattened_workstream_summary_dict = flattened_workstream_summary_instance.to_dict()
# create an instance of FlattenedWorkstreamSummary from a dict
flattened_workstream_summary_form_dict = flattened_workstream_summary.from_dict(flattened_workstream_summary_dict)
```


