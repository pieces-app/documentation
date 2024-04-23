---
title: Range | TypeScript SDK
---


# Range

This is an identified Range, this is ONLY needed when using plural rangedTimestamps, in order to ensure granularity(add/modify/delete)

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


