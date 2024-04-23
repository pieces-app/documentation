---
title: Sensitive API | TypeScript SDK
---

# Sensitive API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitiveScoresIncrement**](SensitiveApi#sensitivescoresincrement) | **POST** /sensitive/\{sensitive\}/scores/increment | \'/sensitive/\{sensitive\}/scores/increment\' [POST]
[**sensitiveSnapshot**](SensitiveApi#sensitivesnapshot) | **GET** /sensitive/\{sensitive\} | /sensitive/\{sensitive\} [GET]
[**updateSensitive**](SensitiveApi#updatesensitive) | **POST** /sensitive/update | /sensitive/update [POST]


## **sensitiveScoresIncrement** {#sensitivescoresincrement}
> sensitiveScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#sensitivescoresincrement-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitiveApi(configuration)

const body: Pieces.SensitiveScoresIncrementRequest = {
// string | This is a uuid that represents a sensitive.
sensitive: sensitive_example,
// SeededScoreIncrement (optional)
seededScoreIncrement: ,
};

apiInstance.sensitiveScoresIncrement(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#sensitivescoresincrement-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **sensitive** | [**string**] | This is a uuid that represents a sensitive. | defaults to undefined


### Return type {#sensitivescoresincrement-return-type}

void (empty response body)

### HTTP request headers {#sensitivescoresincrement-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#sensitivescoresincrement-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **sensitiveSnapshot** {#sensitivesnapshot}
> Sensitive sensitiveSnapshot()

This will get a specific sensitive via the sensitive uuid.

### Example {#sensitivesnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitiveApi(configuration)

const body: Pieces.SensitiveSnapshotRequest = {
// string
sensitive: sensitive_example,
};

apiInstance.sensitiveSnapshot(body).then((data: Sensitive) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#sensitivesnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**string**] |  | defaults to undefined


### Return type {#sensitivesnapshot-return-type}

[**Sensitive**](../models/Sensitive)

### HTTP request headers {#sensitivesnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#sensitivesnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **updateSensitive** {#updatesensitive}
> Sensitive updateSensitive()

This will update a specific sensitive

### Example {#updatesensitive-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitiveApi(configuration)

const body: Pieces.UpdateSensitiveRequest = {
// Sensitive |  (optional)
sensitive: ,
};

apiInstance.updateSensitive(body).then((data: Sensitive) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#updatesensitive-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **Sensitive**|  |


### Return type {#updatesensitive-return-type}

[**Sensitive**](../models/Sensitive)

### HTTP request headers {#updatesensitive-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#updatesensitive-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


