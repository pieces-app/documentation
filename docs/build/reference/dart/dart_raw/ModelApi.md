---
title: core_openapi.api.ModelApi | Dart SDK
---

# core_openapi.api.ModelApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelSpecificModelDownload**](ModelApi.md#modelspecificmodeldownload) | **POST** /model/{model}/download | /model/{model}/download [POST]
[**modelSpecificModelDownloadCancel**](ModelApi.md#modelspecificmodeldownloadcancel) | **POST** /model/{model}/download/cancel | /model/{model}/download/cancel [POST]
[**modelSpecificModelDownloadProgress**](ModelApi.md#modelspecificmodeldownloadprogress) | **GET** /model/{model}/download/progress | /model/{model}/download/progress [WS]
[**modelSpecificModelLoad**](ModelApi.md#modelspecificmodelload) | **POST** /model/{model}/load | /model/{model}/load [POST]
[**modelSpecificModelUnload**](ModelApi.md#modelspecificmodelunload) | **POST** /model/{model}/unload | /model/{model}/unload [POST]
[**modelUpdate**](ModelApi.md#modelupdate) | **POST** /model/update | /model/update [POST]
[**modelsSpecificModelSnapshot**](ModelApi.md#modelsspecificmodelsnapshot) | **GET** /model/{model} | /model/{model} [GET]


## **modelSpecificModelDownload** {#modelspecificmodeldownload}
> Model modelSpecificModelDownload(model)

/model/{model}/download [POST]

Downloads a specific model to your local machine.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelSpecificModelDownload(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelSpecificModelDownload: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelSpecificModelDownloadCancel** {#modelspecificmodeldownloadcancel}
> Model modelSpecificModelDownloadCancel(model)

/model/{model}/download/cancel [POST]

Cancels a specific model download that is currently in progress.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelSpecificModelDownloadCancel(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelSpecificModelDownloadCancel: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelSpecificModelDownloadProgress** {#modelspecificmodeldownloadprogress}
> ModelDownloadProgress modelSpecificModelDownloadProgress(model)

/model/{model}/download/progress [WS]

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelSpecificModelDownloadProgress(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelSpecificModelDownloadProgress: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**ModelDownloadProgress**](ModelDownloadProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelSpecificModelLoad** {#modelspecificmodelload}
> Model modelSpecificModelLoad(model)

/model/{model}/load [POST]

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelSpecificModelLoad(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelSpecificModelLoad: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelSpecificModelUnload** {#modelspecificmodelunload}
> Model modelSpecificModelUnload(model)

/model/{model}/unload [POST]

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelSpecificModelUnload(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelSpecificModelUnload: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelUpdate** {#modelupdate}
> Model modelUpdate(model)

/model/update [POST]

Updates a machine learning model. This functionality is exclusively available for models with the 'custom:true' setting.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = Model(); // Model | 

try {
    final result = api_instance.modelUpdate(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](Model.md)|  | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **modelsSpecificModelSnapshot** {#modelsspecificmodelsnapshot}
> Model modelsSpecificModelSnapshot(model)

/model/{model} [GET]

Retrieves a specific ML model.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ModelApi();
final model = model_example; // String | model id

try {
    final result = api_instance.modelsSpecificModelSnapshot(model);
    print(result);
} catch (e) {
    print('Exception when calling ModelApi->modelsSpecificModelSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| model id | 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

