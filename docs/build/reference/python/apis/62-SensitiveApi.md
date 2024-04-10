# Sensitive API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**sensitive_scores_increment**](SensitiveApi#sensitive_scores_increment) | **POST** /sensitive/\{sensitive\}/scores/increment
[**sensitive_snapshot**](SensitiveApi#sensitive_snapshot) | **GET** /sensitive/\{sensitive\}
[**update_sensitive**](SensitiveApi#update_sensitive) | **POST** /sensitive/update


## **sensitive_scores_increment** {#sensitive_scores_increment}
> sensitive_scores_increment(sensitive, seeded_score_increment=seeded_score_increment)

'/sensitive/\{sensitive\}/scores/increment' [POST]

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
    api_instance = pieces_os_client.SensitiveApi(api_client)
    sensitive = 'sensitive_example' # str | This is a uuid that represents a sensitive.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/sensitive/\{sensitive\}/scores/increment' [POST]
        api_instance.sensitive_scores_increment(sensitive, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling SensitiveApi->sensitive_scores_increment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **str**| This is a uuid that represents a sensitive. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **sensitive_snapshot** {#sensitive_snapshot}
> Sensitive sensitive_snapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example


```python
import pieces_os_client
from pieces_os_client.models.sensitive import Sensitive
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **str**|  | 

### Return type

[**Sensitive**](../models/Sensitive)

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



## **update_sensitive** {#update_sensitive}
> Sensitive update_sensitive(sensitive=sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example


```python
import pieces_os_client
from pieces_os_client.models.sensitive import Sensitive
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**Sensitive**](../models/Sensitive)|  | [optional] 

### Return type

[**Sensitive**](../models/Sensitive)

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



