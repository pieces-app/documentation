# ConversationMessage API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageAssociateAnnotation**](#messageassociateannotation) | **POST** /message/\{message\}/annotations/associate/\{annotation\} | /message/\{message\}/annotations/associate/\{annotation\} [POST]
[**messageDisassociateAnnotation**](#messagedisassociateannotation) | **POST** /message/\{message\}/annotations/disassociate/\{annotation\} | /message/\{message\}/annotations/disassociate/\{annotation\} [POST]
[**messageScoresIncrement**](#messagescoresincrement) | **POST** /message/\{message\}/scores/increment | &#39;/message/\{message\}/scores/increment&#39; [POST]
[**messageSpecificMessageSnapshot**](#messagespecificmessagesnapshot) | **GET** /message/\{message\} | /message/\{message\} [GET]
[**messageSpecificMessageUpdate**](#messagespecificmessageupdate) | **POST** /message/update | /message/update [GET]
[**messageUpdateValue**](#messageupdatevalue) | **POST** /message/update/value | /message/update/value [POST]


<a id="messageAssociateAnnotation"></a>
## **messageAssociateAnnotation**
> messageAssociateAnnotation(`annotation`, message)

/message/\{message\}/annotations/associate/\{annotation\} [POST]

This will associate a message with an annotation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val `annotation` : kotlin.String = `annotation`_example // kotlin.String | This is a specific annotation uuid.
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
try {
    apiInstance.messageAssociateAnnotation(`annotation`, message)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageAssociateAnnotation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageAssociateAnnotation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="messageDisassociateAnnotation"></a>
## **messageDisassociateAnnotation**
> messageDisassociateAnnotation(`annotation`, message)

/message/\{message\}/annotations/disassociate/\{annotation\} [POST]

This will enable us to dissassociate a message from an annotation.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val `annotation` : kotlin.String = `annotation`_example // kotlin.String | This is a specific annotation uuid.
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
try {
    apiInstance.messageDisassociateAnnotation(`annotation`, message)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageDisassociateAnnotation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageDisassociateAnnotation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="messageScoresIncrement"></a>
## **messageScoresIncrement**
> messageScoresIncrement(message, seededScoreIncrement)

&#39;/message/\{message\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.messageScoresIncrement(message, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **kotlin.String**| This is the uuid of a message. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="messageSpecificMessageSnapshot"></a>
## **messageSpecificMessageSnapshot**
> ConversationMessage messageSpecificMessageSnapshot(message, transferables)

/message/\{message\} [GET]

This will get a specific snapshot of a message

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val message : kotlin.String = message_example // kotlin.String | This is the uuid of a message.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : ConversationMessage = apiInstance.messageSpecificMessageSnapshot(message, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageSpecificMessageSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageSpecificMessageSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **kotlin.String**| This is the uuid of a message. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**ConversationMessage**](../models/ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="messageSpecificMessageUpdate"></a>
## **messageSpecificMessageUpdate**
> ConversationMessage messageSpecificMessageUpdate(transferables, conversationMessage)

/message/update [GET]

This will update a conversation message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val conversationMessage : ConversationMessage =  // ConversationMessage | 
try {
    val result : ConversationMessage = apiInstance.messageSpecificMessageUpdate(transferables, conversationMessage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageSpecificMessageUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageSpecificMessageUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversationMessage** | [**ConversationMessage**](../models/ConversationMessage)|  | [optional]

### Return type

[**ConversationMessage**](../models/ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="messageUpdateValue"></a>
## **messageUpdateValue**
> ConversationMessage messageUpdateValue(transferables, conversationMessage)

/message/update/value [POST]

This will update the value of a conversation message.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ConversationMessageApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val conversationMessage : ConversationMessage =  // ConversationMessage | 
try {
    val result : ConversationMessage = apiInstance.messageUpdateValue(transferables, conversationMessage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConversationMessageApi#messageUpdateValue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConversationMessageApi#messageUpdateValue")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversationMessage** | [**ConversationMessage**](../models/ConversationMessage)|  | [optional]

### Return type

[**ConversationMessage**](../models/ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

