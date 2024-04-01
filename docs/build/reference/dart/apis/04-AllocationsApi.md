# Allocations API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationsConnectNewCloud**](AllocationsApi#allocationsconnectnewcloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocationsCreateNewAllocation**](AllocationsApi#allocationscreatenewallocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocationsDeleteAllocation**](AllocationsApi#allocationsdeleteallocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocationsDisconnectCloud**](AllocationsApi#allocationsdisconnectcloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocationsReconnectCloud**](AllocationsApi#allocationsreconnectcloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocationsSnapshot**](AllocationsApi#allocationssnapshot) | **GET** /allocations | /allocations [GET]


## **allocationsConnectNewCloud**
> AllocationCloud allocationsConnectNewCloud(userProfile)

/allocations/connect [POST]

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **allocationsCreateNewAllocation**
> AllocationCloud allocationsCreateNewAllocation(allocationCloud)

/allocations/create [POST]

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **allocationsDeleteAllocation**
> String allocationsDeleteAllocation(allocationCloud)

/allocations/delete [POST]

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **allocationsDisconnectCloud**
> String allocationsDisconnectCloud(allocationCloud)

/allocations/disconnect [POST]

This will attempt to disconnect to a specific users cloud.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **allocationsReconnectCloud**
> AllocationCloud allocationsReconnectCloud(allocationCloud)

/allocations/reconnect [POST]

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user's cloud is up-to-date.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **allocationsSnapshot**
> Allocations allocationsSnapshot()

/allocations [GET]

This is going to get a snapshot of all of the connected allocations.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Allocations**](../models/Allocations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



