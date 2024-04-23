---
title: Website | TypeScript SDK
---


# Website

This is a specific model for related websites to an asset.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**assets** | [**FlattenedAssets**](FlattenedAssets)
**url** | **string**
**name** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum)
**interactions** | **number**
**persons** | [**FlattenedPersons**](FlattenedPersons)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**score** | [**Score**](Score)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)


