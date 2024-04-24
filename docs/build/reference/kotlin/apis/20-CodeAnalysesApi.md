---
title: CodeAnalyses API | Kotlin SDK
---

# CodeAnalyses API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeAnalysesSnapshot**](#codeanalysessnapshot) | **GET** /code_analyses | Your GET endpoint


## **codeAnalysesSnapshot** {#codeanalysessnapshot}
> CodeAnalyses codeAnalysesSnapshot()

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example {#codeanalysessnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = CodeAnalysesApi()
try {
    val result : CodeAnalyses = apiInstance.codeAnalysesSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CodeAnalysesApi#codeAnalysesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CodeAnalysesApi#codeAnalysesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#codeanalysessnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#codeanalysessnapshot-return-type}

[**CodeAnalyses**](../models/CodeAnalyses)

### Authorization {#codeanalysessnapshot-authorization}

No authorization required

### HTTP request headers {#codeanalysessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

