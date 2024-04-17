# Share API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shareScoresIncrement**](#sharescoresincrement) | **POST** /share/\{share\}/scores/increment | '/share/\{share\}/scores/increment' [POST]
[**shareSnapshot**](#sharesnapshot) | **GET** /share/\{share\} | /share/\{share\}
[**shareUpdate**](#shareupdate) | **POST** /share/update | /share/update [POST]


## **shareScoresIncrement** {#sharescoresincrement}
> shareScoresIncrement(share, seededScoreIncrement)

&#39;/share/\{share\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ShareApi()
val share : kotlin.String = share_example // kotlin.String | Share id
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.shareScoresIncrement(share, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling ShareApi#shareScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ShareApi#shareScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **kotlin.String**| Share id |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **shareSnapshot** {#sharesnapshot}
> Share shareSnapshot(share, transferables)

/share/\{share\}

Get the snapshot of a specific share.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ShareApi()
val share : kotlin.String = share_example // kotlin.String | Share id
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Share = apiInstance.shareSnapshot(share, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ShareApi#shareSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ShareApi#shareSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **kotlin.String**| Share id |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Share**](../models/Share)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **shareUpdate** {#shareupdate}
> Share shareUpdate(transferables, share)

/share/update [POST]

This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ShareApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val share : Share =  // Share | This is the Share that needs to be updated.
try {
    val result : Share = apiInstance.shareUpdate(transferables, share)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ShareApi#shareUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ShareApi#shareUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **share** | [**Share**](../models/Share)| This is the Share that needs to be updated. | [optional]

### Return type

[**Share**](../models/Share)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

