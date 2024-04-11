# WellKnown API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getWellKnownHealth**](WellKnownApi#getwellknownhealth) | **GET** /.well-known/health
[**getWellKnownVersion**](WellKnownApi#getwellknownversion) | **GET** /.well-known/version


## **getWellKnownHealth** {#getwellknownhealth}
> String getWellKnownHealth()

/.well-known/health [GET]

Retrieves the health status of the server.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **getWellKnownVersion** {#getwellknownversion}
> String getWellKnownVersion()

/.well-known/version [Get]

Retrieves the version of the server. It returns a string representing the current version.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



