
# Annotation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum.md) |  | 
**text** | **kotlin.String** | This is the text of the annotation. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  |  [optional]
**asset** | [**ReferencedAsset**](ReferencedAsset.md) |  |  [optional]
**person** | [**ReferencedPerson**](ReferencedPerson.md) |  |  [optional]
**model** | [**ReferencedModel**](ReferencedModel.md) |  |  [optional]
**pseudo** | **kotlin.Boolean** |  |  [optional]
**favorited** | **kotlin.Boolean** |  |  [optional]
**anchor** | [**ReferencedAnchor**](ReferencedAnchor.md) |  |  [optional]
**conversation** | [**ReferencedConversation**](ReferencedConversation.md) |  |  [optional]
**score** | [**Score**](Score.md) |  |  [optional]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages.md) |  |  [optional]



