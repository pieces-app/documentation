# Range API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**rangeAssociateConversationGroundingTemporalRangeWorkstreams**](#rangeassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\}
[**rangeAssociateWorkstreamSummary**](#rangeassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/associate/\{workstream_summary\}
[**rangeDisassociateConversationGroundingTemporalRangeWorkstreams**](#rangedisassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\}
[**rangeDisassociateWorkstreamSummary**](#rangedisassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\}
[**rangeScoresIncrement**](#rangescoresincrement) | **POST** /range/\{range\}/scores/increment
[**rangeUpdate**](#rangeupdate) | **POST** /range/update
[**rangesSpecificRangeSnapshot**](#rangesspecificrangesnapshot) | **GET** /range/\{range\}


<a id="rangeAssociateConversationGroundingTemporalRangeWorkstreams"></a>
## **rangeAssociateConversationGroundingTemporalRangeWorkstreams** {#rangeassociateconversationgroundingtemporalrangeworkstreams}
> rangeAssociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]

This will associate a range with a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **kotlin.String**| This is the uuid of a conversation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rangeAssociateWorkstreamSummary"></a>
## **rangeAssociateWorkstreamSummary** {#rangeassociateworkstreamsummary}
> rangeAssociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a range with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rangeDisassociateConversationGroundingTemporalRangeWorkstreams"></a>
## **rangeDisassociateConversationGroundingTemporalRangeWorkstreams** {#rangedisassociateconversationgroundingtemporalrangeworkstreams}
> rangeDisassociateConversationGroundingTemporalRangeWorkstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]

This will enable us to disassociate a range from a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **kotlin.String**| This is the uuid of a conversation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rangeDisassociateWorkstreamSummary"></a>
## **rangeDisassociateWorkstreamSummary** {#rangedisassociateworkstreamsummary}
> rangeDisassociateWorkstreamSummary(range, workstreamSummary)

/range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a range from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rangeScoresIncrement"></a>
## **rangeScoresIncrement** {#rangescoresincrement}
> rangeScoresIncrement(range, seededScoreIncrement)

&#39;/range/\{range\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="rangeUpdate"></a>
## **rangeUpdate** {#rangeupdate}
> Range rangeUpdate(range)

/range/update [POST]

This will update a specific range.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**Range**](../models/Range)|  | [optional] 

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="rangesSpecificRangeSnapshot"></a>
## **rangesSpecificRangeSnapshot** {#rangesspecificrangesnapshot}
> Range rangesSpecificRangeSnapshot(range)

/range/\{range\} [GET]

This will get a snapshot of a single range.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. | 

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

