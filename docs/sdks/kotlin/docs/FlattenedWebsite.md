
# FlattenedWebsite

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | this is aspecific uuid that represents | 
**name** | **kotlin.String** | A customizable name. | 
**url** | **kotlin.String** | The true url or the website. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**mechanisms** | [**kotlin.collections.Map&lt;kotlin.String, MechanismEnum&gt;**](MechanismEnum.md) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**persons** | [**FlattenedPersons**](FlattenedPersons.md) |  |  [optional]
**conversations** | [**FlattenedConversations**](FlattenedConversations.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]



