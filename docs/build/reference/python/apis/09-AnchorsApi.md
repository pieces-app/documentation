---
title: Anchors API | Python SDK
---

# Anchors API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchor_disassociate_asset**](AnchorsApi#anchor_disassociate_asset) | **POST** /anchors/\{anchor\}/assets/delete/\{asset\} | /anchors/\{anchor\}/assets/delete/\{asset\} [POST]
[**anchors_create_new_anchor**](AnchorsApi#anchors_create_new_anchor) | **POST** /anchors/create | /anchors/create [POST]
[**anchors_delete_specific_anchor**](AnchorsApi#anchors_delete_specific_anchor) | **POST** /anchors/\{anchor\}/delete | /anchors/\{anchor\}/delete [POST]
[**anchors_snapshot**](AnchorsApi#anchors_snapshot) | **GET** /anchors | /anchors [GET]


## **anchor_disassociate_asset** {#anchor_disassociate_asset}
> anchor_disassociate_asset(anchor, asset)

/anchors/\{anchor\}/assets/delete/\{asset\} [POST]

This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example {#anchor_disassociate_asset-example}


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
    api_instance = Anchors API(api_client)
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /anchors/\{anchor\}/assets/delete/\{asset\} [POST]
        api_instance.anchor_disassociate_asset(anchor, asset)
    except Exception as e:
        print("Exception when calling AnchorsApi->anchor_disassociate_asset: %s\n" % e)
```



### Parameters {#anchor_disassociate_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **str**| This is the specific uuid of an anchor. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#anchor_disassociate_asset-return-type}

void (empty response body)

### Authorization {#anchor_disassociate_asset-authorization}

No authorization required

### HTTP request headers {#anchor_disassociate_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#anchor_disassociate_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **anchors_create_new_anchor** {#anchors_create_new_anchor}
> Anchor anchors_create_new_anchor(transferables=transferables, seeded_anchor=seeded_anchor)

/anchors/create [POST]

This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.

### Example {#anchors_create_new_anchor-example}


```python
import pieces_os_client
from pieces_os_client.models.anchor import Anchor
from pieces_os_client.models.seeded_anchor import SeededAnchor
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
    api_instance = Anchors API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_anchor = pieces_os_client.SeededAnchor() # SeededAnchor |  (optional)

    try:
        # /anchors/create [POST]
        api_response = api_instance.anchors_create_new_anchor(transferables=transferables, seeded_anchor=seeded_anchor)
        print("The response of AnchorsApi->anchors_create_new_anchor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnchorsApi->anchors_create_new_anchor: %s\n" % e)
```



### Parameters {#anchors_create_new_anchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_anchor** | [**SeededAnchor**](../models/SeededAnchor)|  | [optional] 

### Return type {#anchors_create_new_anchor-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchors_create_new_anchor-authorization}

No authorization required

### HTTP request headers {#anchors_create_new_anchor-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#anchors_create_new_anchor-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **anchors_delete_specific_anchor** {#anchors_delete_specific_anchor}
> anchors_delete_specific_anchor(anchor)

/anchors/\{anchor\}/delete [POST]

This will delete a specific anchor!

### Example {#anchors_delete_specific_anchor-example}


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
    api_instance = Anchors API(api_client)
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.

    try:
        # /anchors/\{anchor\}/delete [POST]
        api_instance.anchors_delete_specific_anchor(anchor)
    except Exception as e:
        print("Exception when calling AnchorsApi->anchors_delete_specific_anchor: %s\n" % e)
```



### Parameters {#anchors_delete_specific_anchor-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **str**| This is the specific uuid of an anchor. | 

### Return type {#anchors_delete_specific_anchor-return-type}

void (empty response body)

### Authorization {#anchors_delete_specific_anchor-authorization}

No authorization required

### HTTP request headers {#anchors_delete_specific_anchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#anchors_delete_specific_anchor-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **anchors_snapshot** {#anchors_snapshot}
> Anchors anchors_snapshot(transferables=transferables)

/anchors [GET]

This will get a snapshot of all your anchors.

### Example {#anchors_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.anchors import Anchors
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
    api_instance = Anchors API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /anchors [GET]
        api_response = api_instance.anchors_snapshot(transferables=transferables)
        print("The response of AnchorsApi->anchors_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnchorsApi->anchors_snapshot: %s\n" % e)
```



### Parameters {#anchors_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#anchors_snapshot-return-type}

[**Anchors**](../models/Anchors)

### Authorization {#anchors_snapshot-authorization}

No authorization required

### HTTP request headers {#anchors_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#anchors_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

