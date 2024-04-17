---
title: FlattenedRange | TypeScript SDK
---


# FlattenedRange

This is a DAG-Safe minimal representation of a Range.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**to** | [**GroupedTimestamp**](GroupedTimestamp)
**from** | [**GroupedTimestamp**](GroupedTimestamp)
**between** | **boolean**
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)
**conversations** | [**FlattenedConversations**](FlattenedConversations)


