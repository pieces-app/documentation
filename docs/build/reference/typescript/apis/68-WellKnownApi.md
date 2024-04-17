---
title: WellKnown API | TypeScript SDK
---

# WellKnown API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWellKnownHealth**](WellKnownApi#getwellknownhealth) | **GET** /.well-known/health | /.well-known/health [GET]
[**getWellKnownVersion**](WellKnownApi#getwellknownversion) | **GET** /.well-known/version | /.well-known/version [Get]


## **getWellKnownHealth** {#getwellknownhealth}
> string getWellKnownHealth()

Retrieves the health status of the server.

### Example {#getwellknownhealth-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WellKnownApi(configuration)

apiInstance.getWellKnownHealth().then((data: string) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#getwellknownhealth-parameters}

This endpoint does not need any parameters.


### Return type {#getwellknownhealth-return-type}

**string**

### HTTP request headers {#getwellknownhealth-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#getwellknownhealth-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **getWellKnownVersion** {#getwellknownversion}
> string getWellKnownVersion()

Retrieves the version of the server. It returns a string representing the current version.

### Example {#getwellknownversion-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WellKnownApi(configuration)

apiInstance.getWellKnownVersion().then((data: string) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#getwellknownversion-parameters}

This endpoint does not need any parameters.


### Return type {#getwellknownversion-return-type}

**string**

### HTTP request headers {#getwellknownversion-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#getwellknownversion-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


