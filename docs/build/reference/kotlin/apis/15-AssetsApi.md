---
title: Assets API | Kotlin SDK
---

# Assets API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAsset**](#assetscreatenewasset) | **POST** /assets/create | /assets/create [POST] Scoped to Asset
[**assetsDeleteAsset**](#assetsdeleteasset) | **POST** /assets/\{asset\}/delete | /assets/\{asset\}/delete [POST] Scoped to Asset
[**assetsDraft**](#assetsdraft) | **POST** /assets/draft | /assets/draft [POST]
[**assetsGetRecommendedAssets**](#assetsgetrecommendedassets) | **GET** /assets/recommended | Your GET endpoint
[**assetsGetRelatedAssets**](#assetsgetrelatedassets) | **GET** /assets/related | /assets/related [GET]
[**assetsIdentifiersSnapshot**](#assetsidentifierssnapshot) | **GET** /assets/identifiers | /assets/identifiers [GET]
[**assetsPseudoSnapshot**](#assetspseudosnapshot) | **GET** /assets/pseudo | /assets/pseudo [GET]
[**assetsSearchAssets**](#assetssearchassets) | **GET** /assets/search | /assets/search?query=string [GET]
[**assetsSearchWithFilters**](#assetssearchwithfilters) | **POST** /assets/search | /assets/search [POST]
[**assetsSnapshot**](#assetssnapshot) | **GET** /assets | /assets [GET] Scoped to Assets
[**assetsSpecificAssetFormatsSnapshot**](#assetsspecificassetformatssnapshot) | **GET** /assets/\{asset\}/formats | /assets/\{asset\}/formats [GET] Scoped To Assets
[**assetsSpecificAssetSnapshot**](#assetsspecificassetsnapshot) | **GET** /assets/\{asset\} | /assets/\{asset\} [GET] Scoped to Assets
[**assetsStreamIdentifiers**](#assetsstreamidentifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [WS]
[**getAssetsStreamTransferables**](#getassetsstreamtransferables) | **GET** /assets/stream/transferables | /assets/stream/transferables [WS]
[**streamAssets**](#streamassets) | **GET** /assets/stream | /assets/stream [WS]


## **assetsCreateNewAsset** {#assetscreatenewasset}
> Asset assetsCreateNewAsset(transferables, seed)

/assets/create [POST] Scoped to Asset

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example {#assetscreatenewasset-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seed : Seed =  // Seed | 
try {
    val result : Asset = apiInstance.assetsCreateNewAsset(transferables, seed)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsCreateNewAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsCreateNewAsset")
    e.printStackTrace()
}
```

### Parameters {#assetscreatenewasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seed** | [**Seed**](../models/Seed)|  | [optional]

### Return type {#assetscreatenewasset-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreatenewasset-authorization}

No authorization required

### HTTP request headers {#assetscreatenewasset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsDeleteAsset** {#assetsdeleteasset}
> kotlin.String assetsDeleteAsset(asset)

/assets/\{asset\}/delete [POST] Scoped to Asset

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example {#assetsdeleteasset-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    val result : kotlin.String = apiInstance.assetsDeleteAsset(asset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsDeleteAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsDeleteAsset")
    e.printStackTrace()
}
```

### Parameters {#assetsdeleteasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#assetsdeleteasset-return-type}

**kotlin.String**

### Authorization {#assetsdeleteasset-authorization}

No authorization required

### HTTP request headers {#assetsdeleteasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **assetsDraft** {#assetsdraft}
> Seed assetsDraft(transferables, seed)

/assets/draft [POST]

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example {#assetsdraft-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seed : Seed =  // Seed | 
try {
    val result : Seed = apiInstance.assetsDraft(transferables, seed)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsDraft")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsDraft")
    e.printStackTrace()
}
```

### Parameters {#assetsdraft-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seed** | [**Seed**](../models/Seed)|  | [optional]

### Return type {#assetsdraft-return-type}

[**Seed**](../models/Seed)

### Authorization {#assetsdraft-authorization}

No authorization required

### HTTP request headers {#assetsdraft-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsGetRecommendedAssets** {#assetsgetrecommendedassets}
> Assets assetsGetRecommendedAssets(seededAssetsRecommendation)

Your GET endpoint

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example {#assetsgetrecommendedassets-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val seededAssetsRecommendation : SeededAssetsRecommendation =  // SeededAssetsRecommendation | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats.
try {
    val result : Assets = apiInstance.assetsGetRecommendedAssets(seededAssetsRecommendation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsGetRecommendedAssets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsGetRecommendedAssets")
    e.printStackTrace()
}
```

### Parameters {#assetsgetrecommendedassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetsRecommendation** | [**SeededAssetsRecommendation**](../models/SeededAssetsRecommendation)| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional]

### Return type {#assetsgetrecommendedassets-return-type}

[**Assets**](../models/Assets)

### Authorization {#assetsgetrecommendedassets-authorization}

No authorization required

### HTTP request headers {#assetsgetrecommendedassets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsGetRelatedAssets** {#assetsgetrelatedassets}
> Assets assetsGetRelatedAssets(assets)

/assets/related [GET]

Retrieves one or more related assets when provided with one or more input assets.

### Example {#assetsgetrelatedassets-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val assets : Assets =  // Assets | The body of the request is an object (Assets Model) with iterable internally.
try {
    val result : Assets = apiInstance.assetsGetRelatedAssets(assets)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsGetRelatedAssets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsGetRelatedAssets")
    e.printStackTrace()
}
```

### Parameters {#assetsgetrelatedassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)| The body of the request is an object (Assets Model) with iterable internally. | [optional]

### Return type {#assetsgetrelatedassets-return-type}

[**Assets**](../models/Assets)

### Authorization {#assetsgetrelatedassets-authorization}

No authorization required

### HTTP request headers {#assetsgetrelatedassets-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsIdentifiersSnapshot** {#assetsidentifierssnapshot}
> FlattenedAssets assetsIdentifiersSnapshot(pseudo)

/assets/identifiers [GET]

Retrieves all asset IDs associated with your account.

### Example {#assetsidentifierssnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : FlattenedAssets = apiInstance.assetsIdentifiersSnapshot(pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsIdentifiersSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsIdentifiersSnapshot")
    e.printStackTrace()
}
```

### Parameters {#assetsidentifierssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#assetsidentifierssnapshot-return-type}

[**FlattenedAssets**](../models/FlattenedAssets)

### Authorization {#assetsidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#assetsidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsPseudoSnapshot** {#assetspseudosnapshot}
> PseudoAssets assetsPseudoSnapshot()

/assets/pseudo [GET]

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example {#assetspseudosnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
try {
    val result : PseudoAssets = apiInstance.assetsPseudoSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsPseudoSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsPseudoSnapshot")
    e.printStackTrace()
}
```

### Parameters {#assetspseudosnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#assetspseudosnapshot-return-type}

[**PseudoAssets**](../models/PseudoAssets)

### Authorization {#assetspseudosnapshot-authorization}

No authorization required

### HTTP request headers {#assetspseudosnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSearchAssets** {#assetssearchassets}
> SearchedAssets assetsSearchAssets(query, transferables, searchableTags, pseudo)

/assets/search?query&#x3D;string [GET]

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example {#assetssearchassets-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val query : kotlin.String = query_example // kotlin.String | This is a string that you can use to search your assets.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val searchableTags : kotlin.String = searchableTags_example // kotlin.String | This is a comma separated value of tags used for search.
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : SearchedAssets = apiInstance.assetsSearchAssets(query, transferables, searchableTags, pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsSearchAssets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsSearchAssets")
    e.printStackTrace()
}
```

### Parameters {#assetssearchassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **searchableTags** | **kotlin.String**| This is a comma separated value of tags used for search. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#assetssearchassets-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#assetssearchassets-authorization}

No authorization required

### HTTP request headers {#assetssearchassets-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSearchWithFilters** {#assetssearchwithfilters}
> AssetsSearchWithFiltersOutput assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput)

/assets/search [POST]

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example {#assetssearchwithfilters-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
val assetsSearchWithFiltersInput : AssetsSearchWithFiltersInput =  // AssetsSearchWithFiltersInput | 
try {
    val result : AssetsSearchWithFiltersOutput = apiInstance.assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsSearchWithFilters")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsSearchWithFilters")
    e.printStackTrace()
}
```

### Parameters {#assetssearchwithfilters-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]
 **assetsSearchWithFiltersInput** | [**AssetsSearchWithFiltersInput**](../models/AssetsSearchWithFiltersInput)|  | [optional]

### Return type {#assetssearchwithfilters-return-type}

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### Authorization {#assetssearchwithfilters-authorization}

No authorization required

### HTTP request headers {#assetssearchwithfilters-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsSnapshot** {#assetssnapshot}
> Assets assetsSnapshot(transferables, suggested, pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example {#assetssnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val suggested : kotlin.Boolean = true // kotlin.Boolean | This will let us know if a developer, wants a snapshot related to suggested content or normal content
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : Assets = apiInstance.assetsSnapshot(transferables, suggested, pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#assetssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **suggested** | **kotlin.Boolean**| This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#assetssnapshot-return-type}

[**Assets**](../models/Assets)

### Authorization {#assetssnapshot-authorization}

No authorization required

### HTTP request headers {#assetssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSpecificAssetFormatsSnapshot** {#assetsspecificassetformatssnapshot}
> Formats assetsSpecificAssetFormatsSnapshot(asset, transferables)

/assets/\{asset\}/formats [GET] Scoped To Assets

Retrieves the available formats for a specific asset identified by its ID

### Example {#assetsspecificassetformatssnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Formats = apiInstance.assetsSpecificAssetFormatsSnapshot(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsSpecificAssetFormatsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsSpecificAssetFormatsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#assetsspecificassetformatssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#assetsspecificassetformatssnapshot-return-type}

[**Formats**](../models/Formats)

### Authorization {#assetsspecificassetformatssnapshot-authorization}

No authorization required

### HTTP request headers {#assetsspecificassetformatssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSpecificAssetSnapshot** {#assetsspecificassetsnapshot}
> Asset assetsSpecificAssetSnapshot(asset, transferables)

/assets/\{asset\} [GET] Scoped to Assets

Allows clients to retrieve details of a specific asset by providing its UUID in the path.

### Example {#assetsspecificassetsnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Asset = apiInstance.assetsSpecificAssetSnapshot(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsSpecificAssetSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsSpecificAssetSnapshot")
    e.printStackTrace()
}
```

### Parameters {#assetsspecificassetsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#assetsspecificassetsnapshot-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetsspecificassetsnapshot-authorization}

No authorization required

### HTTP request headers {#assetsspecificassetsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsStreamIdentifiers** {#assetsstreamidentifiers}
> StreamedIdentifiers assetsStreamIdentifiers()

/assets/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your asset&#39;s identifiers (UUIDs).

### Example {#assetsstreamidentifiers-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
try {
    val result : StreamedIdentifiers = apiInstance.assetsStreamIdentifiers()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#assetsStreamIdentifiers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#assetsStreamIdentifiers")
    e.printStackTrace()
}
```

### Parameters {#assetsstreamidentifiers-parameters}
This endpoint does not need any parameter.

### Return type {#assetsstreamidentifiers-return-type}

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### Authorization {#assetsstreamidentifiers-authorization}

No authorization required

### HTTP request headers {#assetsstreamidentifiers-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **getAssetsStreamTransferables** {#getassetsstreamtransferables}
> Assets getAssetsStreamTransferables()

/assets/stream/transferables [WS]

Provides a WebSocket connection that emits changes to your assets, including their transferable.

### Example {#getassetsstreamtransferables-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
try {
    val result : Assets = apiInstance.getAssetsStreamTransferables()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#getAssetsStreamTransferables")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#getAssetsStreamTransferables")
    e.printStackTrace()
}
```

### Parameters {#getassetsstreamtransferables-parameters}
This endpoint does not need any parameter.

### Return type {#getassetsstreamtransferables-return-type}

[**Assets**](../models/Assets)

### Authorization {#getassetsstreamtransferables-authorization}

No authorization required

### HTTP request headers {#getassetsstreamtransferables-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **streamAssets** {#streamassets}
> Assets streamAssets()

/assets/stream [WS]

Provides a WebSocket connection that emits changes to your assets.

### Example {#streamassets-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = AssetsApi()
try {
    val result : Assets = apiInstance.streamAssets()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetsApi#streamAssets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetsApi#streamAssets")
    e.printStackTrace()
}
```

### Parameters {#streamassets-parameters}
This endpoint does not need any parameter.

### Return type {#streamassets-return-type}

[**Assets**](../models/Assets)

### Authorization {#streamassets-authorization}

No authorization required

### HTTP request headers {#streamassets-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

