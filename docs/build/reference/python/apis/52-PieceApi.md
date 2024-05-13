---
title: Piece API | Python SDK
---

# Piece API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**html_share**](PieceApi#html_share) | **GET** / | / [GET]


## **html_share** {#html_share}
> str html_share(p)

/ [GET]

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example {#html_share-example}


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
    api_instance = pieces_os_client.PieceApi(api_client)
    p = 'p_example' # str | this is the a query param, that a shortened version of the share.

    try:
        # / [GET]
        api_response = api_instance.html_share(p)
        print("The response of PieceApi->html_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PieceApi->html_share: %s\n" % e)
```



### Parameters {#html_share-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p** | **str**| this is the a query param, that a shortened version of the share. | 

### Return type {#html_share-return-type}

**str**

### Authorization {#html_share-authorization}

No authorization required

### HTTP request headers {#html_share-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details {#html_share-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

