---
title: Range API | Python SDK
---

# Range API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**range_associate_conversation_grounding_temporal_range_workstreams**](RangeApi#range_associate_conversation_grounding_temporal_range_workstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]
[**range_associate_workstream_summary**](RangeApi#range_associate_workstream_summary) | **POST** /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**range_disassociate_conversation_grounding_temporal_range_workstreams**](RangeApi#range_disassociate_conversation_grounding_temporal_range_workstreams) | **POST** /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} | /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]
[**range_disassociate_workstream_summary**](RangeApi#range_disassociate_workstream_summary) | **POST** /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} | /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**range_scores_increment**](RangeApi#range_scores_increment) | **POST** /range/\{range\}/scores/increment | '/range/\{range\}/scores/increment' [POST]
[**range_update**](RangeApi#range_update) | **POST** /range/update | /range/update [POST]
[**ranges_specific_range_snapshot**](RangeApi#ranges_specific_range_snapshot) | **GET** /range/\{range\} | /range/\{range\} [GET]


## **range_associate_conversation_grounding_temporal_range_workstreams** {#range_associate_conversation_grounding_temporal_range_workstreams}
> range_associate_conversation_grounding_temporal_range_workstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]

This will associate a range with a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /range/\{range\}/conversations/grounding/temporal_range/workstreams/associate/\{conversation\} [POST]
        api_instance.range_associate_conversation_grounding_temporal_range_workstreams(range, conversation)
    except Exception as e:
        print("Exception when calling RangeApi->range_associate_conversation_grounding_temporal_range_workstreams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **str**| This is the uuid of a conversation. | 

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



## **range_associate_workstream_summary** {#range_associate_workstream_summary}
> range_associate_workstream_summary(range, workstream_summary)

/range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a range with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /range/\{range\}/workstream_summaries/associate/\{workstream_summary\} [POST]
        api_instance.range_associate_workstream_summary(range, workstream_summary)
    except Exception as e:
        print("Exception when calling RangeApi->range_associate_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

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



## **range_disassociate_conversation_grounding_temporal_range_workstreams** {#range_disassociate_conversation_grounding_temporal_range_workstreams}
> range_disassociate_conversation_grounding_temporal_range_workstreams(range, conversation)

/range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]

This will enable us to disassociate a range from a conversation(grounding.temporal.workstreams). This will do the same thing as the conversation equivalent.

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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /range/\{range\}/conversations/grounding/temporal_range/workstreams/disassociate/\{conversation\} [POST]
        api_instance.range_disassociate_conversation_grounding_temporal_range_workstreams(range, conversation)
    except Exception as e:
        print("Exception when calling RangeApi->range_disassociate_conversation_grounding_temporal_range_workstreams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 
 **conversation** | **str**| This is the uuid of a conversation. | 

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



## **range_disassociate_workstream_summary** {#range_disassociate_workstream_summary}
> range_disassociate_workstream_summary(range, workstream_summary)

/range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a range from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /range/\{range\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
        api_instance.range_disassociate_workstream_summary(range, workstream_summary)
    except Exception as e:
        print("Exception when calling RangeApi->range_disassociate_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

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



## **range_scores_increment** {#range_scores_increment}
> range_scores_increment(range, seeded_score_increment=seeded_score_increment)

'/range/\{range\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example


```python
import pieces_os_client
from pieces_os_client.models.seeded_score_increment import SeededScoreIncrement
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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/range/\{range\}/scores/increment' [POST]
        api_instance.range_scores_increment(range, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling RangeApi->range_scores_increment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **range_update** {#range_update}
> Range range_update(range=range)

/range/update [POST]

This will update a specific range.

### Example


```python
import pieces_os_client
from pieces_os_client.models.range import Range
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
    api_instance = Range API(api_client)
    range = pieces_os_client.Range() # Range |  (optional)

    try:
        # /range/update [POST]
        api_response = api_instance.range_update(range=range)
        print("The response of RangeApi->range_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RangeApi->range_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | [**Range**](../models/Range)|  | [optional] 

### Return type

[**Range**](../models/Range)

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



## **ranges_specific_range_snapshot** {#ranges_specific_range_snapshot}
> Range ranges_specific_range_snapshot(range)

/range/\{range\} [GET]

This will get a snapshot of a single range.

### Example


```python
import pieces_os_client
from pieces_os_client.models.range import Range
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
    api_instance = Range API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /range/\{range\} [GET]
        api_response = api_instance.ranges_specific_range_snapshot(range)
        print("The response of RangeApi->ranges_specific_range_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RangeApi->ranges_specific_range_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type

[**Range**](../models/Range)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Range not found. |  -  |



