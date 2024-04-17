---
title: Range API | TypeScript SDK
---

# Range API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangeAssociateConversationGroundingTemporalRangeWorkstreams**](RangeApi#rangeassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]
[**rangeAssociateWorkstreamSummary**](RangeApi#rangeassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**rangeDisassociateConversationGroundingTemporalRangeWorkstreams**](RangeApi#rangedisassociateconversationgroundingtemporalrangeworkstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]
[**rangeDisassociateWorkstreamSummary**](RangeApi#rangedisassociateworkstreamsummary) | **POST** /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**rangeScoresIncrement**](RangeApi#rangescoresincrement) | **POST** /range/\{range\}/scores/increment | \'/range/\{range\}/scores/increment\' [POST]
[**rangeUpdate**](RangeApi#rangeupdate) | **POST** /range/update | /range/update [POST]
[**rangesSpecificRangeSnapshot**](RangeApi#rangesspecificrangesnapshot) | **GET** /range/\{range\} | /range/\{range\} [GET]


## **rangeAssociateConversationGroundingTemporalRangeWorkstreams** {#rangeassociateconversationgroundingtemporalrangeworkstreams}
> rangeAssociateConversationGroundingTemporalRangeWorkstreams()

This will associate a range with a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeAssociateConversationGroundingTemporalRangeWorkstreamsRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.rangeAssociateConversationGroundingTemporalRangeWorkstreams(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangeAssociateWorkstreamSummary** {#rangeassociateworkstreamsummary}
> rangeAssociateWorkstreamSummary()

This will associate a range with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeAssociateWorkstreamSummaryRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.rangeAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangeDisassociateConversationGroundingTemporalRangeWorkstreams** {#rangedisassociateconversationgroundingtemporalrangeworkstreams}
> rangeDisassociateConversationGroundingTemporalRangeWorkstreams()

This will enable us to disassociate a range from a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeDisassociateConversationGroundingTemporalRangeWorkstreamsRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.rangeDisassociateConversationGroundingTemporalRangeWorkstreams(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangeDisassociateWorkstreamSummary** {#rangedisassociateworkstreamsummary}
> rangeDisassociateWorkstreamSummary()

This will enable us to disassociate a range from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeDisassociateWorkstreamSummaryRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.rangeDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangeScoresIncrement** {#rangescoresincrement}
> rangeScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeScoresIncrementRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.rangeScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangeUpdate** {#rangeupdate}
> Range rangeUpdate()

This will update a specific range.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangeUpdateRequest = {
    // Range (optional)
    range: ,
};

apiInstance.rangeUpdate(body).then((data: Range) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **Range**|  |


### Return type

[**Range**](../models/Range)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **rangesSpecificRangeSnapshot** {#rangesspecificrangesnapshot}
> Range rangesSpecificRangeSnapshot()

This will get a snapshot of a single range.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangeApi(configuration)

const body: Pieces.RangesSpecificRangeSnapshotRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.rangesSpecificRangeSnapshot(body).then((data: Range) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type

[**Range**](../models/Range)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Range not found. |  -  |


