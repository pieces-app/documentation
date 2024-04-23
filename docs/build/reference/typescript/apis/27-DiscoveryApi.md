---
title: Discovery API | TypeScript SDK
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
> DiscoveredAssets discoveryDiscoverAssets()

This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.

### Example {#discoverydiscoverassets-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DiscoveryApi(configuration)

const body: Pieces.DiscoveryDiscoverAssetsRequest = {
// boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional)
automatic: true,
// SeededDiscoverableAssets | The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. (optional)
seededDiscoverableAssets: ,
};

apiInstance.discoveryDiscoverAssets(body).then((data: DiscoveredAssets) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#discoverydiscoverassets-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDiscoverableAssets** | **SeededDiscoverableAssets**| The discovery/discover/assets endpoint will accept seededDiscoverableAssets, that represetns an iterable of multiple fragments or files. |
 **automatic** | [**boolean**] | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | (optional) defaults to true


### Return type {#discoverydiscoverassets-return-type}

[**DiscoveredAssets**](../models/DiscoveredAssets)

### HTTP request headers {#discoverydiscoverassets-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#discoverydiscoverassets-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **discoveryDiscoverAssetsHtml** {#discoverydiscoverassetshtml}
> DiscoveredHtmlWebpages discoveryDiscoverAssetsHtml()

This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.

### Example {#discoverydiscoverassetshtml-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DiscoveryApi(configuration)

const body: Pieces.DiscoveryDiscoverAssetsHtmlRequest = {
// boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional)
automatic: true,
// SeededDiscoverableHtmlWebpages (optional)
seededDiscoverableHtmlWebpages: ,
};

apiInstance.discoveryDiscoverAssetsHtml(body).then((data: DiscoveredHtmlWebpages) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#discoverydiscoverassetshtml-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDiscoverableHtmlWebpages** | **SeededDiscoverableHtmlWebpages**|  |
 **automatic** | [**boolean**] | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | (optional) defaults to true


### Return type {#discoverydiscoverassetshtml-return-type}

[**DiscoveredHtmlWebpages**](../models/DiscoveredHtmlWebpages)

### HTTP request headers {#discoverydiscoverassetshtml-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#discoverydiscoverassetshtml-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **discoveryDiscoverSensitives** {#discoverydiscoversensitives}
> DiscoveredSensitives discoveryDiscoverSensitives()

This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.

### Example {#discoverydiscoversensitives-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DiscoveryApi(configuration)

const body: Pieces.DiscoveryDiscoverSensitivesRequest = {
// boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional)
automatic: true,
// SeededDiscoverableSensitives (optional)
seededDiscoverableSensitives: ,
};

apiInstance.discoveryDiscoverSensitives(body).then((data: DiscoveredSensitives) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#discoverydiscoversensitives-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDiscoverableSensitives** | **SeededDiscoverableSensitives**|  |
 **automatic** | [**boolean**] | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | (optional) defaults to true


### Return type {#discoverydiscoversensitives-return-type}

[**DiscoveredSensitives**](../models/DiscoveredSensitives)

### HTTP request headers {#discoverydiscoversensitives-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#discoverydiscoversensitives-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **discoveryDiscoverTagsRelated** {#discoverydiscovertagsrelated}
> DiscoveredRelatedTags discoveryDiscoverTagsRelated()

This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.

### Example {#discoverydiscovertagsrelated-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.DiscoveryApi(configuration)

const body: Pieces.DiscoveryDiscoverTagsRelatedRequest = {
// boolean | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. (optional)
automatic: true,
// SeededDiscoverableRelatedTags (optional)
seededDiscoverableRelatedTags: ,
};

apiInstance.discoveryDiscoverTagsRelated(body).then((data: DiscoveredRelatedTags) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#discoverydiscovertagsrelated-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDiscoverableRelatedTags** | **SeededDiscoverableRelatedTags**|  |
 **automatic** | [**boolean**] | For most cases set to true. If this is set to true we will handle the behavior automically or else we will not proactively handle specific behavior but we will let the developer decide the behavior. | (optional) defaults to true


### Return type {#discoverydiscovertagsrelated-return-type}

[**DiscoveredRelatedTags**](../models/DiscoveredRelatedTags)

### HTTP request headers {#discoverydiscovertagsrelated-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#discoverydiscovertagsrelated-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


