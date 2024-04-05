# Distributions API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](DistributionsApi#distributionscreatenewdistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](DistributionsApi#distributionsdeletespecificdistribution) | **POST** /distributions/\{distribution\}/delete | /distributions/\{distribution\}/delete [POST]
[**distributionsSnapshot**](DistributionsApi#distributionssnapshot) | **GET** /distributions | /distributions [GET]


## **distributionsCreateNewDistribution**
> Distribution distributionsCreateNewDistribution()

This will create a new distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.DistributionsApi(configuration);

let body:.DistributionsApiDistributionsCreateNewDistributionRequest = {
    // SeededDistribution |  (optional)
    seededDistribution: ,
};

apiInstance.distributionsCreateNewDistribution(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | **SeededDistribution**|  |


### Return type

**Distribution**

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



## **distributionsDeleteSpecificDistribution**
> distributionsDeleteSpecificDistribution()

This will delete a specific distribution.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.DistributionsApi(configuration);

let body:.DistributionsApiDistributionsDeleteSpecificDistributionRequest = {
    // string | This is the uuid of a specific distribution.
    distribution: distribution_example,
};

apiInstance.distributionsDeleteSpecificDistribution(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**string**] | This is the uuid of a specific distribution. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **distributionsSnapshot**
> Distributions distributionsSnapshot()

This will get a specific snapshot of all our distributions.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.DistributionsApi(configuration);

let body:any = {};

apiInstance.distributionsSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Distributions**

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




