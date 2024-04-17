---
title: MacOS API | TypeScript SDK
---

# MacOS API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos** {#assetscreatenewassetfrommacos}
> Asset assetsCreateNewAssetFromMacos()

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example {#assetscreatenewassetfrommacos-example}

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

### Parameters {#assetscreatenewassetfrommacos-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | **SeededMacOSAsset**| A SeededMacosApplication which contains the value and an Application Instance |


### Return type {#assetscreatenewassetfrommacos-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetscreatenewassetfrommacos-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#assetscreatenewassetfrommacos-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


