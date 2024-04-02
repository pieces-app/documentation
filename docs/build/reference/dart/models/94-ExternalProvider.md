# ExternalProvider

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum) |  | 
**userId** | **String** | This is the user_id within the provider. | 
**accessToken** | **String** | This is optional here, but will be present for BB, Github, and google. | [optional] 
**expiresIn** | **int** | Some providers have an expiration on their access token. IE BB, Google, NOT Github. | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**profileData** | [**ExternalProviderProfileData**](ExternalProviderProfileData) |  | [optional] 
**connection** | **String** | This is an optional field that will be provided onentreprise connections. ie is type == waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool. | [optional] 
**isSocial** | **bool** |  | [optional] 




