---
title: Piece API | Kotlin SDK
---

# Piece API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**htmlShare**](#htmlshare) | **GET** / | / [GET]


## **htmlShare** {#htmlshare}
> kotlin.String htmlShare(p)

/ [GET]

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example {#htmlshare-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Piece API()
val p : kotlin.String = p_example // kotlin.String | this is the a query param, that a shortened version of the share.
try {
    val result : kotlin.String = apiInstance.htmlShare(p)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Piece API#htmlShare")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Piece API#htmlShare")
    e.printStackTrace()
}
```

### Parameters {#htmlshare-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p** | **kotlin.String**| this is the a query param, that a shortened version of the share. |

### Return type {#htmlshare-return-type}

**kotlin.String**

### Authorization {#htmlshare-authorization}

No authorization required

### HTTP request headers {#htmlshare-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

