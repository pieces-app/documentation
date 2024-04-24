---
title: Model API | Python SDK
---

# Model API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**model_specific_model_download**](ModelApi#model_specific_model_download) | **POST** /model/\{model\}/download | /model/\{model\}/download [POST]
[**model_specific_model_download_cancel**](ModelApi#model_specific_model_download_cancel) | **POST** /model/\{model\}/download/cancel | /model/\{model\}/download/cancel [POST]
[**model_specific_model_download_progress**](ModelApi#model_specific_model_download_progress) | **GET** /model/\{model\}/download/progress | /model/\{model\}/download/progress [WS]
[**model_specific_model_load**](ModelApi#model_specific_model_load) | **POST** /model/\{model\}/load | /model/\{model\}/load [POST]
[**model_specific_model_unload**](ModelApi#model_specific_model_unload) | **POST** /model/\{model\}/unload | /model/\{model\}/unload [POST]
[**model_update**](ModelApi#model_update) | **POST** /model/update | /model/update [POST]
[**models_specific_model_snapshot**](ModelApi#models_specific_model_snapshot) | **GET** /model/\{model\} | /model/\{model\} [GET]


## **model_specific_model_download** {#model_specific_model_download}
> Model model_specific_model_download(model)

/model/\{model\}/download [POST]

Downloads a specific model to your local machine.

### Example {#model_specific_model_download-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\}/download [POST]
        api_response = api_instance.model_specific_model_download(model)
        print("The response of ModelApi->model_specific_model_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_specific_model_download: %s\n" % e)
```



### Parameters {#model_specific_model_download-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#model_specific_model_download-return-type}

[**Model**](../models/Model)

### Authorization {#model_specific_model_download-authorization}

No authorization required

### HTTP request headers {#model_specific_model_download-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#model_specific_model_download-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **model_specific_model_download_cancel** {#model_specific_model_download_cancel}
> Model model_specific_model_download_cancel(model)

/model/\{model\}/download/cancel [POST]

Cancels a specific model download that is currently in progress.

### Example {#model_specific_model_download_cancel-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\}/download/cancel [POST]
        api_response = api_instance.model_specific_model_download_cancel(model)
        print("The response of ModelApi->model_specific_model_download_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_specific_model_download_cancel: %s\n" % e)
```



### Parameters {#model_specific_model_download_cancel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#model_specific_model_download_cancel-return-type}

[**Model**](../models/Model)

### Authorization {#model_specific_model_download_cancel-authorization}

No authorization required

### HTTP request headers {#model_specific_model_download_cancel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#model_specific_model_download_cancel-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **model_specific_model_download_progress** {#model_specific_model_download_progress}
> ModelDownloadProgress model_specific_model_download_progress(model)

/model/\{model\}/download/progress [WS]

This is a WebSocket connection that provides real-time updates on the download progress of a specific model.

### Example {#model_specific_model_download_progress-example}


```python
import pieces_os_client
from pieces_os_client.models.model_download_progress import ModelDownloadProgress
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\}/download/progress [WS]
        api_response = api_instance.model_specific_model_download_progress(model)
        print("The response of ModelApi->model_specific_model_download_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_specific_model_download_progress: %s\n" % e)
```



### Parameters {#model_specific_model_download_progress-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#model_specific_model_download_progress-return-type}

[**ModelDownloadProgress**](../models/ModelDownloadProgress)

### Authorization {#model_specific_model_download_progress-authorization}

No authorization required

### HTTP request headers {#model_specific_model_download_progress-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#model_specific_model_download_progress-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **model_specific_model_load** {#model_specific_model_load}
> Model model_specific_model_load(model)

/model/\{model\}/load [POST]

Loads a previously downloaded model into memory. It differs from downloading, as downloading involves transferring the entire model to your machine, while loading simply loads the model into memory.

### Example {#model_specific_model_load-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\}/load [POST]
        api_response = api_instance.model_specific_model_load(model)
        print("The response of ModelApi->model_specific_model_load:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_specific_model_load: %s\n" % e)
```



### Parameters {#model_specific_model_load-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#model_specific_model_load-return-type}

[**Model**](../models/Model)

### Authorization {#model_specific_model_load-authorization}

No authorization required

### HTTP request headers {#model_specific_model_load-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#model_specific_model_load-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **model_specific_model_unload** {#model_specific_model_unload}
> Model model_specific_model_unload(model)

/model/\{model\}/unload [POST]

Unloads a previously loaded model from memory and effectively frees up the RAM consumed by the model.

### Example {#model_specific_model_unload-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\}/unload [POST]
        api_response = api_instance.model_specific_model_unload(model)
        print("The response of ModelApi->model_specific_model_unload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_specific_model_unload: %s\n" % e)
```



### Parameters {#model_specific_model_unload-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#model_specific_model_unload-return-type}

[**Model**](../models/Model)

### Authorization {#model_specific_model_unload-authorization}

No authorization required

### HTTP request headers {#model_specific_model_unload-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#model_specific_model_unload-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **model_update** {#model_update}
> Model model_update(model=model)

/model/update [POST]

Updates a machine learning model. This functionality is exclusively available for models with the 'custom:true' setting.

### Example {#model_update-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = pieces_os_client.Model() # Model |  (optional)

    try:
        # /model/update [POST]
        api_response = api_instance.model_update(model=model)
        print("The response of ModelApi->model_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->model_update: %s\n" % e)
```



### Parameters {#model_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**Model**](../models/Model)|  | [optional] 

### Return type {#model_update-return-type}

[**Model**](../models/Model)

### Authorization {#model_update-authorization}

No authorization required

### HTTP request headers {#model_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#model_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **models_specific_model_snapshot** {#models_specific_model_snapshot}
> Model models_specific_model_snapshot(model)

/model/\{model\} [GET]

Retrieves a specific ML model.

### Example {#models_specific_model_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ModelApi(api_client)
    model = 'model_example' # str | model id

    try:
        # /model/\{model\} [GET]
        api_response = api_instance.models_specific_model_snapshot(model)
        print("The response of ModelApi->models_specific_model_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelApi->models_specific_model_snapshot: %s\n" % e)
```



### Parameters {#models_specific_model_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type {#models_specific_model_snapshot-return-type}

[**Model**](../models/Model)

### Authorization {#models_specific_model_snapshot-authorization}

No authorization required

### HTTP request headers {#models_specific_model_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#models_specific_model_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | model was not found. |  -  |

