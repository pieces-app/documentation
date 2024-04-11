# ConversationMessages Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagesCreateSpecificMessage**](ConversationMessagesApi#messagescreatespecificmessage) | **POST** /messages/create | /messages/create [POST]
[**messagesDeleteSpecificMessage**](ConversationMessagesApi#messagesdeletespecificmessage) | **POST** /messages/\{message\}/delete | /messages/\{message\}/delete [POST]
[**messagesSnapshot**](ConversationMessagesApi#messagessnapshot) | **GET** /messages | /messages [GET]


## **messagesCreateSpecificMessage** {#messagescreatespecificmessage}
> ConversationMessage messagesCreateSpecificMessage()

This will create a Message on a specific conversation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationMessagesApi(configuration)

const body: Pieces.MessagesCreateSpecificMessageRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededConversationMessage (optional)
    seededConversationMessage: ,
};

apiInstance.messagesCreateSpecificMessage(body).then((data: ConversationMessage) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConversationMessage** | **SeededConversationMessage**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**ConversationMessage**](../models/ConversationMessage)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **messagesDeleteSpecificMessage** {#messagesdeletespecificmessage}
> messagesDeleteSpecificMessage()

This will delete a specific message.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationMessagesApi(configuration)

const body: Pieces.MessagesDeleteSpecificMessageRequest = {
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.messagesDeleteSpecificMessage(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **messagesSnapshot** {#messagessnapshot}
> ConversationMessages messagesSnapshot()

This will get all the messages.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationMessagesApi(configuration)

const body: Pieces.MessagesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.messagesSnapshot(body).then((data: ConversationMessages) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**ConversationMessages**](../models/ConversationMessages)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


