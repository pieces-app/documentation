---
title: Assets API | Python SDK
---

# Assets API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_create_new_asset**](AssetsApi#assets_create_new_asset) | **POST** /assets/create | /assets/create [POST] Scoped to Asset
[**assets_delete_asset**](AssetsApi#assets_delete_asset) | **POST** /assets/\{asset\}/delete | /assets/\{asset\}/delete [POST] Scoped to Asset
[**assets_draft**](AssetsApi#assets_draft) | **POST** /assets/draft | /assets/draft [POST]
[**assets_get_recommended_assets**](AssetsApi#assets_get_recommended_assets) | **GET** /assets/recommended | Your GET endpoint
[**assets_get_related_assets**](AssetsApi#assets_get_related_assets) | **GET** /assets/related | /assets/related [GET]
[**assets_identifiers_snapshot**](AssetsApi#assets_identifiers_snapshot) | **GET** /assets/identifiers | /assets/identifiers [GET]
[**assets_pseudo_snapshot**](AssetsApi#assets_pseudo_snapshot) | **GET** /assets/pseudo | /assets/pseudo [GET]
[**assets_search_assets**](AssetsApi#assets_search_assets) | **GET** /assets/search | /assets/search?query=string [GET]
[**assets_search_with_filters**](AssetsApi#assets_search_with_filters) | **POST** /assets/search | /assets/search [POST]
[**assets_snapshot**](AssetsApi#assets_snapshot) | **GET** /assets | /assets [GET] Scoped to Assets
[**assets_specific_asset_formats_snapshot**](AssetsApi#assets_specific_asset_formats_snapshot) | **GET** /assets/\{asset\}/formats | /assets/\{asset\}/formats [GET] Scoped To Assets
[**assets_specific_asset_snapshot**](AssetsApi#assets_specific_asset_snapshot) | **GET** /assets/\{asset\} | /assets/\{asset\} [GET] Scoped to Assets
[**assets_stream_identifiers**](AssetsApi#assets_stream_identifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [WS]
[**get_assets_stream_transferables**](AssetsApi#get_assets_stream_transferables) | **GET** /assets/stream/transferables | /assets/stream/transferables [WS]
[**stream_assets**](AssetsApi#stream_assets) | **GET** /assets/stream | /assets/stream [WS]


## **assets_create_new_asset** {#assets_create_new_asset}
> Asset assets_create_new_asset(transferables=transferables, seed=seed)

/assets/create [POST] Scoped to Asset

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example {#assets_create_new_asset-example}


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
from pieces_os_client.models.seed import Seed
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seed = pieces_os_client.Seed() # Seed |  (optional)

    try:
        # /assets/create [POST] Scoped to Asset
        api_response = api_instance.assets_create_new_asset(transferables=transferables, seed=seed)
        print("The response of AssetsApi->assets_create_new_asset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_create_new_asset: %s\n" % e)
```



### Parameters {#assets_create_new_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed)|  | [optional] 

### Return type {#assets_create_new_asset-return-type}

[**Asset**](../models/Asset)

### Authorization {#assets_create_new_asset-authorization}

No authorization required

### HTTP request headers {#assets_create_new_asset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#assets_create_new_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_delete_asset** {#assets_delete_asset}
> str assets_delete_asset(asset)

/assets/\{asset\}/delete [POST] Scoped to Asset

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example {#assets_delete_asset-example}


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
    api_instance = pieces_os_client.AssetsApi(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /assets/\{asset\}/delete [POST] Scoped to Asset
        api_response = api_instance.assets_delete_asset(asset)
        print("The response of AssetsApi->assets_delete_asset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_delete_asset: %s\n" % e)
```



### Parameters {#assets_delete_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#assets_delete_asset-return-type}

**str**

### Authorization {#assets_delete_asset-authorization}

No authorization required

### HTTP request headers {#assets_delete_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#assets_delete_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_draft** {#assets_draft}
> Seed assets_draft(transferables=transferables, seed=seed)

/assets/draft [POST]

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example {#assets_draft-example}


```python
import pieces_os_client
from pieces_os_client.models.seed import Seed
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seed = pieces_os_client.Seed() # Seed |  (optional)

    try:
        # /assets/draft [POST]
        api_response = api_instance.assets_draft(transferables=transferables, seed=seed)
        print("The response of AssetsApi->assets_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_draft: %s\n" % e)
```



### Parameters {#assets_draft-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed)|  | [optional] 

### Return type {#assets_draft-return-type}

[**Seed**](../models/Seed)

### Authorization {#assets_draft-authorization}

No authorization required

### HTTP request headers {#assets_draft-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_draft-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assets_get_recommended_assets** {#assets_get_recommended_assets}
> Assets assets_get_recommended_assets(seeded_assets_recommendation=seeded_assets_recommendation)

Your GET endpoint

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example {#assets_get_recommended_assets-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
from pieces_os_client.models.seeded_assets_recommendation import SeededAssetsRecommendation
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    seeded_assets_recommendation = pieces_os_client.SeededAssetsRecommendation() # SeededAssetsRecommendation | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. (optional)

    try:
        # Your GET endpoint
        api_response = api_instance.assets_get_recommended_assets(seeded_assets_recommendation=seeded_assets_recommendation)
        print("The response of AssetsApi->assets_get_recommended_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_get_recommended_assets: %s\n" % e)
```



### Parameters {#assets_get_recommended_assets-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_assets_recommendation** | [**SeededAssetsRecommendation**](../models/SeededAssetsRecommendation)| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional] 

### Return type {#assets_get_recommended_assets-return-type}

[**Assets**](../models/Assets)

### Authorization {#assets_get_recommended_assets-authorization}

No authorization required

### HTTP request headers {#assets_get_recommended_assets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#assets_get_recommended_assets-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_get_related_assets** {#assets_get_related_assets}
> Assets assets_get_related_assets(assets=assets)

/assets/related [GET]

Retrieves one or more related assets when provided with one or more input assets.

### Example {#assets_get_related_assets-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    assets = pieces_os_client.Assets() # Assets | The body of the request is an object (Assets Model) with iterable internally. (optional)

    try:
        # /assets/related [GET]
        api_response = api_instance.assets_get_related_assets(assets=assets)
        print("The response of AssetsApi->assets_get_related_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_get_related_assets: %s\n" % e)
```



### Parameters {#assets_get_related_assets-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)| The body of the request is an object (Assets Model) with iterable internally. | [optional] 

### Return type {#assets_get_related_assets-return-type}

[**Assets**](../models/Assets)

### Authorization {#assets_get_related_assets-authorization}

No authorization required

### HTTP request headers {#assets_get_related_assets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#assets_get_related_assets-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_identifiers_snapshot** {#assets_identifiers_snapshot}
> FlattenedAssets assets_identifiers_snapshot(pseudo=pseudo)

/assets/identifiers [GET]

Retrieves all asset IDs associated with your account.

### Example {#assets_identifiers_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.flattened_assets import FlattenedAssets
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)

    try:
        # /assets/identifiers [GET]
        api_response = api_instance.assets_identifiers_snapshot(pseudo=pseudo)
        print("The response of AssetsApi->assets_identifiers_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_identifiers_snapshot: %s\n" % e)
```



### Parameters {#assets_identifiers_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type {#assets_identifiers_snapshot-return-type}

[**FlattenedAssets**](../models/FlattenedAssets)

### Authorization {#assets_identifiers_snapshot-authorization}

No authorization required

### HTTP request headers {#assets_identifiers_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_identifiers_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assets_pseudo_snapshot** {#assets_pseudo_snapshot}
> PseudoAssets assets_pseudo_snapshot()

/assets/pseudo [GET]

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example {#assets_pseudo_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.pseudo_assets import PseudoAssets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/pseudo [GET]
        api_response = api_instance.assets_pseudo_snapshot()
        print("The response of AssetsApi->assets_pseudo_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_pseudo_snapshot: %s\n" % e)
```



### Parameters {#assets_pseudo_snapshot-parameters}

This endpoint does not need any parameters.

### Return type {#assets_pseudo_snapshot-return-type}

[**PseudoAssets**](../models/PseudoAssets)

### Authorization {#assets_pseudo_snapshot-authorization}

No authorization required

### HTTP request headers {#assets_pseudo_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_pseudo_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assets_search_assets** {#assets_search_assets}
> SearchedAssets assets_search_assets(query=query, transferables=transferables, searchable_tags=searchable_tags, pseudo=pseudo)

/assets/search?query=string [GET]

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example {#assets_search_assets-example}


```python
import pieces_os_client
from pieces_os_client.models.searched_assets import SearchedAssets
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    query = 'query_example' # str | This is a string that you can use to search your assets. (optional)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    searchable_tags = 'searchable_tags_example' # str | This is a comma separated value of tags used for search. (optional)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)

    try:
        # /assets/search?query=string [GET]
        api_response = api_instance.assets_search_assets(query=query, transferables=transferables, searchable_tags=searchable_tags, pseudo=pseudo)
        print("The response of AssetsApi->assets_search_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_search_assets: %s\n" % e)
```



### Parameters {#assets_search_assets-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| This is a string that you can use to search your assets. | [optional] 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **searchable_tags** | **str**| This is a comma separated value of tags used for search. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type {#assets_search_assets-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#assets_search_assets-authorization}

No authorization required

### HTTP request headers {#assets_search_assets-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_search_assets-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assets_search_with_filters** {#assets_search_with_filters}
> AssetsSearchWithFiltersOutput assets_search_with_filters(transferables=transferables, pseudo=pseudo, assets_search_with_filters_input=assets_search_with_filters_input)

/assets/search [POST]

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example {#assets_search_with_filters-example}


```python
import pieces_os_client
from pieces_os_client.models.assets_search_with_filters_input import AssetsSearchWithFiltersInput
from pieces_os_client.models.assets_search_with_filters_output import AssetsSearchWithFiltersOutput
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    assets_search_with_filters_input = pieces_os_client.AssetsSearchWithFiltersInput() # AssetsSearchWithFiltersInput |  (optional)

    try:
        # /assets/search [POST]
        api_response = api_instance.assets_search_with_filters(transferables=transferables, pseudo=pseudo, assets_search_with_filters_input=assets_search_with_filters_input)
        print("The response of AssetsApi->assets_search_with_filters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_search_with_filters: %s\n" % e)
```



### Parameters {#assets_search_with_filters-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **assets_search_with_filters_input** | [**AssetsSearchWithFiltersInput**](../models/AssetsSearchWithFiltersInput)|  | [optional] 

### Return type {#assets_search_with_filters-return-type}

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### Authorization {#assets_search_with_filters-authorization}

No authorization required

### HTTP request headers {#assets_search_with_filters-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_search_with_filters-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assets_snapshot** {#assets_snapshot}
> Assets assets_snapshot(transferables=transferables, suggested=suggested, pseudo=pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example {#assets_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    suggested = True # bool | This will let us know if a developer, wants a snapshot related to suggested content or normal content (optional)
    pseudo = True # bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)

    try:
        # /assets [GET] Scoped to Assets
        api_response = api_instance.assets_snapshot(transferables=transferables, suggested=suggested, pseudo=pseudo)
        print("The response of AssetsApi->assets_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_snapshot: %s\n" % e)
```



### Parameters {#assets_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **suggested** | **bool**| This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type {#assets_snapshot-return-type}

[**Assets**](../models/Assets)

### Authorization {#assets_snapshot-authorization}

No authorization required

### HTTP request headers {#assets_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#assets_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_specific_asset_formats_snapshot** {#assets_specific_asset_formats_snapshot}
> Formats assets_specific_asset_formats_snapshot(asset, transferables=transferables)

/assets/\{asset\}/formats [GET] Scoped To Assets

Retrieves the available formats for a specific asset identified by its ID

### Example {#assets_specific_asset_formats_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.formats import Formats
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /assets/\{asset\}/formats [GET] Scoped To Assets
        api_response = api_instance.assets_specific_asset_formats_snapshot(asset, transferables=transferables)
        print("The response of AssetsApi->assets_specific_asset_formats_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_specific_asset_formats_snapshot: %s\n" % e)
```



### Parameters {#assets_specific_asset_formats_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assets_specific_asset_formats_snapshot-return-type}

[**Formats**](../models/Formats)

### Authorization {#assets_specific_asset_formats_snapshot-authorization}

No authorization required

### HTTP request headers {#assets_specific_asset_formats_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#assets_specific_asset_formats_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **assets_specific_asset_snapshot** {#assets_specific_asset_snapshot}
> Asset assets_specific_asset_snapshot(asset, transferables=transferables)

/assets/\{asset\} [GET] Scoped to Assets

Allows clients to retrieve details of a specific asset by providing its UUID in the path.

### Example {#assets_specific_asset_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
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
    api_instance = pieces_os_client.AssetsApi(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /assets/\{asset\} [GET] Scoped to Assets
        api_response = api_instance.assets_specific_asset_snapshot(asset, transferables=transferables)
        print("The response of AssetsApi->assets_specific_asset_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_specific_asset_snapshot: %s\n" % e)
```



### Parameters {#assets_specific_asset_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assets_specific_asset_snapshot-return-type}

[**Asset**](../models/Asset)

### Authorization {#assets_specific_asset_snapshot-authorization}

No authorization required

### HTTP request headers {#assets_specific_asset_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#assets_specific_asset_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A specific asset per the provided asset id. |  -  |
**410** | Asset no longer exists and is Gone. |  -  |

## **assets_stream_identifiers** {#assets_stream_identifiers}
> StreamedIdentifiers assets_stream_identifiers()

/assets/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your asset's identifiers (UUIDs).

### Example {#assets_stream_identifiers-example}


```python
import pieces_os_client
from pieces_os_client.models.streamed_identifiers import StreamedIdentifiers
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/stream/identifiers [WS]
        api_response = api_instance.assets_stream_identifiers()
        print("The response of AssetsApi->assets_stream_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_stream_identifiers: %s\n" % e)
```



### Parameters {#assets_stream_identifiers-parameters}

This endpoint does not need any parameters.

### Return type {#assets_stream_identifiers-return-type}

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### Authorization {#assets_stream_identifiers-authorization}

No authorization required

### HTTP request headers {#assets_stream_identifiers-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#assets_stream_identifiers-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **get_assets_stream_transferables** {#get_assets_stream_transferables}
> Assets get_assets_stream_transferables()

/assets/stream/transferables [WS]

Provides a WebSocket connection that emits changes to your assets, including their transferable.

### Example {#get_assets_stream_transferables-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/stream/transferables [WS]
        api_response = api_instance.get_assets_stream_transferables()
        print("The response of AssetsApi->get_assets_stream_transferables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->get_assets_stream_transferables: %s\n" % e)
```



### Parameters {#get_assets_stream_transferables-parameters}

This endpoint does not need any parameters.

### Return type {#get_assets_stream_transferables-return-type}

[**Assets**](../models/Assets)

### Authorization {#get_assets_stream_transferables-authorization}

No authorization required

### HTTP request headers {#get_assets_stream_transferables-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#get_assets_stream_transferables-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **stream_assets** {#stream_assets}
> Assets stream_assets()

/assets/stream [WS]

Provides a WebSocket connection that emits changes to your assets.

### Example {#stream_assets-example}


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/stream [WS]
        api_response = api_instance.stream_assets()
        print("The response of AssetsApi->stream_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->stream_assets: %s\n" % e)
```



### Parameters {#stream_assets-parameters}

This endpoint does not need any parameters.

### Return type {#stream_assets-return-type}

[**Assets**](../models/Assets)

### Authorization {#stream_assets-authorization}

No authorization required

### HTTP request headers {#stream_assets-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#stream_assets-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

