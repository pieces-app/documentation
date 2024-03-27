# Conversation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationAssociateAnchor**](ConversationApi.md#conversationassociateanchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\} | /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
[**conversationAssociateAsset**](ConversationApi.md#conversationassociateasset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\} | /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
[**conversationAssociateWebsite**](ConversationApi.md#conversationassociatewebsite) | **POST** /conversation/\{conversation\}/websites/associate/\{website\} | /conversation/\{conversation\}/websites/associate/\{website\} [POST]
[**conversationDisassociateAnchor**](ConversationApi.md#conversationdisassociateanchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\} | /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
[**conversationDisassociateAsset**](ConversationApi.md#conversationdisassociateasset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\} | /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
[**conversationDisassociateWebsite**](ConversationApi.md#conversationdisassociatewebsite) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\} | /website/\{website\}/websites/disassociate/\{website\} [POST]
[**conversationGetSpecificConversation**](ConversationApi.md#conversationgetspecificconversation) | **GET** /conversation/\{conversation\} | /conversation/\{conversation\} [GET]
[**conversationGroundingMessagesAssociateMessage**](ConversationApi.md#conversationgroundingmessagesassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\} | /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
[**conversationGroundingMessagesDisassociateMessage**](ConversationApi.md#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} | /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
[**conversationScoresIncrement**](ConversationApi.md#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment | &#39;/conversation/\{conversation\}/scores/increment&#39; [POST]
[**conversationSpecificConversationMessages**](ConversationApi.md#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversationSpecificConversationRename**](ConversationApi.md#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversationSummarize**](ConversationApi.md#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversationUpdate**](ConversationApi.md#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


<a id="conversationAssociateAnchor"></a>
## **conversationAssociateAnchor**
> conversationAssociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]

This will update both the anchor and the conversation.  and associate the 2 together

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationAssociateAsset"></a>
## **conversationAssociateAsset**
> conversationAssociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/associate/\{asset\} [POST]

This will update both the asset and the conversation.  and associate the 2 together

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationAssociateWebsite"></a>
## **conversationAssociateWebsite**
> conversationAssociateWebsite(conversation, website)

/conversation/\{conversation\}/websites/associate/\{website\} [POST]

This will update both the website and the conversation.  and associate the 2 together

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationDisassociateAnchor"></a>
## **conversationDisassociateAnchor**
> conversationDisassociateAnchor(conversation, anchor)

/conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]

This will update both the anchor and the conversation.  and delete(disassociate) the 2 together

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationDisassociateAsset"></a>
## **conversationDisassociateAsset**
> conversationDisassociateAsset(conversation, asset)

/conversation/\{conversation\}/assets/delete/\{asset\} [POST]

This will update both the asset and the conversation.  and delete(disassociate) the 2.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationDisassociateWebsite"></a>
## **conversationDisassociateWebsite**
> conversationDisassociateWebsite(conversation, website)

/website/\{website\}/websites/disassociate/\{website\} [POST]

This will enable us to dissassociate a conversation from a website.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationGetSpecificConversation"></a>
## **conversationGetSpecificConversation**
> Conversation conversationGetSpecificConversation(conversation, transferables)

/conversation/\{conversation\} [GET]

This will get a specific conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Conversation**](Conversation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationGroundingMessagesAssociateMessage"></a>
## **conversationGroundingMessagesAssociateMessage**
> conversationGroundingMessagesAssociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]

This will save the grounding context for a conversation. This will enable us to associate a message to the conversation.grounding object.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationGroundingMessagesDisassociateMessage"></a>
## **conversationGroundingMessagesDisassociateMessage**
> conversationGroundingMessagesDisassociateMessage(conversation, message)

/conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]

This will remove specific grounding context for a conversation. This will enable us to dissassociate a message from the conversation.grounding object.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="conversationScoresIncrement"></a>
## **conversationScoresIncrement**
> conversationScoresIncrement(conversation, seededScoreIncrement)

&#39;/conversation/\{conversation\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="conversationSpecificConversationMessages"></a>
## **conversationSpecificConversationMessages**
> ConversationMessages conversationSpecificConversationMessages(conversation, transferables)

/conversation/\{conversation\}/messages [GET]

This will get a specific conversations messages

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**ConversationMessages**](ConversationMessages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationSpecificConversationRename"></a>
## **conversationSpecificConversationRename**
> Conversation conversationSpecificConversationRename(conversation, transferables)

/conversation/\{conversation\}/rename [POST]

This will take a specific converssation and it will rename using ML.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Conversation**](Conversation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationSummarize"></a>
## **conversationSummarize**
> ConversationSummarizeOutput conversationSummarize(conversation, conversationSummarizeInput)

/conversation/\{conversation\}/summarize [POST]

This will take a current conversation and create a summary of the conversation and save it as an annotation on the conversation.  will return the annotation reference used as the summary.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 **conversationSummarizeInput** | [**ConversationSummarizeInput**](ConversationSummarizeInput.md)|  | [optional]

### Return type

[**ConversationSummarizeOutput**](ConversationSummarizeOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="conversationUpdate"></a>
## **conversationUpdate**
> Conversation conversationUpdate(transferables, conversation)

/conversation/update [POST]

This will update a specific conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 **conversation** | [**Conversation**](Conversation.md)|  | [optional]

### Return type

[**Conversation**](Conversation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

