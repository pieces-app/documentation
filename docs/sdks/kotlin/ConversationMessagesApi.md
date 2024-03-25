# ConversationMessages API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagesCreateSpecificMessage**](ConversationMessagesApi#messagesCreateSpecificMessage) | **POST** /messages/create | /messages/create [POST]
[**messagesDeleteSpecificMessage**](ConversationMessagesApi#messagesDeleteSpecificMessage) | **POST** /messages/\{message\}/delete | /messages/\{message\}/delete [POST]
[**messagesSnapshot**](ConversationMessagesApi#messagesSnapshot) | **GET** /messages | /messages [GET]


<a id="messagesCreateSpecificMessage"></a>
## **messagesCreateSpecificMessage**
> ConversationMessage messagesCreateSpecificMessage(transferables, seededConversationMessage)

/messages/create [POST]

This will create a Message on a specific conversation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 **seededConversationMessage** | [**SeededConversationMessage**](SeededConversationMessage)|  | [optional]

### Return type

[**ConversationMessage**](ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="messagesDeleteSpecificMessage"></a>
## **messagesDeleteSpecificMessage**
> messagesDeleteSpecificMessage(message)

/messages/\{message\}/delete [POST]

This will delete a specific message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="messagesSnapshot"></a>
## **messagesSnapshot**
> ConversationMessages messagesSnapshot(transferables)

/messages [GET]

This will get all the messages.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**ConversationMessages**](ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

