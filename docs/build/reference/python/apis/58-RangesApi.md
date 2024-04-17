---
title: Ranges API | Python SDK
---

# Ranges API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**ranges_create_new_range**](RangesApi#ranges_create_new_range) | **POST** /ranges/create | /ranges/create [POST]
[**ranges_delete_specific_range**](RangesApi#ranges_delete_specific_range) | **POST** /ranges/\{range\}/delete | /ranges/\{range\}/delete [POST]
[**ranges_snapshot**](RangesApi#ranges_snapshot) | **GET** /ranges | /ranges [GET]


## **ranges_create_new_range** {#ranges_create_new_range}
> Range ranges_create_new_range(seeded_range=seeded_range)

/ranges/create [POST]

This will create a new Range in the database.

### Example {#ranges_create_new_range-example}


```python
import pieces_os_client
from pieces_os_client.models.range import Range
from pieces_os_client.models.seeded_range import SeededRange
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
    api_instance = Ranges API(api_client)
    seeded_range = pieces_os_client.SeededRange() # SeededRange |  (optional)

    try:
        # /ranges/create [POST]
        api_response = api_instance.ranges_create_new_range(seeded_range=seeded_range)
        print("The response of RangesApi->ranges_create_new_range:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RangesApi->ranges_create_new_range: %s\n" % e)
```



### Parameters {#ranges_create_new_range-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_range** | [**SeededRange**](../models/SeededRange)|  | [optional] 

### Return type {#ranges_create_new_range-return-type}

[**Range**](../models/Range)

### Authorization {#ranges_create_new_range-authorization}

No authorization required

### HTTP request headers {#ranges_create_new_range-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#ranges_create_new_range-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **ranges_delete_specific_range** {#ranges_delete_specific_range}
> ranges_delete_specific_range(range)

/ranges/\{range\}/delete [POST]

This will delete a specific range from the database!

### Example {#ranges_delete_specific_range-example}


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
    api_instance = Ranges API(api_client)
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /ranges/\{range\}/delete [POST]
        api_instance.ranges_delete_specific_range(range)
    except Exception as e:
        print("Exception when calling RangesApi->ranges_delete_specific_range: %s\n" % e)
```



### Parameters {#ranges_delete_specific_range-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type {#ranges_delete_specific_range-return-type}

void (empty response body)

### Authorization {#ranges_delete_specific_range-authorization}

No authorization required

### HTTP request headers {#ranges_delete_specific_range-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#ranges_delete_specific_range-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **ranges_snapshot** {#ranges_snapshot}
> Ranges ranges_snapshot()

/ranges [GET]

This will get a snapshot of all your ranges.

### Example {#ranges_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.ranges import Ranges
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
    api_instance = Ranges API(api_client)

    try:
        # /ranges [GET]
        api_response = api_instance.ranges_snapshot()
        print("The response of RangesApi->ranges_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RangesApi->ranges_snapshot: %s\n" % e)
```



### Parameters {#ranges_snapshot-parameters}

This endpoint does not need any parameters.

### Return type {#ranges_snapshot-return-type}

[**Ranges**](../models/Ranges)

### Authorization {#ranges_snapshot-authorization}

No authorization required

### HTTP request headers {#ranges_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#ranges_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

