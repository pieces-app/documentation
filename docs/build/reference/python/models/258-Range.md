---
title: Range | Python SDK
---

# Range

This is an identified Range, this is ONLY needed when using plural rangedTimestamps, in order to ensure granularity(add/modify/delete)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**score** | [**Score**](Score) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**var_from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**between** | **bool** |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 


