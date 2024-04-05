# Ranges API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangesCreateNewRange**](RangesApi#rangescreatenewrange) | **POST** /ranges/create | /ranges/create [POST]
[**rangesDeleteSpecificRange**](RangesApi#rangesdeletespecificrange) | **POST** /ranges/\{range\}/delete | /ranges/\{range\}/delete [POST]
[**rangesSnapshot**](RangesApi#rangessnapshot) | **GET** /ranges | /ranges [GET]


## **rangesCreateNewRange**
> Range rangesCreateNewRange()

This will create a new Range in the database.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.RangesApi(configuration);

let body:.RangesApiRangesCreateNewRangeRequest = {
    // SeededRange (optional)
    seededRange: ,
};

apiInstance.rangesCreateNewRange(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededRange** | **SeededRange**|  |


### Return type

**Range**

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



## **rangesDeleteSpecificRange**
> rangesDeleteSpecificRange()

This will delete a specific range from the database!

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.RangesApi(configuration);

let body:.RangesApiRangesDeleteSpecificRangeRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.rangesDeleteSpecificRange(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


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



## **rangesSnapshot**
> Ranges rangesSnapshot()

This will get a snapshot of all your ranges.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.RangesApi(configuration);

let body:any = {};

apiInstance.rangesSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Ranges**

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




