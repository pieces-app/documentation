---
title: Application API | Kotlin SDK
---

# Application API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationUpdate**](#applicationupdate) | **POST** /application/update | /application/update [GET]


## **applicationUpdate** {#applicationupdate}
> Application applicationUpdate(application)

/application/update [GET]

This is an endpoint for updating an application.

### Example {#applicationupdate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ApplicationApi()
val application : Application =  // Application | 
try {
    val result : Application = apiInstance.applicationUpdate(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationApi#applicationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationApi#applicationUpdate")
    e.printStackTrace()
}
```

### Parameters {#applicationupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](../models/Application)|  | [optional]

### Return type {#applicationupdate-return-type}

[**Application**](../models/Application)

### Authorization {#applicationupdate-authorization}

No authorization required

### HTTP request headers {#applicationupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

