---
title: Allocations API | Dart SDK
---

# Allocations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationsConnectNewCloud**](AllocationsApi#allocationsconnectnewcloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocationsCreateNewAllocation**](AllocationsApi#allocationscreatenewallocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocationsDeleteAllocation**](AllocationsApi#allocationsdeleteallocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocationsDisconnectCloud**](AllocationsApi#allocationsdisconnectcloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocationsReconnectCloud**](AllocationsApi#allocationsreconnectcloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocationsSnapshot**](AllocationsApi#allocationssnapshot) | **GET** /allocations | /allocations [GET]


## **allocationsConnectNewCloud** {#allocationsconnectnewcloud}
> AllocationCloud allocationsConnectNewCloud(userProfile)

/allocations/connect [POST]

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example {#allocationsconnectnewcloud-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();
final userProfile = UserProfile(); // UserProfile | 

try {
    final result = api_instance.allocationsConnectNewCloud(userProfile);
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsConnectNewCloud: $e\n');
}
```

### Parameters {#allocationsconnectnewcloud-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile) |  | [optional] 

### Return type {#allocationsconnectnewcloud-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### Authorization {#allocationsconnectnewcloud-authorization}

No authorization required

### HTTP request headers {#allocationsconnectnewcloud-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **allocationsCreateNewAllocation** {#allocationscreatenewallocation}
> AllocationCloud allocationsCreateNewAllocation(allocationCloud)

/allocations/create [POST]

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example {#allocationscreatenewallocation-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();
final allocationCloud = AllocationCloud(); // AllocationCloud | 

try {
    final result = api_instance.allocationsCreateNewAllocation(allocationCloud);
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsCreateNewAllocation: $e\n');
}
```

### Parameters {#allocationscreatenewallocation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud) |  | [optional] 

### Return type {#allocationscreatenewallocation-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### Authorization {#allocationscreatenewallocation-authorization}

No authorization required

### HTTP request headers {#allocationscreatenewallocation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **allocationsDeleteAllocation** {#allocationsdeleteallocation}
> String allocationsDeleteAllocation(allocationCloud)

/allocations/delete [POST]

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example {#allocationsdeleteallocation-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();
final allocationCloud = AllocationCloud(); // AllocationCloud | 

try {
    final result = api_instance.allocationsDeleteAllocation(allocationCloud);
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsDeleteAllocation: $e\n');
}
```

### Parameters {#allocationsdeleteallocation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud) |  | [optional] 

### Return type {#allocationsdeleteallocation-return-type}

**String**

### Authorization {#allocationsdeleteallocation-authorization}

No authorization required

### HTTP request headers {#allocationsdeleteallocation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **allocationsDisconnectCloud** {#allocationsdisconnectcloud}
> String allocationsDisconnectCloud(allocationCloud)

/allocations/disconnect [POST]

This will attempt to disconnect to a specific users cloud.

### Example {#allocationsdisconnectcloud-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();
final allocationCloud = AllocationCloud(); // AllocationCloud | 

try {
    final result = api_instance.allocationsDisconnectCloud(allocationCloud);
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsDisconnectCloud: $e\n');
}
```

### Parameters {#allocationsdisconnectcloud-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud) |  | [optional] 

### Return type {#allocationsdisconnectcloud-return-type}

**String**

### Authorization {#allocationsdisconnectcloud-authorization}

No authorization required

### HTTP request headers {#allocationsdisconnectcloud-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **allocationsReconnectCloud** {#allocationsreconnectcloud}
> AllocationCloud allocationsReconnectCloud(allocationCloud)

/allocations/reconnect [POST]

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user's cloud is up-to-date.

### Example {#allocationsreconnectcloud-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();
final allocationCloud = AllocationCloud(); // AllocationCloud | 

try {
    final result = api_instance.allocationsReconnectCloud(allocationCloud);
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsReconnectCloud: $e\n');
}
```

### Parameters {#allocationsreconnectcloud-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud) |  | [optional] 

### Return type {#allocationsreconnectcloud-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### Authorization {#allocationsreconnectcloud-authorization}

No authorization required

### HTTP request headers {#allocationsreconnectcloud-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **allocationsSnapshot** {#allocationssnapshot}
> Allocations allocationsSnapshot()

/allocations [GET]

This is going to get a snapshot of all of the connected allocations.

### Example {#allocationssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationsApi();

try {
    final result = api_instance.allocationsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling AllocationsApi->allocationsSnapshot: $e\n');
}
```

### Parameters {#allocationssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#allocationssnapshot-return-type}

[**Allocations**](../models/Allocations)

### Authorization {#allocationssnapshot-authorization}

No authorization required

### HTTP request headers {#allocationssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

