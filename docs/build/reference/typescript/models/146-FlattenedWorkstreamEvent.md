---
title: FlattenedWorkstreamEvent | TypeScript SDK
---


# FlattenedWorkstreamEvent

This is a singular (DAG Safe) version of a WorkstreamEvent.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**application** | [**Application**](Application)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger)
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)


