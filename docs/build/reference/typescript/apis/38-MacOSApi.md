# MacOS Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos** {#assetscreatenewassetfrommacos}
> Asset assetsCreateNewAssetFromMacos()

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.MacOSApi(configuration)

const body: Pieces.AssetsCreateNewAssetFromMacosRequest = {
    // SeededMacOSAsset | A SeededMacosApplication which contains the value and an Application Instance (optional)
    seededMacOSAsset: ,
};

apiInstance.assetsCreateNewAssetFromMacos(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | **SeededMacOSAsset**| A SeededMacosApplication which contains the value and an Application Instance |


### Return Model type

[**Asset**](../models/Asset)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


