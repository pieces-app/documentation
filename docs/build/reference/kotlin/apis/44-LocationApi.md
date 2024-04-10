# Location API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationSpecificLocationSnapshot**](#locationspecificlocationsnapshot) | **GET** /location/\{location\} | /location/\{location\} [GET]
[**locationUpdate**](#locationupdate) | **POST** /location/update | /location/update [POST]


<a name="locationSpecificLocationSnapshot"></a>
# **locationSpecificLocationSnapshot**
> Location locationSpecificLocationSnapshot(location, transferables)

/location/\{location\} [GET]

This will get a snapshot of a single location.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationApi()
val location : kotlin.String = location_example // kotlin.String | This is the specific uuid of a location.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Location = apiInstance.locationSpecificLocationSnapshot(location, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling LocationApi#locationSpecificLocationSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationApi#locationSpecificLocationSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **kotlin.String**| This is the specific uuid of a location. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Location**](../models/Location)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationUpdate"></a>
# **locationUpdate**
> Location locationUpdate(transferables, location)

/location/update [POST]

This will update a specific location.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val location : Location =  // Location | 
try {
    val result : Location = apiInstance.locationUpdate(transferables, location)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling LocationApi#locationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationApi#locationUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **location** | [**Location**](../models/Location)|  | [optional]

### Return type

[**Location**](../models/Location)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

