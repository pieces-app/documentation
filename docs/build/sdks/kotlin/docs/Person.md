
# Person

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**type** | [**PersonType**](PersonType.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum.md) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**access** | [**kotlin.collections.Map&lt;kotlin.String, PersonAccess&gt;**](PersonAccess.md) | This is a Map&lt;String, PersonAccess&gt; where the the key is an asset id. |  [optional]
**tags** | [**FlattenedTags**](FlattenedTags.md) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  |  [optional]
**models** | [**kotlin.collections.Map&lt;kotlin.String, PersonModel&gt;**](PersonModel.md) | This is a Map&lt;String, PersonModel&gt;, where the the key is an asset id. |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]



