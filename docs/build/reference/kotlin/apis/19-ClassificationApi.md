# Classification API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**convertGenericClassification**](#convertgenericclassification) | **POST** /classification/generic/convert


<a id="convertGenericClassification"></a>
## **convertGenericClassification** {#convertgenericclassification}
> SeededFormat convertGenericClassification(seededFormat)

Convert Generic Classification

This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS 

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

val apiInstance = ClassificationApi()
val seededFormat : SeededFormat =  // SeededFormat | This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified 
try {
    val result : SeededFormat = apiInstance.convertGenericClassification(seededFormat)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ClassificationApi#convertGenericClassification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ClassificationApi#convertGenericClassification")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededFormat** | [**SeededFormat**](../models/SeededFormat)| This is a seededFormat that we want to turn into a specific rendering SeededFormat.  Ensure that you pass through a fragment.string.raw  Ensure that you pass through a classification with the generic/specific/rendering all specified  | [optional] 

### Return type

[**SeededFormat**](../models/SeededFormat)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

