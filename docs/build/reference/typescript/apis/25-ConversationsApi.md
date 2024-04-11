# Conversations Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](ConversationsApi#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](ConversationsApi#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](ConversationsApi#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](ConversationsApi#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](ConversationsApi#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](ConversationsApi#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [WS]


## **conversationsCreateFromAsset** {#conversationscreatefromasset}
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset()

Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

const body: Pieces.ConversationsCreateFromAssetRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationsCreateFromAsset(body).then((data: ConversationsCreateFromAssetOutput) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return Model type

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation()

Creates a specific conversation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

const body: Pieces.ConversationsCreateSpecificConversationRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededConversation (optional)
    seededConversation: ,
};

apiInstance.conversationsCreateSpecificConversation(body).then((data: Conversation) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConversation** | **SeededConversation**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Conversation**](../models/Conversation)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation()

Deletes a specific conversation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

const body: Pieces.ConversationsDeleteSpecificConversationRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.conversationsDeleteSpecificConversation(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


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

## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

Retrieves all the UUIDs associated with a Conversation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

apiInstance.conversationsIdentifiersSnapshot().then((data: FlattenedConversations) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**FlattenedConversations**](../models/FlattenedConversations)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot()

Retrieves a snapshot of a specific conversation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

const body: Pieces.ConversationsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationsSnapshot(body).then((data: Conversations) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Conversations**](../models/Conversations)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

apiInstance.conversationsStreamIdentifiers().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: Not defined



