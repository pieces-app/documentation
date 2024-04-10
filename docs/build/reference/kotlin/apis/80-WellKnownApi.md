# WellKnown API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**getWellKnownHealth**](#getwellknownhealth) | **GET** /.well-known/health
[**getWellKnownVersion**](#getwellknownversion) | **GET** /.well-known/version


<a id="getWellKnownHealth"></a>
## **getWellKnownHealth** {#getwellknownhealth}
> kotlin.String getWellKnownHealth()

/.well-known/health [GET]

This will get the health of the server.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getWellKnownVersion"></a>
## **getWellKnownVersion** {#getwellknownversion}
> kotlin.String getWellKnownVersion()

/.well-known/version [Get]

This will get the version of the server. This will return a string of current version.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

