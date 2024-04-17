---
title: Search API | Dart SDK
---

# Search API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fullTextSearch**](SearchApi#fulltextsearch) | **GET** /search/full_text | /search/full_text [GET]
[**neuralCodeSearch**](SearchApi#neuralcodesearch) | **GET** /search/neural_code | /search/neural_code [GET]
[**tagBasedSearch**](SearchApi#tagbasedsearch) | **POST** /search/tag_based | /search/tag_based [POST]


## **fullTextSearch** {#fulltextsearch}
> SearchedAssets fullTextSearch(query, pseudo)

/search/full_text [GET]

This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the 

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SearchApi();
final query = query_example; // String | This is a string that you can use to search your assets.
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.

try {
    final result = api_instance.fullTextSearch(query, pseudo);
    print(result);
} catch (e) {
    print('Exception when calling SearchApi->fullTextSearch: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| This is a string that you can use to search your assets. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain



## **neuralCodeSearch** {#neuralcodesearch}
> SearchedAssets neuralCodeSearch(query, pseudo)

/search/neural_code [GET]

This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SearchApi();
final query = query_example; // String | This is a string that you can use to search your assets.
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.

try {
    final result = api_instance.neuralCodeSearch(query, pseudo);
    print(result);
} catch (e) {
    print('Exception when calling SearchApi->neuralCodeSearch: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| This is a string that you can use to search your assets. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain



## **tagBasedSearch** {#tagbasedsearch}
> SearchedAssets tagBasedSearch(pseudo, seededAssetTags)

/search/tag_based [POST]

This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = SearchApi();
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
final seededAssetTags = SeededAssetTags(); // SeededAssetTags | 

try {
    final result = api_instance.tagBasedSearch(pseudo, seededAssetTags);
    print(result);
} catch (e) {
    print('Exception when calling SearchApi->tagBasedSearch: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **seededAssetTags** | [**SeededAssetTags**](../models/SeededAssetTags)|  | [optional] 

### Return type

[**SearchedAssets**](../models/SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain



