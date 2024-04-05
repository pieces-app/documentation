# Allocations API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationsConnectNewCloud**](AllocationsApi#allocationsconnectnewcloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocationsCreateNewAllocation**](AllocationsApi#allocationscreatenewallocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocationsDeleteAllocation**](AllocationsApi#allocationsdeleteallocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocationsDisconnectCloud**](AllocationsApi#allocationsdisconnectcloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocationsReconnectCloud**](AllocationsApi#allocationsreconnectcloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocationsSnapshot**](AllocationsApi#allocationssnapshot) | **GET** /allocations | /allocations [GET]


## **allocationsConnectNewCloud**
> AllocationCloud allocationsConnectNewCloud()

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:.AllocationsApiAllocationsConnectNewCloudRequest = {
    // UserProfile (optional)
    userProfile: ,
};

apiInstance.allocationsConnectNewCloud(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | **UserProfile**|  |


### Return type

**AllocationCloud**

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
**504** | Gateway Timeout, request timed out. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **allocationsCreateNewAllocation**
> AllocationCloud allocationsCreateNewAllocation()

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:.AllocationsApiAllocationsCreateNewAllocationRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsCreateNewAllocation(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type

**AllocationCloud**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **allocationsDeleteAllocation**
> string allocationsDeleteAllocation()

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:.AllocationsApiAllocationsDeleteAllocationRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsDeleteAllocation(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type

**string**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **allocationsDisconnectCloud**
> string allocationsDisconnectCloud()

This will attempt to disconnect to a specific users cloud.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:.AllocationsApiAllocationsDisconnectCloudRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsDisconnectCloud(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, this will return the uuid of the cloud that was disconnected! |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **allocationsReconnectCloud**
> AllocationCloud allocationsReconnectCloud()

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:.AllocationsApiAllocationsReconnectCloudRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsReconnectCloud(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type

**AllocationCloud**

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
**504** | Gateway Timeout, request timed out. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **allocationsSnapshot**
> Allocations allocationsSnapshot()

This is going to get a snapshot of all of the connected allocations.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AllocationsApi(configuration);

let body:any = {};

apiInstance.allocationsSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Allocations**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


