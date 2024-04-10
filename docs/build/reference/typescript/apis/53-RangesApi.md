# Ranges Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**rangesCreateNewRange**](RangesApi#rangescreatenewrange) | **POST** /ranges/create
[**rangesDeleteSpecificRange**](RangesApi#rangesdeletespecificrange) | **POST** /ranges/\{range\}/delete
[**rangesSnapshot**](RangesApi#rangessnapshot) | **GET** /ranges


## **rangesCreateNewRange** {#rangescreatenewrange}
> Range rangesCreateNewRange()

This will create a new Range in the database.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangesApi(configuration)

const body: Pieces.RangesCreateNewRangeRequest = {
    // SeededRange (optional)
    seededRange: ,
};

apiInstance.rangesCreateNewRange(body).then((data: Range) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededRange** | **SeededRange**|  |


### Return Model type

[**Range**](../models/Range)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **rangesDeleteSpecificRange** {#rangesdeletespecificrange}
> rangesDeleteSpecificRange()

This will delete a specific range from the database!

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangesApi(configuration)

const body: Pieces.RangesDeleteSpecificRangeRequest = {
    // string | This is a identifier that is used to identify a specific range.
    range: range_example,
};

apiInstance.rangesDeleteSpecificRange(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangesSnapshot** {#rangessnapshot}
> Ranges rangesSnapshot()

This will get a snapshot of all your ranges.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangesApi(configuration)

apiInstance.rangesSnapshot().then((data: Ranges) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Ranges**](../models/Ranges)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


