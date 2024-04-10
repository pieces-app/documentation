# Models API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**modelsCreateNewModel**](#modelscreatenewmodel) | **POST** /models/create
[**modelsDeleteSpecificModel**](#modelsdeletespecificmodel) | **POST** /models/\{model\}/delete
[**modelsDeleteSpecificModelCache**](#modelsdeletespecificmodelcache) | **POST** /models/\{model\}/delete/cache
[**modelsSnapshot**](#modelssnapshot) | **GET** /models
[**unloadModels**](#unloadmodels) | **POST** /models/unload


<a id="modelsCreateNewModel"></a>
## **modelsCreateNewModel** {#modelscreatenewmodel}
> Model modelsCreateNewModel(seededModel)

/models/create [POST]

This will create a ml model, this is aloud however all models will be set to custom: true.  &amp;&amp; we will verify we dont have a model that matches this model.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
 **seededModel** | [**SeededModel**](../models/SeededModel)|  | [optional] 

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="modelsDeleteSpecificModel"></a>
## **modelsDeleteSpecificModel** {#modelsdeletespecificmodel}
> modelsDeleteSpecificModel(model)

/models/\{model\}/delete [POST]

This will delete a model, This is only available for custom: true models.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
## **modelsDeleteSpecificModelCache** {#modelsdeletespecificmodelcache}
> ModelDeleteCacheOutput modelsDeleteSpecificModelCache(model, modelDeleteCacheInput)

/models/\{model\}/delete/cache [POST]

This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
 **modelDeleteCacheInput** | [**ModelDeleteCacheInput**](../models/ModelDeleteCacheInput)|  | [optional] 

### Return type

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="modelsSnapshot"></a>
## **modelsSnapshot** {#modelssnapshot}
> Models modelsSnapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

[**Models**](../models/Models)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="unloadModels"></a>
## **unloadModels** {#unloadmodels}
> unloadModels()

/models/unload [POST]

This will unload all of the ml models.(that are unloadable)

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

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
This endpoint does not need any parameters.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

