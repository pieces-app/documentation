# Allocation Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**allocationSnapshot**](AllocationApi#allocationsnapshot) | **GET** /allocation/\{allocation\}
[**allocationUpdate**](AllocationApi#allocationupdate) | **POST** /allocation/update


## **allocationSnapshot** {#allocationsnapshot}
> AllocationCloud allocationSnapshot()

This will get a snapshot of a specific allocation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationApi(configuration)

const body: Pieces.AllocationSnapshotRequest = {
    // string
    allocation: allocation_example,
};

apiInstance.allocationSnapshot(body).then((data: AllocationCloud) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation** | [**string**] |  | defaults to undefined


### Return Model type

[**AllocationCloud**](../models/AllocationCloud)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Cloud not found. |  -  |

## **allocationUpdate** {#allocationupdate}
> AllocationCloud allocationUpdate()

This will update a specific allocation.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AllocationApi(configuration)

const body: Pieces.AllocationUpdateRequest = {
    // AllocationCloud (optional)
    allocationCloud: ,
};

apiInstance.allocationUpdate(body).then((data: AllocationCloud) => {
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


