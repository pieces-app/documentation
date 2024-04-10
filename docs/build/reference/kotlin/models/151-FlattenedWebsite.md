
# FlattenedWebsite

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | this is aspecific uuid that represents | 
**name** | **kotlin.String** | A customizable name. | 
**url** | **kotlin.String** | The true url or the website. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  |  [optional]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  |  [optional]



