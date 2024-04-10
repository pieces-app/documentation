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


## **modelSpecificModelDownload**
> Model modelSpecificModelDownload()

Downloads a specific model to your local machine.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelSpecificModelDownloadRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelSpecificModelDownload(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelSpecificModelDownloadCancel**
> Model modelSpecificModelDownloadCancel()

Cancels a specific model download that is currently in progress.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelSpecificModelDownloadCancelRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelSpecificModelDownloadCancel(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelSpecificModelDownloadProgress**
> ModelDownloadProgress modelSpecificModelDownloadProgress()

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelSpecificModelDownloadProgressRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelSpecificModelDownloadProgress(body).then((data: ModelDownloadProgress) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**ModelDownloadProgress**](../models/ModelDownloadProgress)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelSpecificModelLoad**
> Model modelSpecificModelLoad()

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelSpecificModelLoadRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelSpecificModelLoad(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelSpecificModelUnload**
> Model modelSpecificModelUnload()

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelSpecificModelUnloadRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelSpecificModelUnload(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelUpdate**
> Model modelUpdate()

Updates a machine learning model. This functionality is exclusively available for models with the \'custom:true\' setting.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelUpdateRequest = {
    // Model (optional)
    model: ,
};

apiInstance.modelUpdate(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | **Model**|  |


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **modelsSpecificModelSnapshot**
> Model modelsSpecificModelSnapshot()

Retrieves a specific ML model.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ModelApi(configuration);

const body: Pieces.ModelsSpecificModelSnapshotRequest = {
    // string | model id
    model: model_example,
};

apiInstance.modelsSpecificModelSnapshot(body).then((data: Model) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **model** | [**string**] | model id | defaults to undefined


### Return type

[**Model**](../models/Model)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | model was not found. |  -  |


