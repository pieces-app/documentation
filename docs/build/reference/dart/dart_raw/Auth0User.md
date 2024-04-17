---
title: core_openapi.model.Auth0User | Dart SDK
---

# core_openapi.model.Auth0User

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  User's full name. | [optional] 
**picture** | **String** | mapped from picture.URL pointing to the user's profile picture.  | [optional] 
**email** | **String** |  | [optional] 
**createdAt** | [**DateTime**](DateTime.md) |  | [optional] 
**emailVerified** | **bool** | Indicates whether the user has verified their email address. Mapped from email_verified -> emailVerified. | [optional] 
**familyName** | **String** | User's family name. | [optional] 
**givenName** | **String** | User's given name.  | [optional] 
**identities** | [**List<Auth0Identity>**](Auth0Identity.md) | Contains info retrieved from the identity provider with which the user originally authenticates. | [optional] [default to const []]
**nickname** | **String** | User's nickname.  | [optional] 
**updatedAt** | [**DateTime**](DateTime.md) |  | [optional] 
**username** | **String** |  (unique) User's username.   | [optional] 
**userMetadata** | [**Auth0UserMetadata**](Auth0UserMetadata.md) |  | [optional] 
**locale** | **String** |  | [optional] 
**userId** | **String** |  | [optional] 
**lastIp** | **String** |  | [optional] 
**lastLogin** | [**DateTime**](DateTime.md) |  | [optional] 
**loginsCount** | **int** |  | [optional] 
**blockedFor** | **List<String>** |  | [optional] [default to const []]
**guardianAuthenticators** | **List<String>** |  | [optional] [default to const []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


