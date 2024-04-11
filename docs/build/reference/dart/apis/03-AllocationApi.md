# Allocation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**allocationSnapshot**](AllocationApi#allocationsnapshot) | **GET** /allocation/\{allocation\}
[**allocationUpdate**](AllocationApi#allocationupdate) | **POST** /allocation/update


## **allocationSnapshot** {#allocationsnapshot}
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

[**AllocationCloud**](../models/AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **allocationUpdate** {#allocationupdate}
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
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



