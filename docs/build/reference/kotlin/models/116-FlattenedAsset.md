---
title: FlattenedAsset | Kotlin SDK
---


# FlattenedAsset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**creator** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**formats** | [**FlattenedFormats**](FlattenedFormats) |  | 
**preview** | [**FlattenedPreview**](FlattenedPreview) |  | 
**original** | **kotlin.String** | An identifier of the format that is a reference to the original. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**name** | **kotlin.String** |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**shares** | [**FlattenedShares**](FlattenedShares) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  |  [optional]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**tags** | [**FlattenedTags**](FlattenedTags) |  |  [optional]
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives) |  |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  |  [optional]
**curated** | **kotlin.Boolean** | This is an optional boolean that will flag that this asset came from a currated collection. |  [optional]
**discovered** | **kotlin.Boolean** |  |  [optional]
**activities** | [**FlattenedActivities**](FlattenedActivities) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**pseudo** | **kotlin.Boolean** |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  |  [optional]
**hints** | [**FlattenedHints**](FlattenedHints) |  |  [optional]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  |  [optional]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this asset was generated as a &#39;demo&#39; snippet |  [optional]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  |  [optional]



