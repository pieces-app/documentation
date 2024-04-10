# ConversationMessages API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**messagesCreateSpecificMessage**](ConversationMessagesApi#messagescreatespecificmessage) | **POST** /messages/create
[**messagesDeleteSpecificMessage**](ConversationMessagesApi#messagesdeletespecificmessage) | **POST** /messages/\{message\}/delete
[**messagesSnapshot**](ConversationMessagesApi#messagessnapshot) | **GET** /messages


## **messagesCreateSpecificMessage**
> ConversationMessage messagesCreateSpecificMessage()

This will create a Message on a specific conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessagesApi(configuration);

const body: Pieces.MessagesCreateSpecificMessageRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededConversationMessage (optional)
    seededConversationMessage: ,
};

apiInstance.messagesCreateSpecificMessage(body).then((data: ConversationMessage) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededConversationMessage** | **SeededConversationMessage**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**ConversationMessage**](../models/ConversationMessage)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **messagesDeleteSpecificMessage**
> messagesDeleteSpecificMessage()

This will delete a specific message.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessagesApi(configuration);

const body: Pieces.MessagesDeleteSpecificMessageRequest = {
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.messagesDeleteSpecificMessage(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **messagesSnapshot**
> ConversationMessages messagesSnapshot()

This will get all the messages.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessagesApi(configuration);

const body: Pieces.MessagesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.messagesSnapshot(body).then((data: ConversationMessages) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**ConversationMessages**](../models/ConversationMessages)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


