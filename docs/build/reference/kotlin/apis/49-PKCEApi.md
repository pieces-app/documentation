---
title: PKCE API | Kotlin SDK
---

# PKCE API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPKCE**](#clearpkce) | **POST** /pkce/clear | /pkce/clear [POST]
[**generateCode**](#generatecode) | **POST** /pkce/code | /pkce/code [POST]
[**generateToken**](#generatetoken) | **POST** /pkce/token | /pkce/token [POST]
[**getChallenge**](#getchallenge) | **GET** /pkce/challenge | Your GET endpoint
[**respondWithCode**](#respondwithcode) | **POST** /pkce/response/code | /pkce/response/code [POST]


## **clearPKCE** {#clearpkce}
> clearPKCE()

/pkce/clear [POST]

This is a function to Clear a PKCE Authentication Flow

### Example {#clearpkce-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = PKCEApi()
try {
    apiInstance.clearPKCE()
} catch (e: ClientException) {
    println("4xx response calling PKCEApi#clearPKCE")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PKCEApi#clearPKCE")
    e.printStackTrace()
}
```

### Parameters {#clearpkce-parameters}
This endpoint does not need any parameter.

### Return type {#clearpkce-return-type}

null (empty response body)

### Authorization {#clearpkce-authorization}

No authorization required

### HTTP request headers {#clearpkce-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **generateCode** {#generatecode}
> PKCE generateCode(seededPKCE)

/pkce/code [POST]

An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0

### Example {#generatecode-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = PKCEApi()
val seededPKCE : SeededPKCE =  // SeededPKCE | All of the properties that the client might want to send over to authorize a PKCE Code Flow
try {
    val result : PKCE = apiInstance.generateCode(seededPKCE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PKCEApi#generateCode")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PKCEApi#generateCode")
    e.printStackTrace()
}
```

### Parameters {#generatecode-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPKCE** | [**SeededPKCE**](../models/SeededPKCE)| All of the properties that the client might want to send over to authorize a PKCE Code Flow | [optional]

### Return type {#generatecode-return-type}

[**PKCE**](../models/PKCE)

### Authorization {#generatecode-authorization}

No authorization required

### HTTP request headers {#generatecode-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **generateToken** {#generatetoken}
> PKCE generateToken(tokenizedPKCE)

/pkce/token [POST]

A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token

### Example {#generatetoken-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = PKCEApi()
val tokenizedPKCE : TokenizedPKCE =  // TokenizedPKCE | The needed properties to exchange a PKCE Code for an OAuth Token
try {
    val result : PKCE = apiInstance.generateToken(tokenizedPKCE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PKCEApi#generateToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PKCEApi#generateToken")
    e.printStackTrace()
}
```

### Parameters {#generatetoken-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedPKCE** | [**TokenizedPKCE**](../models/TokenizedPKCE)| The needed properties to exchange a PKCE Code for an OAuth Token | [optional]

### Return type {#generatetoken-return-type}

[**PKCE**](../models/PKCE)

### Authorization {#generatetoken-authorization}

No authorization required

### HTTP request headers {#generatetoken-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **getChallenge** {#getchallenge}
> PKCE getChallenge()

Your GET endpoint

An endpoint that returns a PKCE Challenge

### Example {#getchallenge-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = PKCEApi()
try {
    val result : PKCE = apiInstance.getChallenge()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PKCEApi#getChallenge")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PKCEApi#getChallenge")
    e.printStackTrace()
}
```

### Parameters {#getchallenge-parameters}
This endpoint does not need any parameter.

### Return type {#getchallenge-return-type}

[**PKCE**](../models/PKCE)

### Authorization {#getchallenge-authorization}

No authorization required

### HTTP request headers {#getchallenge-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **respondWithCode** {#respondwithcode}
> PKCE respondWithCode(code, state, schema)

/pkce/response/code [POST]

This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.

### Example {#respondwithcode-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = PKCEApi()
val code : kotlin.String = code_example // kotlin.String | The PKCE Code to be used to access a Token.
val state : kotlin.String = state_example // kotlin.String | Likely the state that will be returned which should match the requested state as well as the nonce
val schema : EmbeddedModelSchema =  // EmbeddedModelSchema | 
try {
    val result : PKCE = apiInstance.respondWithCode(code, state, schema)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PKCEApi#respondWithCode")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PKCEApi#respondWithCode")
    e.printStackTrace()
}
```

### Parameters {#respondwithcode-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **kotlin.String**| The PKCE Code to be used to access a Token. |
 **state** | **kotlin.String**| Likely the state that will be returned which should match the requested state as well as the nonce |
 **schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema)|  | [optional]

### Return type {#respondwithcode-return-type}

[**PKCE**](../models/PKCE)

### Authorization {#respondwithcode-authorization}

No authorization required

### HTTP request headers {#respondwithcode-http-request-headers}

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

