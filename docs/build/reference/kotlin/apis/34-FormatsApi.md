---
title: Formats API | Kotlin SDK
---

# Formats API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatsSnapshot**](#formatssnapshot) | **GET** /formats | /formats [GET] Scoped to Formats
[**formatsSpecificFormatSnapshot**](#formatsspecificformatsnapshot) | **GET** /formats/\{format\} | /formats/\{format\} [GET] Scoped to Formats


## **formatsSnapshot** {#formatssnapshot}
> Formats formatsSnapshot(transferables)

/formats [GET] Scoped to Formats

Get all of your formats for a given user.

### Example {#formatssnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = FormatsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Formats = apiInstance.formatsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatsApi#formatsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatsApi#formatsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#formatssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#formatssnapshot-return-type}

[**Formats**](../models/Formats)

### Authorization {#formatssnapshot-authorization}

No authorization required

### HTTP request headers {#formatssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **formatsSpecificFormatSnapshot** {#formatsspecificformatsnapshot}
> Format formatsSpecificFormatSnapshot(format, transferable)

/formats/\{format\} [GET] Scoped to Formats

Request a specific format when given a id (uuid in path params)

### Example {#formatsspecificformatsnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = FormatsApi()
val format : java.util.UUID = 102ff265-fdfb-4142-8d94-4932d400199c // java.util.UUID | The id (uuid) for a specific format.
val transferable : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Format = apiInstance.formatsSpecificFormatSnapshot(format, transferable)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatsApi#formatsSpecificFormatSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatsApi#formatsSpecificFormatSnapshot")
    e.printStackTrace()
}
```

### Parameters {#formatsspecificformatsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **java.util.UUID**| The id (uuid) for a specific format. |
 **transferable** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#formatsspecificformatsnapshot-return-type}

[**Format**](../models/Format)

### Authorization {#formatsspecificformatsnapshot-authorization}

No authorization required

### HTTP request headers {#formatsspecificformatsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

