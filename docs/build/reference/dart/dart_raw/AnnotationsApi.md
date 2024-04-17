---
title: core_openapi.api.AnnotationsApi | Dart SDK
---

# core_openapi.api.AnnotationsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationsCreateNewAnnotation**](AnnotationsApi.md#annotationscreatenewannotation) | **POST** /annotations/create | /annotations/create [POST]
[**annotationsDeleteSpecificAnnotation**](AnnotationsApi.md#annotationsdeletespecificannotation) | **POST** /annotations/{annotation}/delete | /annotations/{annotation}/delete [POST]
[**annotationsSnapshot**](AnnotationsApi.md#annotationssnapshot) | **GET** /annotations | /annotations [GET]


## **annotationsCreateNewAnnotation** {#annotationscreatenewannotation}
> Annotation annotationsCreateNewAnnotation(seededAnnotation)

/annotations/create [POST]

This will create an annotation.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnnotationsApi();
final seededAnnotation = SeededAnnotation(); // SeededAnnotation | 

try {
    final result = api_instance.annotationsCreateNewAnnotation(seededAnnotation);
    print(result);
} catch (e) {
    print('Exception when calling AnnotationsApi->annotationsCreateNewAnnotation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAnnotation** | [**SeededAnnotation**](SeededAnnotation.md)|  | [optional] 

### Return type

[**Annotation**](Annotation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **annotationsDeleteSpecificAnnotation** {#annotationsdeletespecificannotation}
> annotationsDeleteSpecificAnnotation(annotation)

/annotations/{annotation}/delete [POST]

this will delete a specific annotation

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnnotationsApi();
final annotation = annotation_example; // String | This is a specific annotation uuid.

try {
    api_instance.annotationsDeleteSpecificAnnotation(annotation);
} catch (e) {
    print('Exception when calling AnnotationsApi->annotationsDeleteSpecificAnnotation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | **String**| This is a specific annotation uuid. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **annotationsSnapshot** {#annotationssnapshot}
> Annotations annotationsSnapshot(annotationTypeFilter)

/annotations [GET]

This will get a snapshot of all the annotations.  This will take an optional filter as a query param.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnnotationsApi();
final annotationTypeFilter = annotationTypeFilter_example; // String | This is an AnnotationTypeEnum as a optional filter.

try {
    final result = api_instance.annotationsSnapshot(annotationTypeFilter);
    print(result);
} catch (e) {
    print('Exception when calling AnnotationsApi->annotationsSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotationTypeFilter** | **String**| This is an AnnotationTypeEnum as a optional filter. | [optional] 

### Return type

[**Annotations**](Annotations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

