---
title: Hint API | Python SDK
---

# Hint API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hint_scores_increment**](HintApi#hint_scores_increment) | **POST** /hint/\{hint\}/scores/increment | '/hint/\{hint\}/scores/increment' [POST]
[**hint_specific_hint_snapshot**](HintApi#hint_specific_hint_snapshot) | **GET** /hint/\{hint\} | /hint/\{hint\} [POST]
[**hint_update**](HintApi#hint_update) | **POST** /hint/update | /hint/update [POST]


## **hint_scores_increment** {#hint_scores_increment}
> hint_scores_increment(hint, seeded_score_increment=seeded_score_increment)

'/hint/\{hint\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#hint_scores_increment-example}


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
    api_instance = Hint API(api_client)
    hint = 'hint_example' # str | This is a specific hint uuid
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/hint/\{hint\}/scores/increment' [POST]
        api_instance.hint_scores_increment(hint, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling HintApi->hint_scores_increment: %s\n" % e)
```



### Parameters {#hint_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **str**| This is a specific hint uuid | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#hint_scores_increment-return-type}

void (empty response body)

### Authorization {#hint_scores_increment-authorization}

No authorization required

### HTTP request headers {#hint_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#hint_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **hint_specific_hint_snapshot** {#hint_specific_hint_snapshot}
> Hint hint_specific_hint_snapshot(hint)

/hint/\{hint\} [POST]

This will get a snapshot of a specific hint.

### Example {#hint_specific_hint_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.hint import Hint
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
    api_instance = Hint API(api_client)
    hint = 'hint_example' # str | This is a specific hint uuid

    try:
        # /hint/\{hint\} [POST]
        api_response = api_instance.hint_specific_hint_snapshot(hint)
        print("The response of HintApi->hint_specific_hint_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HintApi->hint_specific_hint_snapshot: %s\n" % e)
```



### Parameters {#hint_specific_hint_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **str**| This is a specific hint uuid | 

### Return type {#hint_specific_hint_snapshot-return-type}

[**Hint**](../models/Hint)

### Authorization {#hint_specific_hint_snapshot-authorization}

No authorization required

### HTTP request headers {#hint_specific_hint_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#hint_specific_hint_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **hint_update** {#hint_update}
> Hint hint_update(hint=hint)

/hint/update [POST]

This will update a specific hint.

### Example {#hint_update-example}


```python
import pieces_os_client
from pieces_os_client.models.hint import Hint
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
    api_instance = Hint API(api_client)
    hint = pieces_os_client.Hint() # Hint |  (optional)

    try:
        # /hint/update [POST]
        api_response = api_instance.hint_update(hint=hint)
        print("The response of HintApi->hint_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HintApi->hint_update: %s\n" % e)
```



### Parameters {#hint_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**Hint**](../models/Hint)|  | [optional] 

### Return type {#hint_update-return-type}

[**Hint**](../models/Hint)

### Authorization {#hint_update-authorization}

No authorization required

### HTTP request headers {#hint_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#hint_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

