---
title: Model API | Dart SDK
---

# Model API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**modelSpecificModelDownload**](ModelApi#modelspecificmodeldownload) | **POST** /model/\{model\}/download | /model/\{model\}/download [POST]
[**modelSpecificModelDownloadCancel**](ModelApi#modelspecificmodeldownloadcancel) | **POST** /model/\{model\}/download/cancel | /model/\{model\}/download/cancel [POST]
[**modelSpecificModelDownloadProgress**](ModelApi#modelspecificmodeldownloadprogress) | **GET** /model/\{model\}/download/progress | /model/\{model\}/download/progress [WS]
[**modelSpecificModelLoad**](ModelApi#modelspecificmodelload) | **POST** /model/\{model\}/load | /model/\{model\}/load [POST]
[**modelSpecificModelUnload**](ModelApi#modelspecificmodelunload) | **POST** /model/\{model\}/unload | /model/\{model\}/unload [POST]
[**modelUpdate**](ModelApi#modelupdate) | **POST** /model/update | /model/update [POST]
[**modelsSpecificModelSnapshot**](ModelApi#modelsspecificmodelsnapshot) | **GET** /model/\{model\} | /model/\{model\} [GET]


## **modelSpecificModelDownload** {#modelspecificmodeldownload}
> Model modelSpecificModelDownload(model)

/model/\{model\}/download [POST]

Downloads a specific model to your local machine.

### Example {#modelspecificmodeldownload-example}
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

### Parameters {#modelspecificmodeldownload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelspecificmodeldownload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodeldownload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **modelSpecificModelDownloadCancel** {#modelspecificmodeldownloadcancel}
> Model modelSpecificModelDownloadCancel(model)

/model/\{model\}/download/cancel [POST]

Cancels a specific model download that is currently in progress.

### Example {#modelspecificmodeldownloadcancel-example}
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

### Parameters {#modelspecificmodeldownloadcancel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelspecificmodeldownloadcancel-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodeldownloadcancel-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownloadcancel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **modelSpecificModelDownloadProgress** {#modelspecificmodeldownloadprogress}
> ModelDownloadProgress modelSpecificModelDownloadProgress(model)

/model/\{model\}/download/progress [WS]

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example {#modelspecificmodeldownloadprogress-example}
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

### Parameters {#modelspecificmodeldownloadprogress-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelspecificmodeldownloadprogress-return-type}

[**ModelDownloadProgress**](../models/ModelDownloadProgress)

### Authorization {#modelspecificmodeldownloadprogress-authorization}

No authorization required

### HTTP request headers {#modelspecificmodeldownloadprogress-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **modelSpecificModelLoad** {#modelspecificmodelload}
> Model modelSpecificModelLoad(model)

/model/\{model\}/load [POST]

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example {#modelspecificmodelload-example}
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

### Parameters {#modelspecificmodelload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelspecificmodelload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodelload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodelload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **modelSpecificModelUnload** {#modelspecificmodelunload}
> Model modelSpecificModelUnload(model)

/model/\{model\}/unload [POST]

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example {#modelspecificmodelunload-example}
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

### Parameters {#modelspecificmodelunload-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelspecificmodelunload-return-type}

[**Model**](../models/Model)

### Authorization {#modelspecificmodelunload-authorization}

No authorization required

### HTTP request headers {#modelspecificmodelunload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **modelUpdate** {#modelupdate}
> Model modelUpdate(model)

/model/update [POST]

Updates a machine learning model. This functionality is exclusively available for models with the 'custom:true' setting.

### Example {#modelupdate-example}
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

### Parameters {#modelupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](../models/Model) |  | [optional] 

### Return type {#modelupdate-return-type}

[**Model**](../models/Model)

### Authorization {#modelupdate-authorization}

No authorization required

### HTTP request headers {#modelupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **modelsSpecificModelSnapshot** {#modelsspecificmodelsnapshot}
> Model modelsSpecificModelSnapshot(model)

/model/\{model\} [GET]

Retrieves a specific ML model.

### Example {#modelsspecificmodelsnapshot-example}
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

### Parameters {#modelsspecificmodelsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String** | model id | 

### Return type {#modelsspecificmodelsnapshot-return-type}

[**Model**](../models/Model)

### Authorization {#modelsspecificmodelsnapshot-authorization}

No authorization required

### HTTP request headers {#modelsspecificmodelsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

