---
title: core_openapi.model.ExternalProvider | Dart SDK
---

# core_openapi.model.ExternalProvider

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum.md) |  | 
**userId** | **String** | This is the user_id within the provider. | 
**accessToken** | **String** | This is optional here, but will be present for BB, Github, and google. | [optional] 
**expiresIn** | **int** | Some providers have an expiration on their access token. IE BB, Google, NOT Github. | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**profileData** | [**ExternalProviderProfileData**](ExternalProviderProfileData.md) |  | [optional] 
**connection** | **String** | This is an optional field that will be provided onentreprise connections. ie is type == waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool. | [optional] 
**isSocial** | **bool** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


