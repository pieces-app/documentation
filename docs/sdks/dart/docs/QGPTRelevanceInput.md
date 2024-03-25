# QGPTRelevanceInput Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**query** | **String** | This is the question that the user is asking. | 
**paths** | **List<String>** | This is an optional list of file || folder paths. | [optional] [default to const []]
**seeds** | [**Seeds**](Seeds) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**options** | [**QGPTRelevanceInputOptions**](QGPTRelevanceInputOptions) |  | [optional] 
**application** | **String** | optional application id | [optional] 
**model** | **String** | optional model id | [optional] 

[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


