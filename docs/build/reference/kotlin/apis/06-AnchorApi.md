# Anchor API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**anchorAssociateWorkstreamSummary**](#anchorassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\}
[**anchorDisassociateWorkstreamSummary**](#anchordisassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\}
[**anchorRename**](#anchorrename) | **POST** /anchor/\{anchor\}/rename
[**anchorScoresIncrement**](#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment
[**anchorSpecificAnchorSnapshot**](#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\}
[**anchorUpdate**](#anchorupdate) | **POST** /anchor/update


## **anchorAssociateWorkstreamSummary** {#anchorassociateworkstreamsummary}
> anchorAssociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = AnchorApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.anchorAssociateWorkstreamSummary(anchor, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorDisassociateWorkstreamSummary** {#anchordisassociateworkstreamsummary}
> anchorDisassociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = AnchorApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.anchorDisassociateWorkstreamSummary(anchor, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling AnchorApi#anchorDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorApi#anchorDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorRename** {#anchorrename}
> Anchor anchorRename(anchor, transferables)

/anchor/\{anchor\}/rename [POST]

This will rename a specific anchor.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorScoresIncrement** {#anchorscoresincrement}
> anchorScoresIncrement(anchor, seededScoreIncrement)

&#39;/anchor/\{anchor\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **anchorSpecificAnchorSnapshot** {#anchorspecificanchorsnapshot}
> Anchor anchorSpecificAnchorSnapshot(anchor, transferables)

/anchor/\{anchor\} [GET]

This will get a snapshot of a single anchor.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorUpdate** {#anchorupdate}
> Anchor anchorUpdate(transferables, anchor)

/anchor/update [POST]

This will update a specific anchor.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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
 **anchor** | [**Anchor**](../models/Anchor)|  | [optional]

### Return type

[**Anchor**](../models/Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

