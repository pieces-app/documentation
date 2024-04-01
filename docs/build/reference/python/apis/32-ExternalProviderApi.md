# ExternalProvider API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**external_provider_api_key_create**](ExternalProviderApi#external_provider_api_key_create) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**external_provider_api_key_delete**](ExternalProviderApi#external_provider_api_key_delete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**external_provider_api_key_update**](ExternalProviderApi#external_provider_api_key_update) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **external_provider_api_key_create**
> CreatedExternalProviderApiKey external_provider_api_key_create(precreated_external_provider_api_key=precreated_external_provider_api_key)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example


```python
import pieces_os_client
from pieces_os_client.models.created_external_provider_api_key import CreatedExternalProviderApiKey
from pieces_os_client.models.precreated_external_provider_api_key import PrecreatedExternalProviderApiKey
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ExternalProviderApi(api_client)
    precreated_external_provider_api_key = pieces_os_client.PrecreatedExternalProviderApiKey() # PrecreatedExternalProviderApiKey |  (optional)

    try:
        # /external_provider/api_key/create [POST]
        api_response = api_instance.external_provider_api_key_create(precreated_external_provider_api_key=precreated_external_provider_api_key)
        print("The response of ExternalProviderApi->external_provider_api_key_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalProviderApi->external_provider_api_key_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreated_external_provider_api_key** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey)|  | [optional] 

### Return type

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |



## **external_provider_api_key_delete**
> DeletedExternalProviderApiKey external_provider_api_key_delete(predeleted_external_provider_api_key=predeleted_external_provider_api_key)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example


```python
import pieces_os_client
from pieces_os_client.models.deleted_external_provider_api_key import DeletedExternalProviderApiKey
from pieces_os_client.models.predeleted_external_provider_api_key import PredeletedExternalProviderApiKey
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ExternalProviderApi(api_client)
    predeleted_external_provider_api_key = pieces_os_client.PredeletedExternalProviderApiKey() # PredeletedExternalProviderApiKey |  (optional)

    try:
        # /external_provider/api_key/delete [POST]
        api_response = api_instance.external_provider_api_key_delete(predeleted_external_provider_api_key=predeleted_external_provider_api_key)
        print("The response of ExternalProviderApi->external_provider_api_key_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalProviderApi->external_provider_api_key_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeleted_external_provider_api_key** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey)|  | [optional] 

### Return type

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |



## **external_provider_api_key_update**
> UpdatedExternalProviderApiKey external_provider_api_key_update(preupdated_external_provider_api_key=preupdated_external_provider_api_key)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example


```python
import pieces_os_client
from pieces_os_client.models.preupdated_external_provider_api_key import PreupdatedExternalProviderApiKey
from pieces_os_client.models.updated_external_provider_api_key import UpdatedExternalProviderApiKey
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.ExternalProviderApi(api_client)
    preupdated_external_provider_api_key = pieces_os_client.PreupdatedExternalProviderApiKey() # PreupdatedExternalProviderApiKey |  (optional)

    try:
        # /external_provider/api_key/update [POST]
        api_response = api_instance.external_provider_api_key_update(preupdated_external_provider_api_key=preupdated_external_provider_api_key)
        print("The response of ExternalProviderApi->external_provider_api_key_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalProviderApi->external_provider_api_key_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdated_external_provider_api_key** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey)|  | [optional] 

### Return type

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization to use the AP |  -  |
**500** | Internal Server Error |  -  |



