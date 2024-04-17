---
title: ExternalProvider API | TypeScript SDK
---

# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProvider APIKeyCreate**](ExternalProvider API#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProvider APIKeyDelete**](ExternalProvider API#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProvider APIKeyUpdate**](ExternalProvider API#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProvider APIKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProvider APIKey externalProvider APIKeyCreate()

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProvider API(configuration)

const body: Pieces.ExternalProvider APIKeyCreateRequest = {
    // PrecreatedExternalProvider APIKey (optional)
    precreatedExternalProvider APIKey: ,
};

apiInstance.externalProvider APIKeyCreate(body).then((data: CreatedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProvider APIKey** | **PrecreatedExternalProvider APIKey**|  |


### Return type

[**CreatedExternalProvider APIKey**](../models/CreatedExternalProvider APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProvider APIKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProvider APIKey externalProvider APIKeyDelete()

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProvider API(configuration)

const body: Pieces.ExternalProvider APIKeyDeleteRequest = {
    // PredeletedExternalProvider APIKey (optional)
    predeletedExternalProvider APIKey: ,
};

apiInstance.externalProvider APIKeyDelete(body).then((data: DeletedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProvider APIKey** | **PredeletedExternalProvider APIKey**|  |


### Return type

[**DeletedExternalProvider APIKey**](../models/DeletedExternalProvider APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProvider APIKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProvider APIKey externalProvider APIKeyUpdate()

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProvider API(configuration)

const body: Pieces.ExternalProvider APIKeyUpdateRequest = {
    // PreupdatedExternalProvider APIKey (optional)
    preupdatedExternalProvider APIKey: ,
};

apiInstance.externalProvider APIKeyUpdate(body).then((data: UpdatedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProvider APIKey** | **PreupdatedExternalProvider APIKey**|  |


### Return type

[**UpdatedExternalProvider APIKey**](../models/UpdatedExternalProvider APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |


