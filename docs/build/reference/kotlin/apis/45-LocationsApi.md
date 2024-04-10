# Locations API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationsCreateNewLocation**](#locationscreatenewlocation) | **POST** /locations/create | /locations/create [POST]
[**locationsDeleteSpecificLocation**](#locationsdeletespecificlocation) | **POST** /locations/\{location\}/delete | /locations/\{location\}/delete [POST]
[**locationsSnapshot**](#locationssnapshot) | **GET** /locations | /locations [GET]
[**removeLocationReferenceFromAsset**](#removelocationreferencefromasset) | **POST** /locations/\{location\}/assets/delete/\{asset\} | /locations/\{location\}/assets/delete/\{asset\} [POST]


<a name="locationsCreateNewLocation"></a>
# **locationsCreateNewLocation**
> Location locationsCreateNewLocation(transferables, seededLocation)

/locations/create [POST]

This will create a location and attach it to a specific asset(s) This will also ensure the location is normalized.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededLocation : SeededLocation =  // SeededLocation | 
try {
    val result : Location = apiInstance.locationsCreateNewLocation(transferables, seededLocation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling LocationsApi#locationsCreateNewLocation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationsApi#locationsCreateNewLocation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededLocation** | [**SeededLocation**](../models/SeededLocation)|  | [optional]

### Return type

[**Location**](../models/Location)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="locationsDeleteSpecificLocation"></a>
# **locationsDeleteSpecificLocation**
> locationsDeleteSpecificLocation(location)

/locations/\{location\}/delete [POST]

This will delete a specific location!

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationsApi()
val location : kotlin.String = location_example // kotlin.String | This is the specific uuid of a location.
try {
    apiInstance.locationsDeleteSpecificLocation(location)
} catch (e: ClientException) {
    println("4xx response calling LocationsApi#locationsDeleteSpecificLocation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationsApi#locationsDeleteSpecificLocation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **kotlin.String**| This is the specific uuid of a location. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationsSnapshot"></a>
# **locationsSnapshot**
> Locations locationsSnapshot(transferables)

/locations [GET]

This will get a snapshot of all your locations.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Locations = apiInstance.locationsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling LocationsApi#locationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationsApi#locationsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Locations**](../models/Locations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeLocationReferenceFromAsset"></a>
# **removeLocationReferenceFromAsset**
> removeLocationReferenceFromAsset(location, asset)

/locations/\{location\}/assets/delete/\{asset\} [POST]

This will update both the asset and the location reference, that will remove a location from an asset(only the references).  This will NOT remove the location. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = LocationsApi()
val location : kotlin.String = location_example // kotlin.String | This is the specific uuid of a location.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.removeLocationReferenceFromAsset(location, asset)
} catch (e: ClientException) {
    println("4xx response calling LocationsApi#removeLocationReferenceFromAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling LocationsApi#removeLocationReferenceFromAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type                | Description  | Notes
------------- |---------------------| ------------- | -------------
 **location** | **kotlin.String**   | This is the specific uuid of a location. |
 **asset** | **java.util.UUID**  | The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

