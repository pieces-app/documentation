# Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelSpecificModelDownload**](ModelApi#modelSpecificModelDownload) | **POST** /model/\{model\}/download | /model/\{model\}/download [POST]
[**modelSpecificModelDownloadCancel**](ModelApi#modelSpecificModelDownloadCancel) | **POST** /model/\{model\}/download/cancel | /model/\{model\}/download/cancel [POST]
[**modelSpecificModelDownloadProgress**](ModelApi#modelSpecificModelDownloadProgress) | **GET** /model/\{model\}/download/progress | /model/\{model\}/download/progress [WS]
[**modelSpecificModelLoad**](ModelApi#modelSpecificModelLoad) | **POST** /model/\{model\}/load | /model/\{model\}/load [POST]
[**modelSpecificModelUnload**](ModelApi#modelSpecificModelUnload) | **POST** /model/\{model\}/unload | /model/\{model\}/unload [POST]
[**modelUpdate**](ModelApi#modelUpdate) | **POST** /model/update | /model/update [POST]
[**modelsSpecificModelSnapshot**](ModelApi#modelsSpecificModelSnapshot) | **GET** /model/\{model\} | /model/\{model\} [GET]


<a id="modelSpecificModelDownload"></a>
## **modelSpecificModelDownload**
> Model modelSpecificModelDownload(model)

/model/\{model\}/download [POST]

This will download a specific model onto your local machine.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelSpecificModelDownloadCancel"></a>
## **modelSpecificModelDownloadCancel**
> Model modelSpecificModelDownloadCancel(model)

/model/\{model\}/download/cancel [POST]

This will cancel a specific model download in progress.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelSpecificModelDownloadProgress"></a>
## **modelSpecificModelDownloadProgress**
> ModelDownloadProgress modelSpecificModelDownloadProgress(model)

/model/\{model\}/download/progress [WS]

This is a Websocket Connection, to get the progress of the downloading of a specific model.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**ModelDownloadProgress**](ModelDownloadProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelSpecificModelLoad"></a>
## **modelSpecificModelLoad**
> Model modelSpecificModelLoad(model)

/model/\{model\}/load [POST]

This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelSpecificModelUnload"></a>
## **modelSpecificModelUnload**
> Model modelSpecificModelUnload(model)

/model/\{model\}/unload [POST]

This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="modelUpdate"></a>
## **modelUpdate**
> Model modelUpdate(model)

/model/update [POST]

This will update Machinelearning Model, this is only available for \&quot;custom:true\&quot; models.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 **model** | [**Model**](Model)|  | [optional]

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="modelsSpecificModelSnapshot"></a>
## **modelsSpecificModelSnapshot**
> Model modelsSpecificModelSnapshot(model)

/model/\{model\} [GET]



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

