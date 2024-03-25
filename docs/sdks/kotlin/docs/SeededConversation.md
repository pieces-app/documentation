
# SeededConversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConversationTypeEnum**](ConversationTypeEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**name** | **kotlin.String** | This is a name that is customized. |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**application** | [**Application**](Application.md) |  |  [optional]
**annotations** | [**kotlin.collections.List&lt;SeededAnnotation&gt;**](SeededAnnotation.md) |  |  [optional]
**messages** | [**kotlin.collections.List&lt;SeededConversationMessage&gt;**](SeededConversationMessage.md) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel.md) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  |  [optional]
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  |  [optional]
**anchors** | [**kotlin.collections.List&lt;SeededAnchor&gt;**](SeededAnchor.md) |  |  [optional]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline.md) |  |  [optional]
**demo** | **kotlin.Boolean** | This will let us know if this conversation was generated as a &#39;demo&#39; conversation |  [optional]



