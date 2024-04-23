---
title: Ranges API | TypeScript SDK
---

# Ranges API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**rangesCreateNewRange**](RangesApi#rangescreatenewrange) | **POST** /ranges/create | /ranges/create [POST]
[**rangesDeleteSpecificRange**](RangesApi#rangesdeletespecificrange) | **POST** /ranges/\{range\}/delete | /ranges/\{range\}/delete [POST]
[**rangesSnapshot**](RangesApi#rangessnapshot) | **GET** /ranges | /ranges [GET]


## **rangesCreateNewRange** {#rangescreatenewrange}
> Range rangesCreateNewRange()

This will create a new Range in the database.

### Example {#rangescreatenewrange-example}

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

### Parameters {#rangescreatenewrange-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededRange** | **SeededRange**|  |


### Return type {#rangescreatenewrange-return-type}

[**Range**](../models/Range)

### HTTP request headers {#rangescreatenewrange-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#rangescreatenewrange-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **rangesDeleteSpecificRange** {#rangesdeletespecificrange}
> rangesDeleteSpecificRange()

This will delete a specific range from the database!

### Example {#rangesdeletespecificrange-example}

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

### Parameters {#rangesdeletespecificrange-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**string**] | This is a identifier that is used to identify a specific range. | defaults to undefined


### Return type {#rangesdeletespecificrange-return-type}

void (empty response body)

### HTTP request headers {#rangesdeletespecificrange-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#rangesdeletespecificrange-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **rangesSnapshot** {#rangessnapshot}
> Ranges rangesSnapshot()

This will get a snapshot of all your ranges.

### Example {#rangessnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.RangesApi(configuration)

apiInstance.rangesSnapshot().then((data: Ranges) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#rangessnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#rangessnapshot-return-type}

[**Ranges**](../models/Ranges)

### HTTP request headers {#rangessnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#rangessnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


