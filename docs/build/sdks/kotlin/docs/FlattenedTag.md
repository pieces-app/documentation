
# FlattenedTag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**text** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**category** | [**TagCategoryEnum**](TagCategoryEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum.md) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**relationship** | [**Relationship**](Relationship.md) |  |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]



