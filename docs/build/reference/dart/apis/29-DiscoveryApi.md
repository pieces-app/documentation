# Discovery API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**discoveryDiscoverAssets**](DiscoveryApi#discoverydiscoverassets) | **POST** /discovery/discover/assets
[**discoveryDiscoverAssetsHtml**](DiscoveryApi#discoverydiscoverassetshtml) | **POST** /discovery/discover/assets/html
[**discoveryDiscoverSensitives**](DiscoveryApi#discoverydiscoversensitives) | **POST** /discovery/discover/sensitives
[**discoveryDiscoverTagsRelated**](DiscoveryApi#discoverydiscovertagsrelated) | **POST** /discovery/discover/tags/related


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
 **seededDiscoverableAssets** | [**SeededDiscoverableAssets**](../models/SeededDiscoverableAssets)| The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. | [optional] 

### Return type

[**DiscoveredAssets**](../models/DiscoveredAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



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
 **seededDiscoverableHtmlWebpages** | [**SeededDiscoverableHtmlWebpages**](../models/SeededDiscoverableHtmlWebpages)|  | [optional] 

### Return type

[**DiscoveredHtmlWebpages**](../models/DiscoveredHtmlWebpages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



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
 **seededDiscoverableSensitives** | [**SeededDiscoverableSensitives**](../models/SeededDiscoverableSensitives)|  | [optional] 

### Return type

[**DiscoveredSensitives**](../models/DiscoveredSensitives)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



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
 **seededDiscoverableRelatedTags** | [**SeededDiscoverableRelatedTags**](../models/SeededDiscoverableRelatedTags)|  | [optional] 

### Return type

[**DiscoveredRelatedTags**](../models/DiscoveredRelatedTags)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



