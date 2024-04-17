---
title: PKCE API | TypeScript SDK
---

# PKCE API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPKCE**](PKCEApi#clearpkce) | **POST** /pkce/clear | /pkce/clear [POST]
[**generateCode**](PKCEApi#generatecode) | **POST** /pkce/code | /pkce/code [POST]
[**generateToken**](PKCEApi#generatetoken) | **POST** /pkce/token | /pkce/token [POST]
[**getChallenge**](PKCEApi#getchallenge) | **GET** /pkce/challenge | Your GET endpoint
[**respondWithCode**](PKCEApi#respondwithcode) | **POST** /pkce/response/code | /pkce/response/code [POST]


## **clearPKCE** {#clearpkce}
> clearPKCE()

This is a function to Clear a PKCE Authentication Flow

### Example {#clearpkce-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.PKCEApi(configuration)

apiInstance.clearPKCE().then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#clearpkce-parameters}

This endpoint does not need any parameters.


### Return type {#clearpkce-return-type}

void (empty response body)

### HTTP request headers {#clearpkce-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details {#clearpkce-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |

## **generateCode** {#generatecode}
> PKCE generateCode()

An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0

### Example {#generatecode-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.PKCEApi(configuration)

const body: Pieces.GenerateCodeRequest = {
// SeededPKCE | All of the properties that the client might want to send over to authorize a PKCE Code Flow (optional)
seededPKCE: ,
};

apiInstance.generateCode(body).then((data: PKCE) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#generatecode-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPKCE** | **SeededPKCE**| All of the properties that the client might want to send over to authorize a PKCE Code Flow |


### Return type {#generatecode-return-type}

[**PKCE**](../models/PKCE)

### HTTP request headers {#generatecode-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#generatecode-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **generateToken** {#generatetoken}
> PKCE generateToken()

A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token

### Example {#generatetoken-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.PKCEApi(configuration)

const body: Pieces.GenerateTokenRequest = {
// TokenizedPKCE | The needed properties to exchange a PKCE Code for an OAuth Token (optional)
tokenizedPKCE: ,
};

apiInstance.generateToken(body).then((data: PKCE) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#generatetoken-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedPKCE** | **TokenizedPKCE**| The needed properties to exchange a PKCE Code for an OAuth Token |


### Return type {#generatetoken-return-type}

[**PKCE**](../models/PKCE)

### HTTP request headers {#generatetoken-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#generatetoken-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **getChallenge** {#getchallenge}
> PKCE getChallenge()

An endpoint that returns a PKCE Challenge

### Example {#getchallenge-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.PKCEApi(configuration)

apiInstance.getChallenge().then((data: PKCE) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#getchallenge-parameters}

This endpoint does not need any parameters.


### Return type {#getchallenge-return-type}

[**PKCE**](../models/PKCE)

### HTTP request headers {#getchallenge-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#getchallenge-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **respondWithCode** {#respondwithcode}
> PKCE respondWithCode()

This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.

### Example {#respondwithcode-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.PKCEApi(configuration)

const body: Pieces.RespondWithCodeRequest = {
// string | The PKCE Code to be used to access a Token.
code: code_example,
// string | Likely the state that will be returned which should match the requested state as well as the nonce
state: state_example,
// EmbeddedModelSchema (optional)
schema: ,
};

apiInstance.respondWithCode(body).then((data: PKCE) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#respondwithcode-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The PKCE Code to be used to access a Token. | defaults to undefined
 **state** | [**string**] | Likely the state that will be returned which should match the requested state as well as the nonce | defaults to undefined
 **schema** | **EmbeddedModelSchema** |  | (optional) defaults to undefined


### Return type {#respondwithcode-return-type}

[**PKCE**](../models/PKCE)

### HTTP request headers {#respondwithcode-http-request-headers}

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json, text/html


### HTTP response details {#respondwithcode-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


