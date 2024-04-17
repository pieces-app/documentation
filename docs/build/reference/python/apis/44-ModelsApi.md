---
title: Models API | Python SDK
---

# Models API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**models_create_new_model**](ModelsApi#models_create_new_model) | **POST** /models/create | /models/create [POST]
[**models_delete_specific_model**](ModelsApi#models_delete_specific_model) | **POST** /models/\{model\}/delete | /models/\{model\}/delete [POST]
[**models_delete_specific_model_cache**](ModelsApi#models_delete_specific_model_cache) | **POST** /models/\{model\}/delete/cache | /models/\{model\}/delete/cache [POST]
[**models_snapshot**](ModelsApi#models_snapshot) | **GET** /models | /models [GET]
[**unload_models**](ModelsApi#unload_models) | **POST** /models/unload | /models/unload [POST]


## **models_create_new_model** {#models_create_new_model}
> Model models_create_new_model(seeded_model=seeded_model)

/models/create [POST]

Creates a machine learning model. By default, all models created through this endpoint will have the 'custom' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model import Model
from pieces_os_client.models.seeded_model import SeededModel
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
    api_instance = Models API(api_client)
    seeded_model = pieces_os_client.SeededModel() # SeededModel |  (optional)

    try:
        # /models/create [POST]
        api_response = api_instance.models_create_new_model(seeded_model=seeded_model)
        print("The response of ModelsApi->models_create_new_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->models_create_new_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_model** | [**SeededModel**](../models/SeededModel)|  | [optional] 

### Return type

[**Model**](../models/Model)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **models_delete_specific_model** {#models_delete_specific_model}
> models_delete_specific_model(model)

/models/\{model\}/delete [POST]

Deletes a specific model. It is exclusively available for custom models with the 'custom: true' attribute.

### Example


```python
import pieces_os_client
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
    api_instance = Models API(api_client)
    model = 'model_example' # str | model id

    try:
        # /models/\{model\}/delete [POST]
        api_instance.models_delete_specific_model(model)
    except Exception as e:
        print("Exception when calling ModelsApi->models_delete_specific_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **models_delete_specific_model_cache** {#models_delete_specific_model_cache}
> ModelDeleteCacheOutput models_delete_specific_model_cache(model, model_delete_cache_input=model_delete_cache_input)

/models/\{model\}/delete/cache [POST]

Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.

### Example


```python
import pieces_os_client
from pieces_os_client.models.model_delete_cache_input import ModelDeleteCacheInput
from pieces_os_client.models.model_delete_cache_output import ModelDeleteCacheOutput
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
    api_instance = Models API(api_client)
    model = 'model_example' # str | model id
    model_delete_cache_input = pieces_os_client.ModelDeleteCacheInput() # ModelDeleteCacheInput |  (optional)

    try:
        # /models/\{model\}/delete/cache [POST]
        api_response = api_instance.models_delete_specific_model_cache(model, model_delete_cache_input=model_delete_cache_input)
        print("The response of ModelsApi->models_delete_specific_model_cache:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->models_delete_specific_model_cache: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| model id | 
 **model_delete_cache_input** | [**ModelDeleteCacheInput**](../models/ModelDeleteCacheInput)|  | [optional] 

### Return type

[**ModelDeleteCacheOutput**](../models/ModelDeleteCacheOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **models_snapshot** {#models_snapshot}
> Models models_snapshot()

/models [GET]

This will get a snapshot of all of your models.

### Example


```python
import pieces_os_client
from pieces_os_client.models.models import Models
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
    api_instance = Models API(api_client)

    try:
        # /models [GET]
        api_response = api_instance.models_snapshot()
        print("The response of ModelsApi->models_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->models_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

[**Models**](../models/Models)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **unload_models** {#unload_models}
> unload_models()

/models/unload [POST]

Unloads all available machine learning models that are unloadable.

### Example


```python
import pieces_os_client
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
    api_instance = Models API(api_client)

    try:
        # /models/unload [POST]
        api_instance.unload_models()
    except Exception as e:
        print("Exception when calling ModelsApi->unload_models: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



