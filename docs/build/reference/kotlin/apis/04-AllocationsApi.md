---
title: Allocations API | Kotlin SDK
---

# Allocations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationsConnectNewCloud**](#allocationsconnectnewcloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocationsCreateNewAllocation**](#allocationscreatenewallocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocationsDeleteAllocation**](#allocationsdeleteallocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocationsDisconnectCloud**](#allocationsdisconnectcloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocationsReconnectCloud**](#allocationsreconnectcloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocationsSnapshot**](#allocationssnapshot) | **GET** /allocations | /allocations [GET]


## **allocationsConnectNewCloud** {#allocationsconnectnewcloud}
> AllocationCloud allocationsConnectNewCloud(userProfile)

/allocations/connect [POST]

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
val userProfile : UserProfile =  // UserProfile | 
try {
    val result : AllocationCloud = apiInstance.allocationsConnectNewCloud(userProfile)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsConnectNewCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsConnectNewCloud")
    e.printStackTrace()
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

## **allocationsCreateNewAllocation** {#allocationscreatenewallocation}
> AllocationCloud allocationsCreateNewAllocation(allocationCloud)

/allocations/create [POST]

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
val allocationCloud : AllocationCloud =  // AllocationCloud | 
try {
    val result : AllocationCloud = apiInstance.allocationsCreateNewAllocation(allocationCloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsCreateNewAllocation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsCreateNewAllocation")
    e.printStackTrace()
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

## **allocationsDeleteAllocation** {#allocationsdeleteallocation}
> kotlin.String allocationsDeleteAllocation(allocationCloud)

/allocations/delete [POST]

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
val allocationCloud : AllocationCloud =  // AllocationCloud | 
try {
    val result : kotlin.String = apiInstance.allocationsDeleteAllocation(allocationCloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsDeleteAllocation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsDeleteAllocation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **allocationsDisconnectCloud** {#allocationsdisconnectcloud}
> kotlin.String allocationsDisconnectCloud(allocationCloud)

/allocations/disconnect [POST]

This will attempt to disconnect to a specific users cloud.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
val allocationCloud : AllocationCloud =  // AllocationCloud | 
try {
    val result : kotlin.String = apiInstance.allocationsDisconnectCloud(allocationCloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsDisconnectCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsDisconnectCloud")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **allocationsReconnectCloud** {#allocationsreconnectcloud}
> AllocationCloud allocationsReconnectCloud(allocationCloud)

/allocations/reconnect [POST]

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user&#39;s cloud is up-to-date.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
val allocationCloud : AllocationCloud =  // AllocationCloud | 
try {
    val result : AllocationCloud = apiInstance.allocationsReconnectCloud(allocationCloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsReconnectCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsReconnectCloud")
    e.printStackTrace()
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

## **allocationsSnapshot** {#allocationssnapshot}
> Allocations allocationsSnapshot()

/allocations [GET]

This is going to get a snapshot of all of the connected allocations.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Allocations API()
try {
    val result : Allocations = apiInstance.allocationsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Allocations API#allocationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Allocations API#allocationsSnapshot")
    e.printStackTrace()
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

