---
title: core_openapi.api.CodeAnalysesApi | Dart SDK
---

# core_openapi.api.CodeAnalysesApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeAnalysesSnapshot**](CodeAnalysesApi.md#codeanalysessnapshot) | **GET** /code_analyses | Your GET endpoint


## **codeAnalysesSnapshot** {#codeanalysessnapshot}
> CodeAnalyses codeAnalysesSnapshot()

Your GET endpoint

This will get a snapshot of all of your code analyses, a code analysis is attached to an analysis.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = CodeAnalysesApi();

try {
    final result = api_instance.codeAnalysesSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling CodeAnalysesApi->codeAnalysesSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CodeAnalyses**](CodeAnalyses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

