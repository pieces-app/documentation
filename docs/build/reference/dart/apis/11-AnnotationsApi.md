# Annotations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**annotationsCreateNewAnnotation**](AnnotationsApi#annotationscreatenewannotation) | **POST** /annotations/create
[**annotationsDeleteSpecificAnnotation**](AnnotationsApi#annotationsdeletespecificannotation) | **POST** /annotations/\{annotation\}/delete
[**annotationsSnapshot**](AnnotationsApi#annotationssnapshot) | **GET** /annotations


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
 **seededAnnotation** | [**SeededAnnotation**](../models/SeededAnnotation)|  | [optional] 

### Return type

[**Annotation**](../models/Annotation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **annotationsDeleteSpecificAnnotation** {#annotationsdeletespecificannotation}
> annotationsDeleteSpecificAnnotation(annotation)

/annotations/\{annotation\}/delete [POST]

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
 - **Accept**: application/json



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

[**Annotations**](../models/Annotations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



