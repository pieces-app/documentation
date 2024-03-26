# SeededConversation Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | **String** | This is a name that is customized. | [optional] 
**favorited** | **bool** |  | [optional] 
**application** | [**Application**](Application) |  | [optional] 
**annotations** | [**List\<SeededAnnotation\>**](SeededAnnotation) |  | [optional] [default to const []]
**messages** | [**List\<SeededConversationMessage\>**](SeededConversationMessage) |  | [optional] [default to const []]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**anchors** | [**List\<SeededAnchor\>**](SeededAnchor) |  | [optional] [default to const []]
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 
**demo** | **bool** | This will let us know if this conversation was generated as a 'demo' conversation | [optional] 




