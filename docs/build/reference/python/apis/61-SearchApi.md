# Search API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**full_text_search**](SearchApi#full_text_search) | **GET** /search/full_text | /search/full_text [GET]
[**neural_code_search**](SearchApi#neural_code_search) | **GET** /search/neural_code | /search/neural_code [GET]
[**tag_based_search**](SearchApi#tag_based_search) | **POST** /search/tag_based | /search/tag_based [POST]


## **full_text_search** {#full_text_search}
> SearchedAssets full_text_search(query=query, pseudo=pseudo)

/search/full_text [GET]

This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the 

### Example


```python
import pieces_os_client
from pieces_os_client.models.searched_assets import SearchedAssets
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
    api_instance = pieces_os_client.SearchApi(api_client)
    query = 'query_example' # str | This is a string that you can use to search your assets. (optional)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)

    try:
        # /search/full_text [GET]
        api_response = api_instance.full_text_search(query=query, pseudo=pseudo)
        print("The response of SearchApi->full_text_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->full_text_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| This is a string that you can use to search your assets. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

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



## **neural_code_search** {#neural_code_search}
> SearchedAssets neural_code_search(query=query, pseudo=pseudo)

/search/neural_code [GET]

This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example


```python
import pieces_os_client
from pieces_os_client.models.searched_assets import SearchedAssets
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
    api_instance = pieces_os_client.SearchApi(api_client)
    query = 'query_example' # str | This is a string that you can use to search your assets. (optional)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)

    try:
        # /search/neural_code [GET]
        api_response = api_instance.neural_code_search(query=query, pseudo=pseudo)
        print("The response of SearchApi->neural_code_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->neural_code_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| This is a string that you can use to search your assets. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

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



## **tag_based_search** {#tag_based_search}
> SearchedAssets tag_based_search(pseudo=pseudo, seeded_asset_tags=seeded_asset_tags)

/search/tag_based [POST]

This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example


```python
import pieces_os_client
from pieces_os_client.models.searched_assets import SearchedAssets
from pieces_os_client.models.seeded_asset_tags import SeededAssetTags
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
    api_instance = pieces_os_client.SearchApi(api_client)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    seeded_asset_tags = pieces_os_client.SeededAssetTags() # SeededAssetTags |  (optional)

    try:
        # /search/tag_based [POST]
        api_response = api_instance.tag_based_search(pseudo=pseudo, seeded_asset_tags=seeded_asset_tags)
        print("The response of SearchApi->tag_based_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->tag_based_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **seeded_asset_tags** | [**SeededAssetTags**](../models/SeededAssetTags)|  | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

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



