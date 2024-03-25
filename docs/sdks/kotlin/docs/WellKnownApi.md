# WellKnown API

All URIs are relative to *http://localhost:1000*

| Method                                                      | HTTP request                 | Description                |
|-------------------------------------------------------------|------------------------------|----------------------------|
| [**getWellKnownHealth**](WellKnownApi.md#getWellKnownHealth)   | **GET** /.well-known/health  | /.well-known/health [GET]  |
| [**getWellKnownVersion**](WellKnownApi.md#getWellKnownVersion) | **GET** /.well-known/version | /.well-known/version [Get] |

<a id="getWellKnownHealth"></a>
## **getWellKnownHealth**
> kotlin.String getWellKnownHealth()

/.well-known/health [GET]

This will get the health of the server.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="getWellKnownVersion"></a>
## **getWellKnownVersion**
> kotlin.String getWellKnownVersion()

/.well-known/version [Get]

This will get the version of the server. This will return a string of current version.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

