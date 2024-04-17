# TrackedApplication

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | The ID of the tracked application. | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **String** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**automaticUnload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 




