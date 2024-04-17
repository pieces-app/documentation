---
title: TokenizedPKCE | Dart SDK
---

# TokenizedPKCE

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**grantType** | **String** | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | 
**clientId** | **String** | Your application's Client ID. | 
**code** | **String** | The Authorization Code received from the initial /authorize call. | 
**redirectUri** | **String** | This is required only if it was set at the GET /authorize endpoint. The values must match. | 
**codeVerifier** | **String** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 
**audience** | **String** | The audience domain: i.e. https://pieces.us.auth0.com | [optional] 




