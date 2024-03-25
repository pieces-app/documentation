# ImageAnalyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageAnalysesSnapshot**](ImageAnalysesApi#imageAnalysesSnapshot) | **GET** /image_analyses | Your GET endpoint


<a id="imageAnalysesSnapshot"></a>
## **imageAnalysesSnapshot**
> ImageAnalyses imageAnalysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an image analysis.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ImageAnalysesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : ImageAnalyses = apiInstance.imageAnalysesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ImageAnalysesApi#imageAnalysesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ImageAnalysesApi#imageAnalysesSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**ImageAnalyses**](ImageAnalyses)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

