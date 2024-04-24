---
title: Shares API | Python SDK
---

# Shares API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**shares_create_new_share**](SharesApi#shares_create_new_share) | **POST** /shares/create | /shares/create [POST]
[**shares_delete_share**](SharesApi#shares_delete_share) | **POST** /shares/\{share\}/delete | /shares/\{share\}/delete [POST]
[**shares_snapshot**](SharesApi#shares_snapshot) | **GET** /shares | /shares [GET]
[**shares_specific_share_snapshot**](SharesApi#shares_specific_share_snapshot) | **GET** /shares/\{share\} | /shares/\{share\} [GET]


## **shares_create_new_share** {#shares_create_new_share}
> Shares shares_create_new_share(transferables=transferables, seeded_share=seeded_share)

/shares/create [POST]

This endpoint will accept an asset. Response here will be a Share that was created.

### Example {#shares_create_new_share-example}


```python
import pieces_os_client
from pieces_os_client.models.seeded_share import SeededShare
from pieces_os_client.models.shares import Shares
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
    api_instance = pieces_os_client.SharesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_share = pieces_os_client.SeededShare() # SeededShare |  (optional)

    try:
        # /shares/create [POST]
        api_response = api_instance.shares_create_new_share(transferables=transferables, seeded_share=seeded_share)
        print("The response of SharesApi->shares_create_new_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_create_new_share: %s\n" % e)
```



### Parameters {#shares_create_new_share-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_share** | [**SeededShare**](../models/SeededShare)|  | [optional] 

### Return type {#shares_create_new_share-return-type}

[**Shares**](../models/Shares)

### Authorization {#shares_create_new_share-authorization}

No authorization required

### HTTP request headers {#shares_create_new_share-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#shares_create_new_share-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **shares_delete_share** {#shares_delete_share}
> str shares_delete_share(share)

/shares/\{share\}/delete [POST]

This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.

### Example {#shares_delete_share-example}


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
    api_instance = pieces_os_client.SharesApi(api_client)
    share = 'share_example' # str | Share id

    try:
        # /shares/\{share\}/delete [POST]
        api_response = api_instance.shares_delete_share(share)
        print("The response of SharesApi->shares_delete_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_delete_share: %s\n" % e)
```



### Parameters {#shares_delete_share-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **str**| Share id | 

### Return type {#shares_delete_share-return-type}

**str**

### Authorization {#shares_delete_share-authorization}

No authorization required

### HTTP request headers {#shares_delete_share-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#shares_delete_share-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **shares_snapshot** {#shares_snapshot}
> Shares shares_snapshot(transferables=transferables)

/shares [GET]

This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.

### Example {#shares_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.shares import Shares
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
    api_instance = pieces_os_client.SharesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /shares [GET]
        api_response = api_instance.shares_snapshot(transferables=transferables)
        print("The response of SharesApi->shares_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_snapshot: %s\n" % e)
```



### Parameters {#shares_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#shares_snapshot-return-type}

[**Shares**](../models/Shares)

### Authorization {#shares_snapshot-authorization}

No authorization required

### HTTP request headers {#shares_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#shares_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **shares_specific_share_snapshot** {#shares_specific_share_snapshot}
> Share shares_specific_share_snapshot(share, transferables=transferables)

/shares/\{share\} [GET]

This is an endpoint to enable a client to access a specific share through a provided share id.

### Example {#shares_specific_share_snapshot-example}


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
    api_instance = pieces_os_client.SharesApi(api_client)
    share = 'share_example' # str | Share id
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /shares/\{share\} [GET]
        api_response = api_instance.shares_specific_share_snapshot(share, transferables=transferables)
        print("The response of SharesApi->shares_specific_share_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_specific_share_snapshot: %s\n" % e)
```



### Parameters {#shares_specific_share_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **str**| Share id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#shares_specific_share_snapshot-return-type}

[**Share**](../models/Share)

### Authorization {#shares_specific_share_snapshot-authorization}

No authorization required

### HTTP request headers {#shares_specific_share_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#shares_specific_share_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A specific share per the provided share id. |  -  |

