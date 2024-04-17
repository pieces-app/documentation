---
title: core_openapi.model.TrackedUserProfile | Dart SDK
---

# core_openapi.model.TrackedUserProfile

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | The ID of the user that you are tracking. | 
**username** | **String** | This is a username that is attempted to be assigned but is \"Anonymous User\" by default | [default to 'unknown']
**email** | **String** | The user's email if we have it. | [optional] 
**granularity** | **String** | At what level is this user being tracked. | [default to 'ANONYMOUS']

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


