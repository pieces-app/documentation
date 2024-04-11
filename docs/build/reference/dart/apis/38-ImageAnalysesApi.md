# ImageAnalyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageAnalysesSnapshot**](ImageAnalysesApi#imageanalysessnapshot) | **GET** /image_analyses | Your GET endpoint


## **imageAnalysesSnapshot** {#imageanalysessnapshot}
> ImageAnalyses imageAnalysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an image analysis.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ImageAnalysesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.imageAnalysesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling ImageAnalysesApi->imageAnalysesSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**ImageAnalyses**](../models/ImageAnalyses)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



