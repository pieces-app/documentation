# Assets API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**assetsCreateNewAsset**](#assetscreatenewasset) | **POST** /assets/create
[**assetsDeleteAsset**](#assetsdeleteasset) | **POST** /assets/\{asset\}/delete
[**assetsDraft**](#assetsdraft) | **POST** /assets/draft
[**assetsGetRecommendedAssets**](#assetsgetrecommendedassets) | **GET** /assets/recommended
[**assetsGetRelatedAssets**](#assetsgetrelatedassets) | **GET** /assets/related
[**assetsIdentifiersSnapshot**](#assetsidentifierssnapshot) | **GET** /assets/identifiers
[**assetsPseudoSnapshot**](#assetspseudosnapshot) | **GET** /assets/pseudo
[**assetsSearchAssets**](#assetssearchassets) | **GET** /assets/search
[**assetsSearchWithFilters**](#assetssearchwithfilters) | **POST** /assets/search
[**assetsSnapshot**](#assetssnapshot) | **GET** /assets
[**assetsSpecificAssetFormatsSnapshot**](#assetsspecificassetformatssnapshot) | **GET** /assets/\{asset\}/formats
[**assetsSpecificAssetSnapshot**](#assetsspecificassetsnapshot) | **GET** /assets/\{asset\}
[**assetsStreamIdentifiers**](#assetsstreamidentifiers) | **GET** /assets/stream/identifiers
[**getAssetsStreamTransferables**](#getassetsstreamtransferables) | **GET** /assets/stream/transferables
[**streamAssets**](#streamassets) | **GET** /assets/stream


## **assetsCreateNewAsset** {#assetscreatenewasset}
> Asset assetsCreateNewAsset(transferables, seed)

/assets/create [POST] Scoped to Asset

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seed** | [**Seed**](../models/Seed)|  | [optional]

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsDeleteAsset** {#assetsdeleteasset}
> kotlin.String assetsDeleteAsset(asset)

/assets/\{asset\}/delete [POST] Scoped to Asset

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsDraft** {#assetsdraft}
> Seed assetsDraft(transferables, seed)

/assets/draft [POST]

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seed** | [**Seed**](../models/Seed)|  | [optional]

### Return type

[**Seed**](../models/Seed)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsGetRecommendedAssets** {#assetsgetrecommendedassets}
> Assets assetsGetRecommendedAssets(seededAssetsRecommendation)

Your GET endpoint

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetsRecommendation** | [**SeededAssetsRecommendation**](../models/SeededAssetsRecommendation)| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional]

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsGetRelatedAssets** {#assetsgetrelatedassets}
> Assets assetsGetRelatedAssets(assets)

/assets/related [GET]

Retrieves one or more related assets when provided with one or more input assets.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)| The body of the request is an object (Assets Model) with iterable internally. | [optional]

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsIdentifiersSnapshot** {#assetsidentifierssnapshot}
> FlattenedAssets assetsIdentifiersSnapshot(pseudo)

/assets/identifiers [GET]

Retrieves all asset IDs associated with your account.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type

[**FlattenedAssets**](../models/FlattenedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsPseudoSnapshot** {#assetspseudosnapshot}
> PseudoAssets assetsPseudoSnapshot()

/assets/pseudo [GET]

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**PseudoAssets**](../models/PseudoAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSearchAssets** {#assetssearchassets}
> SearchedAssets assetsSearchAssets(query, transferables, searchableTags, pseudo)

/assets/search?query&#x3D;string [GET]

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **kotlin.String**| This is a string that you can use to search your assets. | [optional]
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **searchableTags** | **kotlin.String**| This is a comma separated value of tags used for search. | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type

[**SearchedAssets**](../models/SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSearchWithFilters** {#assetssearchwithfilters}
> AssetsSearchWithFiltersOutput assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput)

/assets/search [POST]

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]
 **assetsSearchWithFiltersInput** | [**AssetsSearchWithFiltersInput**](../models/AssetsSearchWithFiltersInput)|  | [optional]

### Return type

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsSnapshot** {#assetssnapshot}
> Assets assetsSnapshot(transferables, suggested, pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **suggested** | **kotlin.Boolean**| This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSpecificAssetFormatsSnapshot** {#assetsspecificassetformatssnapshot}
> Formats assetsSpecificAssetFormatsSnapshot(asset, transferables)

/assets/\{asset\}/formats [GET] Scoped To Assets

Retrieves the available formats for a specific asset identified by its ID

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Formats**](../models/Formats)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsSpecificAssetSnapshot** {#assetsspecificassetsnapshot}
> Asset assetsSpecificAssetSnapshot(asset, transferables)

/assets/\{asset\} [GET] Scoped to Assets

Allows clients to retrieve details of a specific asset by providing its UUID in the path.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetsStreamIdentifiers** {#assetsstreamidentifiers}
> StreamedIdentifiers assetsStreamIdentifiers()

/assets/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your asset&#39;s identifiers (UUIDs).

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **getAssetsStreamTransferables** {#getassetsstreamtransferables}
> Assets getAssetsStreamTransferables()

/assets/stream/transferables [WS]

Provides a WebSocket connection that emits changes to your assets, including their transferable.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **streamAssets** {#streamassets}
> Assets streamAssets()

/assets/stream [WS]

Provides a WebSocket connection that emits changes to your assets.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

