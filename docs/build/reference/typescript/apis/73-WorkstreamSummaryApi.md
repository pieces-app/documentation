---
title: WorkstreamSummary API | TypeScript SDK
---

# WorkstreamSummary API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesSpecificWorkstreamSummarySnapshot**](WorkstreamSummaryApi#workstreamsummariesspecificworkstreamsummarysnapshot) | **GET** /workstream_summary/\{workstream_summary\} | /workstream_summary/\{workstream_summary\} [GET]
[**workstreamSummaryAssociateAnchor**](WorkstreamSummaryApi#workstreamsummaryassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]
[**workstreamSummaryAssociateAsset**](WorkstreamSummaryApi#workstreamsummaryassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]
[**workstreamSummaryAssociateConversation**](WorkstreamSummaryApi#workstreamsummaryassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]
[**workstreamSummaryAssociatePerson**](WorkstreamSummaryApi#workstreamsummaryassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]
[**workstreamSummaryAssociateRange**](WorkstreamSummaryApi#workstreamsummaryassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]
[**workstreamSummaryAssociateWebsite**](WorkstreamSummaryApi#workstreamsummaryassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]
[**workstreamSummaryAssociateWorkstreamEvent**](WorkstreamSummaryApi#workstreamsummaryassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]
[**workstreamSummaryDisassociateAnchor**](WorkstreamSummaryApi#workstreamsummarydisassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]
[**workstreamSummaryDisassociateAsset**](WorkstreamSummaryApi#workstreamsummarydisassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]
[**workstreamSummaryDisassociateConversation**](WorkstreamSummaryApi#workstreamsummarydisassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]
[**workstreamSummaryDisassociatePerson**](WorkstreamSummaryApi#workstreamsummarydisassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]
[**workstreamSummaryDisassociateRange**](WorkstreamSummaryApi#workstreamsummarydisassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]
[**workstreamSummaryDisassociateWebsite**](WorkstreamSummaryApi#workstreamsummarydisassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]
[**workstreamSummaryDisassociateWorkstreamEvent**](WorkstreamSummaryApi#workstreamsummarydisassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]
[**workstreamSummaryScoresIncrement**](WorkstreamSummaryApi#workstreamsummaryscoresincrement) | **POST** /workstream_summary/\{workstream_summary\}/scores/increment | \'/workstream_summary/\{workstream_summary\}/scores/increment\' [POST]
[**workstreamSummaryUpdate**](WorkstreamSummaryApi#workstreamsummaryupdate) | **POST** /workstream_summary/update | /workstream_summary/update [POST]


## **workstreamSummariesSpecificWorkstreamSummarySnapshot** {#workstreamsummariesspecificworkstreamsummarysnapshot}
> WorkstreamSummary workstreamSummariesSpecificWorkstreamSummarySnapshot()

This will get a snapshot of a single workstream_summary.

### Example {#workstreamsummariesspecificworkstreamsummarysnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummariesSpecificWorkstreamSummarySnapshotRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.workstreamSummariesSpecificWorkstreamSummarySnapshot(body).then((data: WorkstreamSummary) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummariesspecificworkstreamsummarysnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#workstreamsummariesspecificworkstreamsummarysnapshot-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### HTTP request headers {#workstreamsummariesspecificworkstreamsummarysnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#workstreamsummariesspecificworkstreamsummarysnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | WorkstreamSummary not found. |  -  |

## **workstreamSummaryAssociateAnchor** {#workstreamsummaryassociateanchor}
> workstreamSummaryAssociateAnchor()

This will associate a anchor with a workstream_summary. This will do the same thing as the anchor equivalent.

### Example {#workstreamsummaryassociateanchor-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateAnchorRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is the specific uuid of an anchor.
anchor: anchor_example,
};

apiInstance.workstreamSummaryAssociateAnchor(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociateanchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


### Return type {#workstreamsummaryassociateanchor-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociateanchor-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociateanchor-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociateAsset** {#workstreamsummaryassociateasset}
> workstreamSummaryAssociateAsset()

This will associate an asset with a workstream_summary. This will do the same thing as the asset equivalent.

### Example {#workstreamsummaryassociateasset-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateAssetRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.workstreamSummaryAssociateAsset(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociateasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#workstreamsummaryassociateasset-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociateasset-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociateasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociateConversation** {#workstreamsummaryassociateconversation}
> workstreamSummaryAssociateConversation()

This will associate an conversation with a workstream_summary. This will do the same thing as the conversation equivalent.

### Example {#workstreamsummaryassociateconversation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateConversationRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is the uuid of a conversation.
conversation: conversation_example,
};

apiInstance.workstreamSummaryAssociateConversation(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociateconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type {#workstreamsummaryassociateconversation-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociateconversation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociateconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociatePerson** {#workstreamsummaryassociateperson}
> workstreamSummaryAssociatePerson()

This will associate an person with a workstream_summary. This will do the same thing as the person equivalent.

### Example {#workstreamsummaryassociateperson-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociatePersonRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a uuid that represents a person.
person: person_example,
};

apiInstance.workstreamSummaryAssociatePerson(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociateperson-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type {#workstreamsummaryassociateperson-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociateperson-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociateperson-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociateRange** {#workstreamsummaryassociaterange}
> workstreamSummaryAssociateRange()

This will associate a range with a workstream_summary. This will do the same thing as the range equivalent.

### Example {#workstreamsummaryassociaterange-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateRangeRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a identifier that is used to identify a specific range.
range: range_example,
};

apiInstance.workstreamSummaryAssociateRange(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociaterange-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type {#workstreamsummaryassociaterange-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociaterange-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociaterange-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociateWebsite** {#workstreamsummaryassociatewebsite}
> workstreamSummaryAssociateWebsite()

This will associate a website with a workstream_summary. This will do the same thing as the website equivalent.

### Example {#workstreamsummaryassociatewebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateWebsiteRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | website id
website: website_example,
};

apiInstance.workstreamSummaryAssociateWebsite(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociatewebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type {#workstreamsummaryassociatewebsite-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociatewebsite-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociatewebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryAssociateWorkstreamEvent** {#workstreamsummaryassociateworkstreamevent}
> workstreamSummaryAssociateWorkstreamEvent()

This will associate a workstream_summary with a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example {#workstreamsummaryassociateworkstreamevent-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryAssociateWorkstreamEventRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a identifier that is used to identify a specific workstream_event.
workstreamEvent: workstreamEvent_example,
};

apiInstance.workstreamSummaryAssociateWorkstreamEvent(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryassociateworkstreamevent-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined


### Return type {#workstreamsummaryassociateworkstreamevent-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryassociateworkstreamevent-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryassociateworkstreamevent-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateAnchor** {#workstreamsummarydisassociateanchor}
> workstreamSummaryDisassociateAnchor()

This will enable us to disassociate a anchor from a workstream_summary. This will do the same thing as the anchor equivalent.

### Example {#workstreamsummarydisassociateanchor-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateAnchorRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is the specific uuid of an anchor.
anchor: anchor_example,
};

apiInstance.workstreamSummaryDisassociateAnchor(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociateanchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


### Return type {#workstreamsummarydisassociateanchor-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociateanchor-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociateanchor-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateAsset** {#workstreamsummarydisassociateasset}
> workstreamSummaryDisassociateAsset()

This will enable us to disassociate a asset from a workstream_summary. This will do the same thing as the asset equivalent.

### Example {#workstreamsummarydisassociateasset-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateAssetRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.workstreamSummaryDisassociateAsset(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociateasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#workstreamsummarydisassociateasset-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociateasset-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociateasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateConversation** {#workstreamsummarydisassociateconversation}
> workstreamSummaryDisassociateConversation()

This will enable us to disassociate a conversation from a workstream_summary. This will do the same thing as the conversation equivalent.

### Example {#workstreamsummarydisassociateconversation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateConversationRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is the uuid of a conversation.
conversation: conversation_example,
};

apiInstance.workstreamSummaryDisassociateConversation(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociateconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type {#workstreamsummarydisassociateconversation-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociateconversation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociateconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociatePerson** {#workstreamsummarydisassociateperson}
> workstreamSummaryDisassociatePerson()

This will enable us to disassociate a person from a workstream_summary. This will do the same thing as the person equivalent.

### Example {#workstreamsummarydisassociateperson-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociatePersonRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a uuid that represents a person.
person: person_example,
};

apiInstance.workstreamSummaryDisassociatePerson(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociateperson-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type {#workstreamsummarydisassociateperson-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociateperson-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociateperson-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateRange** {#workstreamsummarydisassociaterange}
> workstreamSummaryDisassociateRange()

This will enable us to disassociate a range from a workstream_summary. This will do the same thing as the range equivalent.

### Example {#workstreamsummarydisassociaterange-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateRangeRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a identifier that is used to identify a specific range.
range: range_example,
};

apiInstance.workstreamSummaryDisassociateRange(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociaterange-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type {#workstreamsummarydisassociaterange-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociaterange-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociaterange-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateWebsite** {#workstreamsummarydisassociatewebsite}
> workstreamSummaryDisassociateWebsite()

This will enable us to disassociate a website from a workstream_summary. This will do the same thing as the website equivalent.

### Example {#workstreamsummarydisassociatewebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateWebsiteRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | website id
website: website_example,
};

apiInstance.workstreamSummaryDisassociateWebsite(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociatewebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type {#workstreamsummarydisassociatewebsite-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociatewebsite-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociatewebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryDisassociateWorkstreamEvent** {#workstreamsummarydisassociateworkstreamevent}
> workstreamSummaryDisassociateWorkstreamEvent()

This will enable us to disassociate a workstream_summary from a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example {#workstreamsummarydisassociateworkstreamevent-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryDisassociateWorkstreamEventRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// string | This is a identifier that is used to identify a specific workstream_event.
workstreamEvent: workstreamEvent_example,
};

apiInstance.workstreamSummaryDisassociateWorkstreamEvent(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummarydisassociateworkstreamevent-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined


### Return type {#workstreamsummarydisassociateworkstreamevent-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummarydisassociateworkstreamevent-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#workstreamsummarydisassociateworkstreamevent-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryScoresIncrement** {#workstreamsummaryscoresincrement}
> workstreamSummaryScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#workstreamsummaryscoresincrement-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryScoresIncrementRequest = {
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
// SeededScoreIncrement (optional)
seededScoreIncrement: ,
};

apiInstance.workstreamSummaryScoresIncrement(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryscoresincrement-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type {#workstreamsummaryscoresincrement-return-type}

void (empty response body)

### HTTP request headers {#workstreamsummaryscoresincrement-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#workstreamsummaryscoresincrement-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstreamSummaryUpdate** {#workstreamsummaryupdate}
> WorkstreamSummary workstreamSummaryUpdate()

This will update a specific workstream_summary.

### Example {#workstreamsummaryupdate-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamSummaryApi(configuration)

const body: Pieces.WorkstreamSummaryUpdateRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// WorkstreamSummary (optional)
workstreamSummary: ,
};

apiInstance.workstreamSummaryUpdate(body).then((data: WorkstreamSummary) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#workstreamsummaryupdate-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **WorkstreamSummary**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#workstreamsummaryupdate-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### HTTP request headers {#workstreamsummaryupdate-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#workstreamsummaryupdate-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


