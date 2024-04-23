---
title: UltraSuite API | Kotlin SDK
---

# UltraSuite API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateUltraSuiteAsset**](#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create | /ultra_suite/assets/create [POST]


## **assetsCreateUltraSuiteAsset** {#assetscreateultrasuiteasset}
> Asset assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)

/ultra_suite/assets/create [POST]

This Endpoint will create an Asset that is sent from UltraSuite.

### Example {#assetscreateultrasuiteasset-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = UltraSuite API()
val seededUltraSuiteAsset : SeededUltraSuiteAsset =  // SeededUltraSuiteAsset | 
try {
    val result : Asset = apiInstance.assetsCreateUltraSuiteAsset(seededUltraSuiteAsset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UltraSuite API#assetsCreateUltraSuiteAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UltraSuite API#assetsCreateUltraSuiteAsset")
    e.printStackTrace()
}
```

### Parameters {#assetscreateultrasuiteasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | [**SeededUltraSuiteAsset**](../models/SeededUltraSuiteAsset)|  | [optional]

### Return type {#assetscreateultrasuiteasset-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreateultrasuiteasset-authorization}

No authorization required

### HTTP request headers {#assetscreateultrasuiteasset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

