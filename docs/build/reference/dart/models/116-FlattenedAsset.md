---
title: FlattenedAsset | Dart SDK
---

# FlattenedAsset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**name** | **String** |  | [optional] 
**creator** | **String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**formats** | [**FlattenedFormats**](FlattenedFormats) |  | 
**preview** | [**FlattenedPreview**](FlattenedPreview) |  | 
**original** | **String** | An identifier of the format that is a reference to the original. | 
**shares** | [**FlattenedShares**](FlattenedShares) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] 
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives) |  | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**curated** | **bool** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] 
**discovered** | **bool** |  | [optional] 
**activities** | [**FlattenedActivities**](FlattenedActivities) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**hints** | [**FlattenedHints**](FlattenedHints) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a 'demo' snippet | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 


