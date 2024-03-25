
# Conversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages.md) |  | 
**type** | [**ConversationTypeEnum**](ConversationTypeEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**name** | **kotlin.String** | This is a name that is customized. |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**application** | [**Application**](Application.md) |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel.md) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  |  [optional]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors.md) |  |  [optional]
**grounding** | [**ConversationGrounding**](ConversationGrounding.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline.md) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this conversation was generated as a &#39;demo&#39; conversation |  [optional]



