# Assets API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_create_new_asset**](AssetsApi#assets_create_new_asset) | **POST** /assets/create | /assets/create [POST] Scoped to Asset
[**assets_delete_asset**](AssetsApi#assets_delete_asset) | **POST** /assets/\{asset\}/delete | /assets/delete [POST] Scoped to Asset
[**assets_draft**](AssetsApi#assets_draft) | **POST** /assets/draft | /assets/draft [POST]
[**assets_get_recommended_assets**](AssetsApi#assets_get_recommended_assets) | **GET** /assets/recommended | Your GET endpoint
[**assets_get_related_assets**](AssetsApi#assets_get_related_assets) | **GET** /assets/related | /assets/related [GET]
[**assets_identifiers_snapshot**](AssetsApi#assets_identifiers_snapshot) | **GET** /assets/identifiers | /assets/identifiers [GET]
[**assets_pseudo_snapshot**](AssetsApi#assets_pseudo_snapshot) | **GET** /assets/pseudo | /assets/pseudo [GET]
[**assets_search_assets**](AssetsApi#assets_search_assets) | **GET** /assets/search | /assets/search?query&#x3D;string [GET]
[**assets_search_with_filters**](AssetsApi#assets_search_with_filters) | **POST** /assets/search | /assets/search [POST]
[**assets_snapshot**](AssetsApi#assets_snapshot) | **GET** /assets | /assets [GET] Scoped to Assets
[**assets_specific_asset_formats_snapshot**](AssetsApi#assets_specific_asset_formats_snapshot) | **GET** /assets/\{asset\}/formats | /assets/\{asset\}/formats [GET] Scoped To Assets
[**assets_specific_asset_snapshot**](AssetsApi#assets_specific_asset_snapshot) | **GET** /assets/\{asset\} | /assets/\{asset\} [GET] Scoped to Assets
[**assets_stream_identifiers**](AssetsApi#assets_stream_identifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [GET]
[**get_assets_stream_transferables**](AssetsApi#get_assets_stream_transferables) | **GET** /assets/stream/transferables | Your GET endpoint
[**stream_assets**](AssetsApi#stream_assets) | **GET** /assets/stream | /assets/stream [GET]


## **assets_create_new_asset**
> Asset assets_create_new_asset(transferables=transferables, seed=seed)

/assets/create [POST] Scoped to Asset

This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!

### Example


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
from pieces_os_client.models.seed import Seed
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed)|  | [optional] 

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assets_delete_asset**
> str assets_delete_asset(asset)

/assets/delete [POST] Scoped to Asset

This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.

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
    api_instance = pieces_os_client.AssetsApi(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /assets/delete [POST] Scoped to Asset
        api_response = api_instance.assets_delete_asset(asset)
        print("The response of AssetsApi->assets_delete_asset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_delete_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

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
**200** | OK |  -  |



## **assets_draft**
> Seed assets_draft(transferables=transferables, seed=seed)

/assets/draft [POST]

This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.

### Example


```python
import pieces_os_client
from pieces_os_client.models.seed import Seed
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed)|  | [optional] 

### Return type

[**Seed**](../models/Seed)

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



## **assets_get_recommended_assets**
> Assets assets_get_recommended_assets(seeded_assets_recommendation=seeded_assets_recommendation)

Your GET endpoint

An endpoint that takes in a SeededAssetsRecommendation Model within it's request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
from pieces_os_client.models.seeded_assets_recommendation import SeededAssetsRecommendation
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_assets_recommendation** | [**SeededAssetsRecommendation**](../models/SeededAssetsRecommendation)| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional] 

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assets_get_related_assets**
> Assets assets_get_related_assets(assets=assets)

/assets/related [GET]

Gets one or more related assets when provided one or more input assets. The body will expect the shape of

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)| The body of the request is an object (Assets Model) with iterable internally. | [optional] 

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assets_identifiers_snapshot**
> FlattenedAssets assets_identifiers_snapshot(pseudo=pseudo)

/assets/identifiers [GET]

This will get all of your asset ids

### Example


```python
import pieces_os_client
from pieces_os_client.models.flattened_assets import FlattenedAssets
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**FlattenedAssets**](../models/FlattenedAssets)

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



## **assets_pseudo_snapshot**
> PseudoAssets assets_pseudo_snapshot()

/assets/pseudo [GET]

This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.

### Example


```python
import pieces_os_client
from pieces_os_client.models.pseudo_assets import PseudoAssets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/pseudo [GET]
        api_response = api_instance.assets_pseudo_snapshot()
        print("The response of AssetsApi->assets_pseudo_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_pseudo_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PseudoAssets**](../models/PseudoAssets)

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



## **assets_search_assets**
> SearchedAssets assets_search_assets(query=query, transferables=transferables, searchable_tags=searchable_tags, pseudo=pseudo)

/assets/search?query=string [GET]

This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.

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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| This is a string that you can use to search your assets. | [optional] 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **searchable_tags** | **str**| This is a comma separated value of tags used for search. | [optional] 
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



## **assets_search_with_filters**
> AssetsSearchWithFiltersOutput assets_search_with_filters(transferables=transferables, pseudo=pseudo, assets_search_with_filters_input=assets_search_with_filters_input)

/assets/search [POST]

This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets_search_with_filters_input import AssetsSearchWithFiltersInput
from pieces_os_client.models.assets_search_with_filters_output import AssetsSearchWithFiltersOutput
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **assets_search_with_filters_input** | [**AssetsSearchWithFiltersInput**](../models/AssetsSearchWithFiltersInput)|  | [optional] 

### Return type

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

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



## **assets_snapshot**
> Assets assets_snapshot(transferables=transferables, suggested=suggested, pseudo=pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **suggested** | **bool**| This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assets_specific_asset_formats_snapshot**
> Formats assets_specific_asset_formats_snapshot(asset, transferables=transferables)

/assets/\{asset\}/formats [GET] Scoped To Assets

This will query the formats for agiven asset when provided that asset's id.

### Example


```python
import pieces_os_client
from pieces_os_client.models.formats import Formats
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Formats**](../models/Formats)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assets_specific_asset_snapshot**
> Asset assets_specific_asset_snapshot(asset, transferables=transferables)

/assets/\{asset\} [GET] Scoped to Assets

This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.

### Example


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
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



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A specific asset per the provided asset id. |  -  |
**410** | Asset no longer exists and is Gone. |  -  |



## **assets_stream_identifiers**
> StreamedIdentifiers assets_stream_identifiers()

/assets/stream/identifiers [GET]

This will stream the asset identifiers(uuids) that have changed via a websocket connection.

### Example


```python
import pieces_os_client
from pieces_os_client.models.streamed_identifiers import StreamedIdentifiers
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/stream/identifiers [GET]
        api_response = api_instance.assets_stream_identifiers()
        print("The response of AssetsApi->assets_stream_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->assets_stream_identifiers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **get_assets_stream_transferables**
> Assets get_assets_stream_transferables()

Your GET endpoint

This will emit changes of your assets with your transferables included. This is a websocket connection.

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # Your GET endpoint
        api_response = api_instance.get_assets_stream_transferables()
        print("The response of AssetsApi->get_assets_stream_transferables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->get_assets_stream_transferables: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **stream_assets**
> Assets stream_assets()

/assets/stream [GET]

*** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables

### Example


```python
import pieces_os_client
from pieces_os_client.models.assets import Assets
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
    api_instance = pieces_os_client.AssetsApi(api_client)

    try:
        # /assets/stream [GET]
        api_response = api_instance.stream_assets()
        print("The response of AssetsApi->stream_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsApi->stream_assets: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



