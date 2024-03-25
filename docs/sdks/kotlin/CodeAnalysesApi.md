# CodeAnalysesApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeAnalysesSnapshot**](CodeAnalysesApi#codeAnalysesSnapshot) | **GET** /code_analyses | Your GET endpoint


<a id="codeAnalysesSnapshot"></a>
## **codeAnalysesSnapshot**
> CodeAnalyses codeAnalysesSnapshot()

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
This endpoint does not need any parameter.

### Return type

[**CodeAnalyses**](CodeAnalyses)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

