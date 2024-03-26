# Allocation API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationSnapshot**](AllocationApi#allocationsnapshot) | **GET** /allocation/\{allocation\} | /allocation/\{allocation\} [GET]
[**allocationUpdate**](AllocationApi#allocationupdate) | **POST** /allocation/update | /allocation/update [POST]


## **allocationSnapshot**
> AllocationCloud allocationSnapshot(allocation)

/allocation/\{allocation\} [GET]

This will get a snapshot of a specific allocation.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation** | **String**|  | 

### Return type

[**AllocationCloud**](AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **allocationUpdate**
> AllocationCloud allocationUpdate(allocationCloud)

/allocation/update [POST]

This will update a specific allocation.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



