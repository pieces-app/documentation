# Default API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoveryDiscoverSensitives**](#discoverydiscoversensitives) | **POST** /discovery/discover/sensitives | /discovery/discover/sensitives [POST]


<a name="discoveryDiscoverSensitives"></a>
# **discoveryDiscoverSensitives**
> DiscoveredSensitives discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)

/discovery/discover/sensitives [POST]

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededDiscoverableSensitives : SeededDiscoverableSensitives =  // SeededDiscoverableSensitives | 
try {
    val result : DiscoveredSensitives = apiInstance.discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#discoveryDiscoverSensitives")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#discoveryDiscoverSensitives")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableSensitives** | [**SeededDiscoverableSensitives**](../models/SeededDiscoverableSensitives)|  | [optional]

### Return type

[**DiscoveredSensitives**](../models/DiscoveredSensitives)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

