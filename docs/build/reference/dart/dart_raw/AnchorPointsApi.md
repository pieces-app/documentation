---
title: core_openapi.api.AnchorPointsApi | Dart SDK
---

# core_openapi.api.AnchorPointsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointsCreateNewAnchorPoint**](AnchorPointsApi.md#anchorpointscreatenewanchorpoint) | **POST** /anchor_points/create | /anchor_points/create [POST]
[**anchorPointsDeleteSpecificAnchorPoint**](AnchorPointsApi.md#anchorpointsdeletespecificanchorpoint) | **POST** /anchor_points/{anchor_point}/delete | /anchor_points/{anchor_point}/delete [POST]
[**anchorPointsSnapshot**](AnchorPointsApi.md#anchorpointssnapshot) | **GET** /anchor_points | /anchor_points [GET]


## **anchorPointsCreateNewAnchorPoint** {#anchorpointscreatenewanchorpoint}
> AnchorPoint anchorPointsCreateNewAnchorPoint(transferables, seededAnchorPoint)

/anchor_points/create [POST]

This will create a anchorPoint.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededAnchorPoint** | [**SeededAnchorPoint**](SeededAnchorPoint.md)|  | [optional] 

### Return type

[**AnchorPoint**](AnchorPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **anchorPointsDeleteSpecificAnchorPoint** {#anchorpointsdeletespecificanchorpoint}
> anchorPointsDeleteSpecificAnchorPoint(anchorPoint)

/anchor_points/{anchor_point}/delete [POST]

This will delete a specific anchorPoint!

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **String**| This is the specific uuid of an anchor_point. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **anchorPointsSnapshot** {#anchorpointssnapshot}
> AnchorPoints anchorPointsSnapshot(transferables)

/anchor_points [GET]

This will get a snapshot of all your anchorPoints.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**AnchorPoints**](AnchorPoints.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

