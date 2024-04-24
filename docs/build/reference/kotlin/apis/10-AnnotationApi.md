---
title: Annotation API | Kotlin SDK
---

# Annotation API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationScoresIncrement**](#annotationscoresincrement) | **POST** /annotation/\{annotation\}/scores/increment | '/annotation/\{annotation\}/scores/increment' [POST]
[**annotationSpecificAnnotationSnapshot**](#annotationspecificannotationsnapshot) | **GET** /annotation/\{annotation\} | /annotation/\{annotation\} [GET]
[**annotationUpdate**](#annotationupdate) | **POST** /annotation/update | /annotation/update [POST]


## **annotationScoresIncrement** {#annotationscoresincrement}
> annotationScoresIncrement(`annotation`, seededScoreIncrement)

&#39;/annotation/\{annotation\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#annotationscoresincrement-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AnnotationApi()
val `annotation` : kotlin.String = `annotation`_example // kotlin.String | This is a specific annotation uuid.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.annotationScoresIncrement(`annotation`, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling AnnotationApi#annotationScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationApi#annotationScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#annotationscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#annotationscoresincrement-return-type}

null (empty response body)

### Authorization {#annotationscoresincrement-authorization}

No authorization required

### HTTP request headers {#annotationscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **annotationSpecificAnnotationSnapshot** {#annotationspecificannotationsnapshot}
> Annotation annotationSpecificAnnotationSnapshot(`annotation`)

/annotation/\{annotation\} [GET]

This will get a snapshot of a specific annotation.

### Example {#annotationspecificannotationsnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AnnotationApi()
val `annotation` : kotlin.String = `annotation`_example // kotlin.String | This is a specific annotation uuid.
try {
    val result : Annotation = apiInstance.annotationSpecificAnnotationSnapshot(`annotation`)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnnotationApi#annotationSpecificAnnotationSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationApi#annotationSpecificAnnotationSnapshot")
    e.printStackTrace()
}
```

### Parameters {#annotationspecificannotationsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |

### Return type {#annotationspecificannotationsnapshot-return-type}

[**Annotation**](../models/Annotation)

### Authorization {#annotationspecificannotationsnapshot-authorization}

No authorization required

### HTTP request headers {#annotationspecificannotationsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **annotationUpdate** {#annotationupdate}
> Annotation annotationUpdate(`annotation`)

/annotation/update [POST]

This will update a specific annotation.

### Example {#annotationupdate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AnnotationApi()
val `annotation` : Annotation =  // Annotation | 
try {
    val result : Annotation = apiInstance.annotationUpdate(`annotation`)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnnotationApi#annotationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationApi#annotationUpdate")
    e.printStackTrace()
}
```

### Parameters {#annotationupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | [**Annotation**](../models/Annotation)|  | [optional]

### Return type {#annotationupdate-return-type}

[**Annotation**](../models/Annotation)

### Authorization {#annotationupdate-authorization}

No authorization required

### HTTP request headers {#annotationupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

