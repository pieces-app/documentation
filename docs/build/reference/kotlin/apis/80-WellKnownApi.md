# WellKnown API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getWellKnownHealth**](#getwellknownhealth) | **GET** /.well-known/health
[**getWellKnownVersion**](#getwellknownversion) | **GET** /.well-known/version


## **getWellKnownHealth** {#getwellknownhealth}
> kotlin.String getWellKnownHealth()

/.well-known/health [GET]

Retrieves the health status of the server.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WellKnownApi()
try {
    val result : kotlin.String = apiInstance.getWellKnownHealth()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WellKnownApi#getWellKnownHealth")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WellKnownApi#getWellKnownHealth")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **getWellKnownVersion** {#getwellknownversion}
> kotlin.String getWellKnownVersion()

/.well-known/version [Get]

Retrieves the version of the server. It returns a string representing the current version.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WellKnownApi()
try {
    val result : kotlin.String = apiInstance.getWellKnownVersion()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WellKnownApi#getWellKnownVersion")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WellKnownApi#getWellKnownVersion")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

