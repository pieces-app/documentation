---
title: Person API | Python SDK
---

# Person API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**person_associate_workstream_summary**](PersonApi#person_associate_workstream_summary) | **POST** /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**person_disassociate_workstream_summary**](PersonApi#person_disassociate_workstream_summary) | **POST** /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**person_scores_increment**](PersonApi#person_scores_increment) | **POST** /person/\{person\}/scores/increment | '/person/\{person\}/scores/increment' [POST]
[**person_snapshot**](PersonApi#person_snapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**update_person**](PersonApi#update_person) | **POST** /person/update | /person/update [POST]


## **person_associate_workstream_summary** {#person_associate_workstream_summary}
> person_associate_workstream_summary(person, workstream_summary)

/person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a person with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#person_associate_workstream_summary-example}


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
    api_instance = pieces_os_client.PersonApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]
        api_instance.person_associate_workstream_summary(person, workstream_summary)
    except Exception as e:
        print("Exception when calling PersonApi->person_associate_workstream_summary: %s\n" % e)
```



### Parameters {#person_associate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#person_associate_workstream_summary-return-type}

void (empty response body)

### Authorization {#person_associate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#person_associate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#person_associate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **person_disassociate_workstream_summary** {#person_disassociate_workstream_summary}
> person_disassociate_workstream_summary(person, workstream_summary)

/person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an person from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#person_disassociate_workstream_summary-example}


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
    api_instance = pieces_os_client.PersonApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
        api_instance.person_disassociate_workstream_summary(person, workstream_summary)
    except Exception as e:
        print("Exception when calling PersonApi->person_disassociate_workstream_summary: %s\n" % e)
```



### Parameters {#person_disassociate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#person_disassociate_workstream_summary-return-type}

void (empty response body)

### Authorization {#person_disassociate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#person_disassociate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#person_disassociate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **person_scores_increment** {#person_scores_increment}
> person_scores_increment(person, seeded_score_increment=seeded_score_increment)

'/person/\{person\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#person_scores_increment-example}


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
    api_instance = pieces_os_client.PersonApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/person/\{person\}/scores/increment' [POST]
        api_instance.person_scores_increment(person, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling PersonApi->person_scores_increment: %s\n" % e)
```



### Parameters {#person_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#person_scores_increment-return-type}

void (empty response body)

### Authorization {#person_scores_increment-authorization}

No authorization required

### HTTP request headers {#person_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#person_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **person_snapshot** {#person_snapshot}
> Person person_snapshot(person, transferables=transferables)

/person/\{person\} [GET]

This will get a snapshot of a specific person

### Example {#person_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.person import Person
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
    api_instance = pieces_os_client.PersonApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /person/\{person\} [GET]
        api_response = api_instance.person_snapshot(person, transferables=transferables)
        print("The response of PersonApi->person_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonApi->person_snapshot: %s\n" % e)
```



### Parameters {#person_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#person_snapshot-return-type}

[**Person**](../models/Person)

### Authorization {#person_snapshot-authorization}

No authorization required

### HTTP request headers {#person_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#person_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **update_person** {#update_person}
> Person update_person(transferables=transferables, person=person)

/person/update [POST]

This will update a specific person

### Example {#update_person-example}


```python
import pieces_os_client
from pieces_os_client.models.person import Person
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
    api_instance = pieces_os_client.PersonApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    person = pieces_os_client.Person() # Person |  (optional)

    try:
        # /person/update [POST]
        api_response = api_instance.update_person(transferables=transferables, person=person)
        print("The response of PersonApi->update_person:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonApi->update_person: %s\n" % e)
```



### Parameters {#update_person-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **person** | [**Person**](../models/Person)|  | [optional] 

### Return type {#update_person-return-type}

[**Person**](../models/Person)

### Authorization {#update_person-authorization}

No authorization required

### HTTP request headers {#update_person-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#update_person-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

