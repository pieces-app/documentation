# WellKnown API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getWellKnownHealth****](WellKnownApi#getwellknownhealth) | **GET** /.well-known/health
[**getWellKnownVersion****](WellKnownApi#getwellknownversion) | **GET** /.well-known/version


## **getWellKnownHealth** {#getwellknownhealth}
> string getWellKnownHealth()

Retrieves the health status of the server.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WellKnownApi(configuration)

apiInstance.getWellKnownHealth().then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters
This endpoint does not need any parameters.


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **getWellKnownVersion** {#getwellknownversion}
> string getWellKnownVersion()

Retrieves the version of the server. It returns a string representing the current version.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WellKnownApi(configuration)

apiInstance.getWellKnownVersion().then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters
This endpoint does not need any parameters.


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


