---
title: AnchorPoints API | Dart SDK
---

# AnchorPoints API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointsCreateNewAnchorPoint**](AnchorPointsApi#anchorpointscreatenewanchorpoint) | **POST** /anchor_points/create | /anchor_points/create [POST]
[**anchorPointsDeleteSpecificAnchorPoint**](AnchorPointsApi#anchorpointsdeletespecificanchorpoint) | **POST** /anchor_points/\{anchor_point\}/delete | /anchor_points/\{anchor_point\}/delete [POST]
[**anchorPointsSnapshot**](AnchorPointsApi#anchorpointssnapshot) | **GET** /anchor_points | /anchor_points [GET]


## **anchorPointsCreateNewAnchorPoint** {#anchorpointscreatenewanchorpoint}
> AnchorPoint anchorPointsCreateNewAnchorPoint(transferables, seededAnchorPoint)

/anchor_points/create [POST]

This will create a anchorPoint.

### Example {#anchorpointscreatenewanchorpoint-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededAnchorPoint = SeededAnchorPoint(); // SeededAnchorPoint | 

try {
    final result = api_instance.anchorPointsCreateNewAnchorPoint(transferables, seededAnchorPoint);
    print(result);
} catch (e) {
    print('Exception when calling AnchorPointsApi->anchorPointsCreateNewAnchorPoint: $e\n');
}
```

### Parameters {#anchorpointscreatenewanchorpoint-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededAnchorPoint** | [**SeededAnchorPoint**](../models/SeededAnchorPoint) |  | [optional] 

### Return type {#anchorpointscreatenewanchorpoint-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### Authorization {#anchorpointscreatenewanchorpoint-authorization}

No authorization required

### HTTP request headers {#anchorpointscreatenewanchorpoint-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **anchorPointsDeleteSpecificAnchorPoint** {#anchorpointsdeletespecificanchorpoint}
> anchorPointsDeleteSpecificAnchorPoint(anchorPoint)

/anchor_points/\{anchor_point\}/delete [POST]

This will delete a specific anchorPoint!

### Example {#anchorpointsdeletespecificanchorpoint-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointsApi();
final anchorPoint = anchorPoint_example; // String | This is the specific uuid of an anchor_point.

try {
    api_instance.anchorPointsDeleteSpecificAnchorPoint(anchorPoint);
} catch (e) {
    print('Exception when calling AnchorPointsApi->anchorPointsDeleteSpecificAnchorPoint: $e\n');
}
```

### Parameters {#anchorpointsdeletespecificanchorpoint-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **String** | This is the specific uuid of an anchor_point. | 

### Return type {#anchorpointsdeletespecificanchorpoint-return-type}

void (empty response body)

### Authorization {#anchorpointsdeletespecificanchorpoint-authorization}

No authorization required

### HTTP request headers {#anchorpointsdeletespecificanchorpoint-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **anchorPointsSnapshot** {#anchorpointssnapshot}
> AnchorPoints anchorPointsSnapshot(transferables)

/anchor_points [GET]

This will get a snapshot of all your anchorPoints.

### Example {#anchorpointssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.anchorPointsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnchorPointsApi->anchorPointsSnapshot: $e\n');
}
```

### Parameters {#anchorpointssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#anchorpointssnapshot-return-type}

[**AnchorPoints**](../models/AnchorPoints)

### Authorization {#anchorpointssnapshot-authorization}

No authorization required

### HTTP request headers {#anchorpointssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

