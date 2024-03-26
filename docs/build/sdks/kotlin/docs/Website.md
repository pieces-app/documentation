
# Website

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**url** | **kotlin.String** | this is the actual website url. | 
**name** | **kotlin.String** | This is a name that is customized. | 
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



