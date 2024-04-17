---
title: Discovery API | Dart SDK
---

# Discovery API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoveryDiscoverAssets**](DiscoveryApi#discoverydiscoverassets) | **POST** /discovery/discover/assets | /discovery/discover/assets [POST]
[**discoveryDiscoverAssetsHtml**](DiscoveryApi#discoverydiscoverassetshtml) | **POST** /discovery/discover/assets/html | /discovery/discover/assets/html[POST]
[**discoveryDiscoverSensitives**](DiscoveryApi#discoverydiscoversensitives) | **POST** /discovery/discover/sensitives | /discovery/discover/sensitives [POST]
[**discoveryDiscoverTagsRelated**](DiscoveryApi#discoverydiscovertagsrelated) | **POST** /discovery/discover/tags/related | /discovery/discover/tags/related [POST]


## **discoveryDiscoverAssets** {#discoverydiscoverassets}
> DiscoveredAssets discoveryDiscoverAssets(automatic, seededDiscoverableAssets)

/discovery/discover/assets [POST]

This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.

### Example {#discoverydiscoverassets-example}
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

### Parameters {#discoverydiscoverassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool** | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableAssets** | [**SeededDiscoverableAssets**](../models/SeededDiscoverableAssets) | The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. | [optional] 

### Return type {#discoverydiscoverassets-return-type}

[**DiscoveredAssets**](../models/DiscoveredAssets)

### Authorization {#discoverydiscoverassets-authorization}

No authorization required

### HTTP request headers {#discoverydiscoverassets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **discoveryDiscoverAssetsHtml** {#discoverydiscoverassetshtml}
> DiscoveredHtmlWebpages discoveryDiscoverAssetsHtml(automatic, seededDiscoverableHtmlWebpages)

/discovery/discover/assets/html[POST]

This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.

### Example {#discoverydiscoverassetshtml-example}
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

### Parameters {#discoverydiscoverassetshtml-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool** | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableHtmlWebpages** | [**SeededDiscoverableHtmlWebpages**](../models/SeededDiscoverableHtmlWebpages) |  | [optional] 

### Return type {#discoverydiscoverassetshtml-return-type}

[**DiscoveredHtmlWebpages**](../models/DiscoveredHtmlWebpages)

### Authorization {#discoverydiscoverassetshtml-authorization}

No authorization required

### HTTP request headers {#discoverydiscoverassetshtml-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **discoveryDiscoverSensitives** {#discoverydiscoversensitives}
> DiscoveredSensitives discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)

/discovery/discover/sensitives [POST]

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example {#discoverydiscoversensitives-example}
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

### Parameters {#discoverydiscoversensitives-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool** | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableSensitives** | [**SeededDiscoverableSensitives**](../models/SeededDiscoverableSensitives) |  | [optional] 

### Return type {#discoverydiscoversensitives-return-type}

[**DiscoveredSensitives**](../models/DiscoveredSensitives)

### Authorization {#discoverydiscoversensitives-authorization}

No authorization required

### HTTP request headers {#discoverydiscoversensitives-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **discoveryDiscoverTagsRelated** {#discoverydiscovertagsrelated}
> DiscoveredRelatedTags discoveryDiscoverTagsRelated(automatic, seededDiscoverableRelatedTags)

/discovery/discover/tags/related [POST]

This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.

### Example {#discoverydiscovertagsrelated-example}
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

### Parameters {#discoverydiscovertagsrelated-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **bool** | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableRelatedTags** | [**SeededDiscoverableRelatedTags**](../models/SeededDiscoverableRelatedTags) |  | [optional] 

### Return type {#discoverydiscovertagsrelated-return-type}

[**DiscoveredRelatedTags**](../models/DiscoveredRelatedTags)

### Authorization {#discoverydiscovertagsrelated-authorization}

No authorization required

### HTTP request headers {#discoverydiscovertagsrelated-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

