# Piece API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**html_share**](PieceApi#html_share) | **GET** / | / [GET]


## **html_share**
> str html_share(p)

/ [GET]

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example


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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p** | **str**| this is the a query param, that a shortened version of the share. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

