---
title: AnchorPoint API | Dart SDK
---

# AnchorPoint API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointScoresIncrement**](AnchorPointApi#anchorpointscoresincrement) | **POST** /anchor_point/\{anchor_point\}/scores/increment | '/anchor_point/\{anchor_point\}/scores/increment' [POST]
[**anchorPointSpecificAnchorPointSnapshot**](AnchorPointApi#anchorpointspecificanchorpointsnapshot) | **GET** /anchor_point/\{anchor_point\} | /anchor_point/\{anchor_point\} [GET]
[**anchorPointUpdate**](AnchorPointApi#anchorpointupdate) | **POST** /anchor_point/update | /anchor_point/update [POST]


## **anchorPointScoresIncrement** {#anchorpointscoresincrement}
> anchorPointScoresIncrement(anchorPoint, seededScoreIncrement)

'/anchor_point/\{anchor_point\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#anchorpointscoresincrement-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointApi();
final anchorPoint = anchorPoint_example; // String | This is the specific uuid of an anchor_point.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.anchorPointScoresIncrement(anchorPoint, seededScoreIncrement);
} catch (e) {
    print('Exception when calling AnchorPointApi->anchorPointScoresIncrement: $e\n');
}
```

### Parameters {#anchorpointscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **String** | This is the specific uuid of an anchor_point. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#anchorpointscoresincrement-return-type}

void (empty response body)

### Authorization {#anchorpointscoresincrement-authorization}

No authorization required

### HTTP request headers {#anchorpointscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **anchorPointSpecificAnchorPointSnapshot** {#anchorpointspecificanchorpointsnapshot}
> AnchorPoint anchorPointSpecificAnchorPointSnapshot(anchorPoint, transferables)

/anchor_point/\{anchor_point\} [GET]

This will get a snapshot of a single anchorPoint.

### Example {#anchorpointspecificanchorpointsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointApi();
final anchorPoint = anchorPoint_example; // String | This is the specific uuid of an anchor_point.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.anchorPointSpecificAnchorPointSnapshot(anchorPoint, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnchorPointApi->anchorPointSpecificAnchorPointSnapshot: $e\n');
}
```

### Parameters {#anchorpointspecificanchorpointsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **String** | This is the specific uuid of an anchor_point. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#anchorpointspecificanchorpointsnapshot-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### Authorization {#anchorpointspecificanchorpointsnapshot-authorization}

No authorization required

### HTTP request headers {#anchorpointspecificanchorpointsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **anchorPointUpdate** {#anchorpointupdate}
> AnchorPoint anchorPointUpdate(transferables, anchorPoint)

/anchor_point/update [POST]

This will update a specific anchorPoint.

### Example {#anchorpointupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorPointApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final anchorPoint = AnchorPoint(); // AnchorPoint | 

try {
    final result = api_instance.anchorPointUpdate(transferables, anchorPoint);
    print(result);
} catch (e) {
    print('Exception when calling AnchorPointApi->anchorPointUpdate: $e\n');
}
```

### Parameters {#anchorpointupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **anchorPoint** | [**AnchorPoint**](../models/AnchorPoint) |  | [optional] 

### Return type {#anchorpointupdate-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### Authorization {#anchorpointupdate-authorization}

No authorization required

### HTTP request headers {#anchorpointupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

