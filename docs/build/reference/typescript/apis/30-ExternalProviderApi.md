# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate**
> CreatedExternalProviderApiKey externalProviderApiKeyCreate()

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ExternalProviderApi(configuration);

let body:.ExternalProviderApiExternalProviderApiKeyCreateRequest = {
    // PrecreatedExternalProviderApiKey (optional)
    precreatedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyCreate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | **PrecreatedExternalProviderApiKey**|  |


### Return type

**CreatedExternalProviderApiKey**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **externalProviderApiKeyDelete**
> DeletedExternalProviderApiKey externalProviderApiKeyDelete()

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ExternalProviderApi(configuration);

let body:.ExternalProviderApiExternalProviderApiKeyDeleteRequest = {
    // PredeletedExternalProviderApiKey (optional)
    predeletedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyDelete(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | **PredeletedExternalProviderApiKey**|  |


### Return type

**DeletedExternalProviderApiKey**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **externalProviderApiKeyUpdate**
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate()

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.ExternalProviderApi(configuration);

let body:.ExternalProviderApiExternalProviderApiKeyUpdateRequest = {
    // PreupdatedExternalProviderApiKey (optional)
    preupdatedExternalProviderApiKey: ,
};

apiInstance.externalProviderApiKeyUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | **PreupdatedExternalProviderApiKey**|  |


### Return type

**UpdatedExternalProviderApiKey**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


