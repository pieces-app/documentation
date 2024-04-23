---
title: Annotations API | Dart SDK
---

# Annotations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationsCreateNewAnnotation**](AnnotationsApi#annotationscreatenewannotation) | **POST** /annotations/create | /annotations/create [POST]
[**annotationsDeleteSpecificAnnotation**](AnnotationsApi#annotationsdeletespecificannotation) | **POST** /annotations/\{annotation\}/delete | /annotations/\{annotation\}/delete [POST]
[**annotationsSnapshot**](AnnotationsApi#annotationssnapshot) | **GET** /annotations | /annotations [GET]


## **annotationsCreateNewAnnotation** {#annotationscreatenewannotation}
> Annotation annotationsCreateNewAnnotation(seededAnnotation)

/annotations/create [POST]

This will create an annotation.

### Example {#annotationscreatenewannotation-example}
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

### Parameters {#annotationscreatenewannotation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAnnotation** | [**SeededAnnotation**](../models/SeededAnnotation) |  | [optional] 

### Return type {#annotationscreatenewannotation-return-type}

[**Annotation**](../models/Annotation)

### Authorization {#annotationscreatenewannotation-authorization}

No authorization required

### HTTP request headers {#annotationscreatenewannotation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **annotationsDeleteSpecificAnnotation** {#annotationsdeletespecificannotation}
> annotationsDeleteSpecificAnnotation(annotation)

/annotations/\{annotation\}/delete [POST]

this will delete a specific annotation

### Example {#annotationsdeletespecificannotation-example}
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

### Parameters {#annotationsdeletespecificannotation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | **String** | This is a specific annotation uuid. | 

### Return type {#annotationsdeletespecificannotation-return-type}

void (empty response body)

### Authorization {#annotationsdeletespecificannotation-authorization}

No authorization required

### HTTP request headers {#annotationsdeletespecificannotation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **annotationsSnapshot** {#annotationssnapshot}
> Annotations annotationsSnapshot(annotationTypeFilter)

/annotations [GET]

This will get a snapshot of all the annotations.  This will take an optional filter as a query param.

### Example {#annotationssnapshot-example}
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

### Parameters {#annotationssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotationTypeFilter** | **String** | This is an AnnotationTypeEnum as a optional filter. | [optional] 

### Return type {#annotationssnapshot-return-type}

[**Annotations**](../models/Annotations)

### Authorization {#annotationssnapshot-authorization}

No authorization required

### HTTP request headers {#annotationssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

