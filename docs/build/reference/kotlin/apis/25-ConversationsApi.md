---
title: Conversations API | Kotlin SDK
---

# Conversations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [WS]


## **conversationsCreateFromAsset** {#conversationscreatefromasset}
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset(asset)

/conversations/create/from_asset/\{asset\} [POST]

Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.

### Example {#conversationscreatefromasset-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    val result : ConversationsCreateFromAssetOutput = apiInstance.conversationsCreateFromAsset(asset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsCreateFromAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsCreateFromAsset")
    e.printStackTrace()
}
```

### Parameters {#conversationscreatefromasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#conversationscreatefromasset-return-type}

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### Authorization {#conversationscreatefromasset-authorization}

No authorization required

### HTTP request headers {#conversationscreatefromasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation(transferables, seededConversation)

/conversations/create [POST]

Creates a specific conversation.

### Example {#conversationscreatespecificconversation-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededConversation : SeededConversation =  // SeededConversation | 
try {
    val result : Conversation = apiInstance.conversationsCreateSpecificConversation(transferables, seededConversation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsCreateSpecificConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsCreateSpecificConversation")
    e.printStackTrace()
}
```

### Parameters {#conversationscreatespecificconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededConversation** | [**SeededConversation**](../models/SeededConversation)|  | [optional]

### Return type {#conversationscreatespecificconversation-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversationscreatespecificconversation-authorization}

No authorization required

### HTTP request headers {#conversationscreatespecificconversation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation(conversation)

/conversations/\{conversation\}/delete [POST]

Deletes a specific conversation.

### Example {#conversationsdeletespecificconversation-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.conversationsDeleteSpecificConversation(conversation)
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsDeleteSpecificConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsDeleteSpecificConversation")
    e.printStackTrace()
}
```

### Parameters {#conversationsdeletespecificconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type {#conversationsdeletespecificconversation-return-type}

null (empty response body)

### Authorization {#conversationsdeletespecificconversation-authorization}

No authorization required

### HTTP request headers {#conversationsdeletespecificconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

/conversations/identifiers [GET]

Retrieves all the UUIDs associated with a Conversation.

### Example {#conversationsidentifierssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
try {
    val result : FlattenedConversations = apiInstance.conversationsIdentifiersSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsIdentifiersSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsIdentifiersSnapshot")
    e.printStackTrace()
}
```

### Parameters {#conversationsidentifierssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#conversationsidentifierssnapshot-return-type}

[**FlattenedConversations**](../models/FlattenedConversations)

### Authorization {#conversationsidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#conversationsidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot(transferables)

/conversations [GET]

Retrieves a snapshot of a specific conversation.

### Example {#conversationssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Conversations = apiInstance.conversationsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#conversationssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#conversationssnapshot-return-type}

[**Conversations**](../models/Conversations)

### Authorization {#conversationssnapshot-authorization}

No authorization required

### HTTP request headers {#conversationssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

/conversations/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).

### Example {#conversationsstreamidentifiers-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Conversations API()
try {
    apiInstance.conversationsStreamIdentifiers()
} catch (e: ClientException) {
    println("4xx response calling Conversations API#conversationsStreamIdentifiers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Conversations API#conversationsStreamIdentifiers")
    e.printStackTrace()
}
```

### Parameters {#conversationsstreamidentifiers-parameters}
This endpoint does not need any parameter.

### Return type {#conversationsstreamidentifiers-return-type}

null (empty response body)

### Authorization {#conversationsstreamidentifiers-authorization}

No authorization required

### HTTP request headers {#conversationsstreamidentifiers-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

