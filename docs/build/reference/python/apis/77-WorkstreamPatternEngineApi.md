# WorkstreamPatternEngine API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstream_pattern_engine_processors_vision_activate**](WorkstreamPatternEngineApi#workstream_pattern_engine_processors_vision_activate) | **POST** /workstream_pattern_engine/processors/vision/activate | /workstream_pattern_engine/processors/vision/activate [POST]
[**workstream_pattern_engine_processors_vision_data_clear**](WorkstreamPatternEngineApi#workstream_pattern_engine_processors_vision_data_clear) | **POST** /workstream_pattern_engine/processors/vision/data/clear | /workstream_pattern_engine/processors/vision/data/clear [POST]
[**workstream_pattern_engine_processors_vision_deactivate**](WorkstreamPatternEngineApi#workstream_pattern_engine_processors_vision_deactivate) | **POST** /workstream_pattern_engine/processors/vision/deactivate | /workstream_pattern_engine/processors/vision/deactivate [POST]
[**workstream_pattern_engine_processors_vision_status**](WorkstreamPatternEngineApi#workstream_pattern_engine_processors_vision_status) | **GET** /workstream_pattern_engine/processors/vision/status | /workstream_pattern_engine/processors/vision/status [GET]


## **workstream_pattern_engine_processors_vision_activate** {#workstream_pattern_engine_processors_vision_activate}
> WorkstreamPatternEngineStatus workstream_pattern_engine_processors_vision_activate(workstream_pattern_engine_status=workstream_pattern_engine_status)

/workstream_pattern_engine/processors/vision/activate [POST]

This will activate your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example


```python
import pieces_os_client
from pieces_os_client.models.workstream_pattern_engine_status import WorkstreamPatternEngineStatus
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
    api_instance = pieces_os_client.WorkstreamPatternEngineApi(api_client)
    workstream_pattern_engine_status = pieces_os_client.WorkstreamPatternEngineStatus() # WorkstreamPatternEngineStatus |  (optional)

    try:
        # /workstream_pattern_engine/processors/vision/activate [POST]
        api_response = api_instance.workstream_pattern_engine_processors_vision_activate(workstream_pattern_engine_status=workstream_pattern_engine_status)
        print("The response of WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_activate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_activate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_pattern_engine_status** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional] 

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden, this is not available for non-beta used until mid to late April. |  -  |
**500** | Internal Server Error |  -  |



## **workstream_pattern_engine_processors_vision_data_clear** {#workstream_pattern_engine_processors_vision_data_clear}
> workstream_pattern_engine_processors_vision_data_clear(workstream_pattern_engine_data_cleanup_request=workstream_pattern_engine_data_cleanup_request)

/workstream_pattern_engine/processors/vision/data/clear [POST]

This will clear the data for the Workstream Pattern Engine, specifically for our vision data.  This boy will accept ranges of time that the user wants to remove the processing from.

### Example


```python
import pieces_os_client
from pieces_os_client.models.workstream_pattern_engine_data_cleanup_request import WorkstreamPatternEngineDataCleanupRequest
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
    api_instance = pieces_os_client.WorkstreamPatternEngineApi(api_client)
    workstream_pattern_engine_data_cleanup_request = pieces_os_client.WorkstreamPatternEngineDataCleanupRequest() # WorkstreamPatternEngineDataCleanupRequest |  (optional)

    try:
        # /workstream_pattern_engine/processors/vision/data/clear [POST]
        api_instance.workstream_pattern_engine_processors_vision_data_clear(workstream_pattern_engine_data_cleanup_request=workstream_pattern_engine_data_cleanup_request)
    except Exception as e:
        print("Exception when calling WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_data_clear: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_pattern_engine_data_cleanup_request** | [**WorkstreamPatternEngineDataCleanupRequest**](../models/WorkstreamPatternEngineDataCleanupRequest)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden, this is not available for non-beta used until mid to late April. |  -  |
**500** | Internal Server Error |  -  |



## **workstream_pattern_engine_processors_vision_deactivate** {#workstream_pattern_engine_processors_vision_deactivate}
> WorkstreamPatternEngineStatus workstream_pattern_engine_processors_vision_deactivate(workstream_pattern_engine_status=workstream_pattern_engine_status)

/workstream_pattern_engine/processors/vision/deactivate [POST]

This will deactivate your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example


```python
import pieces_os_client
from pieces_os_client.models.workstream_pattern_engine_status import WorkstreamPatternEngineStatus
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
    api_instance = pieces_os_client.WorkstreamPatternEngineApi(api_client)
    workstream_pattern_engine_status = pieces_os_client.WorkstreamPatternEngineStatus() # WorkstreamPatternEngineStatus |  (optional)

    try:
        # /workstream_pattern_engine/processors/vision/deactivate [POST]
        api_response = api_instance.workstream_pattern_engine_processors_vision_deactivate(workstream_pattern_engine_status=workstream_pattern_engine_status)
        print("The response of WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_deactivate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_deactivate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_pattern_engine_status** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional] 

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden, this is not available for non-beta used until mid to late April. |  -  |
**500** | Internal Server Error |  -  |



## **workstream_pattern_engine_processors_vision_status** {#workstream_pattern_engine_processors_vision_status}
> WorkstreamPatternEngineStatus workstream_pattern_engine_processors_vision_status()

/workstream_pattern_engine/processors/vision/status [GET]

This will get a snapshot of the status your Workstream Pattern Engine. This is used to aggregate information on your user's desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example


```python
import pieces_os_client
from pieces_os_client.models.workstream_pattern_engine_status import WorkstreamPatternEngineStatus
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
    api_instance = pieces_os_client.WorkstreamPatternEngineApi(api_client)

    try:
        # /workstream_pattern_engine/processors/vision/status [GET]
        api_response = api_instance.workstream_pattern_engine_processors_vision_status()
        print("The response of WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamPatternEngineApi->workstream_pattern_engine_processors_vision_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameters.

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden, this is not available for non-beta used until mid to late April. |  -  |
**500** | Internal Server Error |  -  |



