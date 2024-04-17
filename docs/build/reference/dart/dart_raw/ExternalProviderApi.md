---
title: core_openapi.api.ExternalProviderApi | Dart SDK
---

# core_openapi.api.ExternalProviderApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi.md#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi.md#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi.md#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProviderApiKey externalProviderApiKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey.md)|  | [optional] 

### Return type

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **externalProviderApiKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProviderApiKey externalProviderApiKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey.md)|  | [optional] 

### Return type

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **externalProviderApiKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey.md)|  | [optional] 

### Return type

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

