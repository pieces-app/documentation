# Distributions API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**distributionsCreateNewDistribution**](DistributionsApi#distributionscreatenewdistribution) | **POST** /distributions/create
[**distributionsDeleteSpecificDistribution**](DistributionsApi#distributionsdeletespecificdistribution) | **POST** /distributions/\{distribution\}/delete
[**distributionsSnapshot**](DistributionsApi#distributionssnapshot) | **GET** /distributions


## **distributionsCreateNewDistribution**
> Distribution distributionsCreateNewDistribution()

This will create a new distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.DistributionsApi(configuration);

const body: Pieces.DistributionsCreateNewDistributionRequest = {
    // SeededDistribution |  (optional)
    seededDistribution: ,
};

apiInstance.distributionsCreateNewDistribution(body).then((data: Distribution) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededDistribution** | **SeededDistribution**|  |


### Return type

[**Distribution**](../models/Distribution)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **distributionsDeleteSpecificDistribution**
> distributionsDeleteSpecificDistribution()

This will delete a specific distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.DistributionsApi(configuration);

const body: Pieces.DistributionsDeleteSpecificDistributionRequest = {
    // string | This is the uuid of a specific distribution.
    distribution: distribution_example,
};

apiInstance.distributionsDeleteSpecificDistribution(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **distribution** | [**string**] | This is the uuid of a specific distribution. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **distributionsSnapshot**
> Distributions distributionsSnapshot()

This will get a specific snapshot of all our distributions.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.DistributionsApi(configuration);

apiInstance.distributionsSnapshot().then((data: Distributions) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Distributions**](../models/Distributions)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


