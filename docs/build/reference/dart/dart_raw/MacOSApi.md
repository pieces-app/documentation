---
title: core_openapi.api.MacOSApi | Dart SDK
---

# core_openapi.api.MacOSApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi.md#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos** {#assetscreatenewassetfrommacos}
> Asset assetsCreateNewAssetFromMacos(seededMacOSAsset)

/macos/assets/create [Post]

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = MacOSApi();
final seededMacOSAsset = SeededMacOSAsset(); // SeededMacOSAsset | A SeededMacosApplication which contains the value and an Application Instance

try {
    final result = api_instance.assetsCreateNewAssetFromMacos(seededMacOSAsset);
    print(result);
} catch (e) {
    print('Exception when calling MacOSApi->assetsCreateNewAssetFromMacos: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | [**SeededMacOSAsset**](SeededMacOSAsset.md)| A SeededMacosApplication which contains the value and an Application Instance | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

