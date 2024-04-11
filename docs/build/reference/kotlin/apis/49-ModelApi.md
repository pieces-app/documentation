# Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**modelSpecificModelDownload**](#modelspecificmodeldownload) | **POST** /model/\{model\}/download
[**modelSpecificModelDownloadCancel**](#modelspecificmodeldownloadcancel) | **POST** /model/\{model\}/download/cancel
[**modelSpecificModelDownloadProgress**](#modelspecificmodeldownloadprogress) | **GET** /model/\{model\}/download/progress
[**modelSpecificModelLoad**](#modelspecificmodelload) | **POST** /model/\{model\}/load
[**modelSpecificModelUnload**](#modelspecificmodelunload) | **POST** /model/\{model\}/unload
[**modelUpdate**](#modelupdate) | **POST** /model/update
[**modelsSpecificModelSnapshot**](#modelsspecificmodelsnapshot) | **GET** /model/\{model\}


## **modelSpecificModelDownload** {#modelspecificmodeldownload}
> Model modelSpecificModelDownload(model)

/model/\{model\}/download [POST]

Downloads a specific model to your local machine.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelDownload(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelSpecificModelDownload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelSpecificModelDownload")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelDownloadCancel** {#modelspecificmodeldownloadcancel}
> Model modelSpecificModelDownloadCancel(model)

/model/\{model\}/download/cancel [POST]

Cancels a specific model download that is currently in progress.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelDownloadCancel(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelSpecificModelDownloadCancel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelSpecificModelDownloadCancel")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelDownloadProgress** {#modelspecificmodeldownloadprogress}
> ModelDownloadProgress modelSpecificModelDownloadProgress(model)

/model/\{model\}/download/progress [WS]

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : ModelDownloadProgress = apiInstance.modelSpecificModelDownloadProgress(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelSpecificModelDownloadProgress")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelSpecificModelDownloadProgress")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**ModelDownloadProgress**](../models/ModelDownloadProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelLoad** {#modelspecificmodelload}
> Model modelSpecificModelLoad(model)

/model/\{model\}/load [POST]

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelLoad(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelSpecificModelLoad")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelSpecificModelLoad")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelUnload** {#modelspecificmodelunload}
> Model modelSpecificModelUnload(model)

/model/\{model\}/unload [POST]

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelUnload(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelSpecificModelUnload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelSpecificModelUnload")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelUpdate** {#modelupdate}
> Model modelUpdate(model)

/model/update [POST]

Updates a machine learning model. This functionality is exclusively available for models with the &#39;custom:true&#39; setting.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : Model =  // Model | 
try {
    val result : Model = apiInstance.modelUpdate(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](../models/Model)|  | [optional]

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **modelsSpecificModelSnapshot** {#modelsspecificmodelsnapshot}
> Model modelsSpecificModelSnapshot(model)

/model/\{model\} [GET]

Retrieves a specific ML model.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ModelApi()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelsSpecificModelSnapshot(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ModelApi#modelsSpecificModelSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ModelApi#modelsSpecificModelSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

