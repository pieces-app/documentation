---
title: Sensitives API | TypeScript SDK
---

# Sensitives API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitivesCreateNewSensitive**](SensitivesApi#sensitivescreatenewsensitive) | **POST** /sensitives/create | /sensitives/create [POST]
[**sensitivesDeleteSensitive**](SensitivesApi#sensitivesdeletesensitive) | **POST** /sensitives/\{sensitive\}/delete | /sensitives/\{sensitive\}/delete [POST]
[**sensitivesSnapshot**](SensitivesApi#sensitivessnapshot) | **GET** /sensitives | /sensitives [GET]


## **sensitivesCreateNewSensitive** {#sensitivescreatenewsensitive}
> Sensitive sensitivesCreateNewSensitive()

This will create a new sensitive model.

### Example {#sensitivescreatenewsensitive-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitivesApi(configuration)

const body: Pieces.SensitivesCreateNewSensitiveRequest = {
// SeededSensitive (optional)
seededSensitive: ,
};

apiInstance.sensitivesCreateNewSensitive(body).then((data: Sensitive) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#sensitivescreatenewsensitive-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededSensitive** | **SeededSensitive**|  |


### Return type {#sensitivescreatenewsensitive-return-type}

[**Sensitive**](../models/Sensitive)

### HTTP request headers {#sensitivescreatenewsensitive-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#sensitivescreatenewsensitive-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **sensitivesDeleteSensitive** {#sensitivesdeletesensitive}
> sensitivesDeleteSensitive()

This will delete a sensitive based on the sensitive uuid.

### Example {#sensitivesdeletesensitive-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitivesApi(configuration)

const body: Pieces.SensitivesDeleteSensitiveRequest = {
// string | This is a uuid that represents a sensitive.
sensitive: sensitive_example,
};

apiInstance.sensitivesDeleteSensitive(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#sensitivesdeletesensitive-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**string**] | This is a uuid that represents a sensitive. | defaults to undefined


### Return type {#sensitivesdeletesensitive-return-type}

void (empty response body)

### HTTP request headers {#sensitivesdeletesensitive-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#sensitivesdeletesensitive-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** |  |  -  |

## **sensitivesSnapshot** {#sensitivessnapshot}
> Sensitives sensitivesSnapshot()

This will get a snapshot of all of the sensitives.

### Example {#sensitivessnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.SensitivesApi(configuration)

apiInstance.sensitivesSnapshot().then((data: Sensitives) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#sensitivessnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#sensitivessnapshot-return-type}

[**Sensitives**](../models/Sensitives)

### HTTP request headers {#sensitivessnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#sensitivessnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


