---
title: Asset | TypeScript SDK
---


# Asset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.  Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it\'s child leaf nodes will prevent cycles agressively.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**name** | **string**
**creator** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**formats** | [**Formats**](Formats)
**preview** | [**Preview**](Preview)
**original** | [**ReferencedFormat**](ReferencedFormat)
**shares** | [**Shares**](Shares)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**websites** | [**Websites**](Websites)
**interacted** | [**GroupedTimestamp**](GroupedTimestamp)
**tags** | [**Tags**](Tags)
**sensitives** | [**Sensitives**](Sensitives)
**persons** | [**Persons**](Persons)
**curated** | **boolean**
**discovered** | **boolean**
**activities** | [**Activities**](Activities)
**score** | [**Score**](Score)
**favorited** | **boolean**
**pseudo** | **boolean**
**annotations** | [**Annotations**](Annotations)
**hints** | [**Hints**](Hints)
**anchors** | [**Anchors**](Anchors)
**conversations** | [**Conversations**](Conversations)
**summaries** | [**WorkstreamSummaries**](WorkstreamSummaries)
**demo** | **boolean**


