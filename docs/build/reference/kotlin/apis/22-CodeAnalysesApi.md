# CodeAnalyses API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**codeAnalysesSnapshot**](#codeanalysessnapshot) | **GET** /code_analyses


<a id="codeAnalysesSnapshot"></a>
## **codeAnalysesSnapshot** {#codeanalysessnapshot}
> CodeAnalyses codeAnalysesSnapshot()

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters
This endpoint does not need any parameters.

### Return type

[**CodeAnalyses**](../models/CodeAnalyses)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

