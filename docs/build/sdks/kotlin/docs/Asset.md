
# Asset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**creator** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**formats** | [**Formats**](Formats.md) |  | 
**preview** | [**Preview**](Preview.md) |  | 
**original** | [**ReferencedFormat**](ReferencedFormat.md) |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**name** | **kotlin.String** |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**shares** | [**Shares**](Shares.md) |  |  [optional]
**websites** | [**Websites**](Websites.md) |  |  [optional]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**tags** | [**Tags**](Tags.md) |  |  [optional]
**sensitives** | [**Sensitives**](Sensitives.md) |  |  [optional]
**persons** | [**Persons**](Persons.md) |  |  [optional]
**curated** | **kotlin.Boolean** | This is an optional boolean that will flag that this asset came from a currated collection. |  [optional]
**discovered** | **kotlin.Boolean** |  |  [optional]
**activities** | [**Activities**](Activities.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**pseudo** | **kotlin.Boolean** | This will determine if this is a asset that the user did not explicitly save. |  [optional]
**annotations** | [**Annotations**](Annotations.md) |  |  [optional]
**hints** | [**Hints**](Hints.md) |  |  [optional]
**anchors** | [**Anchors**](Anchors.md) |  |  [optional]
**conversations** | [**Conversations**](Conversations.md) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this asset was generated as a &#39;demo&#39; snippet |  [optional]



