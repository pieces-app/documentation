---
title: Analyses API | Kotlin SDK
---

# Analyses API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysesSnapshot**](#analysessnapshot) | **GET** /analyses | Your GET endpoint


## **analysesSnapshot** {#analysessnapshot}
> Analyses analysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your analyses, that are all attached to formats. An analysis can optionally have an codeAnalysis or an optional imageAnalysis.

### Example {#analysessnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AnalysesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Analyses = apiInstance.analysesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnalysesApi#analysesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnalysesApi#analysesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#analysessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#analysessnapshot-return-type}

[**Analyses**](../models/Analyses)

### Authorization {#analysessnapshot-authorization}

No authorization required

### HTTP request headers {#analysessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

