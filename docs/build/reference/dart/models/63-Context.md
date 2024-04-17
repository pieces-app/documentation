# Context

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**os** | **String** | This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment's anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os | 
**application** | [**Application**](Application) |  | 
**health** | [**Health**](Health) |  | 
**user** | [**UserProfile**](UserProfile) |  | [optional] 




