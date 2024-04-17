---
title: ExternalProvider API | TypeScript SDK
---

# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProvider APIKey externalProvider APIKeyCreate()

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProviderApi(configuration)

const body: Pieces.ExternalProviderApiKeyCreateRequest = {
    // PrecreatedExternalProvider APIKey (optional)
    precreatedExternalProvider APIKey: ,
};

apiInstance.externalProviderApiKeyCreate(body).then((data: CreatedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | **PrecreatedExternalProviderApiKey**|  |


### Return type

[**CreatedExternalProviderApiKey**](../models/CreatedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProviderApiKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProvider APIKey externalProvider APIKeyDelete()

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProviderApi(configuration)

const body: Pieces.ExternalProviderApiKeyDeleteRequest = {
    // PredeletedExternalProvider APIKey (optional)
    predeletedExternalProvider APIKey: ,
};

apiInstance.externalProviderApiKeyDelete(body).then((data: DeletedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | **PredeletedExternalProviderApiKey**|  |


### Return type

[**DeletedExternalProviderApiKey**](../models/DeletedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProviderApiKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProvider APIKey externalProvider APIKeyUpdate()

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ExternalProviderApi(configuration)

const body: Pieces.ExternalProviderApiKeyUpdateRequest = {
    // PreupdatedExternalProvider APIKey (optional)
    preupdatedExternalProvider APIKey: ,
};

apiInstance.externalProviderApiKeyUpdate(body).then((data: UpdatedExternalProvider APIKey) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | **PreupdatedExternalProviderApiKey**|  |


### Return type

[**UpdatedExternalProviderApiKey**](../models/UpdatedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |


