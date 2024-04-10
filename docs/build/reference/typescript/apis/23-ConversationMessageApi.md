# ConversationMessage API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**messageAssociateAnnotation**](ConversationMessageApi#messageassociateannotation) | **POST** /message/\{message\}/annotations/associate/\{annotation\}
[**messageDisassociateAnnotation**](ConversationMessageApi#messagedisassociateannotation) | **POST** /message/\{message\}/annotations/disassociate/\{annotation\}
[**messageScoresIncrement**](ConversationMessageApi#messagescoresincrement) | **POST** /message/\{message\}/scores/increment
[**messageSpecificMessageSnapshot**](ConversationMessageApi#messagespecificmessagesnapshot) | **GET** /message/\{message\}
[**messageSpecificMessageUpdate**](ConversationMessageApi#messagespecificmessageupdate) | **POST** /message/update
[**messageUpdateValue**](ConversationMessageApi#messageupdatevalue) | **POST** /message/update/value


## **messageAssociateAnnotation**
> messageAssociateAnnotation()

This will associate a message with an annotation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageAssociateAnnotationRequest = {
    // string | This is a specific annotation uuid.
    annotation: annotation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.messageAssociateAnnotation(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **annotation** | [**string**] | This is a specific annotation uuid. | defaults to undefined
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

## **messageDisassociateAnnotation**
> messageDisassociateAnnotation()

This will enable us to dissassociate a message from an annotation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageDisassociateAnnotationRequest = {
    // string | This is a specific annotation uuid.
    annotation: annotation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.messageDisassociateAnnotation(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **annotation** | [**string**] | This is a specific annotation uuid. | defaults to undefined
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

## **messageScoresIncrement**
> messageScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageScoresIncrementRequest = {
    // string | This is the uuid of a message.
    message: message_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.messageScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **messageSpecificMessageSnapshot**
> ConversationMessage messageSpecificMessageSnapshot()

This will get a specific snapshot of a message

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageSpecificMessageSnapshotRequest = {
    // string | This is the uuid of a message.
    message: message_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.messageSpecificMessageSnapshot(body).then((data: ConversationMessage) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**ConversationMessage**](../models/ConversationMessage)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Website not found. |  -  |

## **messageSpecificMessageUpdate**
> ConversationMessage messageSpecificMessageUpdate()

This will update a conversation message.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageSpecificMessageUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // ConversationMessage (optional)
    conversationMessage: ,
};

apiInstance.messageSpecificMessageUpdate(body).then((data: ConversationMessage) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **conversationMessage** | **ConversationMessage**|  |
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

## **messageUpdateValue**
> ConversationMessage messageUpdateValue()

This will update the value of a conversation message.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationMessageApi(configuration);

const body: Pieces.MessageUpdateValueRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // ConversationMessage (optional)
    conversationMessage: ,
};

apiInstance.messageUpdateValue(body).then((data: ConversationMessage) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **conversationMessage** | **ConversationMessage**|  |
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


