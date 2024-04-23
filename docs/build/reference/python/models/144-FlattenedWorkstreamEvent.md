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


