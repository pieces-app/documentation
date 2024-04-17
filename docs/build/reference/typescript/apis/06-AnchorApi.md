---
title: Anchor API | TypeScript SDK
---

# Anchor API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorAssociateWorkstreamSummary**](AnchorApi#anchorassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**anchorDisassociateWorkstreamSummary**](AnchorApi#anchordisassociateworkstreamsummary) | **POST** /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} | /anchor/\{anchor\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**anchorRename**](AnchorApi#anchorrename) | **POST** /anchor/\{anchor\}/rename | /anchor/\{anchor\}/rename [POST]
[**anchorScoresIncrement**](AnchorApi#anchorscoresincrement) | **POST** /anchor/\{anchor\}/scores/increment | \'/anchor/\{anchor\}/scores/increment\' [POST]
[**anchorSpecificAnchorSnapshot**](AnchorApi#anchorspecificanchorsnapshot) | **GET** /anchor/\{anchor\} | /anchor/\{anchor\} [GET]
[**anchorUpdate**](AnchorApi#anchorupdate) | **POST** /anchor/update | /anchor/update [POST]


## **anchorAssociateWorkstreamSummary** {#anchorassociateworkstreamsummary}
> anchorAssociateWorkstreamSummary()

This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorAssociateWorkstreamSummaryRequest = {
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.anchorAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined
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

## **anchorDisassociateWorkstreamSummary** {#anchordisassociateworkstreamsummary}
> anchorDisassociateWorkstreamSummary()

This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorDisassociateWorkstreamSummaryRequest = {
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.anchorDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined
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

## **anchorRename** {#anchorrename}
> Anchor anchorRename()

This will rename a specific anchor.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorRenameRequest = {
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.anchorRename(body).then((data: Anchor) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Anchor**](../models/Anchor)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **anchorScoresIncrement** {#anchorscoresincrement}
> anchorScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorScoresIncrementRequest = {
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.anchorScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined


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

## **anchorSpecificAnchorSnapshot** {#anchorspecificanchorsnapshot}
> Anchor anchorSpecificAnchorSnapshot()

This will get a snapshot of a single anchor.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorSpecificAnchorSnapshotRequest = {
    // string | This is the specific uuid of an anchor.
    anchor: anchor_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.anchorSpecificAnchorSnapshot(body).then((data: Anchor) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | [**string**] | This is the specific uuid of an anchor. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Anchor**](../models/Anchor)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Anchor not found. |  -  |

## **anchorUpdate** {#anchorupdate}
> Anchor anchorUpdate()

This will update a specific anchor.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorApi(configuration)

const body: Pieces.AnchorUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Anchor (optional)
    anchor: ,
};

apiInstance.anchorUpdate(body).then((data: Anchor) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **Anchor**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Anchor**](../models/Anchor)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


