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
[**conversationScoresIncrement**](ConversationApi#conversationscoresincrement) | **POST** /conversation/\{conversation\}/scores/increment | /conversation/\{conversation\}/scores/increment [POST]
[**conversationSpecificConversationMessages**](ConversationApi#conversationspecificconversationmessages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversationSpecificConversationRename**](ConversationApi#conversationspecificconversationrename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversationSummarize**](ConversationApi#conversationsummarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversationUpdate**](ConversationApi#conversationupdate) | **POST** /conversation/update | /conversation/update [POST]


## **conversationAssociateAnchor** {#conversationassociateanchor}
> conversationAssociateAnchor()

Updates both the anchor and the conversation, associating them together.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationAssociateAnchorRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
};

apiInstance.conversationAssociateAnchor(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


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

## **conversationAssociateAsset** {#conversationassociateasset}
> conversationAssociateAsset()

Updates both the asset and the conversation, associating the two together.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationAssociateAssetRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationAssociateAsset(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


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

## **conversationAssociateGroundingTemporalRangeWorkstream** {#conversationassociategroundingtemporalrangeworkstream}
> conversationAssociateGroundingTemporalRangeWorkstream()

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationAssociateGroundingTemporalRangeWorkstreamRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.conversationAssociateGroundingTemporalRangeWorkstream(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


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

## **conversationAssociateWebsite** {#conversationassociatewebsite}
> conversationAssociateWebsite()

Updates both the website and the conversation, and associate them together.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationAssociateWebsiteRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | website id
    website: website_example,
};

apiInstance.conversationAssociateWebsite(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


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

## **conversationAssociateWorkstreamSummary** {#conversationassociateworkstreamsummary}
> conversationAssociateWorkstreamSummary()

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationAssociateWorkstreamSummaryRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.conversationAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


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

## **conversationDisassociateAnchor** {#conversationdisassociateanchor}
> conversationDisassociateAnchor()

Updates both the anchor and the conversation, deleting (disassociating) them simultaneously.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationDisassociateAnchorRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
};

apiInstance.conversationDisassociateAnchor(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


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

## **conversationDisassociateAsset** {#conversationdisassociateasset}
> conversationDisassociateAsset()

Updates both the asset and the conversation, effectively disassociating them.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationDisassociateAssetRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.conversationDisassociateAsset(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


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

## **conversationDisassociateGroundingTemporalRangeWorkstream** {#conversationdisassociategroundingtemporalrangeworkstream}
> conversationDisassociateGroundingTemporalRangeWorkstream()

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationDisassociateGroundingTemporalRangeWorkstreamRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.conversationDisassociateGroundingTemporalRangeWorkstream(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


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

## **conversationDisassociateWebsite** {#conversationdisassociatewebsite}
> conversationDisassociateWebsite()

Allows us to disassociate a conversation from a specific website

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationDisassociateWebsiteRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | website id
    website: website_example,
};

apiInstance.conversationDisassociateWebsite(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


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

## **conversationDisassociateWorkstreamSummary** {#conversationdisassociateworkstreamsummary}
> conversationDisassociateWorkstreamSummary()

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationDisassociateWorkstreamSummaryRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.conversationDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


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

## **conversationGetSpecificConversation** {#conversationgetspecificconversation}
> Conversation conversationGetSpecificConversation()

Retrieves a specific conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationGetSpecificConversationRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationGetSpecificConversation(body).then((data: Conversation) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Conversation**](../models/Conversation)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Website not found. |  -  |

## **conversationGroundingMessagesAssociateMessage** {#conversationgroundingmessagesassociatemessage}
> conversationGroundingMessagesAssociateMessage()

Stores the grounding context for a conversation. It allows to associate a message with the conversation\'s grounding object, facilitating contextual understanding and management of the conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationGroundingMessagesAssociateMessageRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.conversationGroundingMessagesAssociateMessage(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
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

## **conversationGroundingMessagesDisassociateMessage** {#conversationgroundingmessagesdisassociatemessage}
> conversationGroundingMessagesDisassociateMessage()

Removes a specific grounding context for a conversation, and allows us to disassociate a message from the conversation\'s grounding object.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationGroundingMessagesDisassociateMessageRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // string | This is the uuid of a message.
    message: message_example,
};

apiInstance.conversationGroundingMessagesDisassociateMessage(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
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

## **conversationScoresIncrement** {#conversationscoresincrement}
> conversationScoresIncrement()

Increment scores associated with a conversation. It accepts a SeededScoreIncrement object as input to adjust the scores accordingly based on the provided data.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationScoresIncrementRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.conversationScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


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

## **conversationSpecificConversationMessages** {#conversationspecificconversationmessages}
> ConversationMessages conversationSpecificConversationMessages()

Retrieves messages specific to a particular conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationSpecificConversationMessagesRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationSpecificConversationMessages(body).then((data: ConversationMessages) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
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

## **conversationSpecificConversationRename** {#conversationspecificconversationrename}
> Conversation conversationSpecificConversationRename()

Renames a specific conversation using machine learning (ML) techniques.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationSpecificConversationRenameRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.conversationSpecificConversationRename(body).then((data: Conversation) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Conversation**](../models/Conversation)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationSummarize** {#conversationsummarize}
> ConversationSummarizeOutput conversationSummarize()

Generates a summary of a given conversation and saves it as an annotation associated with the conversation. It returns a reference to the annotation, which serves as the summary.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationSummarizeRequest = {
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
    // ConversationSummarizeInput (optional)
    conversationSummarizeInput: ,
};

apiInstance.conversationSummarize(body).then((data: ConversationSummarizeOutput) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationSummarizeInput** | **ConversationSummarizeInput**|  |
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

[**ConversationSummarizeOutput**](../models/ConversationSummarizeOutput)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversationUpdate** {#conversationupdate}
> Conversation conversationUpdate()

Updates a specific conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConversationApi(configuration)

const body: Pieces.ConversationUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Conversation (optional)
    conversation: ,
};

apiInstance.conversationUpdate(body).then((data: Conversation) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **Conversation**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Conversation**](../models/Conversation)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


