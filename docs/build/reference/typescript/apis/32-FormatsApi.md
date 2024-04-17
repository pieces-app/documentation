---
title: Formats API | TypeScript SDK
---

# Formats API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatsSnapshot**](FormatsApi#formatssnapshot) | **GET** /formats | /formats [GET] Scoped to Formats
[**formatsSpecificFormatSnapshot**](FormatsApi#formatsspecificformatsnapshot) | **GET** /formats/\{format\} | /formats/\{format\} [GET] Scoped to Formats


## **formatsSnapshot** {#formatssnapshot}
> Formats formatsSnapshot()

Get all of your formats for a given user.

### Example {#formatssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.FormatsApi(configuration)

const body: Pieces.FormatsSnapshotRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.formatsSnapshot(body).then((data: Formats) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#formatssnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#formatssnapshot-return-type}

[**Formats**](../models/Formats)

### HTTP request headers {#formatssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#formatssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **formatsSpecificFormatSnapshot** {#formatsspecificformatsnapshot}
> Format formatsSpecificFormatSnapshot()

Request a specific format when given a id (uuid in path params)

### Example {#formatsspecificformatsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.FormatsApi(configuration)

const body: Pieces.FormatsSpecificFormatSnapshotRequest = {
// string | The id (uuid) for a specific format.
format: 102ff265-fdfb-4142-8d94-4932d400199c,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferable: true,
};

apiInstance.formatsSpecificFormatSnapshot(body).then((data: Format) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#formatsspecificformatsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] | The id (uuid) for a specific format. | defaults to undefined
 **transferable** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#formatsspecificformatsnapshot-return-type}

[**Format**](../models/Format)

### HTTP request headers {#formatsspecificformatsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#formatsspecificformatsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


