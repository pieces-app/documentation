---
title: AnchorPoint API | Kotlin SDK
---

# AnchorPoint API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointScoresIncrement**](#anchorpointscoresincrement) | **POST** /anchor_point/\{anchor_point\}/scores/increment | '/anchor_point/\{anchor_point\}/scores/increment' [POST]
[**anchorPointSpecificAnchorPointSnapshot**](#anchorpointspecificanchorpointsnapshot) | **GET** /anchor_point/\{anchor_point\} | /anchor_point/\{anchor_point\} [GET]
[**anchorPointUpdate**](#anchorpointupdate) | **POST** /anchor_point/update | /anchor_point/update [POST]


## **anchorPointScoresIncrement** {#anchorpointscoresincrement}
> anchorPointScoresIncrement(anchorPoint, seededScoreIncrement)

&#39;/anchor_point/\{anchor_point\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#anchorpointscoresincrement-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = AnchorPointApi()
val anchorPoint : kotlin.String = anchorPoint_example // kotlin.String | This is the specific uuid of an anchor_point.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.anchorPointScoresIncrement(anchorPoint, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling AnchorPointApi#anchorPointScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorPointApi#anchorPointScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#anchorpointscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **kotlin.String**| This is the specific uuid of an anchor_point. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#anchorpointscoresincrement-return-type}

null (empty response body)

### Authorization {#anchorpointscoresincrement-authorization}

No authorization required

### HTTP request headers {#anchorpointscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **anchorPointSpecificAnchorPointSnapshot** {#anchorpointspecificanchorpointsnapshot}
> AnchorPoint anchorPointSpecificAnchorPointSnapshot(anchorPoint, transferables)

/anchor_point/\{anchor_point\} [GET]

This will get a snapshot of a single anchorPoint.

### Example {#anchorpointspecificanchorpointsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = AnchorPointApi()
val anchorPoint : kotlin.String = anchorPoint_example // kotlin.String | This is the specific uuid of an anchor_point.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : AnchorPoint = apiInstance.anchorPointSpecificAnchorPointSnapshot(anchorPoint, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorPointApi#anchorPointSpecificAnchorPointSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorPointApi#anchorPointSpecificAnchorPointSnapshot")
    e.printStackTrace()
}
```

### Parameters {#anchorpointspecificanchorpointsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **kotlin.String**| This is the specific uuid of an anchor_point. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#anchorpointspecificanchorpointsnapshot-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### Authorization {#anchorpointspecificanchorpointsnapshot-authorization}

No authorization required

### HTTP request headers {#anchorpointspecificanchorpointsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorPointUpdate** {#anchorpointupdate}
> AnchorPoint anchorPointUpdate(transferables, anchorPoint)

/anchor_point/update [POST]

This will update a specific anchorPoint.

### Example {#anchorpointupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = AnchorPointApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val anchorPoint : AnchorPoint =  // AnchorPoint | 
try {
    val result : AnchorPoint = apiInstance.anchorPointUpdate(transferables, anchorPoint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorPointApi#anchorPointUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorPointApi#anchorPointUpdate")
    e.printStackTrace()
}
```

### Parameters {#anchorpointupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **anchorPoint** | [**AnchorPoint**](../models/AnchorPoint)|  | [optional]

### Return type {#anchorpointupdate-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### Authorization {#anchorpointupdate-authorization}

No authorization required

### HTTP request headers {#anchorpointupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

