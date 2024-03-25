LinkifyApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkify**](LinkifyApi#linkify) | **POST** /linkify | /linkify [POST]
[**linkify_multiple**](LinkifyApi#linkify_multiple) | **POST** /linkify/multiple | /linkify/multiple [POST]
[**linkify_share_revoke**](LinkifyApi#linkify_share_revoke) | **POST** /linkify/\{share\}/revoke | [POST} /linkify/\{share\}/revoke


## **linkify**
> Shares linkify(linkify=linkify)

/linkify [POST]



### Example


```python
import pieces_os_client
from pieces_os_client.models.linkify import Linkify
from pieces_os_client.models.shares import Shares
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
    api_instance = pieces_os_client.LinkifyApi(api_client)
    linkify = pieces_os_client.Linkify() # Linkify |  (optional)

    try:
        # /linkify [POST]
        api_response = api_instance.linkify(linkify=linkify)
        print("The response of LinkifyApi->linkify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkifyApi->linkify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | [**Linkify**](Linkify)|  | [optional] 

### Return type

[**Shares**](Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**412** | This means that Github Account has not been connected to this user yet. |  -  |
**413** | Request Entity Too Large |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |



## **linkify_multiple**
> Shares linkify_multiple(linkify_multiple=linkify_multiple)

/linkify/multiple [POST]

- assumption that you have already backed up the asset's that you are sending to this endpoint.(b/c the assets are ids.)

### Example


```python
import pieces_os_client
from pieces_os_client.models.linkify_multiple import LinkifyMultiple
from pieces_os_client.models.shares import Shares
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
    api_instance = pieces_os_client.LinkifyApi(api_client)
    linkify_multiple = pieces_os_client.LinkifyMultiple() # LinkifyMultiple |  (optional)

    try:
        # /linkify/multiple [POST]
        api_response = api_instance.linkify_multiple(linkify_multiple=linkify_multiple)
        print("The response of LinkifyApi->linkify_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkifyApi->linkify_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify_multiple** | [**LinkifyMultiple**](LinkifyMultiple)|  | [optional] 

### Return type

[**Shares**](Shares)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**409** | If a name is passed in as an optional property, and the name is already take we will not be able to assign the name. |  -  |
**413** | Request Entity Too Large |  -  |
**417** | Expectation Failed, if this status is return that means that you did not fully upload all your assets that you are attempting to add to a collection. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |



## **linkify_share_revoke**
> str linkify_share_revoke(share)

[POST} /linkify/\{share\}/revoke

This will revoke a link.

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
    api_instance = pieces_os_client.LinkifyApi(api_client)
    share = 'share_example' # str | 

    try:
        # [POST} /linkify/\{share\}/revoke
        api_response = api_instance.linkify_share_revoke(share)
        print("The response of LinkifyApi->linkify_share_revoke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkifyApi->linkify_share_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, this is the uuid of the share that was revoked. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot revoke a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |



