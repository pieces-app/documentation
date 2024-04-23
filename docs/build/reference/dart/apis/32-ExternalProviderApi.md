---
title: ExternalProvider API | Dart SDK
---

# ExternalProvider API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProviderApiKey externalProviderApiKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeycreate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ExternalProviderApi();
final precreatedExternalProviderApiKey = PrecreatedExternalProviderApiKey(); // PrecreatedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyCreate(precreatedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyCreate: $e\n');
}
```

### Parameters {#externalproviderapikeycreate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey) |  | [optional] 

### Return type {#externalproviderapikeycreate-return-type}

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey)

### Authorization {#externalproviderapikeycreate-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeycreate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **externalProviderApiKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProviderApiKey externalProviderApiKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeydelete-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ExternalProviderApi();
final predeletedExternalProviderApiKey = PredeletedExternalProviderApiKey(); // PredeletedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyDelete(predeletedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyDelete: $e\n');
}
```

### Parameters {#externalproviderapikeydelete-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey) |  | [optional] 

### Return type {#externalproviderapikeydelete-return-type}

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey)

### Authorization {#externalproviderapikeydelete-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeydelete-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **externalProviderApiKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeyupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ExternalProviderApi();
final preupdatedExternalProviderApiKey = PreupdatedExternalProviderApiKey(); // PreupdatedExternalProviderApiKey | 

try {
    final result = api_instance.externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey);
    print(result);
} catch (e) {
    print('Exception when calling ExternalProviderApi->externalProviderApiKeyUpdate: $e\n');
}
```

### Parameters {#externalproviderapikeyupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey) |  | [optional] 

### Return type {#externalproviderapikeyupdate-return-type}

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey)

### Authorization {#externalproviderapikeyupdate-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeyupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

