# pieces_os_client.TagApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tag_associate_asset**](TagApi#tag_associate_asset) | **POST** /tag/{tag}/assets/associate/{asset} | /tag/{tag}/assets/associate/{asset} [POST]
[**tag_associate_person**](TagApi#tag_associate_person) | **POST** /tag/{tag}/persons/associate/{person} | /tag/{tag}/persons/associate/{person} [POST]
[**tag_disassociate_asset**](TagApi#tag_disassociate_asset) | **POST** /tag/{tag}/assets/disassociate/{asset} | /tag/{tag}/assets/disassociate/{asset} [POST]
[**tag_disassociate_person**](TagApi#tag_disassociate_person) | **POST** /tag/{tag}/persons/disassociate/{person} | /tag/{tag}/persons/disassociate/{person} [POST]
[**tag_scores_increment**](TagApi#tag_scores_increment) | **POST** /tag/{tag}/scores/increment | &#39;/tag/{tag}/scores/increment&#39; [POST]
[**tag_update**](TagApi#tag_update) | **POST** /tag/update | /tag/update [POST]
[**tags_specific_tag_snapshot**](TagApi#tags_specific_tag_snapshot) | **GET** /tag/{tag} | /tag/{tag} [GET]


# **tag_associate_asset**
> tag_associate_asset(asset, tag)

/tag/{tag}/assets/associate/{asset} [POST]

This will associate a tag with a asset.

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
    api_instance = pieces_os_client.TagApi(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.
    tag = 'tag_example' # str | tag id

    try:
        # /tag/{tag}/assets/associate/{asset} [POST]
        api_instance.tag_associate_asset(asset, tag)
    except Exception as e:
        print("Exception when calling TagApi->tag_associate_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 
 **tag** | **str**| tag id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tag_associate_person**
> tag_associate_person(tag, person)

/tag/{tag}/persons/associate/{person} [POST]

This will associate a tag with a person.

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
    api_instance = pieces_os_client.TagApi(api_client)
    tag = 'tag_example' # str | tag id
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /tag/{tag}/persons/associate/{person} [POST]
        api_instance.tag_associate_person(tag, person)
    except Exception as e:
        print("Exception when calling TagApi->tag_associate_person: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tag_disassociate_asset**
> tag_disassociate_asset(tag, asset)

/tag/{tag}/assets/disassociate/{asset} [POST]

This will enable us to dissassociate a tag from a asset.

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
    api_instance = pieces_os_client.TagApi(api_client)
    tag = 'tag_example' # str | tag id
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /tag/{tag}/assets/disassociate/{asset} [POST]
        api_instance.tag_disassociate_asset(tag, asset)
    except Exception as e:
        print("Exception when calling TagApi->tag_disassociate_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tag_disassociate_person**
> tag_disassociate_person(tag, person)

/tag/{tag}/persons/disassociate/{person} [POST]

This will enable us to dissassociate a tag from a person.

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
    api_instance = pieces_os_client.TagApi(api_client)
    tag = 'tag_example' # str | tag id
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /tag/{tag}/persons/disassociate/{person} [POST]
        api_instance.tag_disassociate_person(tag, person)
    except Exception as e:
        print("Exception when calling TagApi->tag_disassociate_person: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **person** | **str**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tag_scores_increment**
> tag_scores_increment(tag, seeded_score_increment=seeded_score_increment)

'/tag/{tag}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example


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
    api_instance = pieces_os_client.TagApi(api_client)
    tag = 'tag_example' # str | tag id
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # '/tag/{tag}/scores/increment' [POST]
        api_instance.tag_scores_increment(tag, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling TagApi->tag_scores_increment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **seeded_score_increment** | [**SeededScoreIncrement**](SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tag_update**
> Tag tag_update(transferables=transferables, tag=tag)

/tag/update [POST]

This will update a specific tag.

### Example


```python
import pieces_os_client
from pieces_os_client.models.tag import Tag
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
    api_instance = pieces_os_client.TagApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    tag = pieces_os_client.Tag() # Tag |  (optional)

    try:
        # /tag/update [POST]
        api_response = api_instance.tag_update(transferables=transferables, tag=tag)
        print("The response of TagApi->tag_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagApi->tag_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **tag** | [**Tag**](Tag)|  | [optional] 

### Return type

[**Tag**](Tag)

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

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **tags_specific_tag_snapshot**
> Tag tags_specific_tag_snapshot(tag, transferables=transferables)

/tag/{tag} [GET]

This will get a specific tag.

### Example


```python
import pieces_os_client
from pieces_os_client.models.tag import Tag
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
    api_instance = pieces_os_client.TagApi(api_client)
    tag = 'tag_example' # str | tag id
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /tag/{tag} [GET]
        api_response = api_instance.tags_specific_tag_snapshot(tag, transferables=transferables)
        print("The response of TagApi->tags_specific_tag_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagApi->tags_specific_tag_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**| tag id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Tag**](Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Tag was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

