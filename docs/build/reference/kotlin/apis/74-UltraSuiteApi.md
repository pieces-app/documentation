# UltraSuite API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**assetsCreateUltraSuiteAsset**](#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create


<a id="assetsCreateUltraSuiteAsset"></a>
## **assetsCreateUltraSuiteAsset** {#assetscreateultrasuiteasset}
> Asset assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)

/ultra_suite/assets/create [POST]

This Endpoint will create an Asset that is sent from UltraSuite.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

val apiInstance = UltraSuiteApi()
val seededUltraSuiteAsset : SeededUltraSuiteAsset =  // SeededUltraSuiteAsset | 
try {
    val result : Asset = apiInstance.assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UltraSuiteApi#assetsCreateUltraSuiteAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UltraSuiteApi#assetsCreateUltraSuiteAsset")
    e.printStackTrace()
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

