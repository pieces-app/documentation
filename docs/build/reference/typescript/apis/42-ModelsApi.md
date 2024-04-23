---
title: Models API | TypeScript SDK
---

# Models API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](ModelsApi#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](ModelsApi#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**modelsDeleteSpecificModelCache**](ModelsApi#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**modelsSnapshot**](ModelsApi#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](ModelsApi#unloadmodels) | **POST** /models/unload | /models/unload [POST]


## **modelsCreateNewModel** {#modelscreatenewmodel}
> Model modelsCreateNewModel()

Creates a machine learning model. By default, all models created through this endpoint will have the \'custom\' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.

### Example {#modelscreatenewmodel-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ModelsApi(configuration)

const body: Pieces.ModelsCreateNewModelRequest = {
// SeededModel |  (optional)
seededModel: ,
};

apiInstance.modelsCreateNewModel(body).then((data: Model) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#modelscreatenewmodel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededModel** | **SeededModel**|  |


### Return type {#modelscreatenewmodel-return-type}

[**Model**](../models/Model)

### HTTP request headers {#modelscreatenewmodel-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#modelscreatenewmodel-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelsDeleteSpecificModel** {#modelsdeletespecificmodel}
> modelsDeleteSpecificModel()

Deletes a specific model. It is exclusively available for custom models with the \'custom: true\' attribute.

### Example {#modelsdeletespecificmodel-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ModelsApi(configuration)

const body: Pieces.ModelsDeleteSpecificModelRequest = {
// string | model id
model: model_example,
};

apiInstance.modelsDeleteSpecificModel(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#modelsdeletespecificmodel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] | model id | defaults to undefined


### Return type {#modelsdeletespecificmodel-return-type}

void (empty response body)

### HTTP request headers {#modelsdeletespecificmodel-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#modelsdeletespecificmodel-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **modelsDeleteSpecificModelCache** {#modelsdeletespecificmodelcache}
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache()

Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.

### Example {#modelsdeletespecificmodelcache-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ModelsApi(configuration)

const body: Pieces.ModelsDeleteSpecificModelCacheRequest = {
// string | model id
model: model_example,
// ModelDeleteCacheInput (optional)
modelDeleteCacheInput: ,
};

apiInstance.modelsDeleteSpecificModelCache(body).then((data: ModelDeleteCacheOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#modelsdeletespecificmodelcache-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelDeleteCacheInput** | **ModelDeleteCacheInput**|  |
 **model** | [**string**] | model id | defaults to undefined


### Return type {#modelsdeletespecificmodelcache-return-type}

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### HTTP request headers {#modelsdeletespecificmodelcache-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#modelsdeletespecificmodelcache-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelsSnapshot** {#modelssnapshot}
> Models modelsSnapshot()

This will get a snapshot of all of your models.

### Example {#modelssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ModelsApi(configuration)

apiInstance.modelsSnapshot().then((data: Models) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#modelssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#modelssnapshot-return-type}

[**Models**](../models/Models)

### HTTP request headers {#modelssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#modelssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **unloadModels** {#unloadmodels}
> unloadModels()

Unloads all available machine learning models that are unloadable.

### Example {#unloadmodels-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ModelsApi(configuration)

apiInstance.unloadModels().then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#unloadmodels-parameters}

This endpoint does not need any parameters.


### Return type {#unloadmodels-return-type}

void (empty response body)

### HTTP request headers {#unloadmodels-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#unloadmodels-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |


