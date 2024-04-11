# Application API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**applicationUpdate**](#applicationupdate) | **POST** /application/update


## **applicationUpdate** {#applicationupdate}
> Application applicationUpdate(application)

/application/update [GET]

This is an endpoint for updating an application.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ApplicationApi()
val application : Application =  // Application | 
try {
    val result : Application = apiInstance.applicationUpdate(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationApi#applicationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationApi#applicationUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](../models/Application)|  | [optional]

### Return type

[**Application**](../models/Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

