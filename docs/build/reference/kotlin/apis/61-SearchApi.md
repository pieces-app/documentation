---
title: Search API | Kotlin SDK
---

# Search API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**fullTextSearch**](#fulltextsearch) | **GET** /search/full_text | /search/full_text [GET]
[**neuralCodeSearch**](#neuralcodesearch) | **GET** /search/neural_code | /search/neural_code [GET]
[**tagBasedSearch**](#tagbasedsearch) | **POST** /search/tag_based | /search/tag_based [POST]


## **fullTextSearch** {#fulltextsearch}
> SearchedAssets fullTextSearch(query, pseudo)

/search/full_text [GET]

This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the 

### Example {#fulltextsearch-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#fulltextsearch-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#fulltextsearch-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#fulltextsearch-authorization}

No authorization required

### HTTP request headers {#fulltextsearch-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **neuralCodeSearch** {#neuralcodesearch}
> SearchedAssets neuralCodeSearch(query, pseudo)

/search/neural_code [GET]

This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example {#neuralcodesearch-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#neuralcodesearch-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#neuralcodesearch-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#neuralcodesearch-authorization}

No authorization required

### HTTP request headers {#neuralcodesearch-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **tagBasedSearch** {#tagbasedsearch}
> SearchedAssets tagBasedSearch(pseudo, seededAssetTags)

/search/tag_based [POST]

This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example {#tagbasedsearch-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#tagbasedsearch-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]
 **seededAssetTags** | [**SeededAssetTags**](../models/SeededAssetTags)|  | [optional]

### Return type {#tagbasedsearch-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#tagbasedsearch-authorization}

No authorization required

### HTTP request headers {#tagbasedsearch-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

