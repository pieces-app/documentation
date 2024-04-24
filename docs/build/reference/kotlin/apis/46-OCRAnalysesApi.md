---
title: OCRAnalyses API | Kotlin SDK
---

# OCRAnalyses API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocrAnalysesSnapshot**](#ocranalysessnapshot) | **GET** /ocr_analyses | Your GET endpoint


## **ocrAnalysesSnapshot** {#ocranalysessnapshot}
> OCRAnalyses ocrAnalysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your ocr analyses, an ocr analysis is attached to an image analysis.

### Example {#ocranalysessnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OCRAnalysesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : OCRAnalyses = apiInstance.ocrAnalysesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OCRAnalysesApi#ocrAnalysesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OCRAnalysesApi#ocrAnalysesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#ocranalysessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#ocranalysessnapshot-return-type}

[**OCRAnalyses**](../models/OCRAnalyses)

### Authorization {#ocranalysessnapshot-authorization}

No authorization required

### HTTP request headers {#ocranalysessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

