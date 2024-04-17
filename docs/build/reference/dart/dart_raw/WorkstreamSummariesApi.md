---
title: core_openapi.api.WorkstreamSummariesApi | Dart SDK
---

# core_openapi.api.WorkstreamSummariesApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesCreateNewWorkstreamSummary**](WorkstreamSummariesApi.md#workstreamsummariescreatenewworkstreamsummary) | **POST** /workstream_summaries/create | /workstream_summaries/create [POST]
[**workstreamSummariesDeleteSpecificWorkstreamSummary**](WorkstreamSummariesApi.md#workstreamsummariesdeletespecificworkstreamsummary) | **POST** /workstream_summaries/{workstream_summary}/delete | /workstream_summaries/{workstream_summary}/delete [POST]
[**workstreamSummariesSnapshot**](WorkstreamSummariesApi.md#workstreamsummariessnapshot) | **GET** /workstream_summaries | /workstream_summaries [GET]


## **workstreamSummariesCreateNewWorkstreamSummary** {#workstreamsummariescreatenewworkstreamsummary}
> WorkstreamSummary workstreamSummariesCreateNewWorkstreamSummary(transferables, seededWorkstreamSummary)

/workstream_summaries/create [POST]

This will create a new WorkstreamSummary in the database.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummariesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededWorkstreamSummary = SeededWorkstreamSummary(); // SeededWorkstreamSummary | 

try {
    final result = api_instance.workstreamSummariesCreateNewWorkstreamSummary(transferables, seededWorkstreamSummary);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamSummariesApi->workstreamSummariesCreateNewWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededWorkstreamSummary** | [**SeededWorkstreamSummary**](SeededWorkstreamSummary.md)|  | [optional] 

### Return type

[**WorkstreamSummary**](WorkstreamSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **workstreamSummariesDeleteSpecificWorkstreamSummary** {#workstreamsummariesdeletespecificworkstreamsummary}
> workstreamSummariesDeleteSpecificWorkstreamSummary(workstreamSummary)

/workstream_summaries/{workstream_summary}/delete [POST]

This will delete a specific workstream_summary from the database!

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummariesApi();
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.workstreamSummariesDeleteSpecificWorkstreamSummary(workstreamSummary);
} catch (e) {
    print('Exception when calling WorkstreamSummariesApi->workstreamSummariesDeleteSpecificWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **workstreamSummariesSnapshot** {#workstreamsummariessnapshot}
> WorkstreamSummaries workstreamSummariesSnapshot(transferables)

/workstream_summaries [GET]

This will get a snapshot of all your workstream summaries.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamSummariesApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.workstreamSummariesSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamSummariesApi->workstreamSummariesSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**WorkstreamSummaries**](WorkstreamSummaries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

