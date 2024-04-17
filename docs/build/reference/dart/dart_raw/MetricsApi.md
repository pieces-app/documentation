---
title: core_openapi.api.MetricsApi | Dart SDK
---

# core_openapi.api.MetricsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetricsFormats**](MetricsApi.md#getmetricsformats) | **GET** /metrics/formats | /metrics/formats [GET]
[**metricsFormatsOrdered**](MetricsApi.md#metricsformatsordered) | **GET** /metrics/formats/ordered | /metrics/formats/ordered [GET]


## **getMetricsFormats** {#getmetricsformats}
> FormatsMetrics getMetricsFormats()

/metrics/formats [GET]

This is going to get a snapshot of our FormatsMetrics

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = MetricsApi();

try {
    final result = api_instance.getMetricsFormats();
    print(result);
} catch (e) {
    print('Exception when calling MetricsApi->getMetricsFormats: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FormatsMetrics**](FormatsMetrics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **metricsFormatsOrdered** {#metricsformatsordered}
> OrderedMetrics metricsFormatsOrdered()

/metrics/formats/ordered [GET]

This will return a list of code formats in desc order from most to least formats uploaded.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = MetricsApi();

try {
    final result = api_instance.metricsFormatsOrdered();
    print(result);
} catch (e) {
    print('Exception when calling MetricsApi->metricsFormatsOrdered: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OrderedMetrics**](OrderedMetrics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

