---
title: Hint API | TypeScript SDK
---

# Hint API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hintScoresIncrement**](HintApi#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment | \'/hint/\{hint\}/scores/increment\' [POST]
[**hintSpecificHintSnapshot**](HintApi#hintspecifichintsnapshot) | **GET** /hint/\{hint\} | /hint/\{hint\} [POST]
[**hintUpdate**](HintApi#hintupdate) | **POST** /hint/update | /hint/update [POST]


## **hintScoresIncrement** {#hintscoresincrement}
> hintScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#hintscoresincrement-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintScoresIncrementRequest = {
// string | This is a specific hint uuid
hint: hint_example,
// SeededScoreIncrement (optional)
seededScoreIncrement: ,
};

apiInstance.hintScoresIncrement(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#hintscoresincrement-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type {#hintscoresincrement-return-type}

void (empty response body)

### HTTP request headers {#hintscoresincrement-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#hintscoresincrement-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **hintSpecificHintSnapshot** {#hintspecifichintsnapshot}
> Hint hintSpecificHintSnapshot()

This will get a snapshot of a specific hint.

### Example {#hintspecifichintsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintSpecificHintSnapshotRequest = {
// string | This is a specific hint uuid
hint: hint_example,
};

apiInstance.hintSpecificHintSnapshot(body).then((data: Hint) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#hintspecifichintsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type {#hintspecifichintsnapshot-return-type}

[**Hint**](../models/Hint)

### HTTP request headers {#hintspecifichintsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#hintspecifichintsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **hintUpdate** {#hintupdate}
> Hint hintUpdate()

This will update a specific hint.

### Example {#hintupdate-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintUpdateRequest = {
// Hint (optional)
hint: ,
};

apiInstance.hintUpdate(body).then((data: Hint) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#hintupdate-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **Hint**|  |


### Return type {#hintupdate-return-type}

[**Hint**](../models/Hint)

### HTTP request headers {#hintupdate-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#hintupdate-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


