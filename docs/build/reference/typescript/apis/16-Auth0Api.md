# Auth0 API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth0Logout**](Auth0Api#auth0logout) | **GET** /v2/logout | https://auth.pieces.services/v2/logout [GET]
[**authorizeAuth0**](Auth0Api#authorizeauth0) | **GET** /authorize | https://auth.pieces.services/authorize [GET]
[**exchangeForAuth0Token**](Auth0Api#exchangeforauth0token) | **POST** /oauth/token | https://auth.pieces.services/oauth/token [POST]
[**getAuth0UserInfo**](Auth0Api#getauth0userinfo) | **GET** /userinfo | https://auth.pieces.services/userinfo [GET]


## **auth0Logout**
> string auth0Logout()

https://auth0.com/docs/api/authentication#logout

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.Auth0Api(configuration);

let body:.Auth0ApiAuth0LogoutRequest = {
    // string | The client ID of the Auth0 Instance (optional)
    clientId: clientId_example,
    // string | The URL that the logout endpoint will return to (optional)
    returnTo: returnTo_example,
};

apiInstance.auth0Logout(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | The client ID of the Auth0 Instance | (optional) defaults to undefined
 **returnTo** | [**string**] | The URL that the logout endpoint will return to | (optional) defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **authorizeAuth0**
> ResultedPKCE authorizeAuth0()

An endpoint that is used locally authenticate via a PKCE Flow.  Example https://auth.pieces.services /authorize?audience=https%3A%2F%2Fpieces.us.auth0.com%2Fapi%2Fv2%2F&scope=email+profile+offline_access+openid&response_type=code&client_id=9sW4Pa1LEjX67l6VO14u0207NLYeXnu1&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpkce%2Fresponse%2Fcode&code_challenge_method=S256&code_challenge=yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk&response_mode=form_post&state=4bd0b9a389b4b229602346c33913b4c3c199628a90011ab3a901302ab62b3832

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.Auth0Api(configuration);

let body:.Auth0ApiAuthorizeAuth0Request = {
    // string |  The unique identifier of the target API you want to access.
    audience: https://pieces.us.auth0.com/api/v2/,
    // Array\<'openid' | 'email' | 'profile' | 'offline_access'\> | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
    scope: ,
    // 'code' | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
    responseType: code,
    // string | Your application\'s Client ID.
    clientId: 9sW4Pa1LEjX67l6VO14u0207NLYeXnu1,
    // 'S256' | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
    codeChallengeMethod: S256,
    // string | Generated challenge from the code_verifier.
    codeChallenge: yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk,
    // 'form_post' | 'fragment' | 'query' | 'web_message'
    responseMode: responseMode_example,
    // string | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. (optional)
    state: state_example,
    // string | The URL to which Auth0 will redirect the browser after authorization has been granted by the user. (optional)
    redirectUri: redirectUri_example,
    // string | The name of the connection configured to your application. (optional)
    connection: connection_example,
    // string | To initiate a silent authentication request, use prompt=none (see Remarks for more info). (optional)
    prompt: prompt_example,
};

apiInstance.authorizeAuth0(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience** | [**string**] |  The unique identifier of the target API you want to access. | defaults to undefined
 **scope** | **Array\<&#39;openid&#39; &#124; &#39;email&#39; &#124; &#39;profile&#39; &#124; &#39;offline_access&#39;\>** | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token. | defaults to undefined
 **responseType** | [**&#39;code&#39;**]**Array\<&#39;code&#39;\>** | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow. | defaults to undefined
 **clientId** | [**string**] | Your application\&#39;s Client ID. | defaults to undefined
 **codeChallengeMethod** | [**&#39;S256&#39;**]**Array\<&#39;S256&#39;\>** | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | defaults to undefined
 **codeChallenge** | [**string**] | Generated challenge from the code_verifier. | defaults to undefined
 **responseMode** | [**&#39;form_post&#39; | &#39;fragment&#39; | &#39;query&#39; | &#39;web_message&#39;**]**Array\<&#39;form_post&#39; &#124; &#39;fragment&#39; &#124; &#39;query&#39; &#124; &#39;web_message&#39;\>** |  | defaults to undefined
 **state** | [**string**] | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | (optional) defaults to undefined
 **redirectUri** | [**string**] | The URL to which Auth0 will redirect the browser after authorization has been granted by the user. | (optional) defaults to undefined
 **connection** | [**string**] | The name of the connection configured to your application. | (optional) defaults to undefined
 **prompt** | [**string**] | To initiate a silent authentication request, use prompt&#x3D;none (see Remarks for more info). | (optional) defaults to undefined


### Return type

**ResultedPKCE**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-www-form-urlencoded


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **exchangeForAuth0Token**
> OAuthToken exchangeForAuth0Token()

An endpoint to generate a OAuth Token for an authentication flow. 

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.Auth0Api(configuration);

let body:.Auth0ApiExchangeForAuth0TokenRequest = {
    // string | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token.
    grantType: grantType_example,
    // string | Your application\\\'s Client ID.
    clientId: clientId_example,
    // string | The Authorization Code received from the initial /authorize call.
    code: code_example,
    // string | This is required only if it was set at the GET /authorize endpoint. The values must match.
    redirectUri: redirectUri_example,
    // string | Cryptographically random key that was used to generate the code_challenge passed to /authorize.
    codeVerifier: codeVerifier_example,
    // EmbeddedModelSchema (optional)
    schema: ,
    // string | The audience domain: i.e. https://pieces.us.auth0.com (optional)
    audience: audience_example,
};

apiInstance.exchangeForAuth0Token(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**]**Array\<&#39;refresh_token&#39; &#124; &#39;authorization_code&#39;\>** | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | defaults to undefined
 **clientId** | [**string**] | Your application\\\&#39;s Client ID. | defaults to undefined
 **code** | [**string**] | The Authorization Code received from the initial /authorize call. | defaults to undefined
 **redirectUri** | [**string**] | This is required only if it was set at the GET /authorize endpoint. The values must match. | defaults to undefined
 **codeVerifier** | [**string**] | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | defaults to undefined
 **schema** | **EmbeddedModelSchema** |  | (optional) defaults to undefined
 **audience** | [**string**] | The audience domain: i.e. https://pieces.us.auth0.com | (optional) defaults to undefined


### Return type

**OAuthToken**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **getAuth0UserInfo**
> Auth0User getAuth0UserInfo()

Get the users info from the Auth0 API

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.Auth0Api(configuration);

let body:any = {};

apiInstance.getAuth0UserInfo(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Auth0User**

### Authorization

[auth0](README#auth0), [auth0](README#auth0), [auth0](README#auth0)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




