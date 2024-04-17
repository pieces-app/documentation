---
title: Conversations API | TypeScript SDK
---

# Conversations API

All URIs are relative to `http://localhost:1000`

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

### Example {#conversationscreatefromasset-example}

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

### Parameters {#conversationscreatefromasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#conversationscreatefromasset-return-type}

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### HTTP request headers {#conversationscreatefromasset-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#conversationscreatefromasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsCreateSpecificConversation** {#conversationscreatespecificconversation}
> Conversation conversationsCreateSpecificConversation()

Creates a specific conversation.

### Example {#conversationscreatespecificconversation-example}

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

### Parameters {#conversationscreatespecificconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConversation** | **SeededConversation**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#conversationscreatespecificconversation-return-type}

[**Conversation**](../models/Conversation)

### HTTP request headers {#conversationscreatespecificconversation-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#conversationscreatespecificconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsDeleteSpecificConversation** {#conversationsdeletespecificconversation}
> conversationsDeleteSpecificConversation()

Deletes a specific conversation.

### Example {#conversationsdeletespecificconversation-example}

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

### Parameters {#conversationsdeletespecificconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type {#conversationsdeletespecificconversation-return-type}

void (empty response body)

### HTTP request headers {#conversationsdeletespecificconversation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#conversationsdeletespecificconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **conversationsIdentifiersSnapshot** {#conversationsidentifierssnapshot}
> FlattenedConversations conversationsIdentifiersSnapshot()

Retrieves all the UUIDs associated with a Conversation.

### Example {#conversationsidentifierssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

apiInstance.conversationsIdentifiersSnapshot().then((data: FlattenedConversations) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#conversationsidentifierssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#conversationsidentifierssnapshot-return-type}

[**FlattenedConversations**](../models/FlattenedConversations)

### HTTP request headers {#conversationsidentifierssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#conversationsidentifierssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsSnapshot** {#conversationssnapshot}
> Conversations conversationsSnapshot()

Retrieves a snapshot of a specific conversation.

### Example {#conversationssnapshot-example}

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

### Parameters {#conversationssnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#conversationssnapshot-return-type}

[**Conversations**](../models/Conversations)

### HTTP request headers {#conversationssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#conversationssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationsStreamIdentifiers** {#conversationsstreamidentifiers}
> conversationsStreamIdentifiers()

Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).

### Example {#conversationsstreamidentifiers-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationsApi(configuration)

apiInstance.conversationsStreamIdentifiers().then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#conversationsstreamidentifiers-parameters}

This endpoint does not need any parameters.


### Return type {#conversationsstreamidentifiers-return-type}

void (empty response body)

### HTTP request headers {#conversationsstreamidentifiers-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: Not defined



