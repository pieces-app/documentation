
# FlattenedAsset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**creator** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**formats** | [**FlattenedFormats**](FlattenedFormats.md) |  | 
**preview** | [**FlattenedPreview**](FlattenedPreview.md) |  | 
**original** | **kotlin.String** | An identifier of the format that is a reference to the original. | 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**name** | **kotlin.String** |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**shares** | [**FlattenedShares**](FlattenedShares.md) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  |  [optional]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**tags** | [**FlattenedTags**](FlattenedTags.md) |  |  [optional]
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives.md) |  |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons.md) |  |  [optional]
**curated** | **kotlin.Boolean** | This is an optional boolean that will flag that this asset came from a currated collection. |  [optional]
**discovered** | **kotlin.Boolean** |  |  [optional]
**activities** | [**FlattenedActivities**](FlattenedActivities.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**pseudo** | **kotlin.Boolean** |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  |  [optional]
**hints** | [**FlattenedHints**](FlattenedHints.md) |  |  [optional]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors.md) |  |  [optional]
**conversations** | [**FlattenedConversations**](FlattenedConversations.md) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this asset was generated as a &#39;demo&#39; snippet |  [optional]



