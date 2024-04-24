---
title: Anchor API | Kotlin SDK
---

# Anchor API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorAssociateWorkstreamSummary**](#anchorassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**anchorDisassociateWorkstreamSummary**](#anchordisassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**anchorRename**](#anchorrename) | **POST** /anchor/\{anchor\}/rename | /anchor/\{anchor\}/rename [POST]
[**anchorScoresIncrement**](#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment | '/anchor/\{anchor\}/scores/increment' [POST]
[**anchorSpecificAnchorSnapshot**](#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\} | /anchor/\{anchor\} [GET]
[**anchorUpdate**](#anchorupdate) | **POST** /anchor/update | /anchor/update [POST]


## **anchorAssociateWorkstreamSummary** {#anchorassociateworkstreamsummary}
> anchorAssociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#anchorassociateworkstreamsummary-example}
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

### Parameters {#anchorassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#anchorassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#anchorassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#anchorassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **anchorDisassociateWorkstreamSummary** {#anchordisassociateworkstreamsummary}
> anchorDisassociateWorkstreamSummary(anchor, workstreamSummary)

/anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#anchordisassociateworkstreamsummary-example}
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

### Parameters {#anchordisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#anchordisassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#anchordisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#anchordisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **anchorRename** {#anchorrename}
> Anchor anchorRename(anchor, transferables)

/anchor/\{anchor\}/rename [POST]

This will rename a specific anchor.

### Example {#anchorrename-example}
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

### Parameters {#anchorrename-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#anchorrename-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorrename-authorization}

No authorization required

### HTTP request headers {#anchorrename-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorScoresIncrement** {#anchorscoresincrement}
> anchorScoresIncrement(anchor, seededScoreIncrement)

&#39;/anchor/\{anchor\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#anchorscoresincrement-example}
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

### Parameters {#anchorscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#anchorscoresincrement-return-type}

null (empty response body)

### Authorization {#anchorscoresincrement-authorization}

No authorization required

### HTTP request headers {#anchorscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **anchorSpecificAnchorSnapshot** {#anchorspecificanchorsnapshot}
> Anchor anchorSpecificAnchorSnapshot(anchor, transferables)

/anchor/\{anchor\} [GET]

This will get a snapshot of a single anchor.

### Example {#anchorspecificanchorsnapshot-example}
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

### Parameters {#anchorspecificanchorsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#anchorspecificanchorsnapshot-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorspecificanchorsnapshot-authorization}

No authorization required

### HTTP request headers {#anchorspecificanchorsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **anchorUpdate** {#anchorupdate}
> Anchor anchorUpdate(transferables, anchor)

/anchor/update [POST]

This will update a specific anchor.

### Example {#anchorupdate-example}
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

### Parameters {#anchorupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **anchor** | [**Anchor**](../models/Anchor)|  | [optional]

### Return type {#anchorupdate-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorupdate-authorization}

No authorization required

### HTTP request headers {#anchorupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

