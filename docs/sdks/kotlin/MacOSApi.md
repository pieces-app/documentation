# MacOSApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAssetFromMacos**](MacOSApi#assetsCreateNewAssetFromMacos) | **POST** /macos/assets/create | /macos/assets/create [Post]


<a id="assetsCreateNewAssetFromMacos"></a>
## **assetsCreateNewAssetFromMacos**
> Asset assetsCreateNewAssetFromMacos(seededMacOSAsset)

/macos/assets/create [Post]

Exposes an endpoint for the MacOS Services plugin to send over MacOS Specific Data

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededMacOSAsset** | [**SeededMacOSAsset**](SeededMacOSAsset)| A SeededMacosApplication which contains the value and an Application Instance | [optional]

### Return type

[**Asset**](Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

