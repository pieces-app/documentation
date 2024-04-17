---
title: AnchorPoint API | TypeScript SDK
---

# AnchorPoint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointScoresIncrement**](AnchorPointApi#anchorpointscoresincrement) | **POST** /anchor_point/\{anchor_point\}/scores/increment | \'/anchor_point/\{anchor_point\}/scores/increment\' [POST]
[**anchorPointSpecificAnchorPointSnapshot**](AnchorPointApi#anchorpointspecificanchorpointsnapshot) | **GET** /anchor_point/\{anchor_point\} | /anchor_point/\{anchor_point\} [GET]
[**anchorPointUpdate**](AnchorPointApi#anchorpointupdate) | **POST** /anchor_point/update | /anchor_point/update [POST]


## **anchorPointScoresIncrement** {#anchorpointscoresincrement}
> anchorPointScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointApi(configuration)

const body: Pieces.AnchorPointScoresIncrementRequest = {
    // string | This is the specific uuid of an anchor_point.
    anchorPoint: anchorPoint_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.anchorPointScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **anchorPoint** | [**string**] | This is the specific uuid of an anchor_point. | defaults to undefined


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

## **anchorPointSpecificAnchorPointSnapshot** {#anchorpointspecificanchorpointsnapshot}
> AnchorPoint anchorPointSpecificAnchorPointSnapshot()

This will get a snapshot of a single anchorPoint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointApi(configuration)

const body: Pieces.AnchorPointSpecificAnchorPointSnapshotRequest = {
    // string | This is the specific uuid of an anchor_point.
    anchorPoint: anchorPoint_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.anchorPointSpecificAnchorPointSnapshot(body).then((data: AnchorPoint) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | [**string**] | This is the specific uuid of an anchor_point. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**AnchorPoint**](../models/AnchorPoint)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | AnchorPoint not found. |  -  |

## **anchorPointUpdate** {#anchorpointupdate}
> AnchorPoint anchorPointUpdate()

This will update a specific anchorPoint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointApi(configuration)

const body: Pieces.AnchorPointUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // AnchorPoint (optional)
    anchorPoint: ,
};

apiInstance.anchorPointUpdate(body).then((data: AnchorPoint) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | **AnchorPoint**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**AnchorPoint**](../models/AnchorPoint)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


