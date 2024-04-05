# Conversation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversationAssociateAnchor**](ConversationApi#conversationassociateanchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\} | /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
[**conversationAssociateAsset**](ConversationApi#conversationassociateasset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\} | /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
[**conversationAssociateGroundingTemporalRangeWorkstream**](ConversationApi#conversationassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/associate/\{range\} | /conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]
[**conversationAssociateWebsite**](ConversationApi#conversationassociatewebsite) | **POST** /conversation/\{conversation\}/websites/associate/\{website\} | /conversation/\{conversation\}/websites/associate/\{website\} [POST]
[**conversationAssociateWorkstreamSummary**](ConversationApi#conversationassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**conversationDisassociateAnchor**](ConversationApi#conversationdisassociateanchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\} | /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
[**conversationDisassociateAsset**](ConversationApi#conversationdisassociateasset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\} | /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
[**conversationDisassociateGroundingTemporalRangeWorkstream**](ConversationApi#conversationdisassociategroundingtemporalrangeworkstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} | /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]
[**conversationDisassociateWebsite**](ConversationApi#conversationdisassociatewebsite) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\} | /website/\{website\}/websites/disassociate/\{website\} [POST]
[**conversationDisassociateWorkstreamSummary**](ConversationApi#conversationdisassociateworkstreamsummary) | **POST** /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**conversationGetSpecificConversation**](ConversationApi#conversationgetspecificconversation) | **GET** /conversation/\{conversation\} | /conversation/\{conversation\} [GET]
[**conversationGroundingMessagesAssociateMessage**](ConversationApi#conversationgroundingmessagesassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\} | /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
[**conversationGroundingMessagesDisassociateMessage**](ConversationApi#conversationgroundingmessagesdisassociatemessage) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} | /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
[**conversationScoresIncrement**](ConversationApi#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment | \&#39;/conversation/\{conversation\}/scores/increment\&#39; [POST]
[**conversationSpecificConversationMessages**](ConversationApi#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversationSpecificConversationRename**](ConversationApi#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversationSummarize**](ConversationApi#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversationUpdate**](ConversationApi#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


## **conversationAssociateAnchor**
> conversationAssociateAnchor()

This will update both the anchor and the conversation.  and associate the 2 together

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationAssociateAnchorRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
};

apiInstance.conversationAssociateAnchor(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationAssociateAsset**
> conversationAssociateAsset()

This will update both the asset and the conversation.  and associate the 2 together

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationAssociateAssetRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationAssociateAsset(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationAssociateGroundingTemporalRangeWorkstream**
> conversationAssociateGroundingTemporalRangeWorkstream()

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationAssociateGroundingTemporalRangeWorkstreamRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.conversationAssociateGroundingTemporalRangeWorkstream(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationAssociateWebsite**
> conversationAssociateWebsite()

This will update both the website and the conversation.  and associate the 2 together

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationAssociateWebsiteRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | website id
    website: website_example,
};

apiInstance.conversationAssociateWebsite(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationAssociateWorkstreamSummary**
> conversationAssociateWorkstreamSummary()

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationAssociateWorkstreamSummaryRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.conversationAssociateWorkstreamSummary(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationDisassociateAnchor**
> conversationDisassociateAnchor()

This will update both the anchor and the conversation.  and delete(disassociate) the 2 together

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationDisassociateAnchorRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
};

apiInstance.conversationDisassociateAnchor(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationDisassociateAsset**
> conversationDisassociateAsset()

This will update both the asset and the conversation.  and delete(disassociate) the 2.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationDisassociateAssetRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationDisassociateAsset(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationDisassociateGroundingTemporalRangeWorkstream**
> conversationDisassociateGroundingTemporalRangeWorkstream()

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationDisassociateGroundingTemporalRangeWorkstreamRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.conversationDisassociateGroundingTemporalRangeWorkstream(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationDisassociateWebsite**
> conversationDisassociateWebsite()

This will enable us to dissassociate a conversation from a website.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationDisassociateWebsiteRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | website id
    website: website_example,
};

apiInstance.conversationDisassociateWebsite(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationDisassociateWorkstreamSummary**
> conversationDisassociateWorkstreamSummary()

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationDisassociateWorkstreamSummaryRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.conversationDisassociateWorkstreamSummary(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationGetSpecificConversation**
> Conversation conversationGetSpecificConversation()

This will get a specific conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationGetSpecificConversationRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationGetSpecificConversation(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversation**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Website not found. |  -  |



## **conversationGroundingMessagesAssociateMessage**
> conversationGroundingMessagesAssociateMessage()

This will save the grounding context for a conversation. This will enable us to associate a message to the conversation.grounding object.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationGroundingMessagesAssociateMessageRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.conversationGroundingMessagesAssociateMessage(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationGroundingMessagesDisassociateMessage**
> conversationGroundingMessagesDisassociateMessage()

This will remove specific grounding context for a conversation. This will enable us to dissassociate a message from the conversation.grounding object.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationGroundingMessagesDisassociateMessageRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.conversationGroundingMessagesDisassociateMessage(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **message** | [**string**] | This is the uuid of a message. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationScoresIncrement**
> conversationScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationScoresIncrementRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.conversationScoresIncrement(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversationSpecificConversationMessages**
> ConversationMessages conversationSpecificConversationMessages()

This will get a specific conversations messages

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationSpecificConversationMessagesRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationSpecificConversationMessages(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**ConversationMessages**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationSpecificConversationRename**
> Conversation conversationSpecificConversationRename()

This will take a specific converssation and it will rename using ML.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationSpecificConversationRenameRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationSpecificConversationRename(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversation**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationSummarize**
> ConversationSummarizeOutput conversationSummarize()

This will take a current conversation and create a summary of the conversation and save it as an annotation on the conversation.  will return the annotation reference used as the summary.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationSummarizeRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // ConversationSummarizeInput (optional)
    conversationSummarizeInput: ,
};

apiInstance.conversationSummarize(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationSummarizeInput** | **ConversationSummarizeInput**|  |
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

**ConversationSummarizeOutput**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversationUpdate**
> Conversation conversationUpdate()

This will update a specific conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ConversationApi(configuration);

let body:.ConversationApiConversationUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Conversation (optional)
    conversation: ,
};

apiInstance.conversationUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **Conversation**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversation**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |




