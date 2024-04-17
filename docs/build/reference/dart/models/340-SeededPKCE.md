---
title: SeededPKCE | Dart SDK
---

# SeededPKCE

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**responseType** | **String** | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow. | 
**state** | **String** | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | 
**nonce** | **String** | A local key that is held as the comparator to state, thus they should be the same. | 
**redirectUri** | **String** | http://localhost:8080/authentication/response | [optional] 
**codeChallenge** | **String** | Generated challenge from the code_verifier. | 
**codeChallengeMethod** | **String** | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | 
**domain** | **String** | https://auth.pieces.services/authorize | [optional] 
**audience** | **String** | The unique identifier of the target API you want to access. i.e. https://pieces.us.auth0.com/api/v2/ | [optional] 
**screenHint** | **String** | Provides a hint to Auth0 as to what flow should be displayed. The default behavior is to show a login page but you can override this by passing 'signup' to show the signup page instead. | [optional] 
**prompt** | **String** |  To initiate a silent authentication request, use prompt=none (see Remarks for more info). | [optional] 
**organization** | **String** |  | [optional] 
**invitation** | **String** |  | [optional] 
**scope** | **List\<String\>** | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token. | [default to const []]
**clientId** | **String** | Your application's Client ID. | 
**ADDITIONAL_PARAMETERS** | [**SeededPKCEADDITIONALPARAMETERS**](SeededPKCEADDITIONALPARAMETERS) |  | [optional] 
**responseMode** | **String** |  | [optional] 




