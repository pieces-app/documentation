---
title: Auth0 API | Kotlin SDK
---

# Auth0 API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth0Logout**](#auth0logout) | **GET** /v2/logout | https://auth.pieces.services/v2/logout [GET]
[**authorizeAuth0**](#authorizeauth0) | **GET** /authorize | `https://auth.pieces.services/authorize` [GET]
[**exchangeForAuth0Token**](#exchangeforauth0token) | **POST** /oauth/token | https://auth.pieces.services/oauth/token [POST]
[**getAuth0UserInfo**](#getauth0userinfo) | **GET** /userinfo | https://auth.pieces.services/userinfo [GET]


## **auth0Logout** {#auth0logout}
> kotlin.String auth0Logout(clientId, returnTo)

https://auth.pieces.services/v2/logout [GET]

https://auth0.com/docs/api/authentication#logout

### Example {#auth0logout-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = Auth0Api()
val clientId : kotlin.String = clientId_example // kotlin.String | The client ID of the Auth0 Instance
val returnTo : kotlin.String = returnTo_example // kotlin.String | The URL that the logout endpoint will return to
try {
    val result : kotlin.String = apiInstance.auth0Logout(clientId, returnTo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Auth0Api#auth0Logout")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Auth0Api#auth0Logout")
    e.printStackTrace()
}
```

### Parameters {#auth0logout-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **kotlin.String**| The client ID of the Auth0 Instance | [optional]
 **returnTo** | **kotlin.String**| The URL that the logout endpoint will return to | [optional]

### Return type {#auth0logout-return-type}

**kotlin.String**

### Authorization {#auth0logout-authorization}

No authorization required

### HTTP request headers {#auth0logout-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **authorizeAuth0** {#authorizeauth0}
> ResultedPKCE authorizeAuth0(audience, scope, responseType, clientId, codeChallengeMethod, codeChallenge, responseMode, state, redirectUri, connection, prompt)

`https://auth.pieces.services/authorize` [GET]

An endpoint that is used locally authenticate via a PKCE Flow.  Example https://auth.pieces.services /authorize?audience&#x3D;https%3A%2F%2Fpieces.us.auth0.com%2Fapi%2Fv2%2F&amp;scope&#x3D;email+profile+offline_access+openid&amp;response_type&#x3D;code&amp;client_id&#x3D;9sW4Pa1LEjX67l6VO14u0207NLYeXnu1&amp;redirect_uri&#x3D;http%3A%2F%2Flocalhost%3A3000%2Fpkce%2Fresponse%2Fcode&amp;code_challenge_method&#x3D;S256&amp;code_challenge&#x3D;yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk&amp;response_mode&#x3D;form_post&amp;state&#x3D;4bd0b9a389b4b229602346c33913b4c3c199628a90011ab3a901302ab62b3832

### Example {#authorizeauth0-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = Auth0Api()
val audience : kotlin.String = `https://pieces.us.auth0.com`/api/v2/ // kotlin.String |  The unique identifier of the target API you want to access.
val scope : kotlin.collections.List<kotlin.String> =  // kotlin.collections.List<kotlin.String> | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
val responseType : kotlin.String = code // kotlin.String | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
val clientId : kotlin.String = 9sW4Pa1LEjX67l6VO14u0207NLYeXnu1 // kotlin.String | Your application's Client ID.
val codeChallengeMethod : kotlin.String = S256 // kotlin.String | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
val codeChallenge : kotlin.String = yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk // kotlin.String | Generated challenge from the code_verifier.
val responseMode : kotlin.String = responseMode_example // kotlin.String | 
val state : kotlin.String = state_example // kotlin.String | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
val redirectUri : kotlin.String = redirectUri_example // kotlin.String | The URL to which Auth0 will redirect the browser after authorization has been granted by the user.
val connection : kotlin.String = connection_example // kotlin.String | The name of the connection configured to your application.
val prompt : kotlin.String = prompt_example // kotlin.String | To initiate a silent authentication request, use prompt=none (see Remarks for more info).
try {
    val result : ResultedPKCE = apiInstance.authorizeAuth0(audience, scope, responseType, clientId, codeChallengeMethod, codeChallenge, responseMode, state, redirectUri, connection, prompt)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Auth0Api#authorizeAuth0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Auth0Api#authorizeAuth0")
    e.printStackTrace()
}
```

### Parameters {#authorizeauth0-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience** | **kotlin.String**|  The unique identifier of the target API you want to access. |
 **scope** | **kotlin.collections.List&lt;kotlin.String&gt;**| The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token. | [enum: openid, email, profile, offline_access]
 **responseType** | **kotlin.String**| Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow. | [enum: code]
 **clientId** | **kotlin.String**| Your application&#39;s Client ID. |
 **codeChallengeMethod** | **kotlin.String**| Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | [enum: S256]
 **codeChallenge** | **kotlin.String**| Generated challenge from the code_verifier. |
 **responseMode** | **kotlin.String**|  | [enum: form_post, fragment, query, web_message]
 **state** | **kotlin.String**| An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | [optional]
 **redirectUri** | **kotlin.String**| The URL to which Auth0 will redirect the browser after authorization has been granted by the user. | [optional]
 **connection** | **kotlin.String**| The name of the connection configured to your application. | [optional]
 **prompt** | **kotlin.String**| To initiate a silent authentication request, use prompt&#x3D;none (see Remarks for more info). | [optional]

### Return type {#authorizeauth0-return-type}

[**ResultedPKCE**](../models/ResultedPKCE)

### Authorization {#authorizeauth0-authorization}

No authorization required

### HTTP request headers {#authorizeauth0-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/x-www-form-urlencoded

## **exchangeForAuth0Token** {#exchangeforauth0token}
> OAuthToken exchangeForAuth0Token(grantType, clientId, code, redirectUri, codeVerifier, schema, audience)

https://auth.pieces.services/oauth/token [POST]

An endpoint to generate a OAuth Token for an authentication flow. 

### Example {#exchangeforauth0token-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = Auth0Api()
val grantType : kotlin.String = grantType_example // kotlin.String | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token.
val clientId : kotlin.String = clientId_example // kotlin.String | Your application's Client ID.
val code : kotlin.String = code_example // kotlin.String | The Authorization Code received from the initial /authorize call.
val redirectUri : kotlin.String = redirectUri_example // kotlin.String | This is required only if it was set at the GET /authorize endpoint. The values must match.
val codeVerifier : kotlin.String = codeVerifier_example // kotlin.String | Cryptographically random key that was used to generate the code_challenge passed to /authorize.
val schema : EmbeddedModelSchema =  // EmbeddedModelSchema | 
val audience : kotlin.String = audience_example // kotlin.String | The audience domain: i.e. `https://pieces.us.auth0.com`
try {
    val result : OAuthToken = apiInstance.exchangeForAuth0Token(grantType, clientId, code, redirectUri, codeVerifier, schema, audience)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Auth0Api#exchangeForAuth0Token")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Auth0Api#exchangeForAuth0Token")
    e.printStackTrace()
}
```

### Parameters {#exchangeforauth0token-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **kotlin.String**| Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | [enum: refresh_token, authorization_code]
 **clientId** | **kotlin.String**| Your application&#39;s Client ID. |
 **code** | **kotlin.String**| The Authorization Code received from the initial /authorize call. |
 **redirectUri** | **kotlin.String**| This is required only if it was set at the GET /authorize endpoint. The values must match. |
 **codeVerifier** | **kotlin.String**| Cryptographically random key that was used to generate the code_challenge passed to /authorize. |
 **schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema)|  | [optional]
 **audience** | **kotlin.String**| The audience domain: i.e. `https://pieces.us.auth0.com` | [optional]

### Return type {#exchangeforauth0token-return-type}

[**OAuthToken**](../models/OAuthToken)

### Authorization {#exchangeforauth0token-authorization}

No authorization required

### HTTP request headers {#exchangeforauth0token-http-request-headers}

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

## **getAuth0UserInfo** {#getauth0userinfo}
> Auth0User getAuth0UserInfo()

https://auth.pieces.services/userinfo [GET]

Get the users info from the Auth0 API

### Example {#getauth0userinfo-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = Auth0Api()
try {
    val result : Auth0User = apiInstance.getAuth0UserInfo()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Auth0Api#getAuth0UserInfo")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Auth0Api#getAuth0UserInfo")
    e.printStackTrace()
}
```

### Parameters {#getauth0userinfo-parameters}
This endpoint does not need any parameter.

### Return type {#getauth0userinfo-return-type}

[**Auth0User**](../models/Auth0User)

### Authorization {#getauth0userinfo-authorization}


Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""
Configure auth0:
    ApiClient.accessToken = ""

### HTTP request headers {#getauth0userinfo-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

