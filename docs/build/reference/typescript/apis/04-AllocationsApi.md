# Allocations Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**allocationsConnectNewCloud**](AllocationsApi#allocationsconnectnewcloud) | **POST** /allocations/connect
[**allocationsCreateNewAllocation**](AllocationsApi#allocationscreatenewallocation) | **POST** /allocations/create
[**allocationsDeleteAllocation**](AllocationsApi#allocationsdeleteallocation) | **POST** /allocations/delete
[**allocationsDisconnectCloud**](AllocationsApi#allocationsdisconnectcloud) | **POST** /allocations/disconnect
[**allocationsReconnectCloud**](AllocationsApi#allocationsreconnectcloud) | **POST** /allocations/reconnect
[**allocationsSnapshot**](AllocationsApi#allocationssnapshot) | **GET** /allocations


## **allocationsConnectNewCloud** {#allocationsconnectnewcloud}
> AllocationCloud allocationsConnectNewCloud()

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

const body: Pieces.AllocationsConnectNewCloudRequest = {
    // UserProfile (optional)
    userProfile: ,
};

apiInstance.allocationsConnectNewCloud(body).then((data: AllocationCloud) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | **UserProfile**|  |


### Return Model type

[**AllocationCloud**](../models/AllocationCloud)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**504** | Gateway Timeout, request timed out. |  -  |

## **allocationsCreateNewAllocation** {#allocationscreatenewallocation}
> AllocationCloud allocationsCreateNewAllocation()

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

const body: Pieces.AllocationsCreateNewAllocationRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsCreateNewAllocation(body).then((data: AllocationCloud) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return Model type

[**AllocationCloud**](../models/AllocationCloud)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **allocationsDeleteAllocation** {#allocationsdeleteallocation}
> string allocationsDeleteAllocation()

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

const body: Pieces.AllocationsDeleteAllocationRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsDeleteAllocation(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **allocationsDisconnectCloud** {#allocationsdisconnectcloud}
> string allocationsDisconnectCloud()

This will attempt to disconnect to a specific users cloud.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

const body: Pieces.AllocationsDisconnectCloudRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsDisconnectCloud(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, this will return the uuid of the cloud that was disconnected! |  -  |
**500** | Internal Server Error |  -  |

## **allocationsReconnectCloud** {#allocationsreconnectcloud}
> AllocationCloud allocationsReconnectCloud()

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

const body: Pieces.AllocationsReconnectCloudRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationsReconnectCloud(body).then((data: AllocationCloud) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return Model type

[**AllocationCloud**](../models/AllocationCloud)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**504** | Gateway Timeout, request timed out. |  -  |

## **allocationsSnapshot** {#allocationssnapshot}
> Allocations allocationsSnapshot()

This is going to get a snapshot of all of the connected allocations.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

apiInstance.allocationsSnapshot().then((data: Allocations) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Allocations**](../models/Allocations)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


