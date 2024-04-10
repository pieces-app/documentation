# Conversations API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**conversationsCreateFromAsset**](#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\}
[**conversationsCreateSpecificConversation**](#conversationscreatespecificconversation) | **POST** /conversations/create
[**conversationsDeleteSpecificConversation**](#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete
[**conversationsIdentifiersSnapshot**](#conversationsidentifierssnapshot) | **GET** /conversations/identifiers
[**conversationsSnapshot**](#conversationssnapshot) | **GET** /conversations
[**conversationsStreamIdentifiers**](#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers


<a id="conversationsCreateFromAsset"></a>
## **conversationsCreateFromAsset** {#conversationscreatefromasset}
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset(asset)

/conversations/create/from_asset/\{asset\} [POST]

This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsCreateSpecificConversation"></a>
## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation(transferables, seededConversation)

/conversations/create [POST]

This will create a specific conversation.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
 **seededConversation** | [**SeededConversation**](../models/SeededConversation)|  | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="conversationsDeleteSpecificConversation"></a>
## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation(conversation)

/conversations/\{conversation\}/delete [POST]

This will delete a specific Conversation.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

/conversations/identifiers [GET]

This will get all the uuids of a Conversation.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

[**FlattenedConversations**](../models/FlattenedConversations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsSnapshot"></a>
## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot(transferables)

/conversations [GET]

This will return a snapshot of a specific conversation

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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

[**Conversations**](../models/Conversations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="conversationsStreamIdentifiers"></a>
## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

/conversations/stream/identifiers [STREAMED]

This is a stream for the conversation identifiers. will return StreamedIdentifiers.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

