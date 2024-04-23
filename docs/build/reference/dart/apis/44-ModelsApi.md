---
title: Models API | Dart SDK
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
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

Creates a machine learning model. By default, all models created through this endpoint will have the 'custom' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.

### Example {#modelscreatenewmodel-example}
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

### Parameters {#modelscreatenewmodel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededModel** | [**SeededModel**](../models/SeededModel) |  | [optional] 

### Return type {#modelscreatenewmodel-return-type}

[**Model**](../models/Model)

### Authorization {#modelscreatenewmodel-authorization}

No authorization required

### HTTP request headers {#modelscreatenewmodel-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **modelsDeleteSpecificModel** {#modelsdeletespecificmodel}
> modelsDeleteSpecificModel(model)

/models/\{model\}/delete [POST]

Deletes a specific model. It is exclusively available for custom models with the 'custom: true' attribute.

### Example {#modelsdeletespecificmodel-example}
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

### Parameters {#modelsdeletespecificmodel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelsdeletespecificmodel-return-type}

void (empty response body)

### Authorization {#modelsdeletespecificmodel-authorization}

No authorization required

### HTTP request headers {#modelsdeletespecificmodel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **modelsDeleteSpecificModelCache** {#modelsdeletespecificmodelcache}
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/\{model\}/delete/cache [POST]

Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.

### Example {#modelsdeletespecificmodelcache-example}
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

### Parameters {#modelsdeletespecificmodelcache-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](../models/ModelDeleteCacheInput) |  | [optional] 

### Return type {#modelsdeletespecificmodelcache-return-type}

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### Authorization {#modelsdeletespecificmodelcache-authorization}

No authorization required

### HTTP request headers {#modelsdeletespecificmodelcache-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **modelsSnapshot** {#modelssnapshot}
> Models modelsSnapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example {#modelssnapshot-example}
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

### Parameters {#modelssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#modelssnapshot-return-type}

[**Models**](../models/Models)

### Authorization {#modelssnapshot-authorization}

No authorization required

### HTTP request headers {#modelssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **unloadModels** {#unloadmodels}
> unloadModels()

/models/unload [POST]

Unloads all available machine learning models that are unloadable.

### Example {#unloadmodels-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelsApi();

try {
    api_instance.unloadModels();
} catch (e) {
    print('Exception when calling ModelsApi->unloadModels: $e\n');
}
```

### Parameters {#unloadmodels-parameters}
This endpoint does not need any parameter.

### Return type {#unloadmodels-return-type}

void (empty response body)

### Authorization {#unloadmodels-authorization}

No authorization required

### HTTP request headers {#unloadmodels-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

