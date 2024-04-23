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


