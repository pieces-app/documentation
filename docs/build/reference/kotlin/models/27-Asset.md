
# Asset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**creator** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**formats** | [**Formats**](Formats) |  | 
**preview** | [**Preview**](Preview) |  | 
**original** | [**ReferencedFormat**](ReferencedFormat) |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**name** | **kotlin.String** |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**shares** | [**Shares**](Shares) |  |  [optional]
**websites** | [**Websites**](Websites) |  |  [optional]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**tags** | [**Tags**](Tags) |  |  [optional]
**sensitives** | [**Sensitives**](Sensitives) |  |  [optional]
**persons** | [**Persons**](Persons) |  |  [optional]
**curated** | **kotlin.Boolean** | This is an optional boolean that will flag that this asset came from a currated collection. |  [optional]
**discovered** | **kotlin.Boolean** |  |  [optional]
**activities** | [**Activities**](Activities) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**pseudo** | **kotlin.Boolean** | This will determine if this is a asset that the user did not explicitly save. |  [optional]
**annotations** | [**Annotations**](Annotations) |  |  [optional]
**hints** | [**Hints**](Hints) |  |  [optional]
**anchors** | [**Anchors**](Anchors) |  |  [optional]
**conversations** | [**Conversations**](Conversations) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this asset was generated as a &#39;demo&#39; snippet |  [optional]



