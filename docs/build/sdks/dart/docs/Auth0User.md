# Auth0User Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type                                    | Description | Notes
------------ |-----------------------------------------| ------------- | -------------
**name** | **String**                              |  User's full name. | [optional] 
**picture** | **String**                              | mapped from picture.URL pointing to the user's profile picture.  | [optional] 
**email** | **String**                              |  | [optional] 
**createdAt** | **DateTime**                |  | [optional] 
**emailVerified** | **bool**                                | Indicates whether the user has verified their email address. Mapped from email_verified -> emailVerified. | [optional] 
**familyName** | **String**                              | User's family name. | [optional] 
**givenName** | **String**                              | User's given name.  | [optional] 
**identities** | [**List\<Auth0Identity\>**](Auth0Identity) | Contains info retrieved from the identity provider with which the user originally authenticates. | [optional] [default to const []]
**nickname** | **String**                              | User's nickname.  | [optional] 
**updatedAt** | **DateTime**                |  | [optional] 
**username** | **String**                              |  (unique) User's username.   | [optional] 
**userMetadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] 
**locale** | **String**                              |  | [optional] 
**userId** | **String**                              |  | [optional] 
**lastIp** | **String**                              |  | [optional] 
**lastLogin** | **DateTime**                |  | [optional] 
**loginsCount** | **int**                                 |  | [optional] 
**blockedFor** | **List\<String\>**                      |  | [optional] [default to const []]
**guardianAuthenticators** | **List\<String\>**                      |  | [optional] [default to const []]




