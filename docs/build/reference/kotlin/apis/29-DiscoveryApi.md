---
title: Discovery API | Kotlin SDK
---

# Discovery API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoveryDiscoverAssets**](#discoverydiscoverassets) | **POST** /discovery/discover/assets | /discovery/discover/assets [POST]
[**discoveryDiscoverAssetsHtml**](#discoverydiscoverassetshtml) | **POST** /discovery/discover/assets/html | /discovery/discover/assets/html[POST]
[**discoveryDiscoverSensitives**](#discoverydiscoversensitives) | **POST** /discovery/discover/sensitives | /discovery/discover/sensitives [POST]
[**discoveryDiscoverTagsRelated**](#discoverydiscovertagsrelated) | **POST** /discovery/discover/tags/related | /discovery/discover/tags/related [POST]


## **discoveryDiscoverAssets** {#discoverydiscoverassets}
> DiscoveredAssets discoveryDiscoverAssets(automatic, seededDiscoverableAssets)

/discovery/discover/assets [POST]

This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \&quot;snippets\&quot; or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse &amp;&amp; snippitize and then run through the clustering.

### Example {#discoverydiscoverassets-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DiscoveryApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededDiscoverableAssets : SeededDiscoverableAssets =  // SeededDiscoverableAssets | The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files.
try {
    val result : DiscoveredAssets = apiInstance.discoveryDiscoverAssets(automatic, seededDiscoverableAssets)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DiscoveryApi#discoveryDiscoverAssets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DiscoveryApi#discoveryDiscoverAssets")
    e.printStackTrace()
}
```

### Parameters {#discoverydiscoverassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableAssets** | [**SeededDiscoverableAssets**](../models/SeededDiscoverableAssets)| The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. | [optional]

### Return type {#discoverydiscoverassets-return-type}

[**DiscoveredAssets**](../models/DiscoveredAssets)

### Authorization {#discoverydiscoverassets-authorization}

No authorization required

### HTTP request headers {#discoverydiscoverassets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **discoveryDiscoverAssetsHtml** {#discoverydiscoverassetshtml}
> DiscoveredHtmlWebpages discoveryDiscoverAssetsHtml(automatic, seededDiscoverableHtmlWebpages)

/discovery/discover/assets/html[POST]

This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.

### Example {#discoverydiscoverassetshtml-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DiscoveryApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededDiscoverableHtmlWebpages : SeededDiscoverableHtmlWebpages =  // SeededDiscoverableHtmlWebpages | 
try {
    val result : DiscoveredHtmlWebpages = apiInstance.discoveryDiscoverAssetsHtml(automatic, seededDiscoverableHtmlWebpages)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DiscoveryApi#discoveryDiscoverAssetsHtml")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DiscoveryApi#discoveryDiscoverAssetsHtml")
    e.printStackTrace()
}
```

### Parameters {#discoverydiscoverassetshtml-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableHtmlWebpages** | [**SeededDiscoverableHtmlWebpages**](../models/SeededDiscoverableHtmlWebpages)|  | [optional]

### Return type {#discoverydiscoverassetshtml-return-type}

[**DiscoveredHtmlWebpages**](../models/DiscoveredHtmlWebpages)

### Authorization {#discoverydiscoverassetshtml-authorization}

No authorization required

### HTTP request headers {#discoverydiscoverassetshtml-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **discoveryDiscoverSensitives** {#discoverydiscoversensitives}
> DiscoveredSensitives discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)

/discovery/discover/sensitives [POST]

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example {#discoverydiscoversensitives-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DiscoveryApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededDiscoverableSensitives : SeededDiscoverableSensitives =  // SeededDiscoverableSensitives | 
try {
    val result : DiscoveredSensitives = apiInstance.discoveryDiscoverSensitives(automatic, seededDiscoverableSensitives)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DiscoveryApi#discoveryDiscoverSensitives")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DiscoveryApi#discoveryDiscoverSensitives")
    e.printStackTrace()
}
```

### Parameters {#discoverydiscoversensitives-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableSensitives** | [**SeededDiscoverableSensitives**](../models/SeededDiscoverableSensitives)|  | [optional]

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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DiscoveryApi()
val automatic : kotlin.Boolean = true // kotlin.Boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior.
val seededDiscoverableRelatedTags : SeededDiscoverableRelatedTags =  // SeededDiscoverableRelatedTags | 
try {
    val result : DiscoveredRelatedTags = apiInstance.discoveryDiscoverTagsRelated(automatic, seededDiscoverableRelatedTags)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DiscoveryApi#discoveryDiscoverTagsRelated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DiscoveryApi#discoveryDiscoverTagsRelated")
    e.printStackTrace()
}
```

### Parameters {#discoverydiscovertagsrelated-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automatic** | **kotlin.Boolean**| For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | [optional] [default to true]
 **seededDiscoverableRelatedTags** | [**SeededDiscoverableRelatedTags**](../models/SeededDiscoverableRelatedTags)|  | [optional]

### Return type {#discoverydiscovertagsrelated-return-type}

[**DiscoveredRelatedTags**](../models/DiscoveredRelatedTags)

### Authorization {#discoverydiscovertagsrelated-authorization}

No authorization required

### HTTP request headers {#discoverydiscovertagsrelated-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

