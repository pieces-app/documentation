# Models API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelsCreateNewModel**](ModelsApi.md#modelscreatenewmodel) | **POST** /models/create | /models/create [POST]
[**modelsDeleteSpecificModel**](ModelsApi.md#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**modelsDeleteSpecificModelCache**](ModelsApi.md#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**modelsSnapshot**](ModelsApi.md#modelssnapshot) | **GET** /models | /models [GET]
[**unloadModels**](ModelsApi.md#unloadmodels) | **POST** /models/unload | /models/unload [POST]


<a id="modelsCreateNewModel"></a>
## **modelsCreateNewModel**
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

This will create a ml model, this is aloud however all models will be set to custom: true.  &amp;&amp; we will verify we dont have a model that matches this model.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 - **Accept**: application/json

<a id="modelsDeleteSpecificModel"></a>
## **modelsDeleteSpecificModel**
> modelsDeleteSpecificModel(model)

/models/\{model\}/delete [POST]

This will delete a model, This is only available for custom: true models.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelsDeleteSpecificModelCache"></a>
## **modelsDeleteSpecificModelCache**
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/\{model\}/delete/cache [POST]

This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](ModelDeleteCacheInput.md)|  | [optional]

### Return type

[**ModelDeleteCacheOutput**](ModelDeleteCacheOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="modelsSnapshot"></a>
## **modelsSnapshot**
> Models modelsSnapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Models**](Models.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="unloadModels"></a>
## **unloadModels**
> unloadModels()

/models/unload [POST]

This will unload all of the ml models.(that are unloadable)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

