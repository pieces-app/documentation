---
title: MacOS API | Dart SDK
---

# MacOS API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos** {#assetscreatenewassetfrommacos}
> Asset assetsCreateNewAssetFromMacos(seededMacOSAsset)

/macos/assets/create [Post]

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example {#assetscreatenewassetfrommacos-example}
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

### Parameters {#assetscreatenewassetfrommacos-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | [**SeededMacOSAsset**](../models/SeededMacOSAsset) | A SeededMacosApplication which contains the value and an Application Instance | [optional] 

### Return type {#assetscreatenewassetfrommacos-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreatenewassetfrommacos-authorization}

No authorization required

### HTTP request headers {#assetscreatenewassetfrommacos-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

