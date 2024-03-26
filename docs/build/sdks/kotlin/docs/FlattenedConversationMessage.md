
# FlattenedConversationMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**conversation** | [**ReferencedConversation**](ReferencedConversation.md) |  | 
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**model** | [**Model**](Model.md) |  |  [optional]
**fragment** | [**FragmentFormat**](FragmentFormat.md) |  |  [optional]
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  |  [optional]



