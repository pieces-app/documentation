# Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**modelSpecificModelDownload**](ModelApi#modelspecificmodeldownload) | **POST** /model/\{model\}/download
[**modelSpecificModelDownloadCancel**](ModelApi#modelspecificmodeldownloadcancel) | **POST** /model/\{model\}/download/cancel
[**modelSpecificModelDownloadProgress**](ModelApi#modelspecificmodeldownloadprogress) | **GET** /model/\{model\}/download/progress
[**modelSpecificModelLoad**](ModelApi#modelspecificmodelload) | **POST** /model/\{model\}/load
[**modelSpecificModelUnload**](ModelApi#modelspecificmodelunload) | **POST** /model/\{model\}/unload
[**modelUpdate**](ModelApi#modelupdate) | **POST** /model/update
[**modelsSpecificModelSnapshot**](ModelApi#modelsspecificmodelsnapshot) | **GET** /model/\{model\}


## **modelSpecificModelDownload** {#modelspecificmodeldownload}
> Model modelSpecificModelDownload(model)

/model/\{model\}/download [POST]

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

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



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

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



