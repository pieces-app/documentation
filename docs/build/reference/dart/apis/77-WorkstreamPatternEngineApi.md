---
title: WorkstreamPatternEngine API | Dart SDK
---

# WorkstreamPatternEngine API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamPatternEngineProcessorsVisionActivate**](WorkstreamPatternEngineApi#workstreampatternengineprocessorsvisionactivate) | **POST** /workstream_pattern_engine/processors/vision/activate | /workstream_pattern_engine/processors/vision/activate [POST]
[**workstreamPatternEngineProcessorsVisionDataClear**](WorkstreamPatternEngineApi#workstreampatternengineprocessorsvisiondataclear) | **POST** /workstream_pattern_engine/processors/vision/data/clear | /workstream_pattern_engine/processors/vision/data/clear [POST]
[**workstreamPatternEngineProcessorsVisionDeactivate**](WorkstreamPatternEngineApi#workstreampatternengineprocessorsvisiondeactivate) | **POST** /workstream_pattern_engine/processors/vision/deactivate | /workstream_pattern_engine/processors/vision/deactivate [POST]
[**workstreamPatternEngineProcessorsVisionStatus**](WorkstreamPatternEngineApi#workstreampatternengineprocessorsvisionstatus) | **GET** /workstream_pattern_engine/processors/vision/status | /workstream_pattern_engine/processors/vision/status [GET]


## **workstreamPatternEngineProcessorsVisionActivate** {#workstreampatternengineprocessorsvisionactivate}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionActivate(workstreamPatternEngineStatus)

/workstream_pattern_engine/processors/vision/activate [POST]

This will activate your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamPatternEngineApi();
final workstreamPatternEngineStatus = WorkstreamPatternEngineStatus(); // WorkstreamPatternEngineStatus | 

try {
    final result = api_instance.workstreamPatternEngineProcessorsVisionActivate(workstreamPatternEngineStatus);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamPatternEngineApi->workstreamPatternEngineProcessorsVisionActivate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineStatus** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional] 

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain



## **workstreamPatternEngineProcessorsVisionDataClear** {#workstreampatternengineprocessorsvisiondataclear}
> workstreamPatternEngineProcessorsVisionDataClear(workstreamPatternEngineDataCleanupRequest)

/workstream_pattern_engine/processors/vision/data/clear [POST]

This will clear the data for the Workstream Pattern Engine, specifically for our vision data.  This boy will accept ranges of time that the user wants to remove the processing from.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamPatternEngineApi();
final workstreamPatternEngineDataCleanupRequest = WorkstreamPatternEngineDataCleanupRequest(); // WorkstreamPatternEngineDataCleanupRequest | 

try {
    api_instance.workstreamPatternEngineProcessorsVisionDataClear(workstreamPatternEngineDataCleanupRequest);
} catch (e) {
    print('Exception when calling WorkstreamPatternEngineApi->workstreamPatternEngineProcessorsVisionDataClear: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineDataCleanupRequest** | [**WorkstreamPatternEngineDataCleanupRequest**](../models/WorkstreamPatternEngineDataCleanupRequest)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain



## **workstreamPatternEngineProcessorsVisionDeactivate** {#workstreampatternengineprocessorsvisiondeactivate}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionDeactivate(workstreamPatternEngineStatus)

/workstream_pattern_engine/processors/vision/deactivate [POST]

This will deactivate your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamPatternEngineApi();
final workstreamPatternEngineStatus = WorkstreamPatternEngineStatus(); // WorkstreamPatternEngineStatus | 

try {
    final result = api_instance.workstreamPatternEngineProcessorsVisionDeactivate(workstreamPatternEngineStatus);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamPatternEngineApi->workstreamPatternEngineProcessorsVisionDeactivate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineStatus** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional] 

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain



## **workstreamPatternEngineProcessorsVisionStatus** {#workstreampatternengineprocessorsvisionstatus}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionStatus()

/workstream_pattern_engine/processors/vision/status [GET]

This will get a snapshot of the status your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamPatternEngineApi();

try {
    final result = api_instance.workstreamPatternEngineProcessorsVisionStatus();
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamPatternEngineApi->workstreamPatternEngineProcessorsVisionStatus: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain



