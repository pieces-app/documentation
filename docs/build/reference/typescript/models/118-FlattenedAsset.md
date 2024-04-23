---
title: FlattenedAsset | TypeScript SDK
---


# FlattenedAsset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.preview is Type String, and FlattenedFormat.original is Type String

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
**formats** | [**FlattenedFormats**](FlattenedFormats)
**preview** | [**FlattenedPreview**](FlattenedPreview)
**original** | **string**
**shares** | [**FlattenedShares**](FlattenedShares)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**interacted** | [**GroupedTimestamp**](GroupedTimestamp)
**tags** | [**FlattenedTags**](FlattenedTags)
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives)
**persons** | [**FlattenedPersons**](FlattenedPersons)
**curated** | **boolean**
**discovered** | **boolean**
**activities** | [**FlattenedActivities**](FlattenedActivities)
**score** | [**Score**](Score)
**favorited** | **boolean**
**pseudo** | **boolean**
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**hints** | [**FlattenedHints**](FlattenedHints)
**anchors** | [**FlattenedAnchors**](FlattenedAnchors)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**demo** | **boolean**
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)


