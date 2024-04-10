# Clouds API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudsConnectNewCloud**](#cloudsconnectnewcloud) | **POST** /clouds/connect | /clouds/connect [POST]
[**cloudsDisconnectCloud**](#cloudsdisconnectcloud) | **POST** /clouds/disconnect | /clouds/disconnect [POST]
[**cloudsReconnectCloud**](#cloudsreconnectcloud) | **POST** /clouds/reconnect | /clouds/reconnect [POST]
[**cloudsSnapshot**](#cloudssnapshot) | **GET** /clouds | /clouds [GET]


<a name="cloudsConnectNewCloud"></a>
# **cloudsConnectNewCloud**
> Cloud cloudsConnectNewCloud(userProfile)

/clouds/connect [POST]

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CloudsApi()
val userProfile : UserProfile =  // UserProfile | 
try {
    val result : Cloud = apiInstance.cloudsConnectNewCloud(userProfile)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CloudsApi#cloudsConnectNewCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CloudsApi#cloudsConnectNewCloud")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | [**UserProfile**](../models/UserProfile)|  | [optional]

### Return type

[**Cloud**](../models/Cloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cloudsDisconnectCloud"></a>
# **cloudsDisconnectCloud**
> kotlin.String cloudsDisconnectCloud(cloud)

/clouds/disconnect [POST]

This will attempt to disconnect to a specific users cloud.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CloudsApi()
val cloud : Cloud =  // Cloud | 
try {
    val result : kotlin.String = apiInstance.cloudsDisconnectCloud(cloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CloudsApi#cloudsDisconnectCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CloudsApi#cloudsDisconnectCloud")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud** | [**Cloud**](../models/Cloud)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cloudsReconnectCloud"></a>
# **cloudsReconnectCloud**
> Cloud cloudsReconnectCloud(cloud)

/clouds/reconnect [POST]

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user&#39;s cloud is up-to-date.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CloudsApi()
val cloud : Cloud =  // Cloud | 
try {
    val result : Cloud = apiInstance.cloudsReconnectCloud(cloud)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CloudsApi#cloudsReconnectCloud")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CloudsApi#cloudsReconnectCloud")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloud** | [**Cloud**](../models/Cloud)|  | [optional]

### Return type

[**Cloud**](../models/Cloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cloudsSnapshot"></a>
# **cloudsSnapshot**
> Clouds cloudsSnapshot()

/clouds [GET]

This is going to get a snapshot of all of the connected clouds.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CloudsApi()
try {
    val result : Clouds = apiInstance.cloudsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CloudsApi#cloudsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CloudsApi#cloudsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Clouds**](../models/Clouds)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

