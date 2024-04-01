# Auth0 API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth0Logout**](Auth0Api#auth0logout) | **GET** /v2/logout | https://auth.pieces.services/v2/logout [GET]
[**authorizeAuth0**](Auth0Api#authorizeauth0) | **GET** /authorize | https://auth.pieces.services/authorize [GET]
[**exchangeForAuth0Token**](Auth0Api#exchangeforauth0token) | **POST** /oauth/token | https://auth.pieces.services/oauth/token [POST]
[**getAuth0UserInfo**](Auth0Api#getauth0userinfo) | **GET** /userinfo | https://auth.pieces.services/userinfo [GET]


## **auth0Logout**
> String auth0Logout(clientId, returnTo)

https://auth.pieces.services/v2/logout [GET]

https://auth0.com/docs/api/authentication#logout

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = Auth0Api();
final clientId = clientId_example; // String | The client ID of the Auth0 Instance
final returnTo = returnTo_example; // String | The URL that the logout endpoint will return to

try {
    final result = api_instance.auth0Logout(clientId, returnTo);
    print(result);
} catch (e) {
    print('Exception when calling Auth0Api->auth0Logout: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client ID of the Auth0 Instance | [optional] 
 **returnTo** | **String**| The URL that the logout endpoint will return to | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html



## **authorizeAuth0**
> ResultedPKCE authorizeAuth0(audience, scope, responseType, clientId, codeChallengeMethod, codeChallenge, responseMode, state, redirectUri, connection, prompt)

https://auth.pieces.services/authorize [GET]

An endpoint that is used locally authenticate via a PKCE Flow.  Example https://auth.pieces.services /authorize?audience=https%3A%2F%2Fpieces.us.auth0.com%2Fapi%2Fv2%2F&scope=email+profile+offline_access+openid&response_type=code&client_id=9sW4Pa1LEjX67l6VO14u0207NLYeXnu1&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpkce%2Fresponse%2Fcode&code_challenge_method=S256&code_challenge=yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk&response_mode=form_post&state=4bd0b9a389b4b229602346c33913b4c3c199628a90011ab3a901302ab62b3832

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = Auth0Api();
final audience = https://pieces.us.auth0.com/api/v2/; // String |  The unique identifier of the target API you want to access.
final scope = []; // List\<String\>** | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
final responseType = code; // String | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
final clientId = 9sW4Pa1LEjX67l6VO14u0207NLYeXnu1; // String | Your application's Client ID.
final codeChallengeMethod = S256; // String | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
final codeChallenge = yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk; // String | Generated challenge from the code_verifier.
final responseMode = responseMode_example; // String | 
final state = state_example; // String | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
final redirectUri = redirectUri_example; // String | The URL to which Auth0 will redirect the browser after authorization has been granted by the user.
final connection = connection_example; // String | The name of the connection configured to your application.
final prompt = prompt_example; // String | To initiate a silent authentication request, use prompt=none (see Remarks for more info).

try {
    final result = api_instance.authorizeAuth0(audience, scope, responseType, clientId, codeChallengeMethod, codeChallenge, responseMode, state, redirectUri, connection, prompt);
    print(result);
} catch (e) {
    print('Exception when calling Auth0Api->authorizeAuth0: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience** | **String**|  The unique identifier of the target API you want to access. | 
 **scope** | [**List\<String\>**](../models/String)| The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token. | [default to const []]
 **responseType** | **String**| Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow. | 
 **clientId** | **String**| Your application's Client ID. | 
 **codeChallengeMethod** | **String**| Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | 
 **codeChallenge** | **String**| Generated challenge from the code_verifier. | 
 **responseMode** | **String**|  | 
 **state** | **String**| An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | [optional] 
 **redirectUri** | **String**| The URL to which Auth0 will redirect the browser after authorization has been granted by the user. | [optional] 
 **connection** | **String**| The name of the connection configured to your application. | [optional] 
 **prompt** | **String**| To initiate a silent authentication request, use prompt=none (see Remarks for more info). | [optional] 

### Return type

[**ResultedPKCE**](../models/ResultedPKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-www-form-urlencoded



## **exchangeForAuth0Token**
> OAuthToken exchangeForAuth0Token(grantType, clientId, code, redirectUri, codeVerifier, schema, audience)

https://auth.pieces.services/oauth/token [POST]

An endpoint to generate a OAuth Token for an authentication flow. 

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = Auth0Api();
final grantType = grantType_example; // String | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token.
final clientId = clientId_example; // String | Your application's Client ID.
final code = code_example; // String | The Authorization Code received from the initial /authorize call.
final redirectUri = redirectUri_example; // String | This is required only if it was set at the GET /authorize endpoint. The values must match.
final codeVerifier = codeVerifier_example; // String | Cryptographically random key that was used to generate the code_challenge passed to /authorize.
final schema = ; // EmbeddedModelSchema | 
final audience = audience_example; // String | The audience domain: i.e. https://pieces.us.auth0.com

try {
    final result = api_instance.exchangeForAuth0Token(grantType, clientId, code, redirectUri, codeVerifier, schema, audience);
    print(result);
} catch (e) {
    print('Exception when calling Auth0Api->exchangeForAuth0Token: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | 
 **clientId** | **String**| Your application's Client ID. | 
 **code** | **String**| The Authorization Code received from the initial /authorize call. | 
 **redirectUri** | **String**| This is required only if it was set at the GET /authorize endpoint. The values must match. | 
 **codeVerifier** | **String**| Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 
 **schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema)|  | [optional] 
 **audience** | **String**| The audience domain: i.e. https://pieces.us.auth0.com | [optional] 

### Return type

[**OAuthToken**](../models/OAuthToken)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json



## **getAuth0UserInfo**
> Auth0User getAuth0UserInfo()

https://auth.pieces.services/userinfo [GET]

Get the users info from the Auth0 API

### Example
```dart
import 'package:core_openapi/api.dart';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';
// TODO Configure OAuth2 access token for authorization: auth0
//defaultApiClient.getAuthentication\<OAuth\>**('auth0').accessToken = 'YOUR_ACCESS_TOKEN';

final api_instance = Auth0Api();

try {
    final result = api_instance.getAuth0UserInfo();
    print(result);
} catch (e) {
    print('Exception when calling Auth0Api->getAuth0UserInfo: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Auth0User**](../models/Auth0User)

### Authorization



### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



