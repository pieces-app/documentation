# ConversationMessages API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagesCreateSpecificMessage**](#messagescreatespecificmessage) | **POST** /messages/create | /messages/create [POST]
[**messagesDeleteSpecificMessage**](#messagesdeletespecificmessage) | **POST** /messages/\{message\}/delete | /messages/\{message\}/delete [POST]
[**messagesSnapshot**](#messagessnapshot) | **GET** /messages | /messages [GET]


## **messagesCreateSpecificMessage** {#messagescreatespecificmessage}
> ConversationMessage messagesCreateSpecificMessage(transferables, seededConversationMessage)

/messages/create [POST]

This will create a Message on a specific conversation.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationMessagesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededConversationMessage : SeededConversationMessage =  // SeededConversationMessage | 
try {
    val result : ConversationMessage = apiInstance.messagesCreateSpecificMessage(transferables, seededConversationMessage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessagesApi#messagesCreateSpecificMessage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessagesApi#messagesCreateSpecificMessage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededConversationMessage** | [**SeededConversationMessage**](../models/SeededConversationMessage)|  | [optional]

### Return type

[**ConversationMessage**](../models/ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **messagesDeleteSpecificMessage** {#messagesdeletespecificmessage}
> messagesDeleteSpecificMessage(message)

/messages/\{message\}/delete [POST]

This will delete a specific message.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationMessagesApi()
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
try {
    apiInstance.messagesDeleteSpecificMessage(message)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessagesApi#messagesDeleteSpecificMessage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessagesApi#messagesDeleteSpecificMessage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **messagesSnapshot** {#messagessnapshot}
> ConversationMessages messagesSnapshot(transferables)

/messages [GET]

This will get all the messages.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConversationMessagesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : ConversationMessages = apiInstance.messagesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessagesApi#messagesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessagesApi#messagesSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**ConversationMessages**](../models/ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

