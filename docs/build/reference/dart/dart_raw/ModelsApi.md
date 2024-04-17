---
title: core_openapi.api.ModelsApi | Dart SDK
---

# core_openapi.api.ModelsApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](ModelsApi.md#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](ModelsApi.md#modelsdeletespecificmodel) | **POST** /models/{model}/delete | /models/{model}/delete [POST]
[**modelsDeleteSpecificModelCache**](ModelsApi.md#modelsdeletespecificmodelcache) | **POST** /models/{model}/delete/cache | /models/{model}/delete/cache [POST]
[**modelsSnapshot**](ModelsApi.md#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](ModelsApi.md#unloadmodels) | **POST** /models/unload | /models/unload [POST]


## **modelsCreateNewModel** {#modelscreatenewmodel}
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

Creates a machine learning model. By default, all models created through this endpoint will have the 'custom' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();
final seededModel = SeededModel(); // SeededModel | 

try {
    final result = api_instance.modelsCreateNewModel(seededModel);
    print(result);
} catch (e) {
    print('Exception when calling ModelsApi->modelsCreateNewModel: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededModel** | [**SeededModel**](SeededModel.md)|  | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelsDeleteSpecificModel** {#modelsdeletespecificmodel}
> modelsDeleteSpecificModel(model)

/models/{model}/delete [POST]

Deletes a specific model. It is exclusively available for custom models with the 'custom: true' attribute.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();
final model = model_example; // String | model id

try {
    api_instance.modelsDeleteSpecificModel(model);
} catch (e) {
    print('Exception when calling ModelsApi->modelsDeleteSpecificModel: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelsDeleteSpecificModelCache** {#modelsdeletespecificmodelcache}
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/{model}/delete/cache [POST]

Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();
final model = model_example; // String | model id
final modelDeleteCacheInput = ModelDeleteCacheInput(); // ModelDeleteCacheInput | 

try {
    final result = api_instance.modelsDeleteSpecificModelCache(model, modelDeleteCacheInput);
    print(result);
} catch (e) {
    print('Exception when calling ModelsApi->modelsDeleteSpecificModelCache: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](ModelDeleteCacheInput.md)|  | [optional] 

### Return type

[**ModelDeleteCacheOutput**](ModelDeleteCacheOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelsSnapshot** {#modelssnapshot}
> Models modelsSnapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();

try {
    final result = api_instance.modelsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling ModelsApi->modelsSnapshot: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Models**](Models.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **unloadModels** {#unloadmodels}
> unloadModels()

/models/unload [POST]

Unloads all available machine learning models that are unloadable.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();

try {
    api_instance.unloadModels();
} catch (e) {
    print('Exception when calling ModelsApi->unloadModels: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

