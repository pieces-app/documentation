---
title: ConversationMessage API | Kotlin SDK
---

# ConversationMessage API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageAssociateAnnotation**](#messageassociateannotation) | **POST** /message/\{message\}/annotations/associate/\{annotation\} | /message/\{message\}/annotations/associate/\{annotation\} [POST]
[**messageDisassociateAnnotation**](#messagedisassociateannotation) | **POST** /message/\{message\}/annotations/disassociate/\{annotation\} | /message/\{message\}/annotations/disassociate/\{annotation\} [POST]
[**messageScoresIncrement**](#messagescoresincrement) | **POST** /message/\{message\}/scores/increment | '/message/\{message\}/scores/increment' [POST]
[**messageSpecificMessageSnapshot**](#messagespecificmessagesnapshot) | **GET** /message/\{message\} | /message/\{message\} [GET]
[**messageSpecificMessageUpdate**](#messagespecificmessageupdate) | **POST** /message/update | /message/update [GET]
[**messageUpdateValue**](#messageupdatevalue) | **POST** /message/update/value | /message/update/value [POST]


## **messageAssociateAnnotation** {#messageassociateannotation}
> messageAssociateAnnotation(`annotation`, message)

/message/\{message\}/annotations/associate/\{annotation\} [POST]

This will associate a message with an annotation.

### Example {#messageassociateannotation-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messageassociateannotation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type {#messageassociateannotation-return-type}

null (empty response body)

### Authorization {#messageassociateannotation-authorization}

No authorization required

### HTTP request headers {#messageassociateannotation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **messageDisassociateAnnotation** {#messagedisassociateannotation}
> messageDisassociateAnnotation(`annotation`, message)

/message/\{message\}/annotations/disassociate/\{annotation\} [POST]

This will enable us to dissassociate a message from an annotation.

### Example {#messagedisassociateannotation-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messagedisassociateannotation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **&#x60;annotation&#x60;** | **kotlin.String**| This is a specific annotation uuid. |
 **message** | **kotlin.String**| This is the uuid of a message. |

### Return type {#messagedisassociateannotation-return-type}

null (empty response body)

### Authorization {#messagedisassociateannotation-authorization}

No authorization required

### HTTP request headers {#messagedisassociateannotation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **messageScoresIncrement** {#messagescoresincrement}
> messageScoresIncrement(message, seededScoreIncrement)

&#39;/message/\{message\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#messagescoresincrement-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messagescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **kotlin.String**| This is the uuid of a message. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#messagescoresincrement-return-type}

null (empty response body)

### Authorization {#messagescoresincrement-authorization}

No authorization required

### HTTP request headers {#messagescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **messageSpecificMessageSnapshot** {#messagespecificmessagesnapshot}
> ConversationMessage messageSpecificMessageSnapshot(message, transferables)

/message/\{message\} [GET]

This will get a specific snapshot of a message

### Example {#messagespecificmessagesnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messagespecificmessagesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **kotlin.String**| This is the uuid of a message. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#messagespecificmessagesnapshot-return-type}

[**ConversationMessage**](../models/ConversationMessage)

### Authorization {#messagespecificmessagesnapshot-authorization}

No authorization required

### HTTP request headers {#messagespecificmessagesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **messageSpecificMessageUpdate** {#messagespecificmessageupdate}
> ConversationMessage messageSpecificMessageUpdate(transferables, conversationMessage)

/message/update [GET]

This will update a conversation message.

### Example {#messagespecificmessageupdate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messagespecificmessageupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversationMessage** | [**ConversationMessage**](../models/ConversationMessage)|  | [optional]

### Return type {#messagespecificmessageupdate-return-type}

[**ConversationMessage**](../models/ConversationMessage)

### Authorization {#messagespecificmessageupdate-authorization}

No authorization required

### HTTP request headers {#messagespecificmessageupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **messageUpdateValue** {#messageupdatevalue}
> ConversationMessage messageUpdateValue(transferables, conversationMessage)

/message/update/value [POST]

This will update the value of a conversation message.

### Example {#messageupdatevalue-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#messageupdatevalue-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **conversationMessage** | [**ConversationMessage**](../models/ConversationMessage)|  | [optional]

### Return type {#messageupdatevalue-return-type}

[**ConversationMessage**](../models/ConversationMessage)

### Authorization {#messageupdatevalue-authorization}

No authorization required

### HTTP request headers {#messageupdatevalue-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

