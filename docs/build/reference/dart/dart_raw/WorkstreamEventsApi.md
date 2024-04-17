---
title: core_openapi.api.WorkstreamEventsApi | Dart SDK
---

# core_openapi.api.WorkstreamEventsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamEventsCreateNewWorkstreamEvent**](WorkstreamEventsApi.md#workstreameventscreatenewworkstreamevent) | **POST** /workstream_events/create | /workstream_events/create [POST]
[**workstreamEventsDeleteSpecificWorkstreamEvent**](WorkstreamEventsApi.md#workstreameventsdeletespecificworkstreamevent) | **POST** /workstream_events/{workstream_event}/delete | /workstream_events/{workstream_event}/delete [POST]
[**workstreamEventsSnapshot**](WorkstreamEventsApi.md#workstreameventssnapshot) | **GET** /workstream_events | /workstream_events [GET]


## **workstreamEventsCreateNewWorkstreamEvent** {#workstreameventscreatenewworkstreamevent}
> WorkstreamEvent workstreamEventsCreateNewWorkstreamEvent(transferables, seededWorkstreamEvent)

/workstream_events/create [POST]

This will create a new WorkstreamEvent in the database.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededWorkstreamEvent = SeededWorkstreamEvent(); // SeededWorkstreamEvent | 

try {
    final result = api_instance.workstreamEventsCreateNewWorkstreamEvent(transferables, seededWorkstreamEvent);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamEventsApi->workstreamEventsCreateNewWorkstreamEvent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededWorkstreamEvent** | [**SeededWorkstreamEvent**](SeededWorkstreamEvent.md)|  | [optional] 

### Return type

[**WorkstreamEvent**](WorkstreamEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **workstreamEventsDeleteSpecificWorkstreamEvent** {#workstreameventsdeletespecificworkstreamevent}
> workstreamEventsDeleteSpecificWorkstreamEvent(workstreamEvent)

/workstream_events/{workstream_event}/delete [POST]

This will delete a specific workstream_event from the database!

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventsApi();
final workstreamEvent = workstreamEvent_example; // String | This is a identifier that is used to identify a specific workstream_event.

try {
    api_instance.workstreamEventsDeleteSpecificWorkstreamEvent(workstreamEvent);
} catch (e) {
    print('Exception when calling WorkstreamEventsApi->workstreamEventsDeleteSpecificWorkstreamEvent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **String**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **workstreamEventsSnapshot** {#workstreameventssnapshot}
> WorkstreamEvents workstreamEventsSnapshot(transferables)

/workstream_events [GET]

This will get a snapshot of all your workstream events.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = WorkstreamEventsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.workstreamEventsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling WorkstreamEventsApi->workstreamEventsSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**WorkstreamEvents**](WorkstreamEvents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

