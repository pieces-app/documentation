---
title: Model API | Kotlin SDK
---

# Model API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelSpecificModelDownload**](#modelspecificmodeldownload) | **POST** /model/\{model\}/download | /model/\{model\}/download [POST]
[**modelSpecificModelDownloadCancel**](#modelspecificmodeldownloadcancel) | **POST** /model/\{model\}/download/cancel | /model/\{model\}/download/cancel [POST]
[**modelSpecificModelDownloadProgress**](#modelspecificmodeldownloadprogress) | **GET** /model/\{model\}/download/progress | /model/\{model\}/download/progress [WS]
[**modelSpecificModelLoad**](#modelspecificmodelload) | **POST** /model/\{model\}/load | /model/\{model\}/load [POST]
[**modelSpecificModelUnload**](#modelspecificmodelunload) | **POST** /model/\{model\}/unload | /model/\{model\}/unload [POST]
[**modelUpdate**](#modelupdate) | **POST** /model/update | /model/update [POST]
[**modelsSpecificModelSnapshot**](#modelsspecificmodelsnapshot) | **GET** /model/\{model\} | /model/\{model\} [GET]


## **modelSpecificModelDownload** {#modelspecificmodeldownload}
> Model modelSpecificModelDownload(model)

/model/\{model\}/download [POST]

Downloads a specific model to your local machine.

### Example {#modelspecificmodeldownload-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelDownload(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelSpecificModelDownload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelSpecificModelDownload")
    e.printStackTrace()
}
```

### Parameters {#modelspecificmodeldownload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelspecificmodeldownload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodeldownload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelDownloadCancel** {#modelspecificmodeldownloadcancel}
> Model modelSpecificModelDownloadCancel(model)

/model/\{model\}/download/cancel [POST]

Cancels a specific model download that is currently in progress.

### Example {#modelspecificmodeldownloadcancel-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelDownloadCancel(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelSpecificModelDownloadCancel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelSpecificModelDownloadCancel")
    e.printStackTrace()
}
```

### Parameters {#modelspecificmodeldownloadcancel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelspecificmodeldownloadcancel-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodeldownloadcancel-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownloadcancel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelDownloadProgress** {#modelspecificmodeldownloadprogress}
> ModelDownloadProgress modelSpecificModelDownloadProgress(model)

/model/\{model\}/download/progress [WS]

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example {#modelspecificmodeldownloadprogress-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : ModelDownloadProgress = apiInstance.modelSpecificModelDownloadProgress(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelSpecificModelDownloadProgress")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelSpecificModelDownloadProgress")
    e.printStackTrace()
}
```

### Parameters {#modelspecificmodeldownloadprogress-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelspecificmodeldownloadprogress-return-type}

[**ModelDownloadProgress**](../models/ModelDownloadProgress)

### Authorization {#modelspecificmodeldownloadprogress-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownloadprogress-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelLoad** {#modelspecificmodelload}
> Model modelSpecificModelLoad(model)

/model/\{model\}/load [POST]

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example {#modelspecificmodelload-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelLoad(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelSpecificModelLoad")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelSpecificModelLoad")
    e.printStackTrace()
}
```

### Parameters {#modelspecificmodelload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelspecificmodelload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodelload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodelload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelSpecificModelUnload** {#modelspecificmodelunload}
> Model modelSpecificModelUnload(model)

/model/\{model\}/unload [POST]

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example {#modelspecificmodelunload-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelSpecificModelUnload(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelSpecificModelUnload")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelSpecificModelUnload")
    e.printStackTrace()
}
```

### Parameters {#modelspecificmodelunload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelspecificmodelunload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodelunload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodelunload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **modelUpdate** {#modelupdate}
> Model modelUpdate(model)

/model/update [POST]

Updates a machine learning model. This functionality is exclusively available for models with the &#39;custom:true&#39; setting.

### Example {#modelupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : Model =  // Model | 
try {
    val result : Model = apiInstance.modelUpdate(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelUpdate")
    e.printStackTrace()
}
```

### Parameters {#modelupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](../models/Model)|  | [optional]

### Return type {#modelupdate-return-type}

[**Model**](../models/Model)

### Authorization {#modelupdate-authorization}

No authorization required

### HTTP request headers {#modelupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **modelsSpecificModelSnapshot** {#modelsspecificmodelsnapshot}
> Model modelsSpecificModelSnapshot(model)

/model/\{model\} [GET]

Retrieves a specific ML model.

### Example {#modelsspecificmodelsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Model API()
val model : kotlin.String = model_example // kotlin.String | model id
try {
    val result : Model = apiInstance.modelsSpecificModelSnapshot(model)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Model API#modelsSpecificModelSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Model API#modelsSpecificModelSnapshot")
    e.printStackTrace()
}
```

### Parameters {#modelsspecificmodelsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **kotlin.String**| model id |

### Return type {#modelsspecificmodelsnapshot-return-type}

[**Model**](../models/Model)

### Authorization {#modelsspecificmodelsnapshot-authorization}

No authorization required

### HTTP request headers {#modelsspecificmodelsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

