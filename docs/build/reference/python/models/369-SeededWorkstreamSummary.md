---
title: SeededWorkstreamSummary | Python SDK
---

# SeededWorkstreamSummary

This is a seeded version of a WorkstreamSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents) |  | [optional] 
**name** | **str** |  | 
**annotations** | [**List[SeededAnnotation]**](SeededAnnotation) |  | [optional] 
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
from pieces_os_client.models.seeded_workstream_summary import SeededWorkstreamSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SeededWorkstreamSummary from a JSON string
seeded_workstream_summary_instance = SeededWorkstreamSummary.from_json(json)
# print the JSON string representation of the object
print(SeededWorkstreamSummary.to_json())

# convert the object into a dict
seeded_workstream_summary_dict = seeded_workstream_summary_instance.to_dict()
# create an instance of SeededWorkstreamSummary from a dict
seeded_workstream_summary_form_dict = seeded_workstream_summary.from_dict(seeded_workstream_summary_dict)
```


