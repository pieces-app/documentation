---
title: PKCE API | Dart SDK
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

/pkce/clear [POST]

This is a function to Clear a PKCE Authentication Flow

### Example {#clearpkce-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();

try {
    api_instance.clearPKCE();
} catch (e) {
    print('Exception when calling PKCEApi->clearPKCE: $e\n');
}
```

### Parameters {#clearpkce-parameters}
This endpoint does not need any parameter.

### Return type {#clearpkce-return-type}

void (empty response body)

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();
final seededPKCE = SeededPKCE(); // SeededPKCE | All of the properties that the client might want to send over to authorize a PKCE Code Flow

try {
    final result = api_instance.generateCode(seededPKCE);
    print(result);
} catch (e) {
    print('Exception when calling PKCEApi->generateCode: $e\n');
}
```

### Parameters {#generatecode-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPKCE** | [**SeededPKCE**](../models/SeededPKCE) | All of the properties that the client might want to send over to authorize a PKCE Code Flow | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();
final tokenizedPKCE = TokenizedPKCE(); // TokenizedPKCE | The needed properties to exchange a PKCE Code for an OAuth Token

try {
    final result = api_instance.generateToken(tokenizedPKCE);
    print(result);
} catch (e) {
    print('Exception when calling PKCEApi->generateToken: $e\n');
}
```

### Parameters {#generatetoken-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedPKCE** | [**TokenizedPKCE**](../models/TokenizedPKCE) | The needed properties to exchange a PKCE Code for an OAuth Token | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();

try {
    final result = api_instance.getChallenge();
    print(result);
} catch (e) {
    print('Exception when calling PKCEApi->getChallenge: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();
final code = code_example; // String | The PKCE Code to be used to access a Token.
final state = state_example; // String | Likely the state that will be returned which should match the requested state as well as the nonce
final schema = ; // EmbeddedModelSchema | 

try {
    final result = api_instance.respondWithCode(code, state, schema);
    print(result);
} catch (e) {
    print('Exception when calling PKCEApi->respondWithCode: $e\n');
}
```

### Parameters {#respondwithcode-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String** | The PKCE Code to be used to access a Token. | 
 **state** | **String** | Likely the state that will be returned which should match the requested state as well as the nonce | 
 **schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema) |  | [optional] 

### Return type {#respondwithcode-return-type}

[**PKCE**](../models/PKCE)

### Authorization {#respondwithcode-authorization}

No authorization required

### HTTP request headers {#respondwithcode-http-request-headers}

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

