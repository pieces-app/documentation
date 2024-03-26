# AnchorPoint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointScoresIncrement**](AnchorPointApi.md#anchorPointScoresIncrement) | **POST** /anchor_point/\{anchor_point\}/scores/increment | &#39;/anchor_point/\{anchor_point\}/scores/increment&#39; [POST]
[**anchorPointSpecificAnchorPointSnapshot**](AnchorPointApi.md#anchorPointSpecificAnchorPointSnapshot) | **GET** /anchor_point/\{anchor_point\} | /anchor_point/\{anchor_point\} [GET]
[**anchorPointUpdate**](AnchorPointApi.md#anchorPointUpdate) | **POST** /anchor_point/update | /anchor_point/update [POST]


<a id="anchorPointScoresIncrement"></a>
## **anchorPointScoresIncrement**
> anchorPointScoresIncrement(anchorPoint, seededScoreIncrement)

&#39;/anchor_point/\{anchor_point\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **kotlin.String**| This is the specific uuid of an anchor_point. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="anchorPointSpecificAnchorPointSnapshot"></a>
## **anchorPointSpecificAnchorPointSnapshot**
> AnchorPoint anchorPointSpecificAnchorPointSnapshot(anchorPoint, transferables)

/anchor_point/\{anchor_point\} [GET]

This will get a snapshot of a single anchorPoint.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **kotlin.String**| This is the specific uuid of an anchor_point. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**AnchorPoint**](AnchorPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="anchorPointUpdate"></a>
## **anchorPointUpdate**
> AnchorPoint anchorPointUpdate(transferables, anchorPoint)

/anchor_point/update [POST]

This will update a specific anchorPoint.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **anchorPoint** | [**AnchorPoint**](AnchorPoint.md)|  | [optional]

### Return type

[**AnchorPoint**](AnchorPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

