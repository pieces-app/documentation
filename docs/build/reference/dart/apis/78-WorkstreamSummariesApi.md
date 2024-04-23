---
title: WorkstreamSummaries API | Dart SDK
---

# WorkstreamSummaries API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesCreateNewWorkstreamSummary**](WorkstreamSummariesApi#workstreamsummariescreatenewworkstreamsummary) | **POST** /workstream_summaries/create | /workstream_summaries/create [POST]
[**workstreamSummariesDeleteSpecificWorkstreamSummary**](WorkstreamSummariesApi#workstreamsummariesdeletespecificworkstreamsummary) | **POST** /workstream_summaries/\{workstream_summary\}/delete | /workstream_summaries/\{workstream_summary\}/delete [POST]
[**workstreamSummariesSnapshot**](WorkstreamSummariesApi#workstreamsummariessnapshot) | **GET** /workstream_summaries | /workstream_summaries [GET]


## **workstreamSummariesCreateNewWorkstreamSummary** {#workstreamsummariescreatenewworkstreamsummary}
> WorkstreamSummary workstreamSummariesCreateNewWorkstreamSummary(transferables, seededWorkstreamSummary)

/workstream_summaries/create [POST]

This will create a new WorkstreamSummary in the database.

### Example {#workstreamsummariescreatenewworkstreamsummary-example}
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

### Parameters {#workstreamsummariescreatenewworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededWorkstreamSummary** | [**SeededWorkstreamSummary**](../models/SeededWorkstreamSummary) |  | [optional] 

### Return type {#workstreamsummariescreatenewworkstreamsummary-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization {#workstreamsummariescreatenewworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreamsummariescreatenewworkstreamsummary-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **workstreamSummariesDeleteSpecificWorkstreamSummary** {#workstreamsummariesdeletespecificworkstreamsummary}
> workstreamSummariesDeleteSpecificWorkstreamSummary(workstreamSummary)

/workstream_summaries/\{workstream_summary\}/delete [POST]

This will delete a specific workstream_summary from the database!

### Example {#workstreamsummariesdeletespecificworkstreamsummary-example}
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

### Parameters {#workstreamsummariesdeletespecificworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#workstreamsummariesdeletespecificworkstreamsummary-return-type}

void (empty response body)

### Authorization {#workstreamsummariesdeletespecificworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreamsummariesdeletespecificworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **workstreamSummariesSnapshot** {#workstreamsummariessnapshot}
> WorkstreamSummaries workstreamSummariesSnapshot(transferables)

/workstream_summaries [GET]

This will get a snapshot of all your workstream summaries.

### Example {#workstreamsummariessnapshot-example}
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

### Parameters {#workstreamsummariessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#workstreamsummariessnapshot-return-type}

[**WorkstreamSummaries**](../models/WorkstreamSummaries)

### Authorization {#workstreamsummariessnapshot-authorization}

No authorization required

### HTTP request headers {#workstreamsummariessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

