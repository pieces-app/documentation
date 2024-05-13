---
title: Sensitive API | Python SDK
---

# Sensitive API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitive_scores_increment**](SensitiveApi#sensitive_scores_increment) | **POST** /sensitive/\{sensitive\}/scores/increment | '/sensitive/\{sensitive\}/scores/increment' [POST]
[**sensitive_snapshot**](SensitiveApi#sensitive_snapshot) | **GET** /sensitive/\{sensitive\} | /sensitive/\{sensitive\} [GET]
[**update_sensitive**](SensitiveApi#update_sensitive) | **POST** /sensitive/update | /sensitive/update [POST]


## **sensitive_scores_increment** {#sensitive_scores_increment}
> sensitive_scores_increment(sensitive, seeded_score_increment=seeded_score_increment)

'/sensitive/\{sensitive\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#sensitive_scores_increment-example}


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
    api_instance = pieces_os_client.SensitiveApi(api_client)
    sensitive = 'sensitive_example' # str | This is a uuid that represents a sensitive.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/sensitive/\{sensitive\}/scores/increment' [POST]
        api_instance.sensitive_scores_increment(sensitive, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling SensitiveApi->sensitive_scores_increment: %s\n" % e)
```



### Parameters {#sensitive_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **str**| This is a uuid that represents a sensitive. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#sensitive_scores_increment-return-type}

void (empty response body)

### Authorization {#sensitive_scores_increment-authorization}

No authorization required

### HTTP request headers {#sensitive_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#sensitive_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **sensitive_snapshot** {#sensitive_snapshot}
> Sensitive sensitive_snapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example {#sensitive_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.sensitive import Sensitive
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
    api_instance = pieces_os_client.SensitiveApi(api_client)
    sensitive = 'sensitive_example' # str | 

    try:
        # /sensitive/\{sensitive\} [GET]
        api_response = api_instance.sensitive_snapshot(sensitive)
        print("The response of SensitiveApi->sensitive_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensitiveApi->sensitive_snapshot: %s\n" % e)
```



### Parameters {#sensitive_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **str**|  | 

### Return type {#sensitive_snapshot-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#sensitive_snapshot-authorization}

No authorization required

### HTTP request headers {#sensitive_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#sensitive_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **update_sensitive** {#update_sensitive}
> Sensitive update_sensitive(sensitive=sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example {#update_sensitive-example}


```python
import pieces_os_client
from pieces_os_client.models.sensitive import Sensitive
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
    api_instance = pieces_os_client.SensitiveApi(api_client)
    sensitive = pieces_os_client.Sensitive() # Sensitive |  (optional)

    try:
        # /sensitive/update [POST]
        api_response = api_instance.update_sensitive(sensitive=sensitive)
        print("The response of SensitiveApi->update_sensitive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SensitiveApi->update_sensitive: %s\n" % e)
```



### Parameters {#update_sensitive-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**Sensitive**](../models/Sensitive)|  | [optional] 

### Return type {#update_sensitive-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#update_sensitive-authorization}

No authorization required

### HTTP request headers {#update_sensitive-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#update_sensitive-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

