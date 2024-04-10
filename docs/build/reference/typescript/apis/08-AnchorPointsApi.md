# AnchorPoints Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**anchorPointsCreateNewAnchorPoint**](AnchorPointsApi#anchorpointscreatenewanchorpoint) | **POST** /anchor_points/create
[**anchorPointsDeleteSpecificAnchorPoint**](AnchorPointsApi#anchorpointsdeletespecificanchorpoint) | **POST** /anchor_points/\{anchor_point\}/delete
[**anchorPointsSnapshot**](AnchorPointsApi#anchorpointssnapshot) | **GET** /anchor_points


## **anchorPointsCreateNewAnchorPoint** {#anchorpointscreatenewanchorpoint}
> AnchorPoint anchorPointsCreateNewAnchorPoint()

This will create a anchorPoint.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAnchorPoint** | **SeededAnchorPoint**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**AnchorPoint**](../models/AnchorPoint)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **anchorPointsDeleteSpecificAnchorPoint** {#anchorpointsdeletespecificanchorpoint}
> anchorPointsDeleteSpecificAnchorPoint()

This will delete a specific anchorPoint!

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorPoint** | [**string**] | This is the specific uuid of an anchor_point. | defaults to undefined


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

## **anchorPointsSnapshot** {#anchorpointssnapshot}
> AnchorPoints anchorPointsSnapshot()

This will get a snapshot of all your anchorPoints.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**AnchorPoints**](../models/AnchorPoints)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


