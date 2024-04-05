# Models API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](ModelsApi#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](ModelsApi#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**modelsDeleteSpecificModelCache**](ModelsApi#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**modelsSnapshot**](ModelsApi#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](ModelsApi#unloadmodels) | **POST** /models/unload | /models/unload [POST]


## **modelsCreateNewModel**
> Model modelsCreateNewModel()

This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelsApi(configuration);

const body: Pieces.ModelsCreateNewModelRequest = {
    // SeededModel |  (optional)
    seededModel: ,
};

apiInstance.modelsCreateNewModel(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededModel** | **SeededModel**|  |


### Return type

**Model**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **modelsDeleteSpecificModel**
> modelsDeleteSpecificModel()

This will delete a model, This is only available for custom: true models.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelsApi(configuration);

const body: Pieces.ModelsDeleteSpecificModelRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelsDeleteSpecificModel(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**string**] | model id | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **modelsDeleteSpecificModelCache**
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache()

This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelsApi(configuration);

const body: Pieces.ModelsDeleteSpecificModelCacheRequest = {
    // string | model id
    model: model_example,
    // ModelDeleteCacheInput (optional)
    modelDeleteCacheInput: ,
};

apiInstance.modelsDeleteSpecificModelCache(body).then((data: ModelDeleteCacheOutput) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelDeleteCacheInput** | **ModelDeleteCacheInput**|  |
 **model** | [**string**] | model id | defaults to undefined


### Return type

**ModelDeleteCacheOutput**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **modelsSnapshot**
> Models modelsSnapshot()

This will get a snapshot of all of your models.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelsApi(configuration);

apiInstance.modelsSnapshot().then((data: Models) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**Models**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **unloadModels**
> unloadModels()

This will unload all of the ml models.(that are unloadable)

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelsApi(configuration);

apiInstance.unloadModels().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |




