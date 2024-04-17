---
title: core_openapi.api.OCRAnalysesApi | Dart SDK
---

# core_openapi.api.OCRAnalysesApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocrAnalysesSnapshot**](OCRAnalysesApi.md#ocranalysessnapshot) | **GET** /ocr_analyses | Your GET endpoint


## **ocrAnalysesSnapshot** {#ocranalysessnapshot}
> OCRAnalyses ocrAnalysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your ocr analyses, an ocr analysis is attached to an image analysis.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OCRAnalysesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.ocrAnalysesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling OCRAnalysesApi->ocrAnalysesSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**OCRAnalyses**](OCRAnalyses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

