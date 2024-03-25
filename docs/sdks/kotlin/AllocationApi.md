# Allocation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationSnapshot**](AllocationApi#allocationSnapshot) | **GET** /allocation/\{allocation\} | /allocation/\{allocation\} [GET]
[**allocationUpdate**](AllocationApi#allocationUpdate) | **POST** /allocation/update | /allocation/update [POST]


<a id="allocationSnapshot"></a>
## **allocationSnapshot**
> AllocationCloud allocationSnapshot(allocation)

/allocation/\{allocation\} [GET]

This will get a snapshot of a specific allocation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AllocationApi()
val allocation : kotlin.String = allocation_example // kotlin.String | 
try {
    val result : AllocationCloud = apiInstance.allocationSnapshot(allocation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AllocationApi#allocationSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AllocationApi#allocationSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation** | **kotlin.String**|  |

### Return type

[**AllocationCloud**](AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="allocationUpdate"></a>
## **allocationUpdate**
> AllocationCloud allocationUpdate(allocationCloud)

/allocation/update [POST]

This will update a specific allocation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AllocationApi()
val allocationCloud : AllocationCloud =  // AllocationCloud | 
try {
    val result : AllocationCloud = apiInstance.allocationUpdate(allocationCloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AllocationApi#allocationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AllocationApi#allocationUpdate")
    e.printStackTrace()
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

