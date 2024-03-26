# Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**model_specific_model_download**](ModelApi#model_specific_model_download) | **POST** /model/\{model\}/download | /model/\{model\}/download [POST]
[**model_specific_model_download_cancel**](ModelApi#model_specific_model_download_cancel) | **POST** /model/\{model\}/download/cancel | /model/\{model\}/download/cancel [POST]
[**model_specific_model_download_progress**](ModelApi#model_specific_model_download_progress) | **GET** /model/\{model\}/download/progress | /model/\{model\}/download/progress [WS]
[**model_specific_model_load**](ModelApi#model_specific_model_load) | **POST** /model/\{model\}/load | /model/\{model\}/load [POST]
[**model_specific_model_unload**](ModelApi#model_specific_model_unload) | **POST** /model/\{model\}/unload | /model/\{model\}/unload [POST]
[**model_update**](ModelApi#model_update) | **POST** /model/update | /model/update [POST]
[**models_specific_model_snapshot**](ModelApi#models_specific_model_snapshot) | **GET** /model/\{model\} | /model/\{model\} [GET]


## **model_specific_model_download**
> Model model_specific_model_download(model)

/model/\{model\}/download [POST]

This will download a specific model onto your local machine.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **model_specific_model_download_cancel**
> Model model_specific_model_download_cancel(model)

/model/\{model\}/download/cancel [POST]

This will cancel a specific model download in progress.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **model_specific_model_download_progress**
> ModelDownloadProgress model_specific_model_download_progress(model)

/model/\{model\}/download/progress [WS]

This is a Websocket Connection, to get the progress of the downloading of a specific model.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model_download_progress import ModelDownloadProgress
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**ModelDownloadProgress**](ModelDownloadProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **model_specific_model_load**
> Model model_specific_model_load(model)

/model/\{model\}/load [POST]

This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **model_specific_model_unload**
> Model model_specific_model_unload(model)

/model/\{model\}/unload [POST]

This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **model_update**
> Model model_update(model=model)

/model/update [POST]

This will update Machinelearning Model, this is only available for \"custom:true\" models.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **models_specific_model_snapshot**
> Model models_specific_model_snapshot(model)

/model/\{model\} [GET]



### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

[**Model**](Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | model was not found. |  -  |



