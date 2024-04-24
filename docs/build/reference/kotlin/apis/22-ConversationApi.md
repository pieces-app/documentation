---
title: Conversation API | Kotlin SDK
---

# Conversation API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationAssociateAnchor**](#conversationassociateanchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\} | /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
[**conversationAssociateAsset**](#conversationassociateasset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\} | /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
[**conversationAssociateGroundingTemporalRangeWorkstream**](#conversationassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/associate/\{range\} | /conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]
[**conversationAssociateWebsite**](#conversationassociatewebsite) | **POST** /conversation/\{conversation\}/websites/associate/\{website\} | /conversation/\{conversation\}/websites/associate/\{website\} [POST]
[**conversationAssociateWorkstreamSummary**](#conversationassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**conversationDisassociateAnchor**](#conversationdisassociateanchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\} | /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
[**conversationDisassociateAsset**](#conversationdisassociateasset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\} | /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
[**conversationDisassociateGroundingTemporalRangeWorkstream**](#conversationdisassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} | /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]
[**conversationDisassociateWebsite**](#conversationdisassociatewebsite) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\} | /website/\{website\}/websites/disassociate/\{website\} [POST]
[**conversationDisassociateWorkstreamSummary**](#conversationdisassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**conversationGetSpecificConversation**](#conversationgetspecificconversation) | **GET** /conversation/\{conversation\} | /conversation/\{conversation\} [GET]
[**conversationGroundingMessagesAssociateMessage**](#conversationgroundingmessagesassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\} | /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
[**conversationGroundingMessagesDisassociateMessage**](#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} | /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
[**conversationScoresIncrement**](#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment | /conversation/\{conversation\}/scores/increment [POST]
[**conversationSpecificConversationMessages**](#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversationSpecificConversationRename**](#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversationSummarize**](#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversationUpdate**](#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


## **conversationAssociateAnchor** {#conversationassociateanchor}
> conversationAssociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]

Updates both the anchor and the conversation, associating them together.

### Example {#conversationassociateanchor-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
try {
    apiInstance.conversationAssociateAnchor(conversation, anchor)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationAssociateAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationAssociateAnchor")
    e.printStackTrace()
}
```

### Parameters {#conversationassociateanchor-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type {#conversationassociateanchor-return-type}

null (empty response body)

### Authorization {#conversationassociateanchor-authorization}

No authorization required

### HTTP request headers {#conversationassociateanchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationAssociateAsset** {#conversationassociateasset}
> conversationAssociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/associate/\{asset\} [POST]

Updates both the asset and the conversation, associating the two together.

### Example {#conversationassociateasset-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.conversationAssociateAsset(conversation, asset)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationAssociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationAssociateAsset")
    e.printStackTrace()
}
```

### Parameters {#conversationassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#conversationassociateasset-return-type}

null (empty response body)

### Authorization {#conversationassociateasset-authorization}

No authorization required

### HTTP request headers {#conversationassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationAssociateGroundingTemporalRangeWorkstream** {#conversationassociategroundingtemporalrangeworkstream}
> conversationAssociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example {#conversationassociategroundingtemporalrangeworkstream-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    apiInstance.conversationAssociateGroundingTemporalRangeWorkstream(conversation, range)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationAssociateGroundingTemporalRangeWorkstream")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationAssociateGroundingTemporalRangeWorkstream")
    e.printStackTrace()
}
```

### Parameters {#conversationassociategroundingtemporalrangeworkstream-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type {#conversationassociategroundingtemporalrangeworkstream-return-type}

null (empty response body)

### Authorization {#conversationassociategroundingtemporalrangeworkstream-authorization}

No authorization required

### HTTP request headers {#conversationassociategroundingtemporalrangeworkstream-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationAssociateWebsite** {#conversationassociatewebsite}
> conversationAssociateWebsite(conversation, website)

/conversation/\{conversation\}/websites/associate/\{website\} [POST]

Updates both the website and the conversation, and associate them together.

### Example {#conversationassociatewebsite-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.conversationAssociateWebsite(conversation, website)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationAssociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationAssociateWebsite")
    e.printStackTrace()
}
```

### Parameters {#conversationassociatewebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **website** | **kotlin.String**| website id |

### Return type {#conversationassociatewebsite-return-type}

null (empty response body)

### Authorization {#conversationassociatewebsite-authorization}

No authorization required

### HTTP request headers {#conversationassociatewebsite-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationAssociateWorkstreamSummary** {#conversationassociateworkstreamsummary}
> conversationAssociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#conversationassociateworkstreamsummary-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.conversationAssociateWorkstreamSummary(conversation, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#conversationassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#conversationassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#conversationassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#conversationassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationDisassociateAnchor** {#conversationdisassociateanchor}
> conversationDisassociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]

Updates both the anchor and the conversation, deleting (disassociating) them simultaneously.

### Example {#conversationdisassociateanchor-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
try {
    apiInstance.conversationDisassociateAnchor(conversation, anchor)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationDisassociateAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationDisassociateAnchor")
    e.printStackTrace()
}
```

### Parameters {#conversationdisassociateanchor-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type {#conversationdisassociateanchor-return-type}

null (empty response body)

### Authorization {#conversationdisassociateanchor-authorization}

No authorization required

### HTTP request headers {#conversationdisassociateanchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationDisassociateAsset** {#conversationdisassociateasset}
> conversationDisassociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/delete/\{asset\} [POST]

Updates both the asset and the conversation, effectively disassociating them.

### Example {#conversationdisassociateasset-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.conversationDisassociateAsset(conversation, asset)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters {#conversationdisassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#conversationdisassociateasset-return-type}

null (empty response body)

### Authorization {#conversationdisassociateasset-authorization}

No authorization required

### HTTP request headers {#conversationdisassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationDisassociateGroundingTemporalRangeWorkstream** {#conversationdisassociategroundingtemporalrangeworkstream}
> conversationDisassociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example {#conversationdisassociategroundingtemporalrangeworkstream-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    apiInstance.conversationDisassociateGroundingTemporalRangeWorkstream(conversation, range)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationDisassociateGroundingTemporalRangeWorkstream")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationDisassociateGroundingTemporalRangeWorkstream")
    e.printStackTrace()
}
```

### Parameters {#conversationdisassociategroundingtemporalrangeworkstream-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type {#conversationdisassociategroundingtemporalrangeworkstream-return-type}

null (empty response body)

### Authorization {#conversationdisassociategroundingtemporalrangeworkstream-authorization}

No authorization required

### HTTP request headers {#conversationdisassociategroundingtemporalrangeworkstream-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationDisassociateWebsite** {#conversationdisassociatewebsite}
> conversationDisassociateWebsite(conversation, website)

/website/\{website\}/websites/disassociate/\{website\} [POST]

Allows us to disassociate a conversation from a specific website

### Example {#conversationdisassociatewebsite-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.conversationDisassociateWebsite(conversation, website)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationDisassociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationDisassociateWebsite")
    e.printStackTrace()
}
```

### Parameters {#conversationdisassociatewebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **website** | **kotlin.String**| website id |

### Return type {#conversationdisassociatewebsite-return-type}

null (empty response body)

### Authorization {#conversationdisassociatewebsite-authorization}

No authorization required

### HTTP request headers {#conversationdisassociatewebsite-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationDisassociateWorkstreamSummary** {#conversationdisassociateworkstreamsummary}
> conversationDisassociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#conversationdisassociateworkstreamsummary-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.conversationDisassociateWorkstreamSummary(conversation, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#conversationdisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#conversationdisassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#conversationdisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#conversationdisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationGetSpecificConversation** {#conversationgetspecificconversation}
> Conversation conversationGetSpecificConversation(conversation, transferables)

/conversation/\{conversation\} [GET]

Retrieves a specific conversation.

### Example {#conversationgetspecificconversation-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Conversation = apiInstance.conversationGetSpecificConversation(conversation, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationGetSpecificConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationGetSpecificConversation")
    e.printStackTrace()
}
```

### Parameters {#conversationgetspecificconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#conversationgetspecificconversation-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversationgetspecificconversation-authorization}

No authorization required

### HTTP request headers {#conversationgetspecificconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationGroundingMessagesAssociateMessage** {#conversationgroundingmessagesassociatemessage}
> conversationGroundingMessagesAssociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]

Stores the grounding context for a conversation. It allows to associate a message with the conversation&#39;s grounding object, facilitating contextual understanding and management of the conversation.

### Example {#conversationgroundingmessagesassociatemessage-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
try {
    apiInstance.conversationGroundingMessagesAssociateMessage(conversation, message)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationGroundingMessagesAssociateMessage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationGroundingMessagesAssociateMessage")
    e.printStackTrace()
}
```

### Parameters {#conversationgroundingmessagesassociatemessage-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type {#conversationgroundingmessagesassociatemessage-return-type}

null (empty response body)

### Authorization {#conversationgroundingmessagesassociatemessage-authorization}

No authorization required

### HTTP request headers {#conversationgroundingmessagesassociatemessage-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationGroundingMessagesDisassociateMessage** {#conversationgroundingmessagesdisassociatemessage}
> conversationGroundingMessagesDisassociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]

Removes a specific grounding context for a conversation, and allows us to disassociate a message from the conversation&#39;s grounding object.

### Example {#conversationgroundingmessagesdisassociatemessage-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
try {
    apiInstance.conversationGroundingMessagesDisassociateMessage(conversation, message)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationGroundingMessagesDisassociateMessage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationGroundingMessagesDisassociateMessage")
    e.printStackTrace()
}
```

### Parameters {#conversationgroundingmessagesdisassociatemessage-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type {#conversationgroundingmessagesdisassociatemessage-return-type}

null (empty response body)

### Authorization {#conversationgroundingmessagesdisassociatemessage-authorization}

No authorization required

### HTTP request headers {#conversationgroundingmessagesdisassociatemessage-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationScoresIncrement** {#conversationscoresincrement}
> conversationScoresIncrement(conversation, seededScoreIncrement)

/conversation/\{conversation\}/scores/increment [POST]

Increment scores associated with a conversation. It accepts a SeededScoreIncrement object as input to adjust the scores accordingly based on the provided data.

### Example {#conversationscoresincrement-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.conversationScoresIncrement(conversation, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#conversationscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#conversationscoresincrement-return-type}

null (empty response body)

### Authorization {#conversationscoresincrement-authorization}

No authorization required

### HTTP request headers {#conversationscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **conversationSpecificConversationMessages** {#conversationspecificconversationmessages}
> ConversationMessages conversationSpecificConversationMessages(conversation, transferables)

/conversation/\{conversation\}/messages [GET]

Retrieves messages specific to a particular conversation.

### Example {#conversationspecificconversationmessages-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : ConversationMessages = apiInstance.conversationSpecificConversationMessages(conversation, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationSpecificConversationMessages")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationSpecificConversationMessages")
    e.printStackTrace()
}
```

### Parameters {#conversationspecificconversationmessages-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#conversationspecificconversationmessages-return-type}

[**ConversationMessages**](../models/ConversationMessages)

### Authorization {#conversationspecificconversationmessages-authorization}

No authorization required

### HTTP request headers {#conversationspecificconversationmessages-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationSpecificConversationRename** {#conversationspecificconversationrename}
> Conversation conversationSpecificConversationRename(conversation, transferables)

/conversation/\{conversation\}/rename [POST]

Renames a specific conversation using machine learning (ML) techniques.

### Example {#conversationspecificconversationrename-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Conversation = apiInstance.conversationSpecificConversationRename(conversation, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationSpecificConversationRename")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationSpecificConversationRename")
    e.printStackTrace()
}
```

### Parameters {#conversationspecificconversationrename-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#conversationspecificconversationrename-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversationspecificconversationrename-authorization}

No authorization required

### HTTP request headers {#conversationspecificconversationrename-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationSummarize** {#conversationsummarize}
> ConversationSummarizeOutput conversationSummarize(conversation, conversationSummarizeInput)

/conversation/\{conversation\}/summarize [POST]

Generates a summary of a given conversation and saves it as an annotation associated with the conversation. It returns a reference to the annotation, which serves as the summary.

### Example {#conversationsummarize-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
val conversationSummarizeInput : ConversationSummarizeInput =  // ConversationSummarizeInput | 
try {
    val result : ConversationSummarizeOutput = apiInstance.conversationSummarize(conversation, conversationSummarizeInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationSummarize")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationSummarize")
    e.printStackTrace()
}
```

### Parameters {#conversationsummarize-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **conversationSummarizeInput** | [**ConversationSummarizeInput**](../models/ConversationSummarizeInput)|  | [optional]

### Return type {#conversationsummarize-return-type}

[**ConversationSummarizeOutput**](../models/ConversationSummarizeOutput)

### Authorization {#conversationsummarize-authorization}

No authorization required

### HTTP request headers {#conversationsummarize-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **conversationUpdate** {#conversationupdate}
> Conversation conversationUpdate(transferables, conversation)

/conversation/update [POST]

Updates a specific conversation.

### Example {#conversationupdate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val conversation : Conversation =  // Conversation | 
try {
    val result : Conversation = apiInstance.conversationUpdate(transferables, conversation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationApi#conversationUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationApi#conversationUpdate")
    e.printStackTrace()
}
```

### Parameters {#conversationupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversation** | [**Conversation**](../models/Conversation)|  | [optional]

### Return type {#conversationupdate-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversationupdate-authorization}

No authorization required

### HTTP request headers {#conversationupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

