---
title: core_openapi.api.DiscoveryApi | Dart SDK
---

# core_openapi.api.DiscoveryApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoveryDiscoverAssets**](DiscoveryApi.md#discoverydiscoverassets) | **POST** /discovery/discover/assets | /discovery/discover/assets [POST]
[**discoveryDiscoverAssetsHtml**](DiscoveryApi.md#discoverydiscoverassetshtml) | **POST** /discovery/discover/assets/html | /discovery/discover/assets/html[POST]
[**discoveryDiscoverSensitives**](DiscoveryApi.md#discoverydiscoversensitives) | **POST** /discovery/discover/sensitives | /discovery/discover/sensitives [POST]
[**discoveryDiscoverTagsRelated**](DiscoveryApi.md#discoverydiscovertagsrelated) | **POST** /discovery/discover/tags/related | /discovery/discover/tags/related [POST]


## **discoveryDiscoverAssets** {#discoverydiscoverassets}
> DiscoveredAssets discoveryDiscoverAssets(automatic, seededDiscoverableAssets)

/discovery/discover/assets [POST]

This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DiscoveryApi();
final automatic = true; // bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
final seededDiscoverableAssets = SeededDiscoverableAssets(); // SeededDiscoverableAssets | The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files.

try {
    final result = api_instance.discoveryDiscoverAssets(automatic, seededDiscoverableAssets);
    print(result);
} catch (e) {
    print('Exception when calling DiscoveryApi->discoveryDiscoverAssets: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableAssets** | [**SeededDiscoverableAssets**](SeededDiscoverableAssets.md)| The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. | [optional] 

### Return type

[**DiscoveredAssets**](DiscoveredAssets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **discoveryDiscoverAssetsHtml** {#discoverydiscoverassetshtml}
> DiscoveredHtmlWebpages discoveryDiscoverAssetsHtml(automatic, seededDiscoverableHtmlWebpages)

/discovery/discover/assets/html[POST]

This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DiscoveryApi();
final automatic = true; // bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
final seededDiscoverableHtmlWebpages = SeededDiscoverableHtmlWebpages(); // SeededDiscoverableHtmlWebpages | 

try {
    final result = api_instance.discoveryDiscoverAssetsHtml(automatic, seededDiscoverableHtmlWebpages);
    print(result);
} catch (e) {
    print('Exception when calling DiscoveryApi->discoveryDiscoverAssetsHtml: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableHtmlWebpages** | [**SeededDiscoverableHtmlWebpages**](SeededDiscoverableHtmlWebpages.md)|  | [optional] 

### Return type

[**DiscoveredHtmlWebpages**](DiscoveredHtmlWebpages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **discoveryDiscoverSensitives** {#discoverydiscoversensitives}
> DiscoveredSensitives discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)

/discovery/discover/sensitives [POST]

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DiscoveryApi();
final automatic = true; // bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
final seededDiscoverableSensitives = SeededDiscoverableSensitives(); // SeededDiscoverableSensitives | 

try {
    final result = api_instance.discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives);
    print(result);
} catch (e) {
    print('Exception when calling DiscoveryApi->discoveryDiscoverSensitives: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableSensitives** | [**SeededDiscoverableSensitives**](SeededDiscoverableSensitives.md)|  | [optional] 

### Return type

[**DiscoveredSensitives**](DiscoveredSensitives.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **discoveryDiscoverTagsRelated** {#discoverydiscovertagsrelated}
> DiscoveredRelatedTags discoveryDiscoverTagsRelated(automatic, seededDiscoverableRelatedTags)

/discovery/discover/tags/related [POST]

This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = DiscoveryApi();
final automatic = true; // bool | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
final seededDiscoverableRelatedTags = SeededDiscoverableRelatedTags(); // SeededDiscoverableRelatedTags | 

try {
    final result = api_instance.discoveryDiscoverTagsRelated(automatic, seededDiscoverableRelatedTags);
    print(result);
} catch (e) {
    print('Exception when calling DiscoveryApi->discoveryDiscoverTagsRelated: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableRelatedTags** | [**SeededDiscoverableRelatedTags**](SeededDiscoverableRelatedTags.md)|  | [optional] 

### Return type

[**DiscoveredRelatedTags**](DiscoveredRelatedTags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

