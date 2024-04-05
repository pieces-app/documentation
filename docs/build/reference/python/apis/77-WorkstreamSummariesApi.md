# WorkstreamSummaries API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstream_summaries_create_new_workstream_summary**](WorkstreamSummariesApi#workstream_summaries_create_new_workstream_summary) | **POST** /workstream_summaries/create | /workstream_summaries/create [POST]
[**workstream_summaries_delete_specific_workstream_summary**](WorkstreamSummariesApi#workstream_summaries_delete_specific_workstream_summary) | **POST** /workstream_summaries/\{workstream_summary\}/delete | /workstream_summaries/\{workstream_summary\}/delete [POST]
[**workstream_summaries_snapshot**](WorkstreamSummariesApi#workstream_summaries_snapshot) | **GET** /workstream_summaries | /workstream_summaries [GET]


## **workstream_summaries_create_new_workstream_summary**
> WorkstreamSummary workstream_summaries_create_new_workstream_summary(transferables=transferables, seeded_workstream_summary=seeded_workstream_summary)

/workstream_summaries/create [POST]

This will create a new WorkstreamSummary in the database.

### Example


```python
import pieces_os_client
from pieces_os_client.models.seeded_workstream_summary import SeededWorkstreamSummary
from pieces_os_client.models.workstream_summary import WorkstreamSummary
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
    api_instance = pieces_os_client.WorkstreamSummariesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_workstream_summary = pieces_os_client.SeededWorkstreamSummary() # SeededWorkstreamSummary |  (optional)

    try:
        # /workstream_summaries/create [POST]
        api_response = api_instance.workstream_summaries_create_new_workstream_summary(transferables=transferables, seeded_workstream_summary=seeded_workstream_summary)
        print("The response of WorkstreamSummariesApi->workstream_summaries_create_new_workstream_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamSummariesApi->workstream_summaries_create_new_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_workstream_summary** | [**SeededWorkstreamSummary**](../models/SeededWorkstreamSummary)|  | [optional] 

### Return type

[**WorkstreamSummary**](../models/WorkstreamSummary)

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



## **workstream_summaries_delete_specific_workstream_summary**
> workstream_summaries_delete_specific_workstream_summary(workstream_summary)

/workstream_summaries/\{workstream_summary\}/delete [POST]

This will delete a specific workstream_summary from the database!

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
    api_instance = pieces_os_client.WorkstreamSummariesApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /workstream_summaries/\{workstream_summary\}/delete [POST]
        api_instance.workstream_summaries_delete_specific_workstream_summary(workstream_summary)
    except Exception as e:
        print("Exception when calling WorkstreamSummariesApi->workstream_summaries_delete_specific_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **workstream_summaries_snapshot**
> WorkstreamSummaries workstream_summaries_snapshot(transferables=transferables)

/workstream_summaries [GET]

This will get a snapshot of all your workstream summaries.

### Example


```python
import pieces_os_client
from pieces_os_client.models.workstream_summaries import WorkstreamSummaries
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
    api_instance = pieces_os_client.WorkstreamSummariesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /workstream_summaries [GET]
        api_response = api_instance.workstream_summaries_snapshot(transferables=transferables)
        print("The response of WorkstreamSummariesApi->workstream_summaries_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamSummariesApi->workstream_summaries_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**WorkstreamSummaries**](../models/WorkstreamSummaries)

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



