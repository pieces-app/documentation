# UltraSuite API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateUltraSuiteAsset**](UltraSuiteApi#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create | /ultra_suite/assets/create [POST]


## **assetsCreateUltraSuiteAsset**
> Asset assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)

/ultra_suite/assets/create [POST]

This Endpoint will create an Asset that is sent from UltraSuite.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | [**SeededUltraSuiteAsset**](../models/SeededUltraSuiteAsset)|  | [optional] 

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



