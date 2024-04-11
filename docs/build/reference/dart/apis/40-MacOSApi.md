# MacOS API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetscreatenewassetfrommacos) | **POST** /macos/assets/create


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
 **seededMacOSAsset** | [**SeededMacOSAsset**](../models/SeededMacOSAsset)| A SeededMacosApplication which contains the value and an Application Instance | [optional] 

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



