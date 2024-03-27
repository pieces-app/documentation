# Conversations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](ConversationsApi.md#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](ConversationsApi.md#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](ConversationsApi.md#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](ConversationsApi.md#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](ConversationsApi.md#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](ConversationsApi.md#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [STREAMED]


<a id="conversationsCreateFromAsset"></a>
## **conversationsCreateFromAsset**
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset(asset)

/conversations/create/from_asset/\{asset\} [POST]

This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    val result : ConversationsCreateFromAssetOutput = apiInstance.conversationsCreateFromAsset(asset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsCreateFromAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsCreateFromAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

[**ConversationsCreateFromAssetOutput**](ConversationsCreateFromAssetOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsCreateSpecificConversation"></a>
## **conversationsCreateSpecificConversation**
> Conversation conversationsCreateSpecificConversation(transferables, seededConversation)

/conversations/create [POST]

This will create a specific conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededConversation : SeededConversation =  // SeededConversation | 
try {
    val result : Conversation = apiInstance.conversationsCreateSpecificConversation(transferables, seededConversation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsCreateSpecificConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsCreateSpecificConversation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededConversation** | [**SeededConversation**](SeededConversation.md)|  | [optional]

### Return type

[**Conversation**](Conversation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="conversationsDeleteSpecificConversation"></a>
## **conversationsDeleteSpecificConversation**
> conversationsDeleteSpecificConversation(conversation)

/conversations/\{conversation\}/delete [POST]

This will delete a specific Conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.conversationsDeleteSpecificConversation(conversation)
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsDeleteSpecificConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsDeleteSpecificConversation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsIdentifiersSnapshot"></a>
## **conversationsIdentifiersSnapshot**
> FlattenedConversations conversationsIdentifiersSnapshot()

/conversations/identifiers [GET]

This will get all the uuids of a Conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
try {
    val result : FlattenedConversations = apiInstance.conversationsIdentifiersSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsIdentifiersSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsIdentifiersSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FlattenedConversations**](FlattenedConversations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsSnapshot"></a>
## **conversationsSnapshot**
> Conversations conversationsSnapshot(transferables)

/conversations [GET]

This will return a snapshot of a specific conversation

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Conversations = apiInstance.conversationsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Conversations**](Conversations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsStreamIdentifiers"></a>
## **conversationsStreamIdentifiers**
> conversationsStreamIdentifiers()

/conversations/stream/identifiers [STREAMED]

This is a stream for the conversation identifiers. will return StreamedIdentifiers.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationsApi()
try {
    apiInstance.conversationsStreamIdentifiers()
} catch (e: ClientException) {
    println("4xx response calling ConversationsApi#conversationsStreamIdentifiers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationsApi#conversationsStreamIdentifiers")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

