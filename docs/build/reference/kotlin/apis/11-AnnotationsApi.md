# Annotations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**annotationsCreateNewAnnotation**](#annotationscreatenewannotation) | **POST** /annotations/create
[**annotationsDeleteSpecificAnnotation**](#annotationsdeletespecificannotation) | **POST** /annotations/\{annotation\}/delete
[**annotationsSnapshot**](#annotationssnapshot) | **GET** /annotations


<a id="annotationsCreateNewAnnotation"></a>
## **annotationsCreateNewAnnotation** {#annotationscreatenewannotation}
> Annotation annotationsCreateNewAnnotation(seededAnnotation)

/annotations/create [POST]

This will create an annotation.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AnnotationsApi()
val seededAnnotation : SeededAnnotation =  // SeededAnnotation | 
try {
    val result : Annotation = apiInstance.annotationsCreateNewAnnotation(seededAnnotation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnnotationsApi#annotationsCreateNewAnnotation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationsApi#annotationsCreateNewAnnotation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAnnotation** | [**SeededAnnotation**](../models/SeededAnnotation)|  | [optional]

### Return type

[**Annotation**](../models/Annotation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="annotationsDeleteSpecificAnnotation"></a>
## **annotationsDeleteSpecificAnnotation** {#annotationsdeletespecificannotation}
> annotationsDeleteSpecificAnnotation(`annotation`)

/annotations/\{annotation\}/delete [POST]

this will delete a specific annotation

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AnnotationsApi()
val `annotation` : kotlin.String = `annotation`_example // kotlin.String | This is a specific annotation uuid.
try {
    apiInstance.annotationsDeleteSpecificAnnotation(`annotation`)
} catch (e: ClientException) {
    println("4xx response calling AnnotationsApi#annotationsDeleteSpecificAnnotation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationsApi#annotationsDeleteSpecificAnnotation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="annotationsSnapshot"></a>
## **annotationsSnapshot** {#annotationssnapshot}
> Annotations annotationsSnapshot(annotationTypeFilter)

/annotations [GET]

This will get a snapshot of all the annotations.  This will take an optional filter as a query param.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AnnotationsApi()
val annotationTypeFilter : kotlin.String = annotationTypeFilter_example // kotlin.String | This is an AnnotationTypeEnum as a optional filter.
try {
    val result : Annotations = apiInstance.annotationsSnapshot(annotationTypeFilter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnnotationsApi#annotationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnnotationsApi#annotationsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotationTypeFilter** | **kotlin.String**| This is an AnnotationTypeEnum as a optional filter. | [optional] [enum: DESCRIPTION, COMMENT, COMMENTATION, DOCUMENTATION, SUMMARIZATION, SUMMARY, EXPLANATION, GIT_COMMIT]

### Return type

[**Annotations**](../models/Annotations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

