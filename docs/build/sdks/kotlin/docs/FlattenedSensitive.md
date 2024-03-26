
# FlattenedSensitive

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**asset** | [**ReferencedAsset**](ReferencedAsset.md) |  | 
**text** | **kotlin.String** |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum.md) |  | 
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum.md) |  | 
**name** | **kotlin.String** |  | 
**description** | **kotlin.String** |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**metadata** | [**SensitiveMetadata**](SensitiveMetadata.md) |  |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]



