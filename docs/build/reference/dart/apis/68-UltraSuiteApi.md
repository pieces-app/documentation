---
title: UltraSuite API | Dart SDK
---

# UltraSuite API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateUltraSuiteAsset**](UltraSuiteApi#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create | /ultra_suite/assets/create [POST]


## **assetsCreateUltraSuiteAsset** {#assetscreateultrasuiteasset}
> Asset assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)

/ultra_suite/assets/create [POST]

This Endpoint will create an Asset that is sent from UltraSuite.

### Example {#assetscreateultrasuiteasset-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = UltraSuiteApi();
final seededUltraSuiteAsset = SeededUltraSuiteAsset(); // SeededUltraSuiteAsset | 

try {
    final result = api_instance.assetsCreateUltraSuiteAsset(seededUltraSuiteAsset);
    print(result);
} catch (e) {
    print('Exception when calling UltraSuiteApi->assetsCreateUltraSuiteAsset: $e\n');
}
```

### Parameters {#assetscreateultrasuiteasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | [**SeededUltraSuiteAsset**](../models/SeededUltraSuiteAsset) |  | [optional] 

### Return type {#assetscreateultrasuiteasset-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreateultrasuiteasset-authorization}

No authorization required

### HTTP request headers {#assetscreateultrasuiteasset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

