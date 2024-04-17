---
title: core_openapi.model.UserProfile | Dart SDK
---

# core_openapi.model.UserProfile

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**picture** | **String** | mapped from picture.URL pointing to the user's profile picture.  | [optional] [default to 'https://picsum.photos/200']
**email** | **String** |  | [optional] [default to 'user@pieces.app']
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**username** | **String** |  (unique) User's username.   | [optional] 
**id** | **String** |  | 
**name** | **String** | This is the name of the User. | [optional] 
**aesthetics** | [**Aesthetics**](Aesthetics.md) |  | 
**vanityname** | **String** |  | [optional] 
**allocation** | [**AllocationCloud**](AllocationCloud.md) |  | [optional] 
**providers** | [**ExternalProviders**](ExternalProviders.md) |  | [optional] 
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


