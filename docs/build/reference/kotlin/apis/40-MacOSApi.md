---
title: MacOS API | Kotlin SDK
---

# MacOS API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](#assetscreatenewassetfrommacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


## **assetsCreateNewAssetFromMacos** {#assetscreatenewassetfrommacos}
> Asset assetsCreateNewAssetFromMacos(seededMacOSAsset)

/macos/assets/create [Post]

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example {#assetscreatenewassetfrommacos-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = MacOSApi()
val seededMacOSAsset : SeededMacOSAsset =  // SeededMacOSAsset | A SeededMacosApplication which contains the value and an Application Instance
try {
    val result : Asset = apiInstance.assetsCreateNewAssetFromMacos(seededMacOSAsset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MacOSApi#assetsCreateNewAssetFromMacos")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MacOSApi#assetsCreateNewAssetFromMacos")
    e.printStackTrace()
}
```

### Parameters {#assetscreatenewassetfrommacos-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | [**SeededMacOSAsset**](../models/SeededMacOSAsset)| A SeededMacosApplication which contains the value and an Application Instance | [optional]

### Return type {#assetscreatenewassetfrommacos-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreatenewassetfrommacos-authorization}

No authorization required

### HTTP request headers {#assetscreatenewassetfrommacos-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

