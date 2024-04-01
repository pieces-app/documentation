# Models API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](ModelsApi#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](ModelsApi#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**modelsDeleteSpecificModelCache**](ModelsApi#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**modelsSnapshot**](ModelsApi#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](ModelsApi#unloadmodels) | **POST** /models/unload | /models/unload [POST]


## **modelsCreateNewModel**
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.

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
 **seededModel** | [**SeededModel**](../models/SeededModel)|  | [optional] 

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **modelsDeleteSpecificModel**
> modelsDeleteSpecificModel(model)

/models/\{model\}/delete [POST]

This will delete a model, This is only available for custom: true models.

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
 - **Accept**: application/json



## **modelsDeleteSpecificModelCache**
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/\{model\}/delete/cache [POST]

This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.

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
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](../models/ModelDeleteCacheInput)|  | [optional] 

### Return type

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **modelsSnapshot**
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

[**Models**](../models/Models)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **unloadModels**
> unloadModels()

/models/unload [POST]

This will unload all of the ml models.(that are unloadable)

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
 - **Accept**: application/json



