# SeededDiscoverableRelatedTag Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **String** | This is the description of the tag. | 
**asset** | **String** | this is a uuid that references an asset. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**format** | **String** | (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well. | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 




