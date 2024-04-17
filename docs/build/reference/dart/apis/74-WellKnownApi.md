---
title: WellKnown API | Dart SDK
---

# WellKnown API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWellKnownHealth**](WellKnownApi#getwellknownhealth) | **GET** /.well-known/health | /.well-known/health [GET]
[**getWellKnownVersion**](WellKnownApi#getwellknownversion) | **GET** /.well-known/version | /.well-known/version [Get]


## **getWellKnownHealth** {#getwellknownhealth}
> String getWellKnownHealth()

/.well-known/health [GET]

Retrieves the health status of the server.

### Example {#getwellknownhealth-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WellKnownApi();

try {
    final result = api_instance.getWellKnownHealth();
    print(result);
} catch (e) {
    print('Exception when calling WellKnownApi->getWellKnownHealth: $e\n');
}
```

### Parameters {#getwellknownhealth-parameters}
This endpoint does not need any parameter.

### Return type {#getwellknownhealth-return-type}

**String**

### Authorization {#getwellknownhealth-authorization}

No authorization required

### HTTP request headers {#getwellknownhealth-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **getWellKnownVersion** {#getwellknownversion}
> String getWellKnownVersion()

/.well-known/version [Get]

Retrieves the version of the server. It returns a string representing the current version.

### Example {#getwellknownversion-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WellKnownApi();

try {
    final result = api_instance.getWellKnownVersion();
    print(result);
} catch (e) {
    print('Exception when calling WellKnownApi->getWellKnownVersion: $e\n');
}
```

### Parameters {#getwellknownversion-parameters}
This endpoint does not need any parameter.

### Return type {#getwellknownversion-return-type}

**String**

### Authorization {#getwellknownversion-authorization}

No authorization required

### HTTP request headers {#getwellknownversion-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

