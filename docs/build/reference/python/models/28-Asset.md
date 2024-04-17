---
title: Asset | Python SDK
---

# Asset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.  Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it's child leaf nodes will prevent cycles agressively.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**name** | **str** |  | [optional] 
**creator** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**formats** | [**Formats**](Formats) |  | 
**preview** | [**Preview**](Preview) |  | 
**original** | [**ReferencedFormat**](ReferencedFormat) |  | 
**shares** | [**Shares**](Shares) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**websites** | [**Websites**](Websites) |  | [optional] 
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**tags** | [**Tags**](Tags) |  | [optional] 
**sensitives** | [**Sensitives**](Sensitives) |  | [optional] 
**persons** | [**Persons**](Persons) |  | [optional] 
**curated** | **bool** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] 
**discovered** | **bool** |  | [optional] 
**activities** | [**Activities**](Activities) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**pseudo** | **bool** | This will determine if this is a asset that the user did not explicitly save. | [optional] 
**annotations** | [**Annotations**](Annotations) |  | [optional] 
**hints** | [**Hints**](Hints) |  | [optional] 
**anchors** | [**Anchors**](Anchors) |  | [optional] 
**conversations** | [**Conversations**](Conversations) |  | [optional] 
**summaries** | [**WorkstreamSummaries**](WorkstreamSummaries) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a &#39;demo&#39; snippet | [optional] 


