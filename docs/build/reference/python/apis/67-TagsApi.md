---
title: Tags API | Python SDK
---

# Tags API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**tags_create_new_tag**](TagsApi#tags_create_new_tag) | **POST** /tags/create | /tags/create [POST]
[**tags_delete_specific_tag**](TagsApi#tags_delete_specific_tag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tags_exists**](TagsApi#tags_exists) | **POST** /tags/exists | /tags/exists [POST]
[**tags_snapshot**](TagsApi#tags_snapshot) | **GET** /tags | /tags [GET]


## **tags_create_new_tag** {#tags_create_new_tag}
> Tag tags_create_new_tag(transferables=transferables, seeded_tag=seeded_tag)

/tags/create [POST]

This will create a new tag.

### Example {#tags_create_new_tag-example}


```python
import pieces_os_client
from pieces_os_client.models.seeded_tag import SeededTag
from pieces_os_client.models.tag import Tag
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
    api_instance = pieces_os_client.TagsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_tag = pieces_os_client.SeededTag() # SeededTag |  (optional)

    try:
        # /tags/create [POST]
        api_response = api_instance.tags_create_new_tag(transferables=transferables, seeded_tag=seeded_tag)
        print("The response of TagsApi->tags_create_new_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_create_new_tag: %s\n" % e)
```



### Parameters {#tags_create_new_tag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_tag** | [**SeededTag**](../models/SeededTag)|  | [optional] 

### Return type {#tags_create_new_tag-return-type}

[**Tag**](../models/Tag)

### Authorization {#tags_create_new_tag-authorization}

No authorization required

### HTTP request headers {#tags_create_new_tag-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#tags_create_new_tag-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tags_delete_specific_tag** {#tags_delete_specific_tag}
> tags_delete_specific_tag(tag)

/tags/\{tag\}/delete [POST]

This will delete a specific tag.

### Example {#tags_delete_specific_tag-example}


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
    api_instance = pieces_os_client.TagsApi(api_client)
    tag = 'tag_example' # str | tag id

    try:
        # /tags/\{tag\}/delete [POST]
        api_instance.tags_delete_specific_tag(tag)
    except Exception as e:
        print("Exception when calling TagsApi->tags_delete_specific_tag: %s\n" % e)
```



### Parameters {#tags_delete_specific_tag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 

### Return type {#tags_delete_specific_tag-return-type}

void (empty response body)

### Authorization {#tags_delete_specific_tag-authorization}

No authorization required

### HTTP request headers {#tags_delete_specific_tag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#tags_delete_specific_tag-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **tags_exists** {#tags_exists}
> ExistingMetadata tags_exists(existent_metadata=existent_metadata)

/tags/exists [POST]

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example {#tags_exists-example}


```python
import pieces_os_client
from pieces_os_client.models.existent_metadata import ExistentMetadata
from pieces_os_client.models.existing_metadata import ExistingMetadata
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
    api_instance = pieces_os_client.TagsApi(api_client)
    existent_metadata = pieces_os_client.ExistentMetadata() # ExistentMetadata |  (optional)

    try:
        # /tags/exists [POST]
        api_response = api_instance.tags_exists(existent_metadata=existent_metadata)
        print("The response of TagsApi->tags_exists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_exists: %s\n" % e)
```



### Parameters {#tags_exists-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existent_metadata** | [**ExistentMetadata**](../models/ExistentMetadata)|  | [optional] 

### Return type {#tags_exists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization {#tags_exists-authorization}

No authorization required

### HTTP request headers {#tags_exists-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#tags_exists-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tags_snapshot** {#tags_snapshot}
> Tags tags_snapshot(transferables=transferables)

/tags [GET]

This will get a snapshot of all of your tags.

### Example {#tags_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.tags import Tags
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
    api_instance = pieces_os_client.TagsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /tags [GET]
        api_response = api_instance.tags_snapshot(transferables=transferables)
        print("The response of TagsApi->tags_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_snapshot: %s\n" % e)
```



### Parameters {#tags_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#tags_snapshot-return-type}

[**Tags**](../models/Tags)

### Authorization {#tags_snapshot-authorization}

No authorization required

### HTTP request headers {#tags_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#tags_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

