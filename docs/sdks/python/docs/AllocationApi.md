# Allocation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocation_snapshot**](AllocationApi#allocation_snapshot) | **GET** /allocation/\{allocation\} | /allocation/\{allocation\} [GET]
[**allocation_update**](AllocationApi#allocation_update) | **POST** /allocation/update | /allocation/update [POST]


## **allocation_snapshot**
> AllocationCloud allocation_snapshot(allocation)

/allocation/\{allocation\} [GET]

This will get a snapshot of a specific allocation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationApi(api_client)
    allocation = 'allocation_example' # str | 

    try:
        # /allocation/\{allocation\} [GET]
        api_response = api_instance.allocation_snapshot(allocation)
        print("The response of AllocationApi->allocation_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationApi->allocation_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation** | **str**|  | 

### Return type

[**AllocationCloud**](AllocationCloud)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Cloud not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

## **allocation_update**
> AllocationCloud allocation_update(allocation_cloud=allocation_cloud)

/allocation/update [POST]

This will update a specific allocation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.allocation_cloud import AllocationCloud
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
    api_instance = pieces_os_client.AllocationApi(api_client)
    allocation_cloud = pieces_os_client.AllocationCloud() # AllocationCloud |  (optional)

    try:
        # /allocation/update [POST]
        api_response = api_instance.allocation_update(allocation_cloud=allocation_cloud)
        print("The response of AllocationApi->allocation_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllocationApi->allocation_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocation_cloud** | [**AllocationCloud**](AllocationCloud)|  | [optional] 

### Return type

[**AllocationCloud**](AllocationCloud)

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

