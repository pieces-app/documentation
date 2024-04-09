# UltraSuite API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**assetsCreateUltraSuiteAsset**](UltraSuiteApi#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create


## **assetsCreateUltraSuiteAsset**
> Asset assetsCreateUltraSuiteAsset()

This Endpoint will create an Asset that is sent from UltraSuite.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.UltraSuiteApi(configuration);

const body: Pieces.AssetsCreateUltraSuiteAssetRequest = {
    // SeededUltraSuiteAsset (optional)
    seededUltraSuiteAsset: ,
};

apiInstance.assetsCreateUltraSuiteAsset(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | **SeededUltraSuiteAsset**|  |


### Return type

[**Asset**](../models/Asset)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


