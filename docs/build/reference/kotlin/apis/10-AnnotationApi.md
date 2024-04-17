# Annotation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationScoresIncrement**](#annotationscoresincrement) | **POST** /annotation/\{annotation\}/scores/increment | '/annotation/\{annotation\}/scores/increment' [POST]
[**annotationSpecificAnnotationSnapshot**](#annotationspecificannotationsnapshot) | **GET** /annotation/\{annotation\} | /annotation/\{annotation\} [GET]
[**annotationUpdate**](#annotationupdate) | **POST** /annotation/update | /annotation/update [POST]


## **annotationScoresIncrement** {#annotationscoresincrement}
> annotationScoresIncrement(`annotation`, seededScoreIncrement)

&#39;/annotation/\{annotation\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **annotationSpecificAnnotationSnapshot** {#annotationspecificannotationsnapshot}
> Annotation annotationSpecificAnnotationSnapshot(`annotation`)

/annotation/\{annotation\} [GET]

This will get a snapshot of a specific annotation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |

### Return type

[**Annotation**](../models/Annotation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **annotationUpdate** {#annotationupdate}
> Annotation annotationUpdate(`annotation`)

/annotation/update [POST]

This will update a specific annotation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | [**Annotation**](../models/Annotation)|  | [optional]

### Return type

[**Annotation**](../models/Annotation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
