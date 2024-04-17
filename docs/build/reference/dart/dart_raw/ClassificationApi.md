---
title: core_openapi.api.ClassificationApi | Dart SDK
---

# core_openapi.api.ClassificationApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertGenericClassification**](ClassificationApi.md#convertgenericclassification) | **POST** /classification/generic/convert | Convert Generic Classification


## **convertGenericClassification** {#convertgenericclassification}
> SeededFormat convertGenericClassification(seededFormat)

Convert Generic Classification

This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS 

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ClassificationApi();
final seededFormat = SeededFormat(); // SeededFormat | This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified 

try {
    final result = api_instance.convertGenericClassification(seededFormat);
    print(result);
} catch (e) {
    print('Exception when calling ClassificationApi->convertGenericClassification: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededFormat** | [**SeededFormat**](SeededFormat.md)| This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  | [optional] 

### Return type

[**SeededFormat**](SeededFormat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

