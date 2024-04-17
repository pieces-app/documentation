---
title: core_openapi.api.DistributionsApi | Dart SDK
---

# core_openapi.api.DistributionsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](DistributionsApi.md#distributionscreatenewdistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](DistributionsApi.md#distributionsdeletespecificdistribution) | **POST** /distributions/{distribution}/delete | /distributions/{distribution}/delete [POST]
[**distributionsSnapshot**](DistributionsApi.md#distributionssnapshot) | **GET** /distributions | /distributions [GET]


## **distributionsCreateNewDistribution** {#distributionscreatenewdistribution}
> Distribution distributionsCreateNewDistribution(seededDistribution)

/distributions/create [POST]

This will create a new distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();
final seededDistribution = SeededDistribution(); // SeededDistribution | 

try {
    final result = api_instance.distributionsCreateNewDistribution(seededDistribution);
    print(result);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsCreateNewDistribution: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | [**SeededDistribution**](SeededDistribution.md)|  | [optional] 

### Return type

[**Distribution**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **distributionsDeleteSpecificDistribution** {#distributionsdeletespecificdistribution}
> distributionsDeleteSpecificDistribution(distribution)

/distributions/{distribution}/delete [POST]

This will delete a specific distribution.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();
final distribution = distribution_example; // String | This is the uuid of a specific distribution.

try {
    api_instance.distributionsDeleteSpecificDistribution(distribution);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsDeleteSpecificDistribution: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **String**| This is the uuid of a specific distribution. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **distributionsSnapshot** {#distributionssnapshot}
> Distributions distributionsSnapshot()

/distributions [GET]

This will get a specific snapshot of all our distributions.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DistributionsApi();

try {
    final result = api_instance.distributionsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling DistributionsApi->distributionsSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Distributions**](Distributions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

