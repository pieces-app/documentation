---
title: Allocations API | TypeScript SDK
---

# Allocations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationsConnectNewCloud**](AllocationsApi#allocationsconnectnewcloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocationsCreateNewAllocation**](AllocationsApi#allocationscreatenewallocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocationsDeleteAllocation**](AllocationsApi#allocationsdeleteallocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocationsDisconnectCloud**](AllocationsApi#allocationsdisconnectcloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocationsReconnectCloud**](AllocationsApi#allocationsreconnectcloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocationsSnapshot**](AllocationsApi#allocationssnapshot) | **GET** /allocations | /allocations [GET]


## **allocationsConnectNewCloud** {#allocationsconnectnewcloud}
> AllocationCloud allocationsConnectNewCloud()

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example {#allocationsconnectnewcloud-example}

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

### Parameters {#allocationsconnectnewcloud-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfile** | **UserProfile**|  |


### Return type {#allocationsconnectnewcloud-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### HTTP request headers {#allocationsconnectnewcloud-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#allocationsconnectnewcloud-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**504** | Gateway Timeout, request timed out. |  -  |

## **allocationsCreateNewAllocation** {#allocationscreatenewallocation}
> AllocationCloud allocationsCreateNewAllocation()

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example {#allocationscreatenewallocation-example}

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

### Parameters {#allocationscreatenewallocation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type {#allocationscreatenewallocation-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### HTTP request headers {#allocationscreatenewallocation-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#allocationscreatenewallocation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **allocationsDeleteAllocation** {#allocationsdeleteallocation}
> string allocationsDeleteAllocation()

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example {#allocationsdeleteallocation-example}

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

### Parameters {#allocationsdeleteallocation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type {#allocationsdeleteallocation-return-type}

**string**

### HTTP request headers {#allocationsdeleteallocation-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#allocationsdeleteallocation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **allocationsDisconnectCloud** {#allocationsdisconnectcloud}
> string allocationsDisconnectCloud()

This will attempt to disconnect to a specific users cloud.

### Example {#allocationsdisconnectcloud-example}

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

### Parameters {#allocationsdisconnectcloud-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type {#allocationsdisconnectcloud-return-type}

**string**

### HTTP request headers {#allocationsdisconnectcloud-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#allocationsdisconnectcloud-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, this will return the uuid of the cloud that was disconnected! |  -  |
**500** | Internal Server Error |  -  |

## **allocationsReconnectCloud** {#allocationsreconnectcloud}
> AllocationCloud allocationsReconnectCloud()

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.

### Example {#allocationsreconnectcloud-example}

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

### Parameters {#allocationsreconnectcloud-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocationCloud** | **AllocationCloud**|  |


### Return type {#allocationsreconnectcloud-return-type}

[**AllocationCloud**](../models/AllocationCloud)

### HTTP request headers {#allocationsreconnectcloud-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#allocationsreconnectcloud-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**504** | Gateway Timeout, request timed out. |  -  |

## **allocationsSnapshot** {#allocationssnapshot}
> Allocations allocationsSnapshot()

This is going to get a snapshot of all of the connected allocations.

### Example {#allocationssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationsApi(configuration)

apiInstance.allocationsSnapshot().then((data: Allocations) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#allocationssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#allocationssnapshot-return-type}

[**Allocations**](../models/Allocations)

### HTTP request headers {#allocationssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#allocationssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


