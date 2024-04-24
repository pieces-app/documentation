---
title: WellKnown API | Kotlin SDK
---

# WellKnown API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWellKnownHealth**](#getwellknownhealth) | **GET** /.well-known/health | /.well-known/health [GET]
[**getWellKnownVersion**](#getwellknownversion) | **GET** /.well-known/version | /.well-known/version [Get]


## **getWellKnownHealth** {#getwellknownhealth}
> kotlin.String getWellKnownHealth()

/.well-known/health [GET]

Retrieves the health status of the server.

### Example {#getwellknownhealth-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WellKnownApi()
try {
    val result : kotlin.String = apiInstance.getWellKnownHealth()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WellKnownApi#getWellKnownHealth")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WellKnownApi#getWellKnownHealth")
    e.printStackTrace()
}
```

### Parameters {#getwellknownhealth-parameters}
This endpoint does not need any parameter.

### Return type {#getwellknownhealth-return-type}

**kotlin.String**

### Authorization {#getwellknownhealth-authorization}

No authorization required

### HTTP request headers {#getwellknownhealth-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **getWellKnownVersion** {#getwellknownversion}
> kotlin.String getWellKnownVersion()

/.well-known/version [Get]

Retrieves the version of the server. It returns a string representing the current version.

### Example {#getwellknownversion-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WellKnownApi()
try {
    val result : kotlin.String = apiInstance.getWellKnownVersion()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WellKnownApi#getWellKnownVersion")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WellKnownApi#getWellKnownVersion")
    e.printStackTrace()
}
```

### Parameters {#getwellknownversion-parameters}
This endpoint does not need any parameter.

### Return type {#getwellknownversion-return-type}

**kotlin.String**

### Authorization {#getwellknownversion-authorization}

No authorization required

### HTTP request headers {#getwellknownversion-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

