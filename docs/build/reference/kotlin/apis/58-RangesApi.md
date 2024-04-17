# Ranges API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangesCreateNewRange**](#rangescreatenewrange) | **POST** /ranges/create | /ranges/create [POST]
[**rangesDeleteSpecificRange**](#rangesdeletespecificrange) | **POST** /ranges/\{range\}/delete | /ranges/\{range\}/delete [POST]
[**rangesSnapshot**](#rangessnapshot) | **GET** /ranges | /ranges [GET]


## **rangesCreateNewRange** {#rangescreatenewrange}
> Range rangesCreateNewRange(seededRange)

/ranges/create [POST]

This will create a new Range in the database.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangesApi()
val seededRange : SeededRange =  // SeededRange | 
try {
    val result : Range = apiInstance.rangesCreateNewRange(seededRange)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RangesApi#rangesCreateNewRange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangesApi#rangesCreateNewRange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededRange** | [**SeededRange**](../models/SeededRange)|  | [optional]

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **rangesDeleteSpecificRange** {#rangesdeletespecificrange}
> rangesDeleteSpecificRange(range)

/ranges/\{range\}/delete [POST]

This will delete a specific range from the database!

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangesApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    apiInstance.rangesDeleteSpecificRange(range)
} catch (e: ClientException) {
    println("4xx response calling RangesApi#rangesDeleteSpecificRange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangesApi#rangesDeleteSpecificRange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **rangesSnapshot** {#rangessnapshot}
> Ranges rangesSnapshot()

/ranges [GET]

This will get a snapshot of all your ranges.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangesApi()
try {
    val result : Ranges = apiInstance.rangesSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RangesApi#rangesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangesApi#rangesSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Ranges**](../models/Ranges)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

