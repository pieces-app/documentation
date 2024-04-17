
# Tag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | UUID that represents the tag. | 
**text** | **kotlin.String** | represnts the value of a tag. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**relationship** | [**Relationship**](Relationship) |  |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]



