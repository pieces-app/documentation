---
title: Activity API | Dart SDK
---

# Activity API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesSpecificActivitySnapshot**](ActivityApi#activitiesspecificactivitysnapshot) | **GET** /activity/\{activity\} | /activity/\{activity\} [GET]
[**activityIdentifiersSnapshot**](ActivityApi#activityidentifierssnapshot) | **GET** /activity/identifiers | /activity/identifiers [GET]
[**activityUpdate**](ActivityApi#activityupdate) | **POST** /activity/update | /activity/update [POST]


## **activitiesSpecificActivitySnapshot** {#activitiesspecificactivitysnapshot}
> Activity activitiesSpecificActivitySnapshot(activity, transferables)

/activity/\{activity\} [GET]

This will attempt to get a specific activity.

### Example {#activitiesspecificactivitysnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ActivityApi();
final activity = activity_example; // String | This is a specific activity uuid.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.activitiesSpecificActivitySnapshot(activity, transferables);
    print(result);
} catch (e) {
    print('Exception when calling ActivityApi->activitiesSpecificActivitySnapshot: $e\n');
}
```

### Parameters {#activitiesspecificactivitysnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | **String** | This is a specific activity uuid. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#activitiesspecificactivitysnapshot-return-type}

[**Activity**](../models/Activity)

### Authorization {#activitiesspecificactivitysnapshot-authorization}

No authorization required

### HTTP request headers {#activitiesspecificactivitysnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **activityIdentifiersSnapshot** {#activityidentifierssnapshot}
> FlattenedActivities activityIdentifiersSnapshot(pseudo, activityFilterEnum)

/activity/identifiers [GET]

This is going to return all the identifiers of the activity event in order of most recent -> oldest.

### Example {#activityidentifierssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ActivityApi();
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
final activityFilterEnum = activityFilterEnum_example; // String | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated.

try {
    final result = api_instance.activityIdentifiersSnapshot(pseudo, activityFilterEnum);
    print(result);
} catch (e) {
    print('Exception when calling ActivityApi->activityIdentifiersSnapshot: $e\n');
}
```

### Parameters {#activityidentifierssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool** | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **activityFilterEnum** | **String** | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. | [optional] 

### Return type {#activityidentifierssnapshot-return-type}

[**FlattenedActivities**](../models/FlattenedActivities)

### Authorization {#activityidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#activityidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **activityUpdate** {#activityupdate}
> Activity activityUpdate(transferables, activity)

/activity/update [POST]

this will update a specific activity.

### Example {#activityupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ActivityApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final activity = Activity(); // Activity | 

try {
    final result = api_instance.activityUpdate(transferables, activity);
    print(result);
} catch (e) {
    print('Exception when calling ActivityApi->activityUpdate: $e\n');
}
```

### Parameters {#activityupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **activity** | [**Activity**](../models/Activity) |  | [optional] 

### Return type {#activityupdate-return-type}

[**Activity**](../models/Activity)

### Authorization {#activityupdate-authorization}

No authorization required

### HTTP request headers {#activityupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

