---
title: WorkstreamSummary | TypeScript SDK
---


# WorkstreamSummary

This is representation or a summarized version of the highly relevant WorkstreamEvent events from a given time period, 1 day, 1 week, 1 month, dependinng on your given flow.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents)
**name** | **string**
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**ranges** | [**FlattenedRanges**](FlattenedRanges)
**model** | [**Model**](Model)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**anchors** | [**FlattenedAnchors**](FlattenedAnchors)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**persons** | [**FlattenedPersons**](FlattenedPersons)
**applications** | [**Applications**](Applications)


