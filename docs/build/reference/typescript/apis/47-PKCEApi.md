# PKCE API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPKCE**](PKCEApi#clearpkce) | **POST** /pkce/clear | /pkce/clear [POST]
[**generateCode**](PKCEApi#generatecode) | **POST** /pkce/code | /pkce/code [POST]
[**generateToken**](PKCEApi#generatetoken) | **POST** /pkce/token | /pkce/token [POST]
[**getChallenge**](PKCEApi#getchallenge) | **GET** /pkce/challenge | Your GET endpoint
[**respondWithCode**](PKCEApi#respondwithcode) | **POST** /pkce/response/code | /pkce/response/code [POST]


## **clearPKCE**
> clearPKCE()

This is a function to Clear a PKCE Authentication Flow

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PKCEApi(configuration);

apiInstance.clearPKCE().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |



## **generateCode**
> PKCE generateCode()

An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PKCEApi(configuration);

const body: Pieces.GenerateCodeRequest = {
    // SeededPKCE | All of the properties that the client might want to send over to authorize a PKCE Code Flow (optional)
    seededPKCE: ,
};

apiInstance.generateCode(body).then((data: PKCE) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPKCE** | **SeededPKCE**| All of the properties that the client might want to send over to authorize a PKCE Code Flow |


### Return type

**PKCE**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **generateToken**
> PKCE generateToken()

A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PKCEApi(configuration);

const body: Pieces.GenerateTokenRequest = {
    // TokenizedPKCE | The needed properties to exchange a PKCE Code for an OAuth Token (optional)
    tokenizedPKCE: ,
};

apiInstance.generateToken(body).then((data: PKCE) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedPKCE** | **TokenizedPKCE**| The needed properties to exchange a PKCE Code for an OAuth Token |


### Return type

**PKCE**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **getChallenge**
> PKCE getChallenge()

An endpoint that returns a PKCE Challenge

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PKCEApi(configuration);

apiInstance.getChallenge().then((data: PKCE) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**PKCE**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **respondWithCode**
> PKCE respondWithCode()

This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PKCEApi(configuration);

const body: Pieces.RespondWithCodeRequest = {
    // string | The PKCE Code to be used to access a Token.
    code: code_example,
    // string | Likely the state that will be returned which should match the requested state as well as the nonce
    state: state_example,
    // EmbeddedModelSchema (optional)
    schema: ,
};

apiInstance.respondWithCode(body).then((data: PKCE) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The PKCE Code to be used to access a Token. | defaults to undefined
 **state** | [**string**] | Likely the state that will be returned which should match the requested state as well as the nonce | defaults to undefined
 **schema** | **EmbeddedModelSchema** |  | (optional) defaults to undefined


### Return type

**PKCE**

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




