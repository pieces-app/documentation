---
title: Share API | Python SDK
---

# Share API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**share_scores_increment**](ShareApi#share_scores_increment) | **POST** /share/\{share\}/scores/increment | '/share/\{share\}/scores/increment' [POST]
[**share_snapshot**](ShareApi#share_snapshot) | **GET** /share/\{share\} | /share/\{share\}
[**share_update**](ShareApi#share_update) | **POST** /share/update | /share/update [POST]


## **share_scores_increment** {#share_scores_increment}
> share_scores_increment(share, seeded_score_increment=seeded_score_increment)

'/share/\{share\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#share_scores_increment-example}


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
    api_instance = pieces_os_client.ShareApi(api_client)
    share = 'share_example' # str | Share id
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/share/\{share\}/scores/increment' [POST]
        api_instance.share_scores_increment(share, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling ShareApi->share_scores_increment: %s\n" % e)
```



### Parameters {#share_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **str**| Share id | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#share_scores_increment-return-type}

void (empty response body)

### Authorization {#share_scores_increment-authorization}

No authorization required

### HTTP request headers {#share_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#share_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **share_snapshot** {#share_snapshot}
> Share share_snapshot(share, transferables=transferables)

/share/\{share\}

Get the snapshot of a specific share.

### Example {#share_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.share import Share
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
    api_instance = pieces_os_client.ShareApi(api_client)
    share = 'share_example' # str | Share id
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /share/\{share\}
        api_response = api_instance.share_snapshot(share, transferables=transferables)
        print("The response of ShareApi->share_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->share_snapshot: %s\n" % e)
```



### Parameters {#share_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **str**| Share id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#share_snapshot-return-type}

[**Share**](../models/Share)

### Authorization {#share_snapshot-authorization}

No authorization required

### HTTP request headers {#share_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#share_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **share_update** {#share_update}
> Share share_update(transferables=transferables, share=share)

/share/update [POST]

This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!

### Example {#share_update-example}


```python
import pieces_os_client
from pieces_os_client.models.share import Share
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
    api_instance = pieces_os_client.ShareApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    share = pieces_os_client.Share() # Share | This is the Share that needs to be updated. (optional)

    try:
        # /share/update [POST]
        api_response = api_instance.share_update(transferables=transferables, share=share)
        print("The response of ShareApi->share_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->share_update: %s\n" % e)
```



### Parameters {#share_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **share** | [**Share**](../models/Share)| This is the Share that needs to be updated. | [optional] 

### Return type {#share_update-return-type}

[**Share**](../models/Share)

### Authorization {#share_update-authorization}

No authorization required

### HTTP request headers {#share_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#share_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

