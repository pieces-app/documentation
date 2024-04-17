---
title: AnchorPoints API | TypeScript SDK
---

# AnchorPoints API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorPointsCreateNewAnchorPoint**](AnchorPointsApi#anchorpointscreatenewanchorpoint) | **POST** /anchor_points/create | /anchor_points/create [POST]
[**anchorPointsDeleteSpecificAnchorPoint**](AnchorPointsApi#anchorpointsdeletespecificanchorpoint) | **POST** /anchor_points/\{anchor_point\}/delete | /anchor_points/\{anchor_point\}/delete [POST]
[**anchorPointsSnapshot**](AnchorPointsApi#anchorpointssnapshot) | **GET** /anchor_points | /anchor_points [GET]


## **anchorPointsCreateNewAnchorPoint** {#anchorpointscreatenewanchorpoint}
> AnchorPoint anchorPointsCreateNewAnchorPoint()

This will create a anchorPoint.

### Example {#anchorpointscreatenewanchorpoint-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointsApi(configuration)

const body: Pieces.AnchorPointsCreateNewAnchorPointRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// SeededAnchorPoint (optional)
seededAnchorPoint: ,
};

apiInstance.anchorPointsCreateNewAnchorPoint(body).then((data: AnchorPoint) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#anchorpointscreatenewanchorpoint-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAnchorPoint** | **SeededAnchorPoint**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#anchorpointscreatenewanchorpoint-return-type}

[**AnchorPoint**](../models/AnchorPoint)

### HTTP request headers {#anchorpointscreatenewanchorpoint-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#anchorpointscreatenewanchorpoint-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **anchorPointsDeleteSpecificAnchorPoint** {#anchorpointsdeletespecificanchorpoint}
> anchorPointsDeleteSpecificAnchorPoint()

This will delete a specific anchorPoint!

### Example {#anchorpointsdeletespecificanchorpoint-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointsApi(configuration)

const body: Pieces.AnchorPointsDeleteSpecificAnchorPointRequest = {
// string | This is the specific uuid of an anchor_point.
anchorPoint: anchorPoint_example,
};

apiInstance.anchorPointsDeleteSpecificAnchorPoint(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#anchorpointsdeletespecificanchorpoint-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | [**string**] | This is the specific uuid of an anchor_point. | defaults to undefined


### Return type {#anchorpointsdeletespecificanchorpoint-return-type}

void (empty response body)

### HTTP request headers {#anchorpointsdeletespecificanchorpoint-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#anchorpointsdeletespecificanchorpoint-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **anchorPointsSnapshot** {#anchorpointssnapshot}
> AnchorPoints anchorPointsSnapshot()

This will get a snapshot of all your anchorPoints.

### Example {#anchorpointssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AnchorPointsApi(configuration)

const body: Pieces.AnchorPointsSnapshotRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.anchorPointsSnapshot(body).then((data: AnchorPoints) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#anchorpointssnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#anchorpointssnapshot-return-type}

[**AnchorPoints**](../models/AnchorPoints)

### HTTP request headers {#anchorpointssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#anchorpointssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


