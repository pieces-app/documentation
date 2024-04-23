---
title: Application API | Dart SDK
---

# Application API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationUpdate**](ApplicationApi#applicationupdate) | **POST** /application/update | /application/update [GET]


## **applicationUpdate** {#applicationupdate}
> Application applicationUpdate(application)

/application/update [GET]

This is an endpoint for updating an application.

### Example {#applicationupdate-example}
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

### Parameters {#applicationupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](../models/Application) |  | [optional] 

### Return type {#applicationupdate-return-type}

[**Application**](../models/Application)

### Authorization {#applicationupdate-authorization}

No authorization required

### HTTP request headers {#applicationupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

