---
title: WorkstreamEvent API | Dart SDK
---

# WorkstreamEvent API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamEventAssociateWorkstreamSummary**](WorkstreamEventApi#workstreameventassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**workstreamEventDisassociateWorkstreamSummary**](WorkstreamEventApi#workstreameventdisassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**workstreamEventScoresIncrement**](WorkstreamEventApi#workstreameventscoresincrement) | **POST** /workstream_event/\{workstream_event\}/scores/increment | '/workstream_event/\{workstream_event\}/scores/increment' [POST]
[**workstreamEventUpdate**](WorkstreamEventApi#workstreameventupdate) | **POST** /workstream_event/update | /workstream_event/update [POST]
[**workstreamEventsSpecificWorkstreamEventSnapshot**](WorkstreamEventApi#workstreameventsspecificworkstreameventsnapshot) | **GET** /workstream_event/\{workstream_event\} | /workstream_event/\{workstream_event\} [GET]


## **workstreamEventAssociateWorkstreamSummary** {#workstreameventassociateworkstreamsummary}
> workstreamEventAssociateWorkstreamSummary(workstreamEvent, workstreamSummary)

/workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a workstream_event with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#workstreameventassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventApi();
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.workstreamEventAssociateWorkstreamSummary(workstreamEvent, workstreamSummary);
} catch (e) {
    print('Exception when calling WorkstreamEventApi->workstreamEventAssociateWorkstreamSummary: $e\n');
}
```

### Parameters {#workstreameventassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **String** | This is a identifier that is used to identify a specific workstream_event. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#workstreameventassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#workstreameventassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreameventassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **workstreamEventDisassociateWorkstreamSummary** {#workstreameventdisassociateworkstreamsummary}
> workstreamEventDisassociateWorkstreamSummary(workstreamEvent, workstreamSummary)

/workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a workstream_event from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#workstreameventdisassociateworkstreamsummary-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventApi();
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.workstreamEventDisassociateWorkstreamSummary(workstreamEvent, workstreamSummary);
} catch (e) {
    print('Exception when calling WorkstreamEventApi->workstreamEventDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters {#workstreameventdisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **String** | This is a identifier that is used to identify a specific workstream_event. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#workstreameventdisassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#workstreameventdisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreameventdisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **workstreamEventScoresIncrement** {#workstreameventscoresincrement}
> workstreamEventScoresIncrement(workstreamEvent, seededScoreIncrement)

'/workstream_event/\{workstream_event\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#workstreameventscoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventApi();
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.workstreamEventScoresIncrement(workstreamEvent, seededScoreIncrement);
} catch (e) {
    print('Exception when calling WorkstreamEventApi->workstreamEventScoresIncrement: $e\n');
}
```

### Parameters {#workstreameventscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **String** | This is a identifier that is used to identify a specific workstream_event. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#workstreameventscoresincrement-return-type}

void (empty response body)

### Authorization {#workstreameventscoresincrement-authorization}

No authorization required

### HTTP request headers {#workstreameventscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **workstreamEventUpdate** {#workstreameventupdate}
> WorkstreamEvent workstreamEventUpdate(transferables, workstreamEvent)

/workstream_event/update [POST]

This will update a specific workstream_event.

### Example {#workstreameventupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final workstreamEvent = WorkstreamEvent(); // WorkstreamEvent | 

try {
    final result = api_instance.workstreamEventUpdate(transferables, workstreamEvent);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamEventApi->workstreamEventUpdate: $e\n');
}
```

### Parameters {#workstreameventupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **workstreamEvent** | [**WorkstreamEvent**](../models/WorkstreamEvent) |  | [optional] 

### Return type {#workstreameventupdate-return-type}

[**WorkstreamEvent**](../models/WorkstreamEvent)

### Authorization {#workstreameventupdate-authorization}

No authorization required

### HTTP request headers {#workstreameventupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **workstreamEventsSpecificWorkstreamEventSnapshot** {#workstreameventsspecificworkstreameventsnapshot}
> WorkstreamEvent workstreamEventsSpecificWorkstreamEventSnapshot(workstreamEvent, transferables)

/workstream_event/\{workstream_event\} [GET]

This will get a snapshot of a single workstream_event.

### Example {#workstreameventsspecificworkstreameventsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventApi();
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.workstreamEventsSpecificWorkstreamEventSnapshot(workstreamEvent, transferables);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamEventApi->workstreamEventsSpecificWorkstreamEventSnapshot: $e\n');
}
```

### Parameters {#workstreameventsspecificworkstreameventsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **String** | This is a identifier that is used to identify a specific workstream_event. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#workstreameventsspecificworkstreameventsnapshot-return-type}

[**WorkstreamEvent**](../models/WorkstreamEvent)

### Authorization {#workstreameventsspecificworkstreameventsnapshot-authorization}

No authorization required

### HTTP request headers {#workstreameventsspecificworkstreameventsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

