# UltraSuite API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateUltraSuiteAsset**](UltraSuiteApi#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create | /ultra_suite/assets/create [POST]


## **assetsCreateUltraSuiteAsset**
> Asset assetsCreateUltraSuiteAsset()

This Endpoint will create an Asset that is sent from UltraSuite.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.UltraSuiteApi(configuration);

let body:.UltraSuiteApiAssetsCreateUltraSuiteAssetRequest = {
    // SeededUltraSuiteAsset (optional)
    seededUltraSuiteAsset: ,
};

apiInstance.assetsCreateUltraSuiteAsset(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | **SeededUltraSuiteAsset**|  |


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




