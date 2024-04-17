---
title: core_openapi.api.DistributionApi | Dart SDK
---

# core_openapi.api.DistributionApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionUpdate**](DistributionApi.md#distributionupdate) | **POST** /distribution/update | /distribution/update [POST]
[**distributionsSpecificDistributionSnapshot**](DistributionApi.md#distributionsspecificdistributionsnapshot) | **GET** /distribution/{distribution} | /distribution/{distribution} [GET]


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate(distribution)

/distribution/update [POST]

This will update a specific Distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionApi();
final distribution = Distribution(); // Distribution | 

try {
    final result = api_instance.distributionUpdate(distribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionApi->distributionUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**Distribution**](Distribution.md)|  | [optional] 

### Return type

[**Distribution**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot(distribution)

/distribution/{distribution} [GET]

This will get a specific snapshot of a distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionApi();
final distribution = distribution_example; // String | This is the uuid of a specific distribution.

try {
    final result = api_instance.distributionsSpecificDistributionSnapshot(distribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionApi->distributionsSpecificDistributionSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **String**| This is the uuid of a specific distribution. | 

### Return type

[**Distribution**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

