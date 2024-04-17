---
title: Asset API | Python SDK
---

# Asset API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_associate_tag**](AssetApi#asset_associate_tag) | **POST** /asset/\{asset\}/tags/associate/\{tag\} | /asset/\{asset\}/tags/associate/\{tag\} [POST]
[**asset_associate_website**](AssetApi#asset_associate_website) | **POST** /asset/\{asset\}/websites/associate/\{website\} | /asset/\{asset\}/websites/associate/\{website\} [POST]
[**asset_associate_workstream_summary**](AssetApi#asset_associate_workstream_summary) | **POST** /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} | /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**asset_disassociate_tag**](AssetApi#asset_disassociate_tag) | **POST** /asset/\{asset\}/tags/disassociate/\{tag\} | /asset/\{asset\}/tags/disassociate/\{tag\} [POST]
[**asset_disassociate_website**](AssetApi#asset_disassociate_website) | **POST** /asset/\{asset\}/websites/disassociate/\{website\} | /asset/\{asset\}/websites/disassociate/\{website\} [POST]
[**asset_disassociate_workstream_summary**](AssetApi#asset_disassociate_workstream_summary) | **POST** /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} | /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**asset_formats**](AssetApi#asset_formats) | **GET** /asset/\{asset\}/formats | /asset/\{asset\}/formats [GET] Scoped To Asset
[**asset_reclassify**](AssetApi#asset_reclassify) | **POST** /asset/reclassify | /asset/reclassify [POST]
[**asset_scores_increment**](AssetApi#asset_scores_increment) | **POST** /asset/\{asset\}/scores/increment | /asset/\{asset\}/scores/increment [POST]
[**asset_snapshot**](AssetApi#asset_snapshot) | **GET** /asset/\{asset\} | /asset/\{asset\} [GET] Scoped To Asset
[**asset_snapshot_post**](AssetApi#asset_snapshot_post) | **POST** /asset/\{asset\} | /asset/\{asset\} [POST] Scoped to an Asset
[**asset_specific_asset_activities**](AssetApi#asset_specific_asset_activities) | **GET** /asset/\{asset\}/activities | /asset/\{asset\}/activities [GET]
[**asset_specific_asset_conversations**](AssetApi#asset_specific_asset_conversations) | **GET** /asset/\{asset\}/conversations | /asset/\{asset\}/conversations [GET]
[**asset_specific_asset_export**](AssetApi#asset_specific_asset_export) | **GET** /asset/\{asset\}/export | /asset/\{asset\}/export [GET]
[**asset_update**](AssetApi#asset_update) | **POST** /asset/update | /asset/update [POST] Scoped to Asset


## **asset_associate_tag** {#asset_associate_tag}
> asset_associate_tag(asset, tag)

/asset/\{asset\}/tags/associate/\{tag\} [POST]

Associates a tag with a specified asset. It performs the same action as the tag equivalent.

### Example {#asset_associate_tag-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    tag = 'tag_example' # str | tag id

    try:
        # /asset/\{asset\}/tags/associate/\{tag\} [POST]
        api_instance.asset_associate_tag(asset, tag)
    except Exception as e:
        print("Exception when calling AssetApi->asset_associate_tag: %s\n" % e)
```



### Parameters {#asset_associate_tag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **tag** | **str**| tag id | 

### Return type {#asset_associate_tag-return-type}

void (empty response body)

### Authorization {#asset_associate_tag-authorization}

No authorization required

### HTTP request headers {#asset_associate_tag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_associate_tag-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_associate_website** {#asset_associate_website}
> asset_associate_website(asset, website)

/asset/\{asset\}/websites/associate/\{website\} [POST]

Associates a website with an asset. It performs the same action as its website equivalent.

### Example {#asset_associate_website-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    website = 'website_example' # str | website id

    try:
        # /asset/\{asset\}/websites/associate/\{website\} [POST]
        api_instance.asset_associate_website(asset, website)
    except Exception as e:
        print("Exception when calling AssetApi->asset_associate_website: %s\n" % e)
```



### Parameters {#asset_associate_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **website** | **str**| website id | 

### Return type {#asset_associate_website-return-type}

void (empty response body)

### Authorization {#asset_associate_website-authorization}

No authorization required

### HTTP request headers {#asset_associate_website-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_associate_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_associate_workstream_summary** {#asset_associate_workstream_summary}
> asset_associate_workstream_summary(asset, workstream_summary)

/asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#asset_associate_workstream_summary-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]
        api_instance.asset_associate_workstream_summary(asset, workstream_summary)
    except Exception as e:
        print("Exception when calling AssetApi->asset_associate_workstream_summary: %s\n" % e)
```



### Parameters {#asset_associate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#asset_associate_workstream_summary-return-type}

void (empty response body)

### Authorization {#asset_associate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#asset_associate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_associate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_disassociate_tag** {#asset_disassociate_tag}
> asset_disassociate_tag(tag, asset)

/asset/\{asset\}/tags/disassociate/\{tag\} [POST]

Disassociates a tag from an asset. It performs the same action as the tag equivalent.

### Example {#asset_disassociate_tag-example}


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
    api_instance = Asset API(api_client)
    tag = 'tag_example' # str | tag id
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /asset/\{asset\}/tags/disassociate/\{tag\} [POST]
        api_instance.asset_disassociate_tag(tag, asset)
    except Exception as e:
        print("Exception when calling AssetApi->asset_disassociate_tag: %s\n" % e)
```



### Parameters {#asset_disassociate_tag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#asset_disassociate_tag-return-type}

void (empty response body)

### Authorization {#asset_disassociate_tag-authorization}

No authorization required

### HTTP request headers {#asset_disassociate_tag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_disassociate_tag-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_disassociate_website** {#asset_disassociate_website}
> asset_disassociate_website(website, asset)

/asset/\{asset\}/websites/disassociate/\{website\} [POST]

Disassociates a website from an asset. It performs the same action as the website equivalent.

### Example {#asset_disassociate_website-example}


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
    api_instance = Asset API(api_client)
    website = 'website_example' # str | website id
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /asset/\{asset\}/websites/disassociate/\{website\} [POST]
        api_instance.asset_disassociate_website(website, asset)
    except Exception as e:
        print("Exception when calling AssetApi->asset_disassociate_website: %s\n" % e)
```



### Parameters {#asset_disassociate_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#asset_disassociate_website-return-type}

void (empty response body)

### Authorization {#asset_disassociate_website-authorization}

No authorization required

### HTTP request headers {#asset_disassociate_website-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_disassociate_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_disassociate_workstream_summary** {#asset_disassociate_workstream_summary}
> asset_disassociate_workstream_summary(asset, workstream_summary)

/asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#asset_disassociate_workstream_summary-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
        api_instance.asset_disassociate_workstream_summary(asset, workstream_summary)
    except Exception as e:
        print("Exception when calling AssetApi->asset_disassociate_workstream_summary: %s\n" % e)
```



### Parameters {#asset_disassociate_workstream_summary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#asset_disassociate_workstream_summary-return-type}

void (empty response body)

### Authorization {#asset_disassociate_workstream_summary-authorization}

No authorization required

### HTTP request headers {#asset_disassociate_workstream_summary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#asset_disassociate_workstream_summary-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_formats** {#asset_formats}
> Formats asset_formats(asset, transferables=transferables)

/asset/\{asset\}/formats [GET] Scoped To Asset

Retrieves the formats available for a specified asset.

### Example {#asset_formats-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /asset/\{asset\}/formats [GET] Scoped To Asset
        api_response = api_instance.asset_formats(asset, transferables=transferables)
        print("The response of AssetApi->asset_formats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_formats: %s\n" % e)
```



### Parameters {#asset_formats-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#asset_formats-return-type}

[**Formats**](../models/Formats)

### Authorization {#asset_formats-authorization}

No authorization required

### HTTP request headers {#asset_formats-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details {#asset_formats-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **asset_reclassify** {#asset_reclassify}
> Asset asset_reclassify(transferables=transferables, asset_reclassification=asset_reclassification)

/asset/reclassify [POST]

Retrieves the formats available for a specified asset.

### Example {#asset_reclassify-example}


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
from pieces_os_client.models.asset_reclassification import AssetReclassification
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
    api_instance = Asset API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    asset_reclassification = pieces_os_client.AssetReclassification() # AssetReclassification | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. (optional)

    try:
        # /asset/reclassify [POST]
        api_response = api_instance.asset_reclassify(transferables=transferables, asset_reclassification=asset_reclassification)
        print("The response of AssetApi->asset_reclassify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_reclassify: %s\n" % e)
```



### Parameters {#asset_reclassify-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **asset_reclassification** | [**AssetReclassification**](../models/AssetReclassification)| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. | [optional] 

### Return type {#asset_reclassify-return-type}

[**Asset**](../models/Asset)

### Authorization {#asset_reclassify-authorization}

No authorization required

### HTTP request headers {#asset_reclassify-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#asset_reclassify-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **asset_scores_increment** {#asset_scores_increment}
> asset_scores_increment(asset, seeded_score_increment=seeded_score_increment)

/asset/\{asset\}/scores/increment [POST]

Increments the scores associated with the specified asset based on the provided SeededScoreIncrement data in the request body.

### Example {#asset_scores_increment-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # /asset/\{asset\}/scores/increment [POST]
        api_instance.asset_scores_increment(asset, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling AssetApi->asset_scores_increment: %s\n" % e)
```



### Parameters {#asset_scores_increment-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type {#asset_scores_increment-return-type}

void (empty response body)

### Authorization {#asset_scores_increment-authorization}

No authorization required

### HTTP request headers {#asset_scores_increment-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details {#asset_scores_increment-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **asset_snapshot** {#asset_snapshot}
> Asset asset_snapshot(asset, transferables=transferables)

/asset/\{asset\} [GET] Scoped To Asset

Retrieves the snapshot of a specific asset

### Example {#asset_snapshot-example}


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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /asset/\{asset\} [GET] Scoped To Asset
        api_response = api_instance.asset_snapshot(asset, transferables=transferables)
        print("The response of AssetApi->asset_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_snapshot: %s\n" % e)
```



### Parameters {#asset_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#asset_snapshot-return-type}

[**Asset**](../models/Asset)

### Authorization {#asset_snapshot-authorization}

No authorization required

### HTTP request headers {#asset_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#asset_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Asset no longer exists and is Gone. |  -  |

## **asset_snapshot_post** {#asset_snapshot_post}
> Asset asset_snapshot_post(asset, transferables=transferables, seeded_accessor=seeded_accessor)

/asset/\{asset\} [POST] Scoped to an Asset

Retrieves a snapshot of a specific asset, along with the user requesting the snapshot.

### Example {#asset_snapshot_post-example}


```python
import pieces_os_client
from pieces_os_client.models.asset import Asset
from pieces_os_client.models.seeded_accessor import SeededAccessor
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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_accessor = pieces_os_client.SeededAccessor() # SeededAccessor |  (optional)

    try:
        # /asset/\{asset\} [POST] Scoped to an Asset
        api_response = api_instance.asset_snapshot_post(asset, transferables=transferables, seeded_accessor=seeded_accessor)
        print("The response of AssetApi->asset_snapshot_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_snapshot_post: %s\n" % e)
```



### Parameters {#asset_snapshot_post-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_accessor** | [**SeededAccessor**](../models/SeededAccessor)|  | [optional] 

### Return type {#asset_snapshot_post-return-type}

[**Asset**](../models/Asset)

### Authorization {#asset_snapshot_post-authorization}

No authorization required

### HTTP request headers {#asset_snapshot_post-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#asset_snapshot_post-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

## **asset_specific_asset_activities** {#asset_specific_asset_activities}
> Activities asset_specific_asset_activities(asset, transferables=transferables)

/asset/\{asset\}/activities [GET]

Retrieves activity events specific to the given asset.

### Example {#asset_specific_asset_activities-example}


```python
import pieces_os_client
from pieces_os_client.models.activities import Activities
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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /asset/\{asset\}/activities [GET]
        api_response = api_instance.asset_specific_asset_activities(asset, transferables=transferables)
        print("The response of AssetApi->asset_specific_asset_activities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_specific_asset_activities: %s\n" % e)
```



### Parameters {#asset_specific_asset_activities-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#asset_specific_asset_activities-return-type}

[**Activities**](../models/Activities)

### Authorization {#asset_specific_asset_activities-authorization}

No authorization required

### HTTP request headers {#asset_specific_asset_activities-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#asset_specific_asset_activities-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **asset_specific_asset_conversations** {#asset_specific_asset_conversations}
> Conversations asset_specific_asset_conversations(asset, transferables=transferables)

/asset/\{asset\}/conversations [GET]

Retrieves conversations specific to the given asset.

### Example {#asset_specific_asset_conversations-example}


```python
import pieces_os_client
from pieces_os_client.models.conversations import Conversations
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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /asset/\{asset\}/conversations [GET]
        api_response = api_instance.asset_specific_asset_conversations(asset, transferables=transferables)
        print("The response of AssetApi->asset_specific_asset_conversations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_specific_asset_conversations: %s\n" % e)
```



### Parameters {#asset_specific_asset_conversations-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#asset_specific_asset_conversations-return-type}

[**Conversations**](../models/Conversations)

### Authorization {#asset_specific_asset_conversations-authorization}

No authorization required

### HTTP request headers {#asset_specific_asset_conversations-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#asset_specific_asset_conversations-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **asset_specific_asset_export** {#asset_specific_asset_export}
> ExportedAsset asset_specific_asset_export(asset, export_type)

/asset/\{asset\}/export [GET]

Retrieves an export version of the specified asset.

### Example {#asset_specific_asset_export-example}


```python
import pieces_os_client
from pieces_os_client.models.exported_asset import ExportedAsset
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
    api_instance = Asset API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    export_type = 'export_type_example' # str | This specifies the type of export the user wants.

    try:
        # /asset/\{asset\}/export [GET]
        api_response = api_instance.asset_specific_asset_export(asset, export_type)
        print("The response of AssetApi->asset_specific_asset_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_specific_asset_export: %s\n" % e)
```



### Parameters {#asset_specific_asset_export-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **export_type** | **str**| This specifies the type of export the user wants. | 

### Return type {#asset_specific_asset_export-return-type}

[**ExportedAsset**](../models/ExportedAsset)

### Authorization {#asset_specific_asset_export-authorization}

No authorization required

### HTTP request headers {#asset_specific_asset_export-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#asset_specific_asset_export-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **asset_update** {#asset_update}
> Asset asset_update(transferables=transferables, asset=asset)

/asset/update [POST] Scoped to Asset

Allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

### Example {#asset_update-example}


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
    api_instance = Asset API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    asset = pieces_os_client.Asset() # Asset | This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. (optional)

    try:
        # /asset/update [POST] Scoped to Asset
        api_response = api_instance.asset_update(transferables=transferables, asset=asset)
        print("The response of AssetApi->asset_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetApi->asset_update: %s\n" % e)
```



### Parameters {#asset_update-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **asset** | [**Asset**](../models/Asset)| This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. | [optional] 

### Return type {#asset_update-return-type}

[**Asset**](../models/Asset)

### Authorization {#asset_update-authorization}

No authorization required

### HTTP request headers {#asset_update-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details {#asset_update-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

