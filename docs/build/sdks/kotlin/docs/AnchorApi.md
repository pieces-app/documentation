# Anchor API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorRename**](AnchorApi.md#anchorrename) | **POST** /anchor/\{anchor\}/rename | /anchor/\{anchor\}/rename [POST]
[**anchorScoresIncrement**](AnchorApi.md#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment | &#39;/anchor/\{anchor\}/scores/increment&#39; [POST]
[**anchorSpecificAnchorSnapshot**](AnchorApi.md#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\} | /anchor/\{anchor\} [GET]
[**anchorUpdate**](AnchorApi.md#anchorupdate) | **POST** /anchor/update | /anchor/update [POST]


<a id="anchorRename"></a>
## **anchorRename**
> Anchor anchorRename(anchor, transferables)

/anchor/\{anchor\}/rename [POST]

This will rename a specific anchor.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Anchor = apiInstance.anchorRename(anchor, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorRename")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorRename")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Anchor**](Anchor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="anchorScoresIncrement"></a>
## **anchorScoresIncrement**
> anchorScoresIncrement(anchor, seededScoreIncrement)

&#39;/anchor/\{anchor\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.anchorScoresIncrement(anchor, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="anchorSpecificAnchorSnapshot"></a>
## **anchorSpecificAnchorSnapshot**
> Anchor anchorSpecificAnchorSnapshot(anchor, transferables)

/anchor/\{anchor\} [GET]

This will get a snapshot of a single anchor.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Anchor = apiInstance.anchorSpecificAnchorSnapshot(anchor, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorSpecificAnchorSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorSpecificAnchorSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Anchor**](Anchor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="anchorUpdate"></a>
## **anchorUpdate**
> Anchor anchorUpdate(transferables, anchor)

/anchor/update [POST]

This will update a specific anchor.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val anchor : Anchor =  // Anchor | 
try {
    val result : Anchor = apiInstance.anchorUpdate(transferables, anchor)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **anchor** | [**Anchor**](Anchor.md)|  | [optional]

### Return type

[**Anchor**](Anchor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

