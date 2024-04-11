# Conversation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**conversationAssociateAnchor**](#conversationassociateanchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\}
[**conversationAssociateAsset**](#conversationassociateasset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\}
[**conversationAssociateGroundingTemporalRangeWorkstream**](#conversationassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/associate/\{range\}
[**conversationAssociateWebsite**](#conversationassociatewebsite) | **POST** /conversation/\{conversation\}/websites/associate/\{website\}
[**conversationAssociateWorkstreamSummary**](#conversationassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\}
[**conversationDisassociateAnchor**](#conversationdisassociateanchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\}
[**conversationDisassociateAsset**](#conversationdisassociateasset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\}
[**conversationDisassociateGroundingTemporalRangeWorkstream**](#conversationdisassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\}
[**conversationDisassociateWebsite**](#conversationdisassociatewebsite) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\}
[**conversationDisassociateWorkstreamSummary**](#conversationdisassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\}
[**conversationGetSpecificConversation**](#conversationgetspecificconversation) | **GET** /conversation/\{conversation\}
[**conversationGroundingMessagesAssociateMessage**](#conversationgroundingmessagesassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\}
[**conversationGroundingMessagesDisassociateMessage**](#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\}
[**conversationScoresIncrement**](#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment
[**conversationSpecificConversationMessages**](#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages
[**conversationSpecificConversationRename**](#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename
[**conversationSummarize**](#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize
[**conversationUpdate**](#conversationupdate) | **POST** /conversation/update


## **conversationAssociateAnchor** {#conversationassociateanchor}
> conversationAssociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]

Updates both the anchor and the conversation, associating them together.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationAssociateAsset** {#conversationassociateasset}
> conversationAssociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/associate/\{asset\} [POST]

Updates both the asset and the conversation, associating the two together.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationAssociateGroundingTemporalRangeWorkstream** {#conversationassociategroundingtemporalrangeworkstream}
> conversationAssociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationAssociateWebsite** {#conversationassociatewebsite}
> conversationAssociateWebsite(conversation, website)

/conversation/\{conversation\}/websites/associate/\{website\} [POST]

Updates both the website and the conversation, and associate them together.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationAssociateWorkstreamSummary** {#conversationassociateworkstreamsummary}
> conversationAssociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationDisassociateAnchor** {#conversationdisassociateanchor}
> conversationDisassociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]

Updates both the anchor and the conversation, deleting (disassociating) them simultaneously.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationDisassociateAsset** {#conversationdisassociateasset}
> conversationDisassociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/delete/\{asset\} [POST]

Updates both the asset and the conversation, effectively disassociating them.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationDisassociateGroundingTemporalRangeWorkstream** {#conversationdisassociategroundingtemporalrangeworkstream}
> conversationDisassociateGroundingTemporalRangeWorkstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationDisassociateWebsite** {#conversationdisassociatewebsite}
> conversationDisassociateWebsite(conversation, website)

/website/\{website\}/websites/disassociate/\{website\} [POST]

Allows us to disassociate a conversation from a specific website

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationDisassociateWorkstreamSummary** {#conversationdisassociateworkstreamsummary}
> conversationDisassociateWorkstreamSummary(conversation, workstreamSummary)

/conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationGetSpecificConversation** {#conversationgetspecificconversation}
> Conversation conversationGetSpecificConversation(conversation, transferables)

/conversation/\{conversation\} [GET]

Retrieves a specific conversation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationGroundingMessagesAssociateMessage** {#conversationgroundingmessagesassociatemessage}
> conversationGroundingMessagesAssociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]

Stores the grounding context for a conversation. It allows to associate a message with the conversation&#39;s grounding object, facilitating contextual understanding and management of the conversation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationGroundingMessagesDisassociateMessage** {#conversationgroundingmessagesdisassociatemessage}
> conversationGroundingMessagesDisassociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]

Removes a specific grounding context for a conversation, and allows us to disassociate a message from the conversation&#39;s grounding object.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationScoresIncrement** {#conversationscoresincrement}
> conversationScoresIncrement(conversation, seededScoreIncrement)

/conversation/\{conversation\}/scores/increment [POST]

Increment scores associated with a conversation. It accepts a SeededScoreIncrement object as input to adjust the scores accordingly based on the provided data.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **conversationSpecificConversationMessages** {#conversationspecificconversationmessages}
> ConversationMessages conversationSpecificConversationMessages(conversation, transferables)

/conversation/\{conversation\}/messages [GET]

Retrieves messages specific to a particular conversation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**ConversationMessages**](../models/ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationSpecificConversationRename** {#conversationspecificconversationrename}
> Conversation conversationSpecificConversationRename(conversation, transferables)

/conversation/\{conversation\}/rename [POST]

Renames a specific conversation using machine learning (ML) techniques.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationSummarize** {#conversationsummarize}
> ConversationSummarizeOutput conversationSummarize(conversation, conversationSummarizeInput)

/conversation/\{conversation\}/summarize [POST]

Generates a summary of a given conversation and saves it as an annotation associated with the conversation. It returns a reference to the annotation, which serves as the summary.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |
 **conversationSummarizeInput** | [**ConversationSummarizeInput**](../models/ConversationSummarizeInput)|  | [optional]

### Return type

[**ConversationSummarizeOutput**](../models/ConversationSummarizeOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **conversationUpdate** {#conversationupdate}
> Conversation conversationUpdate(transferables, conversation)

/conversation/update [POST]

Updates a specific conversation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversation** | [**Conversation**](../models/Conversation)|  | [optional]

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

