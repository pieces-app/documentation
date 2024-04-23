---
title: Database API | TypeScript SDK
---

# Database API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**databaseExport**](DatabaseApi#databaseexport) | **GET** /database/export | Your GET endpoint
[**databaseImport**](DatabaseApi#databaseimport) | **POST** /database/import | /database/import [POST]


## **databaseExport** {#databaseexport}
> ExportedDatabase databaseExport()

This is going to export your current database.

### Example {#databaseexport-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DatabaseApi(configuration)

apiInstance.databaseExport().then((data: ExportedDatabase) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#databaseexport-parameters}

This endpoint does not need any parameters.


### Return type {#databaseexport-return-type}

[**ExportedDatabase**](../models/ExportedDatabase)

### HTTP request headers {#databaseexport-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#databaseexport-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **databaseImport** {#databaseimport}
> databaseImport()

This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.

### Example {#databaseimport-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DatabaseApi(configuration)

const body: Pieces.DatabaseImportRequest = {
// ExportedDatabase |  (optional)
exportedDatabase: ,
};

apiInstance.databaseImport(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#databaseimport-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportedDatabase** | **ExportedDatabase**|  |


### Return type {#databaseimport-return-type}

void (empty response body)

### HTTP request headers {#databaseimport-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#databaseimport-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |


