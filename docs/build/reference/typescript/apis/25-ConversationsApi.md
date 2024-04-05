# Conversations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationsCreateFromAsset**](ConversationsApi#conversationscreatefromasset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversationsCreateSpecificConversation**](ConversationsApi#conversationscreatespecificconversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversationsDeleteSpecificConversation**](ConversationsApi#conversationsdeletespecificconversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversationsIdentifiersSnapshot**](ConversationsApi#conversationsidentifierssnapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversationsSnapshot**](ConversationsApi#conversationssnapshot) | **GET** /conversations | /conversations [GET]
[**conversationsStreamIdentifiers**](ConversationsApi#conversationsstreamidentifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [STREAMED]


## **conversationsCreateFromAsset** Deprecated: 
> ConversationsCreateFromAssetOutput conversationsCreateFromAsset()

This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

const body: Pieces.ConversationsCreateFromAssetRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationsCreateFromAsset(body).then((data: ConversationsCreateFromAssetOutput) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

**ConversationsCreateFromAssetOutput**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationsCreateSpecificConversation** Deprecated: 
> Conversation conversationsCreateSpecificConversation()

This will create a specific conversation.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

const body: Pieces.ConversationsCreateSpecificConversationRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededConversation (optional)
    seededConversation: ,
};

apiInstance.conversationsCreateSpecificConversation(body).then((data: Conversation) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConversation** | **SeededConversation**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversation**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationsDeleteSpecificConversation** Deprecated: 
> conversationsDeleteSpecificConversation()

This will delete a specific Conversation.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

const body: Pieces.ConversationsDeleteSpecificConversationRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.conversationsDeleteSpecificConversation(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationsIdentifiersSnapshot** Deprecated: 
> FlattenedConversations conversationsIdentifiersSnapshot()

This will get all the uuids of a Conversation.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

apiInstance.conversationsIdentifiersSnapshot().then((data: FlattenedConversations) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**FlattenedConversations**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationsSnapshot** Deprecated: 
> Conversations conversationsSnapshot()

This will return a snapshot of a specific conversation

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

const body: Pieces.ConversationsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationsSnapshot(body).then((data: Conversations) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversations**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationsStreamIdentifiers** Deprecated: 
> conversationsStreamIdentifiers()

This is a stream for the conversation identifiers. will return StreamedIdentifiers.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConversationsApi(configuration);

apiInstance.conversationsStreamIdentifiers().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined





