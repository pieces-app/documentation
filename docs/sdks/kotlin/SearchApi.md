# SearchApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fullTextSearch**](SearchApi#fullTextSearch) | **GET** /search/full_text | /search/full_text [GET]
[**neuralCodeSearch**](SearchApi#neuralCodeSearch) | **GET** /search/neural_code | /search/neural_code [GET]
[**tagBasedSearch**](SearchApi#tagBasedSearch) | **POST** /search/tag_based | /search/tag_based [POST]


<a id="fullTextSearch"></a>
## **fullTextSearch**
> SearchedAssets fullTextSearch(query, pseudo)

/search/full_text [GET]

This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SearchApi()
val query : kotlin.String = query_example // kotlin.String | This is a string that you can use to search your assets.
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : SearchedAssets = apiInstance.fullTextSearch(query, pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SearchApi#fullTextSearch")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SearchApi#fullTextSearch")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type

[**SearchedAssets**](SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="neuralCodeSearch"></a>
## **neuralCodeSearch**
> SearchedAssets neuralCodeSearch(query, pseudo)

/search/neural_code [GET]

This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SearchApi()
val query : kotlin.String = query_example // kotlin.String | This is a string that you can use to search your assets.
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : SearchedAssets = apiInstance.neuralCodeSearch(query, pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SearchApi#neuralCodeSearch")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SearchApi#neuralCodeSearch")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type

[**SearchedAssets**](SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagBasedSearch"></a>
## **tagBasedSearch**
> SearchedAssets tagBasedSearch(pseudo, seededAssetTags)

/search/tag_based [POST]

This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SearchApi()
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
val seededAssetTags : SeededAssetTags =  // SeededAssetTags | 
try {
    val result : SearchedAssets = apiInstance.tagBasedSearch(pseudo, seededAssetTags)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SearchApi#tagBasedSearch")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SearchApi#tagBasedSearch")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]
 **seededAssetTags** | [**SeededAssetTags**](SeededAssetTags)|  | [optional]

### Return type

[**SearchedAssets**](SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

