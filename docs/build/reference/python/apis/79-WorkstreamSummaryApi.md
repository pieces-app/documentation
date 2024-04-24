---
title: WorkstreamSummary API | Python SDK
---

# WorkstreamSummary API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstream_summaries_specific_workstream_summary_snapshot**](WorkstreamSummaryApi#workstream_summaries_specific_workstream_summary_snapshot) | **GET** /workstream_summary/\{workstream_summary\} | /workstream_summary/\{workstream_summary\} [GET]
[**workstream_summary_associate_anchor**](WorkstreamSummaryApi#workstream_summary_associate_anchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]
[**workstream_summary_associate_asset**](WorkstreamSummaryApi#workstream_summary_associate_asset) | **POST** /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]
[**workstream_summary_associate_conversation**](WorkstreamSummaryApi#workstream_summary_associate_conversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]
[**workstream_summary_associate_person**](WorkstreamSummaryApi#workstream_summary_associate_person) | **POST** /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]
[**workstream_summary_associate_range**](WorkstreamSummaryApi#workstream_summary_associate_range) | **POST** /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]
[**workstream_summary_associate_website**](WorkstreamSummaryApi#workstream_summary_associate_website) | **POST** /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]
[**workstream_summary_associate_workstream_event**](WorkstreamSummaryApi#workstream_summary_associate_workstream_event) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]
[**workstream_summary_disassociate_anchor**](WorkstreamSummaryApi#workstream_summary_disassociate_anchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]
[**workstream_summary_disassociate_asset**](WorkstreamSummaryApi#workstream_summary_disassociate_asset) | **POST** /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]
[**workstream_summary_disassociate_conversation**](WorkstreamSummaryApi#workstream_summary_disassociate_conversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]
[**workstream_summary_disassociate_person**](WorkstreamSummaryApi#workstream_summary_disassociate_person) | **POST** /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]
[**workstream_summary_disassociate_range**](WorkstreamSummaryApi#workstream_summary_disassociate_range) | **POST** /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]
[**workstream_summary_disassociate_website**](WorkstreamSummaryApi#workstream_summary_disassociate_website) | **POST** /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]
[**workstream_summary_disassociate_workstream_event**](WorkstreamSummaryApi#workstream_summary_disassociate_workstream_event) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]
[**workstream_summary_scores_increment**](WorkstreamSummaryApi#workstream_summary_scores_increment) | **POST** /workstream_summary/\{workstream_summary\}/scores/increment | '/workstream_summary/\{workstream_summary\}/scores/increment' [POST]
[**workstream_summary_update**](WorkstreamSummaryApi#workstream_summary_update) | **POST** /workstream_summary/update | /workstream_summary/update [POST]


## **workstream_summaries_specific_workstream_summary_snapshot** {#workstream_summaries_specific_workstream_summary_snapshot}
> WorkstreamSummary workstream_summaries_specific_workstream_summary_snapshot(workstream_summary, transferables=transferables)

/workstream_summary/\{workstream_summary\} [GET]

This will get a snapshot of a single workstream_summary.

### Example {#workstream_summaries_specific_workstream_summary_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.workstream_summary import WorkstreamSummary
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /workstream_summary/\{workstream_summary\} [GET]
        api_response = api_instance.workstream_summaries_specific_workstream_summary_snapshot(workstream_summary, transferables=transferables)
        print("The response of WorkstreamSummaryApi->workstream_summaries_specific_workstream_summary_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summaries_specific_workstream_summary_snapshot: %s\n" % e)
```



### Parameters {#workstream_summaries_specific_workstream_summary_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#workstream_summaries_specific_workstream_summary_snapshot-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization {#workstream_summaries_specific_workstream_summary_snapshot-authorization}

No authorization required

### HTTP request headers {#workstream_summaries_specific_workstream_summary_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#workstream_summaries_specific_workstream_summary_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | WorkstreamSummary not found. |  -  |

## **workstream_summary_associate_anchor** {#workstream_summary_associate_anchor}
> workstream_summary_associate_anchor(workstream_summary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]

This will associate a anchor with a workstream_summary. This will do the same thing as the anchor equivalent.

### Example {#workstream_summary_associate_anchor-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.

    try:
        # /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]
        api_instance.workstream_summary_associate_anchor(workstream_summary, anchor)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_anchor: %s\n" % e)
```



### Parameters {#workstream_summary_associate_anchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **anchor** | **str**| This is the specific uuid of an anchor. | 

### Return type {#workstream_summary_associate_anchor-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_anchor-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_anchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_anchor-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_asset** {#workstream_summary_associate_asset}
> workstream_summary_associate_asset(workstream_summary, asset)

/workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]

This will associate an asset with a workstream_summary. This will do the same thing as the asset equivalent.

### Example {#workstream_summary_associate_asset-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]
        api_instance.workstream_summary_associate_asset(workstream_summary, asset)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_asset: %s\n" % e)
```



### Parameters {#workstream_summary_associate_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#workstream_summary_associate_asset-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_asset-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_conversation** {#workstream_summary_associate_conversation}
> workstream_summary_associate_conversation(workstream_summary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]

This will associate an conversation with a workstream_summary. This will do the same thing as the conversation equivalent.

### Example {#workstream_summary_associate_conversation-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]
        api_instance.workstream_summary_associate_conversation(workstream_summary, conversation)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_conversation: %s\n" % e)
```



### Parameters {#workstream_summary_associate_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **conversation** | **str**| This is the uuid of a conversation. | 

### Return type {#workstream_summary_associate_conversation-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_conversation-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_conversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_person** {#workstream_summary_associate_person}
> workstream_summary_associate_person(workstream_summary, person)

/workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]

This will associate an person with a workstream_summary. This will do the same thing as the person equivalent.

### Example {#workstream_summary_associate_person-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]
        api_instance.workstream_summary_associate_person(workstream_summary, person)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_person: %s\n" % e)
```



### Parameters {#workstream_summary_associate_person-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type {#workstream_summary_associate_person-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_person-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_person-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_person-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_range** {#workstream_summary_associate_range}
> workstream_summary_associate_range(workstream_summary, range)

/workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]

This will associate a range with a workstream_summary. This will do the same thing as the range equivalent.

### Example {#workstream_summary_associate_range-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]
        api_instance.workstream_summary_associate_range(workstream_summary, range)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_range: %s\n" % e)
```



### Parameters {#workstream_summary_associate_range-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type {#workstream_summary_associate_range-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_range-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_range-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_range-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_website** {#workstream_summary_associate_website}
> workstream_summary_associate_website(workstream_summary, website)

/workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]

This will associate a website with a workstream_summary. This will do the same thing as the website equivalent.

### Example {#workstream_summary_associate_website-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    website = 'website_example' # str | website id

    try:
        # /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]
        api_instance.workstream_summary_associate_website(workstream_summary, website)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_website: %s\n" % e)
```



### Parameters {#workstream_summary_associate_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **website** | **str**| website id | 

### Return type {#workstream_summary_associate_website-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_website-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_website-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_associate_workstream_event** {#workstream_summary_associate_workstream_event}
> workstream_summary_associate_workstream_event(workstream_summary, workstream_event)

/workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]

This will associate a workstream_summary with a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example {#workstream_summary_associate_workstream_event-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    workstream_event = 'workstream_event_example' # str | This is a identifier that is used to identify a specific workstream_event.

    try:
        # /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]
        api_instance.workstream_summary_associate_workstream_event(workstream_summary, workstream_event)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_associate_workstream_event: %s\n" % e)
```



### Parameters {#workstream_summary_associate_workstream_event-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **workstream_event** | **str**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type {#workstream_summary_associate_workstream_event-return-type}

void (empty response body)

### Authorization {#workstream_summary_associate_workstream_event-authorization}

No authorization required

### HTTP request headers {#workstream_summary_associate_workstream_event-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_associate_workstream_event-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_anchor** {#workstream_summary_disassociate_anchor}
> workstream_summary_disassociate_anchor(workstream_summary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]

This will enable us to disassociate a anchor from a workstream_summary. This will do the same thing as the anchor equivalent.

### Example {#workstream_summary_disassociate_anchor-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.

    try:
        # /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]
        api_instance.workstream_summary_disassociate_anchor(workstream_summary, anchor)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_anchor: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_anchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **anchor** | **str**| This is the specific uuid of an anchor. | 

### Return type {#workstream_summary_disassociate_anchor-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_anchor-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_anchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_anchor-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_asset** {#workstream_summary_disassociate_asset}
> workstream_summary_disassociate_asset(workstream_summary, asset)

/workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]

This will enable us to disassociate a asset from a workstream_summary. This will do the same thing as the asset equivalent.

### Example {#workstream_summary_disassociate_asset-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]
        api_instance.workstream_summary_disassociate_asset(workstream_summary, asset)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_asset: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#workstream_summary_disassociate_asset-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_asset-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_conversation** {#workstream_summary_disassociate_conversation}
> workstream_summary_disassociate_conversation(workstream_summary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to disassociate a conversation from a workstream_summary. This will do the same thing as the conversation equivalent.

### Example {#workstream_summary_disassociate_conversation-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]
        api_instance.workstream_summary_disassociate_conversation(workstream_summary, conversation)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_conversation: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **conversation** | **str**| This is the uuid of a conversation. | 

### Return type {#workstream_summary_disassociate_conversation-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_conversation-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_conversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_person** {#workstream_summary_disassociate_person}
> workstream_summary_disassociate_person(workstream_summary, person)

/workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]

This will enable us to disassociate a person from a workstream_summary. This will do the same thing as the person equivalent.

### Example {#workstream_summary_disassociate_person-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]
        api_instance.workstream_summary_disassociate_person(workstream_summary, person)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_person: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_person-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type {#workstream_summary_disassociate_person-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_person-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_person-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_person-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_range** {#workstream_summary_disassociate_range}
> workstream_summary_disassociate_range(workstream_summary, range)

/workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]

This will enable us to disassociate a range from a workstream_summary. This will do the same thing as the range equivalent.

### Example {#workstream_summary_disassociate_range-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]
        api_instance.workstream_summary_disassociate_range(workstream_summary, range)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_range: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_range-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type {#workstream_summary_disassociate_range-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_range-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_range-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_range-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_website** {#workstream_summary_disassociate_website}
> workstream_summary_disassociate_website(workstream_summary, website)

/workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]

This will enable us to disassociate a website from a workstream_summary. This will do the same thing as the website equivalent.

### Example {#workstream_summary_disassociate_website-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    website = 'website_example' # str | website id

    try:
        # /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]
        api_instance.workstream_summary_disassociate_website(workstream_summary, website)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_website: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **website** | **str**| website id | 

### Return type {#workstream_summary_disassociate_website-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_website-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_website-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_disassociate_workstream_event** {#workstream_summary_disassociate_workstream_event}
> workstream_summary_disassociate_workstream_event(workstream_summary, workstream_event)

/workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]

This will enable us to disassociate a workstream_summary from a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example {#workstream_summary_disassociate_workstream_event-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    workstream_event = 'workstream_event_example' # str | This is a identifier that is used to identify a specific workstream_event.

    try:
        # /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]
        api_instance.workstream_summary_disassociate_workstream_event(workstream_summary, workstream_event)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_disassociate_workstream_event: %s\n" % e)
```



### Parameters {#workstream_summary_disassociate_workstream_event-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **workstream_event** | **str**| This is a identifier that is used to identify a specific workstream_event. | 

### Return type {#workstream_summary_disassociate_workstream_event-return-type}

void (empty response body)

### Authorization {#workstream_summary_disassociate_workstream_event-authorization}

No authorization required

### HTTP request headers {#workstream_summary_disassociate_workstream_event-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_disassociate_workstream_event-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_scores_increment** {#workstream_summary_scores_increment}
> workstream_summary_scores_increment(workstream_summary, seeded_score_increment=seeded_score_increment)

'/workstream_summary/\{workstream_summary\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#workstream_summary_scores_increment-example}


```python
import pieces_os_client
from pieces_os_client.models.seeded_score_increment import SeededScoreIncrement
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/workstream_summary/\{workstream_summary\}/scores/increment' [POST]
        api_instance.workstream_summary_scores_increment(workstream_summary, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_scores_increment: %s\n" % e)
```



### Parameters {#workstream_summary_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#workstream_summary_scores_increment-return-type}

void (empty response body)

### Authorization {#workstream_summary_scores_increment-authorization}

No authorization required

### HTTP request headers {#workstream_summary_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#workstream_summary_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **workstream_summary_update** {#workstream_summary_update}
> WorkstreamSummary workstream_summary_update(transferables=transferables, workstream_summary=workstream_summary)

/workstream_summary/update [POST]

This will update a specific workstream_summary.

### Example {#workstream_summary_update-example}


```python
import pieces_os_client
from pieces_os_client.models.workstream_summary import WorkstreamSummary
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WorkstreamSummaryApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    workstream_summary = pieces_os_client.WorkstreamSummary() # WorkstreamSummary |  (optional)

    try:
        # /workstream_summary/update [POST]
        api_response = api_instance.workstream_summary_update(transferables=transferables, workstream_summary=workstream_summary)
        print("The response of WorkstreamSummaryApi->workstream_summary_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkstreamSummaryApi->workstream_summary_update: %s\n" % e)
```



### Parameters {#workstream_summary_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **workstream_summary** | [**WorkstreamSummary**](../models/WorkstreamSummary)|  | [optional] 

### Return type {#workstream_summary_update-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization {#workstream_summary_update-authorization}

No authorization required

### HTTP request headers {#workstream_summary_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#workstream_summary_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

