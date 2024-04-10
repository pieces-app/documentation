# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalproviderapikeycreate) | **POST** /external_provider/api_key/create
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update


## **externalProviderApiKeyCreate**
> CreatedExternalProviderApiKey externalProviderApiKeyCreate()

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ExternalProviderApi(configuration);

const body: Pieces.ExternalProviderApiKeyCreateRequest = {
    // PrecreatedExternalProviderApiKey (optional)
    precreatedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyCreate(body).then((data: CreatedExternalProviderApiKey) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **precreatedExternalProviderApiKey** | **PrecreatedExternalProviderApiKey**|  |


### Return type

[**CreatedExternalProviderApiKey**](../models/CreatedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProviderApiKeyDelete**
> DeletedExternalProviderApiKey externalProviderApiKeyDelete()

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ExternalProviderApi(configuration);

const body: Pieces.ExternalProviderApiKeyDeleteRequest = {
    // PredeletedExternalProviderApiKey (optional)
    predeletedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyDelete(body).then((data: DeletedExternalProviderApiKey) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **predeletedExternalProviderApiKey** | **PredeletedExternalProviderApiKey**|  |


### Return type

[**DeletedExternalProviderApiKey**](../models/DeletedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |

## **externalProviderApiKeyUpdate**
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate()

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ExternalProviderApi(configuration);

const body: Pieces.ExternalProviderApiKeyUpdateRequest = {
    // PreupdatedExternalProviderApiKey (optional)
    preupdatedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyUpdate(body).then((data: UpdatedExternalProviderApiKey) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **preupdatedExternalProviderApiKey** | **PreupdatedExternalProviderApiKey**|  |


### Return type

[**UpdatedExternalProviderApiKey**](../models/UpdatedExternalProviderApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**500** | Internal Server Error |  -  |


