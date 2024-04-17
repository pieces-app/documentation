---
title: Allocation API | Dart SDK
---

# Allocation API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationSnapshot**](AllocationApi#allocationsnapshot) | **GET** /allocation/\{allocation\} | /allocation/\{allocation\} [GET]
[**allocationUpdate**](AllocationApi#allocationupdate) | **POST** /allocation/update | /allocation/update [POST]


## **allocationSnapshot** {#allocationsnapshot}
> AllocationCloud allocationSnapshot(allocation)

/allocation/\{allocation\} [GET]

This will get a snapshot of a specific allocation.

### Example {#allocationsnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationApi();
final allocation = allocation_example; // String | 

try {
    final result = api_instance.allocationSnapshot(allocation);
    print(result);
} catch (e) {
    print('Exception when calling AllocationApi->allocationSnapshot: $e\n');
}
```

### Parameters {#allocationsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation** | **String** |  | 

### Return type {#allocationsnapshot-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### Authorization {#allocationsnapshot-authorization}

No authorization required

### HTTP request headers {#allocationsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **allocationUpdate** {#allocationupdate}
> AllocationCloud allocationUpdate(allocationCloud)

/allocation/update [POST]

This will update a specific allocation.

### Example {#allocationupdate-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AllocationApi();
final allocationCloud = AllocationCloud(); // AllocationCloud | 

try {
    final result = api_instance.allocationUpdate(allocationCloud);
    print(result);
} catch (e) {
    print('Exception when calling AllocationApi->allocationUpdate: $e\n');
}
```

### Parameters {#allocationupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud) |  | [optional] 

### Return type {#allocationupdate-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### Authorization {#allocationupdate-authorization}

No authorization required

### HTTP request headers {#allocationupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

