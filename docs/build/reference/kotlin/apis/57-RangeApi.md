---
title: Range API | Kotlin SDK
---

# Range API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangeAssociateConversationGroundingTemporalRangeWorkstreams**](#rangeassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]
[**rangeAssociateWorkstreamSummary**](#rangeassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**rangeDisassociateConversationGroundingTemporalRangeWorkstreams**](#rangedisassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]
[**rangeDisassociateWorkstreamSummary**](#rangedisassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**rangeScoresIncrement**](#rangescoresincrement) | **POST** /range/\{range\}/scores/increment | '/range/\{range\}/scores/increment' [POST]
[**rangeUpdate**](#rangeupdate) | **POST** /range/update | /range/update [POST]
[**rangesSpecificRangeSnapshot**](#rangesspecificrangesnapshot) | **GET** /range/\{range\} | /range/\{range\} [GET]


## **rangeAssociateConversationGroundingTemporalRangeWorkstreams** {#rangeassociateconversationgroundingtemporalrangeworkstreams}
> rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]

This will associate a range with a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example {#rangeassociateconversationgroundingtemporalrangeworkstreams-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeAssociateConversationGroundingTemporalRangeWorkstreams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeAssociateConversationGroundingTemporalRangeWorkstreams")
    e.printStackTrace()
}
```

### Parameters {#rangeassociateconversationgroundingtemporalrangeworkstreams-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type {#rangeassociateconversationgroundingtemporalrangeworkstreams-return-type}

null (empty response body)

### Authorization {#rangeassociateconversationgroundingtemporalrangeworkstreams-authorization}

No authorization required

### HTTP request headers {#rangeassociateconversationgroundingtemporalrangeworkstreams-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **rangeAssociateWorkstreamSummary** {#rangeassociateworkstreamsummary}
> rangeAssociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a range with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#rangeassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.rangeAssociateWorkstreamSummary(range, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#rangeassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#rangeassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#rangeassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#rangeassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **rangeDisassociateConversationGroundingTemporalRangeWorkstreams** {#rangedisassociateconversationgroundingtemporalrangeworkstreams}
> rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]

This will enable us to disassociate a range from a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example {#rangedisassociateconversationgroundingtemporalrangeworkstreams-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeDisassociateConversationGroundingTemporalRangeWorkstreams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeDisassociateConversationGroundingTemporalRangeWorkstreams")
    e.printStackTrace()
}
```

### Parameters {#rangedisassociateconversationgroundingtemporalrangeworkstreams-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type {#rangedisassociateconversationgroundingtemporalrangeworkstreams-return-type}

null (empty response body)

### Authorization {#rangedisassociateconversationgroundingtemporalrangeworkstreams-authorization}

No authorization required

### HTTP request headers {#rangedisassociateconversationgroundingtemporalrangeworkstreams-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **rangeDisassociateWorkstreamSummary** {#rangedisassociateworkstreamsummary}
> rangeDisassociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a range from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#rangedisassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.rangeDisassociateWorkstreamSummary(range, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#rangedisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#rangedisassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#rangedisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#rangedisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **rangeScoresIncrement** {#rangescoresincrement}
> rangeScoresIncrement(range, seededScoreIncrement)

&#39;/range/\{range\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#rangescoresincrement-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.rangeScoresIncrement(range, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#rangescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#rangescoresincrement-return-type}

null (empty response body)

### Authorization {#rangescoresincrement-authorization}

No authorization required

### HTTP request headers {#rangescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **rangeUpdate** {#rangeupdate}
> Range rangeUpdate(range)

/range/update [POST]

This will update a specific range.

### Example {#rangeupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : Range =  // Range | 
try {
    val result : Range = apiInstance.rangeUpdate(range)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangeUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangeUpdate")
    e.printStackTrace()
}
```

### Parameters {#rangeupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**Range**](../models/Range)|  | [optional]

### Return type {#rangeupdate-return-type}

[**Range**](../models/Range)

### Authorization {#rangeupdate-authorization}

No authorization required

### HTTP request headers {#rangeupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **rangesSpecificRangeSnapshot** {#rangesspecificrangesnapshot}
> Range rangesSpecificRangeSnapshot(range)

/range/\{range\} [GET]

This will get a snapshot of a single range.

### Example {#rangesspecificrangesnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RangeApi()
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    val result : Range = apiInstance.rangesSpecificRangeSnapshot(range)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RangeApi#rangesSpecificRangeSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RangeApi#rangesSpecificRangeSnapshot")
    e.printStackTrace()
}
```

### Parameters {#rangesspecificrangesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type {#rangesspecificrangesnapshot-return-type}

[**Range**](../models/Range)

### Authorization {#rangesspecificrangesnapshot-authorization}

No authorization required

### HTTP request headers {#rangesspecificrangesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

