---
title: Distribution API | TypeScript SDK
---

# Distribution API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionUpdate**](DistributionApi#distributionupdate) | **POST** /distribution/update | /distribution/update [POST]
[**distributionsSpecificDistributionSnapshot**](DistributionApi#distributionsspecificdistributionsnapshot) | **GET** /distribution/\{distribution\} | /distribution/\{distribution\} [GET]


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate()

This will update a specific Distribution.

### Example {#distributionupdate-example}

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

### Parameters {#distributionupdate-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **Distribution**|  |


### Return type {#distributionupdate-return-type}

[**Distribution**](../models/Distribution)

### HTTP request headers {#distributionupdate-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#distributionupdate-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot()

This will get a specific snapshot of a distribution.

### Example {#distributionsspecificdistributionsnapshot-example}

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

### Parameters {#distributionsspecificdistributionsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**string**] | This is the uuid of a specific distribution. | defaults to undefined


### Return type {#distributionsspecificdistributionsnapshot-return-type}

[**Distribution**](../models/Distribution)

### HTTP request headers {#distributionsspecificdistributionsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#distributionsspecificdistributionsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Distribution not found. |  -  |
**500** | Internal Server Error |  -  |


