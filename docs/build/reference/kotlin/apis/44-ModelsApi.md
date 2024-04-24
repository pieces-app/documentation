---
title: Models API | Kotlin SDK
---

# Models API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**modelsDeleteSpecificModelCache**](#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**modelsSnapshot**](#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](#unloadmodels) | **POST** /models/unload | /models/unload [POST]


## **modelsCreateNewModel** {#modelscreatenewmodel}
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

Creates a machine learning model. By default, all models created through this endpoint will have the &#39;custom&#39; attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.

### Example {#modelscreatenewmodel-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelsApi()
val seededModel : SeededModel =  // SeededModel | 
try {
    val result : Model = apiInstance.modelsCreateNewModel(seededModel)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelsApi#modelsCreateNewModel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelsApi#modelsCreateNewModel")
    e.printStackTrace()
}
```

### Parameters {#modelscreatenewmodel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededModel** | [**SeededModel**](../models/SeededModel)|  | [optional]

### Return type {#modelscreatenewmodel-return-type}

[**Model**](../models/Model)

### Authorization {#modelscreatenewmodel-authorization}

No authorization required

### HTTP request headers {#modelscreatenewmodel-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **modelsDeleteSpecificModel** {#modelsdeletespecificmodel}
> modelsDeleteSpecificModel(model)

/models/\{model\}/delete [POST]

Deletes a specific model. It is exclusively available for custom models with the &#39;custom: true&#39; attribute.

### Example {#modelsdeletespecificmodel-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelsApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    apiInstance.modelsDeleteSpecificModel(model)
} catch (e: ClientException) {
    println("4xx response calling ModelsApi#modelsDeleteSpecificModel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelsApi#modelsDeleteSpecificModel")
    e.printStackTrace()
}
```

### Parameters {#modelsdeletespecificmodel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelsdeletespecificmodel-return-type}

null (empty response body)

### Authorization {#modelsdeletespecificmodel-authorization}

No authorization required

### HTTP request headers {#modelsdeletespecificmodel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **modelsDeleteSpecificModelCache** {#modelsdeletespecificmodelcache}
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/\{model\}/delete/cache [POST]

Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.

### Example {#modelsdeletespecificmodelcache-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelsApi()
val model : kotlin.String = model_example // kotlin.String | model id
val modelDeleteCacheInput : ModelDeleteCacheInput =  // ModelDeleteCacheInput | 
try {
    val result : ModelDeleteCacheOutput = apiInstance.modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelsApi#modelsDeleteSpecificModelCache")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelsApi#modelsDeleteSpecificModelCache")
    e.printStackTrace()
}
```

### Parameters {#modelsdeletespecificmodelcache-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](../models/ModelDeleteCacheInput)|  | [optional]

### Return type {#modelsdeletespecificmodelcache-return-type}

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### Authorization {#modelsdeletespecificmodelcache-authorization}

No authorization required

### HTTP request headers {#modelsdeletespecificmodelcache-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **modelsSnapshot** {#modelssnapshot}
> Models modelsSnapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example {#modelssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelsApi()
try {
    val result : Models = apiInstance.modelsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelsApi#modelsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelsApi#modelsSnapshot")
    e.printStackTrace()
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
 - **Accept**: application/json

## **unloadModels** {#unloadmodels}
> unloadModels()

/models/unload [POST]

Unloads all available machine learning models that are unloadable.

### Example {#unloadmodels-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelsApi()
try {
    apiInstance.unloadModels()
} catch (e: ClientException) {
    println("4xx response calling ModelsApi#unloadModels")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelsApi#unloadModels")
    e.printStackTrace()
}
```

### Parameters {#unloadmodels-parameters}
This endpoint does not need any parameter.

### Return type {#unloadmodels-return-type}

null (empty response body)

### Authorization {#unloadmodels-authorization}

No authorization required

### HTTP request headers {#unloadmodels-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

