# Share API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shareScoresIncrement**](ShareApi#sharescoresincrement) | **POST** /share/\{share\}/scores/increment | \'/share/\{share\}/scores/increment\' [POST]
[**shareSnapshot**](ShareApi#sharesnapshot) | **GET** /share/\{share\} | /share/\{share\}
[**shareUpdate**](ShareApi#shareupdate) | **POST** /share/update | /share/update [POST]


## **shareScoresIncrement** {#sharescoresincrement}
> shareScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ShareApi(configuration)

const body: Pieces.ShareScoresIncrementRequest = {
    // string | Share id
    share: share_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.shareScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **share** | [**string**] | Share id | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **shareSnapshot** {#sharesnapshot}
> Share shareSnapshot()

Get the snapshot of a specific share.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ShareApi(configuration)

const body: Pieces.ShareSnapshotRequest = {
    // string | Share id
    share: share_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.shareSnapshot(body).then((data: Share) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | [**string**] | Share id | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Share**](../models/Share)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **shareUpdate** {#shareupdate}
> Share shareUpdate()

This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ShareApi(configuration)

const body: Pieces.ShareUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Share | This is the Share that needs to be updated. (optional)
    share: ,
};

apiInstance.shareUpdate(body).then((data: Share) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **Share**| This is the Share that needs to be updated. |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Share**](../models/Share)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


