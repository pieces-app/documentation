# Search API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fullTextSearch**](SearchApi#fulltextsearch) | **GET** /search/full_text | /search/full_text [GET]
[**neuralCodeSearch**](SearchApi#neuralcodesearch) | **GET** /search/neural_code | /search/neural_code [GET]
[**tagBasedSearch**](SearchApi#tagbasedsearch) | **POST** /search/tag_based | /search/tag_based [POST]


## **fullTextSearch**
> SearchedAssets fullTextSearch()

This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the 

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.SearchApi(configuration);

let body:.SearchApiFullTextSearchRequest = {
    // string | This is a string that you can use to search your assets. (optional)
    query: query_example,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.fullTextSearch(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | This is a string that you can use to search your assets. | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

**SearchedAssets**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **neuralCodeSearch**
> SearchedAssets neuralCodeSearch()

This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.SearchApi(configuration);

let body:.SearchApiNeuralCodeSearchRequest = {
    // string | This is a string that you can use to search your assets. (optional)
    query: query_example,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.neuralCodeSearch(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | This is a string that you can use to search your assets. | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

**SearchedAssets**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **tagBasedSearch**
> SearchedAssets tagBasedSearch()

This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.SearchApi(configuration);

let body:.SearchApiTagBasedSearchRequest = {
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
    // SeededAssetTags (optional)
    seededAssetTags: ,
};

apiInstance.tagBasedSearch(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetTags** | **SeededAssetTags**|  |
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

**SearchedAssets**

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

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


