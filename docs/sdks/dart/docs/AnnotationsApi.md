# core_openapi.api.AnnotationsApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationsCreateNewAnnotation**](AnnotationsApi#annotationscreatenewannotation) | **POST** /annotations/create | /annotations/create [POST]
[**annotationsDeleteSpecificAnnotation**](AnnotationsApi#annotationsdeletespecificannotation) | **POST** /annotations/{annotation}/delete | /annotations/{annotation}/delete [POST]
[**annotationsSnapshot**](AnnotationsApi#annotationssnapshot) | **GET** /annotations | /annotations [GET]


# **annotationsCreateNewAnnotation**
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
 **seededAnnotation** | [**SeededAnnotation**](SeededAnnotation)|  | [optional] 

### Return type

[**Annotation**](Annotation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **annotationsDeleteSpecificAnnotation**
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
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **annotationsSnapshot**
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

[**Annotations**](Annotations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

