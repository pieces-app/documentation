# QGPTQuestionInput Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 
**query** | **String** | This is the user asked question. | 
**application** | **String** | optional application id | [optional] 
**model** | **String** | optional model id | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 




