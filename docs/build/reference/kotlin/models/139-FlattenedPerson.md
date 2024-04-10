
# FlattenedPerson

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**type** | [**PersonType**](PersonType) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**access** | [**kotlin.collections.Map&lt;kotlin.String, PersonAccess&gt;**](PersonAccess) | This is a Map&lt;String, PersonAccess&gt; where the the key is an asset id. |  [optional]
**tags** | [**FlattenedTags**](FlattenedTags) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  |  [optional]
**models** | [**kotlin.collections.Map&lt;kotlin.String, PersonModel&gt;**](PersonModel) | This is a Map&lt;String, PersonModel&gt;, where the the key is an asset id. |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  |  [optional]



