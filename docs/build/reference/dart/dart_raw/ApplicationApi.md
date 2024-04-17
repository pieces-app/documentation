---
title: core_openapi.api.ApplicationApi | Dart SDK
---

# core_openapi.api.ApplicationApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationUpdate**](ApplicationApi.md#applicationupdate) | **POST** /application/update | /application/update [GET]


## **applicationUpdate** {#applicationupdate}
> Application applicationUpdate(application)

/application/update [GET]

This is an endpoint for updating an application.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationApi();
final application = Application(); // Application | 

try {
    final result = api_instance.applicationUpdate(application);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationApi->applicationUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](Application.md)|  | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

