---
title: SeededWorkstreamEvent | Python SDK
---

# SeededWorkstreamEvent

This is a precreated version of a WorkstreamEvent event, this will be used ingested into PiecesOS and PiecesOS will do all the magic to transform this into relevant data show in the workstream feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**application** | [**Application**](Application) |  | 
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger) |  | 
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata) |  | [optional] 
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] 
**internal_identifier** | **str** | This is used to override the event identifier, if this was an event that was originally in the internal events collection. | [optional] 


