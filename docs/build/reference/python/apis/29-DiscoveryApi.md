# Discovery API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**discovery_discover_assets**](DiscoveryApi#discovery_discover_assets) | **POST** /discovery/discover/assets
[**discovery_discover_assets_html**](DiscoveryApi#discovery_discover_assets_html) | **POST** /discovery/discover/assets/html
[**discovery_discover_sensitives**](DiscoveryApi#discovery_discover_sensitives) | **POST** /discovery/discover/sensitives
[**discovery_discover_tags_related**](DiscoveryApi#discovery_discover_tags_related) | **POST** /discovery/discover/tags/related


## **discovery_discover_assets** {#discovery_discover_assets}
> DiscoveredAssets discovery_discover_assets(automatic=automatic, seeded_discoverable_assets=seeded_discoverable_assets)

/discovery/discover/assets [POST]

This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.

### Example


```python
import pieces_os_client
from pieces_os_client.models.discovered_assets import DiscoveredAssets
from pieces_os_client.models.seeded_discoverable_assets import SeededDiscoverableAssets
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
    api_instance = pieces_os_client.DiscoveryApi(api_client)
    automatic = True # bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional) (default to True)
    seeded_discoverable_assets = pieces_os_client.SeededDiscoverableAssets() # SeededDiscoverableAssets | The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. (optional)

    try:
        # /discovery/discover/assets [POST]
        api_response = api_instance.discovery_discover_assets(automatic=automatic, seeded_discoverable_assets=seeded_discoverable_assets)
        print("The response of DiscoveryApi->discovery_discover_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_discover_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to True]
 **seeded_discoverable_assets** | [**SeededDiscoverableAssets**](../models/SeededDiscoverableAssets)| The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. | [optional] 

### Return type

[**DiscoveredAssets**](../models/DiscoveredAssets)

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



## **discovery_discover_assets_html** {#discovery_discover_assets_html}
> DiscoveredHtmlWebpages discovery_discover_assets_html(automatic=automatic, seeded_discoverable_html_webpages=seeded_discoverable_html_webpages)

/discovery/discover/assets/html[POST]

This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.

### Example


```python
import pieces_os_client
from pieces_os_client.models.discovered_html_webpages import DiscoveredHtmlWebpages
from pieces_os_client.models.seeded_discoverable_html_webpages import SeededDiscoverableHtmlWebpages
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
    api_instance = pieces_os_client.DiscoveryApi(api_client)
    automatic = True # bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional) (default to True)
    seeded_discoverable_html_webpages = pieces_os_client.SeededDiscoverableHtmlWebpages() # SeededDiscoverableHtmlWebpages |  (optional)

    try:
        # /discovery/discover/assets/html[POST]
        api_response = api_instance.discovery_discover_assets_html(automatic=automatic, seeded_discoverable_html_webpages=seeded_discoverable_html_webpages)
        print("The response of DiscoveryApi->discovery_discover_assets_html:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_discover_assets_html: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to True]
 **seeded_discoverable_html_webpages** | [**SeededDiscoverableHtmlWebpages**](../models/SeededDiscoverableHtmlWebpages)|  | [optional] 

### Return type

[**DiscoveredHtmlWebpages**](../models/DiscoveredHtmlWebpages)

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



## **discovery_discover_sensitives** {#discovery_discover_sensitives}
> DiscoveredSensitives discovery_discover_sensitives(automatic=automatic, seeded_discoverable_sensitives=seeded_discoverable_sensitives)

/discovery/discover/sensitives [POST]

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example


```python
import pieces_os_client
from pieces_os_client.models.discovered_sensitives import DiscoveredSensitives
from pieces_os_client.models.seeded_discoverable_sensitives import SeededDiscoverableSensitives
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
    api_instance = pieces_os_client.DiscoveryApi(api_client)
    automatic = True # bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional) (default to True)
    seeded_discoverable_sensitives = pieces_os_client.SeededDiscoverableSensitives() # SeededDiscoverableSensitives |  (optional)

    try:
        # /discovery/discover/sensitives [POST]
        api_response = api_instance.discovery_discover_sensitives(automatic=automatic, seeded_discoverable_sensitives=seeded_discoverable_sensitives)
        print("The response of DiscoveryApi->discovery_discover_sensitives:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_discover_sensitives: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to True]
 **seeded_discoverable_sensitives** | [**SeededDiscoverableSensitives**](../models/SeededDiscoverableSensitives)|  | [optional] 

### Return type

[**DiscoveredSensitives**](../models/DiscoveredSensitives)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **discovery_discover_tags_related** {#discovery_discover_tags_related}
> DiscoveredRelatedTags discovery_discover_tags_related(automatic=automatic, seeded_discoverable_related_tags=seeded_discoverable_related_tags)

/discovery/discover/tags/related [POST]

This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.

### Example


```python
import pieces_os_client
from pieces_os_client.models.discovered_related_tags import DiscoveredRelatedTags
from pieces_os_client.models.seeded_discoverable_related_tags import SeededDiscoverableRelatedTags
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
    api_instance = pieces_os_client.DiscoveryApi(api_client)
    automatic = True # bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional) (default to True)
    seeded_discoverable_related_tags = pieces_os_client.SeededDiscoverableRelatedTags() # SeededDiscoverableRelatedTags |  (optional)

    try:
        # /discovery/discover/tags/related [POST]
        api_response = api_instance.discovery_discover_tags_related(automatic=automatic, seeded_discoverable_related_tags=seeded_discoverable_related_tags)
        print("The response of DiscoveryApi->discovery_discover_tags_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscoveryApi->discovery_discover_tags_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to True]
 **seeded_discoverable_related_tags** | [**SeededDiscoverableRelatedTags**](../models/SeededDiscoverableRelatedTags)|  | [optional] 

### Return type

[**DiscoveredRelatedTags**](../models/DiscoveredRelatedTags)

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



