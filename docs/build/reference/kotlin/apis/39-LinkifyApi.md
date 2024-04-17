---
title: Linkify API | Kotlin SDK
---

# Linkify API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkify**](#linkify) | **POST** /linkify | /linkify [POST]
[**linkifyMultiple**](#linkifymultiple) | **POST** /linkify/multiple | /linkify/multiple [POST]
[**linkifyShareRevoke**](#linkifysharerevoke) | **POST** /linkify/\{share\}/revoke | [POST} /linkify/\{share\}/revoke


## **linkify** {#linkify}
> Shares linkify(linkify)

/linkify [POST]



### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Linkify API()
val linkify : Linkify =  // Linkify | 
try {
    val result : Shares = apiInstance.linkify(linkify)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Linkify API#linkify")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Linkify API#linkify")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | [**Linkify**](../models/Linkify)|  | [optional]

### Return type

[**Shares**](../models/Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **linkifyMultiple** {#linkifymultiple}
> Shares linkifyMultiple(linkifyMultiple)

/linkify/multiple [POST]

- assumption that you have already backed up the asset&#39;s that you are sending to this endpoint.(b/c the assets are ids.)

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Linkify API()
val linkifyMultiple : LinkifyMultiple =  // LinkifyMultiple | 
try {
    val result : Shares = apiInstance.linkifyMultiple(linkifyMultiple)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Linkify API#linkifyMultiple")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Linkify API#linkifyMultiple")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkifyMultiple** | [**LinkifyMultiple**](../models/LinkifyMultiple)|  | [optional]

### Return type

[**Shares**](../models/Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **linkifyShareRevoke** {#linkifysharerevoke}
> kotlin.String linkifyShareRevoke(share)

[POST} /linkify/\{share\}/revoke

This will revoke a link.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Linkify API()
val share : kotlin.String = share_example // kotlin.String | 
try {
    val result : kotlin.String = apiInstance.linkifyShareRevoke(share)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Linkify API#linkifyShareRevoke")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Linkify API#linkifyShareRevoke")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **kotlin.String**|  |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

