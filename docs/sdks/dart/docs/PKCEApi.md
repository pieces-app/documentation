# core_openapi.api.PKCEApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPKCE**](PKCEApi#clearpkce) | **POST** /pkce/clear | /pkce/clear [POST]
[**generateCode**](PKCEApi#generatecode) | **POST** /pkce/code | /pkce/code [POST]
[**generateToken**](PKCEApi#generatetoken) | **POST** /pkce/token | /pkce/token [POST]
[**getChallenge**](PKCEApi#getchallenge) | **GET** /pkce/challenge | Your GET endpoint
[**respondWithCode**](PKCEApi#respondwithcode) | **POST** /pkce/response/code | /pkce/response/code [POST]


# **clearPKCE**
> clearPKCE()

/pkce/clear [POST]

This is a function to Clear a PKCE Authentication Flow

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = PKCEApi();

try {
    api_instance.clearPKCE();
} catch (e) {
    print('Exception when calling PKCEApi->clearPKCE: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **generateCode**
> PKCE generateCode(seededPKCE)

/pkce/code [POST]

An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPKCE** | [**SeededPKCE**](SeededPKCE)| All of the properties that the client might want to send over to authorize a PKCE Code Flow | [optional] 

### Return type

[**PKCE**](PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **generateToken**
> PKCE generateToken(tokenizedPKCE)

/pkce/token [POST]

A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedPKCE** | [**TokenizedPKCE**](TokenizedPKCE)| The needed properties to exchange a PKCE Code for an OAuth Token | [optional] 

### Return type

[**PKCE**](PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **getChallenge**
> PKCE getChallenge()

Your GET endpoint

An endpoint that returns a PKCE Challenge

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**PKCE**](PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **respondWithCode**
> PKCE respondWithCode(code, state, schema)

/pkce/response/code [POST]

This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| The PKCE Code to be used to access a Token. | 
 **state** | **String**| Likely the state that will be returned which should match the requested state as well as the nonce | 
 **schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)|  | [optional] 

### Return type

[**PKCE**](PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

