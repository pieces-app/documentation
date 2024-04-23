---
title: WorkstreamEvents API | Python SDK
---

# WorkstreamEvents API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstream_events_create_new_workstream_event**](WorkstreamEventsApi#workstream_events_create_new_workstream_event) | **POST** /workstream_events/create | /workstream_events/create [POST]
[**workstream_events_delete_specific_workstream_event**](WorkstreamEventsApi#workstream_events_delete_specific_workstream_event) | **POST** /workstream_events/\{workstream_event\}/delete | /workstream_events/\{workstream_event\}/delete [POST]
[**workstream_events_snapshot**](WorkstreamEventsApi#workstream_events_snapshot) | **GET** /workstream_events | /workstream_events [GET]


## **workstream_events_create_new_workstream_event** {#workstream_events_create_new_workstream_event}
> WorkstreamEvent workstream_events_create_new_workstream_event(transferables=transferables, seeded_workstream_event=seeded_workstream_event)

/workstream_events/create [POST]

This will create a new WorkstreamEvent in the database.

### Example {#workstream_events_create_new_workstream_event-example}


```python
import pieces_os_client
from pieces_os_client.models.seeded_workstream_event import SeededWorkstreamEvent
from pieces_os_client.models.workstream_event import WorkstreamEvent
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
    api_instance = WorkstreamEvents API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_workstream_event = pieces_os_client.SeededWorkstreamEvent() # SeededWorkstreamEvent |  (optional)

    try:
        # /workstream_events/create [POST]
        api_response = api_instance.workstream_events_create_new_workstream_event(transferables=transferables, seeded_workstream_event=seeded_workstream_event)
        print("The response of WorkstreamEventsApi->workstream_events_create_new_workstream_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamEventsApi->workstream_events_create_new_workstream_event: %s\n" % e)
```



### Parameters {#workstream_events_create_new_workstream_event-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_workstream_event** | [**SeededWorkstreamEvent**](../models/SeededWorkstreamEvent)|  | [optional] 

### Return type {#workstream_events_create_new_workstream_event-return-type}

[**WorkstreamEvent**](../models/WorkstreamEvent)

### Authorization {#workstream_events_create_new_workstream_event-authorization}

No authorization required

### HTTP request headers {#workstream_events_create_new_workstream_event-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#workstream_events_create_new_workstream_event-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **workstream_events_delete_specific_workstream_event** {#workstream_events_delete_specific_workstream_event}
> workstream_events_delete_specific_workstream_event(workstream_event)

/workstream_events/\{workstream_event\}/delete [POST]

This will delete a specific workstream_event from the database!

### Example {#workstream_events_delete_specific_workstream_event-example}


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
    api_instance = WorkstreamEvents API(api_client)
    workstream_event = 'workstream_event_example' # str | This is a identifier that is used to identify a specific workstream_event.

    try:
        # /workstream_events/\{workstream_event\}/delete [POST]
        api_instance.workstream_events_delete_specific_workstream_event(workstream_event)
    except Exception as e:
        print("Exception when calling WorkstreamEventsApi->workstream_events_delete_specific_workstream_event: %s\n" % e)
```



### Parameters {#workstream_events_delete_specific_workstream_event-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_event** | **str**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type {#workstream_events_delete_specific_workstream_event-return-type}

void (empty response body)

### Authorization {#workstream_events_delete_specific_workstream_event-authorization}

No authorization required

### HTTP request headers {#workstream_events_delete_specific_workstream_event-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_events_delete_specific_workstream_event-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_events_snapshot** {#workstream_events_snapshot}
> WorkstreamEvents workstream_events_snapshot(transferables=transferables)

/workstream_events [GET]

This will get a snapshot of all your workstream events.

### Example {#workstream_events_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.workstream_events import WorkstreamEvents
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
    api_instance = WorkstreamEvents API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /workstream_events [GET]
        api_response = api_instance.workstream_events_snapshot(transferables=transferables)
        print("The response of WorkstreamEventsApi->workstream_events_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamEventsApi->workstream_events_snapshot: %s\n" % e)
```



### Parameters {#workstream_events_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#workstream_events_snapshot-return-type}

[**WorkstreamEvents**](../models/WorkstreamEvents)

### Authorization {#workstream_events_snapshot-authorization}

No authorization required

### HTTP request headers {#workstream_events_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#workstream_events_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

