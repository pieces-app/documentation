# MacOS API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos**
> Asset assetsCreateNewAssetFromMacos()

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.MacOSApi(configuration);

let body:.MacOSApiAssetsCreateNewAssetFromMacosRequest = {
    // SeededMacOSAsset | A SeededMacosApplication which contains the value and an Application Instance (optional)
    seededMacOSAsset: ,
};

apiInstance.assetsCreateNewAssetFromMacos(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | **SeededMacOSAsset**| A SeededMacosApplication which contains the value and an Application Instance |


### Return type

**Asset**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




