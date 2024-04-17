---
title: Website API | Python SDK
---

# Website API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**website_associate_asset**](WebsiteApi#website_associate_asset) | **POST** /website/\{website\}/assets/associate/\{asset\} | /website/\{website\}/assets/associate/\{asset\} [POST]
[**website_associate_conversation**](WebsiteApi#website_associate_conversation) | **POST** /website/\{website\}/conversations/associate/\{conversation\} | /website/\{website\}/conversations/associate/\{conversation\} [POST]
[**website_associate_person**](WebsiteApi#website_associate_person) | **POST** /website/\{website\}/persons/associate/\{person\} | /website/\{website\}/persons/associate/\{person\} [POST]
[**website_associate_workstream_summary**](WebsiteApi#website_associate_workstream_summary) | **POST** /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**website_disassociate_asset**](WebsiteApi#website_disassociate_asset) | **POST** /website/\{website\}/assets/disassociate/\{asset\} | /website/\{website\}/assets/disassociate/\{asset\} [POST]
[**website_disassociate_conversation**](WebsiteApi#website_disassociate_conversation) | **POST** /website/\{website\}/conversations/disassociate/\{conversation\} | /website/\{website\}/conversations/disassociate/\{conversation\} [POST]
[**website_disassociate_person**](WebsiteApi#website_disassociate_person) | **POST** /website/\{website\}/persons/disassociate/\{person\} | /website/\{website\}/persons/disassociate/\{person\} [POST]
[**website_disassociate_workstream_summary**](WebsiteApi#website_disassociate_workstream_summary) | **POST** /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**website_scores_increment**](WebsiteApi#website_scores_increment) | **POST** /website/\{website\}/scores/increment | '/website/\{website\}/scores/increment' [POST]
[**website_update**](WebsiteApi#website_update) | **POST** /website/update | /website/update [POST]
[**websites_specific_website_snapshot**](WebsiteApi#websites_specific_website_snapshot) | **GET** /website/\{website\} | /website/\{website\} [GET]


## **website_associate_asset** {#website_associate_asset}
> website_associate_asset(asset, website)

/website/\{website\}/assets/associate/\{asset\} [POST]

This will associate a website with a asset.

### Example {#website_associate_asset-example}


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
    api_instance = Website API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    website = 'website_example' # str | website id

    try:
        # /website/\{website\}/assets/associate/\{asset\} [POST]
        api_instance.website_associate_asset(asset, website)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_associate_asset: %s\n" % e)
```



### Parameters {#website_associate_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **website** | **str**| website id | 

### Return type {#website_associate_asset-return-type}

void (empty response body)

### Authorization {#website_associate_asset-authorization}

No authorization required

### HTTP request headers {#website_associate_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_associate_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_associate_conversation** {#website_associate_conversation}
> website_associate_conversation(website, conversation)

/website/\{website\}/conversations/associate/\{conversation\} [POST]

This will associate a website with a conversation.

### Example {#website_associate_conversation-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /website/\{website\}/conversations/associate/\{conversation\} [POST]
        api_instance.website_associate_conversation(website, conversation)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_associate_conversation: %s\n" % e)
```



### Parameters {#website_associate_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **conversation** | **str**| This is the uuid of a conversation. | 

### Return type {#website_associate_conversation-return-type}

void (empty response body)

### Authorization {#website_associate_conversation-authorization}

No authorization required

### HTTP request headers {#website_associate_conversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_associate_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_associate_person** {#website_associate_person}
> website_associate_person(website, person)

/website/\{website\}/persons/associate/\{person\} [POST]

This will associate a website with a person.

### Example {#website_associate_person-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /website/\{website\}/persons/associate/\{person\} [POST]
        api_instance.website_associate_person(website, person)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_associate_person: %s\n" % e)
```



### Parameters {#website_associate_person-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type {#website_associate_person-return-type}

void (empty response body)

### Authorization {#website_associate_person-authorization}

No authorization required

### HTTP request headers {#website_associate_person-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_associate_person-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_associate_workstream_summary** {#website_associate_workstream_summary}
> website_associate_workstream_summary(website, workstream_summary)

/website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#website_associate_workstream_summary-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]
        api_instance.website_associate_workstream_summary(website, workstream_summary)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_associate_workstream_summary: %s\n" % e)
```



### Parameters {#website_associate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#website_associate_workstream_summary-return-type}

void (empty response body)

### Authorization {#website_associate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#website_associate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_associate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_disassociate_asset** {#website_disassociate_asset}
> website_disassociate_asset(website, asset)

/website/\{website\}/assets/disassociate/\{asset\} [POST]

This will enable us to dissassociate a website from a asset.

### Example {#website_disassociate_asset-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /website/\{website\}/assets/disassociate/\{asset\} [POST]
        api_instance.website_disassociate_asset(website, asset)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_disassociate_asset: %s\n" % e)
```



### Parameters {#website_disassociate_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#website_disassociate_asset-return-type}

void (empty response body)

### Authorization {#website_disassociate_asset-authorization}

No authorization required

### HTTP request headers {#website_disassociate_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_disassociate_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_disassociate_conversation** {#website_disassociate_conversation}
> website_disassociate_conversation(website, conversation)

/website/\{website\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to dissassociate a website from a conversation.

### Example {#website_disassociate_conversation-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /website/\{website\}/conversations/disassociate/\{conversation\} [POST]
        api_instance.website_disassociate_conversation(website, conversation)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_disassociate_conversation: %s\n" % e)
```



### Parameters {#website_disassociate_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **conversation** | **str**| This is the uuid of a conversation. | 

### Return type {#website_disassociate_conversation-return-type}

void (empty response body)

### Authorization {#website_disassociate_conversation-authorization}

No authorization required

### HTTP request headers {#website_disassociate_conversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_disassociate_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_disassociate_person** {#website_disassociate_person}
> website_disassociate_person(website, person)

/website/\{website\}/persons/disassociate/\{person\} [POST]

This will enable us to dissassociate a website from a person.

### Example {#website_disassociate_person-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /website/\{website\}/persons/disassociate/\{person\} [POST]
        api_instance.website_disassociate_person(website, person)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_disassociate_person: %s\n" % e)
```



### Parameters {#website_disassociate_person-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type {#website_disassociate_person-return-type}

void (empty response body)

### Authorization {#website_disassociate_person-authorization}

No authorization required

### HTTP request headers {#website_disassociate_person-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_disassociate_person-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_disassociate_workstream_summary** {#website_disassociate_workstream_summary}
> website_disassociate_workstream_summary(website, workstream_summary)

/website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#website_disassociate_workstream_summary-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
        api_instance.website_disassociate_workstream_summary(website, workstream_summary)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_disassociate_workstream_summary: %s\n" % e)
```



### Parameters {#website_disassociate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#website_disassociate_workstream_summary-return-type}

void (empty response body)

### Authorization {#website_disassociate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#website_disassociate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#website_disassociate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_scores_increment** {#website_scores_increment}
> website_scores_increment(website, seeded_score_increment=seeded_score_increment)

'/website/\{website\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#website_scores_increment-example}


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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/website/\{website\}/scores/increment' [POST]
        api_instance.website_scores_increment(website, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_scores_increment: %s\n" % e)
```



### Parameters {#website_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#website_scores_increment-return-type}

void (empty response body)

### Authorization {#website_scores_increment-authorization}

No authorization required

### HTTP request headers {#website_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#website_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **website_update** {#website_update}
> Website website_update(transferables=transferables, website=website)

/website/update [POST]

This will update a specific website.

### Example {#website_update-example}


```python
import pieces_os_client
from pieces_os_client.models.website import Website
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
    api_instance = Website API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    website = pieces_os_client.Website() # Website |  (optional)

    try:
        # /website/update [POST]
        api_response = api_instance.website_update(transferables=transferables, website=website)
        print("The response of WebsiteApi->website_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebsiteApi->website_update: %s\n" % e)
```



### Parameters {#website_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **website** | [**Website**](../models/Website)|  | [optional] 

### Return type {#website_update-return-type}

[**Website**](../models/Website)

### Authorization {#website_update-authorization}

No authorization required

### HTTP request headers {#website_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#website_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websites_specific_website_snapshot** {#websites_specific_website_snapshot}
> Website websites_specific_website_snapshot(website, transferables=transferables)

/website/\{website\} [GET]

This will get a snapshot of a single website.

### Example {#websites_specific_website_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.website import Website
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
    api_instance = Website API(api_client)
    website = 'website_example' # str | website id
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /website/\{website\} [GET]
        api_response = api_instance.websites_specific_website_snapshot(website, transferables=transferables)
        print("The response of WebsiteApi->websites_specific_website_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebsiteApi->websites_specific_website_snapshot: %s\n" % e)
```



### Parameters {#websites_specific_website_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#websites_specific_website_snapshot-return-type}

[**Website**](../models/Website)

### Authorization {#websites_specific_website_snapshot-authorization}

No authorization required

### HTTP request headers {#websites_specific_website_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#websites_specific_website_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Website not found. |  -  |

