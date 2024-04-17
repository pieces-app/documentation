---
title: Distribution API | TypeScript SDK
---

# Distribution API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionUpdate**](DistributionApi#distributionupdate) | **POST** /distribution/update | /distribution/update [POST]
[**distributionsSpecificDistributionSnapshot**](DistributionApi#distributionsspecificdistributionsnapshot) | **GET** /distribution/\{distribution\} | /distribution/\{distribution\} [GET]


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate()

This will update a specific Distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DistributionApi(configuration)

const body: Pieces.DistributionUpdateRequest = {
    // Distribution (optional)
    distribution: ,
};

apiInstance.distributionUpdate(body).then((data: Distribution) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **Distribution**|  |


### Return type

[**Distribution**](../models/Distribution)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot()

This will get a specific snapshot of a distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DistributionApi(configuration)

const body: Pieces.DistributionsSpecificDistributionSnapshotRequest = {
    // string | This is the uuid of a specific distribution.
    distribution: distribution_example,
};

apiInstance.distributionsSpecificDistributionSnapshot(body).then((data: Distribution) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**string**] | This is the uuid of a specific distribution. | defaults to undefined


### Return type

[**Distribution**](../models/Distribution)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Distribution not found. |  -  |
**500** | Internal Server Error |  -  |


