# Allocations API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocations_connect_new_cloud**](AllocationsApi#allocations_connect_new_cloud) | **POST** /allocations/connect | /allocations/connect [POST]
[**allocations_create_new_allocation**](AllocationsApi#allocations_create_new_allocation) | **POST** /allocations/create | /allocations/create [POST]
[**allocations_delete_allocation**](AllocationsApi#allocations_delete_allocation) | **POST** /allocations/delete | /allocations/delete [POST]
[**allocations_disconnect_cloud**](AllocationsApi#allocations_disconnect_cloud) | **POST** /allocations/disconnect | /allocations/disconnect [POST]
[**allocations_reconnect_cloud**](AllocationsApi#allocations_reconnect_cloud) | **POST** /allocations/reconnect | /allocations/reconnect [POST]
[**allocations_snapshot**](AllocationsApi#allocations_snapshot) | **GET** /allocations | /allocations [GET]


## **allocations_connect_new_cloud**
> AllocationCloud allocations_connect_new_cloud(user_profile=user_profile)

/allocations/connect [POST]

This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
from pieces_os_client.models.user_profile import UserProfile
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
    api_instance = pieces_os_client.AllocationsApi(api_client)
    user_profile = pieces_os_client.UserProfile() # UserProfile |  (optional)

    try:
        # /allocations/connect [POST]
        api_response = api_instance.allocations_connect_new_cloud(user_profile=user_profile)
        print("The response of AllocationsApi->allocations_connect_new_cloud:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_connect_new_cloud: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_profile** | [**UserProfile**](../models/UserProfile)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

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
**504** | Gateway Timeout, request timed out. |  -  |



## **allocations_create_new_allocation**
> AllocationCloud allocations_create_new_allocation(allocation_cloud=allocation_cloud)

/allocations/create [POST]

This is unimplemented locally. This will create an allocation. ONLY used within the cloud.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationsApi(api_client)
    allocation_cloud = pieces_os_client.AllocationCloud() # AllocationCloud |  (optional)

    try:
        # /allocations/create [POST]
        api_response = api_instance.allocations_create_new_allocation(allocation_cloud=allocation_cloud)
        print("The response of AllocationsApi->allocations_create_new_allocation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_create_new_allocation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_cloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

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



## **allocations_delete_allocation**
> str allocations_delete_allocation(allocation_cloud=allocation_cloud)

/allocations/delete [POST]

This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationsApi(api_client)
    allocation_cloud = pieces_os_client.AllocationCloud() # AllocationCloud |  (optional)

    try:
        # /allocations/delete [POST]
        api_response = api_instance.allocations_delete_allocation(allocation_cloud=allocation_cloud)
        print("The response of AllocationsApi->allocations_delete_allocation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_delete_allocation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_cloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

**str**

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



## **allocations_disconnect_cloud**
> str allocations_disconnect_cloud(allocation_cloud=allocation_cloud)

/allocations/disconnect [POST]

This will attempt to disconnect to a specific users cloud.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationsApi(api_client)
    allocation_cloud = pieces_os_client.AllocationCloud() # AllocationCloud |  (optional)

    try:
        # /allocations/disconnect [POST]
        api_response = api_instance.allocations_disconnect_cloud(allocation_cloud=allocation_cloud)
        print("The response of AllocationsApi->allocations_disconnect_cloud:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_disconnect_cloud: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_cloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, this will return the uuid of the cloud that was disconnected! |  -  |
**500** | Internal Server Error |  -  |



## **allocations_reconnect_cloud**
> AllocationCloud allocations_reconnect_cloud(allocation_cloud=allocation_cloud)

/allocations/reconnect [POST]

This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user's cloud is up-to-date.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationsApi(api_client)
    allocation_cloud = pieces_os_client.AllocationCloud() # AllocationCloud |  (optional)

    try:
        # /allocations/reconnect [POST]
        api_response = api_instance.allocations_reconnect_cloud(allocation_cloud=allocation_cloud)
        print("The response of AllocationsApi->allocations_reconnect_cloud:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_reconnect_cloud: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_cloud** | [**AllocationCloud**](../models/AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](../models/AllocationCloud)

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
**504** | Gateway Timeout, request timed out. |  -  |



## **allocations_snapshot**
> Allocations allocations_snapshot()

/allocations [GET]

This is going to get a snapshot of all of the connected allocations.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocations import Allocations
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
    api_instance = pieces_os_client.AllocationsApi(api_client)

    try:
        # /allocations [GET]
        api_response = api_instance.allocations_snapshot()
        print("The response of AllocationsApi->allocations_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationsApi->allocations_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Allocations**](../models/Allocations)

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



