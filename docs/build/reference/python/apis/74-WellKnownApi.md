# WellKnown API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_well_known_health**](WellKnownApi#get_well_known_health) | **GET** /.well-known/health | /.well-known/health [GET]
[**get_well_known_version**](WellKnownApi#get_well_known_version) | **GET** /.well-known/version | /.well-known/version [Get]


## **get_well_known_health** {#get_well_known_health}
> str get_well_known_health()

/.well-known/health [GET]

Retrieves the health status of the server.

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
    api_instance = pieces_os_client.WellKnownApi(api_client)

    try:
        # /.well-known/health [GET]
        api_response = api_instance.get_well_known_health()
        print("The response of WellKnownApi->get_well_known_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WellKnownApi->get_well_known_health: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **get_well_known_version** {#get_well_known_version}
> str get_well_known_version()

/.well-known/version [Get]

Retrieves the version of the server. It returns a string representing the current version.

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
    api_instance = pieces_os_client.WellKnownApi(api_client)

    try:
        # /.well-known/version [Get]
        api_response = api_instance.get_well_known_version()
        print("The response of WellKnownApi->get_well_known_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WellKnownApi->get_well_known_version: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



