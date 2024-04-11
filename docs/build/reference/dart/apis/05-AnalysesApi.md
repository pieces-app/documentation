# Analyses API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**analysesSnapshot**](AnalysesApi#analysessnapshot) | **GET** /analyses


## **analysesSnapshot** {#analysessnapshot}
> Analyses analysesSnapshot(transferables)

Your GET endpoint

This will get a snapshot of all of your analyses, that are all attached to formats. An analysis can optionally have an codeAnalysis or an optional imageAnalysis.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnalysesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.analysesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnalysesApi->analysesSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Analyses**](../models/Analyses)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



