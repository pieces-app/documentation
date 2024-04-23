---
title: Assets API | Dart SDK
---

# Assets API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAsset**](AssetsApi#assetscreatenewasset) | **POST** /assets/create | /assets/create [POST] Scoped to Asset
[**assetsDeleteAsset**](AssetsApi#assetsdeleteasset) | **POST** /assets/\{asset\}/delete | /assets/\{asset\}/delete [POST] Scoped to Asset
[**assetsDraft**](AssetsApi#assetsdraft) | **POST** /assets/draft | /assets/draft [POST]
[**assetsGetRecommendedAssets**](AssetsApi#assetsgetrecommendedassets) | **GET** /assets/recommended | Your GET endpoint
[**assetsGetRelatedAssets**](AssetsApi#assetsgetrelatedassets) | **GET** /assets/related | /assets/related [GET]
[**assetsIdentifiersSnapshot**](AssetsApi#assetsidentifierssnapshot) | **GET** /assets/identifiers | /assets/identifiers [GET]
[**assetsPseudoSnapshot**](AssetsApi#assetspseudosnapshot) | **GET** /assets/pseudo | /assets/pseudo [GET]
[**assetsSearchAssets**](AssetsApi#assetssearchassets) | **GET** /assets/search | /assets/search?query=string [GET]
[**assetsSearchWithFilters**](AssetsApi#assetssearchwithfilters) | **POST** /assets/search | /assets/search [POST]
[**assetsSnapshot**](AssetsApi#assetssnapshot) | **GET** /assets | /assets [GET] Scoped to Assets
[**assetsSpecificAssetFormatsSnapshot**](AssetsApi#assetsspecificassetformatssnapshot) | **GET** /assets/\{asset\}/formats | /assets/\{asset\}/formats [GET] Scoped To Assets
[**assetsSpecificAssetSnapshot**](AssetsApi#assetsspecificassetsnapshot) | **GET** /assets/\{asset\} | /assets/\{asset\} [GET] Scoped to Assets
[**assetsStreamIdentifiers**](AssetsApi#assetsstreamidentifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [WS]
[**getAssetsStreamTransferables**](AssetsApi#getassetsstreamtransferables) | **GET** /assets/stream/transferables | /assets/stream/transferables [WS]
[**streamAssets**](AssetsApi#streamassets) | **GET** /assets/stream | /assets/stream [WS]


## **assetsCreateNewAsset** {#assetscreatenewasset}
> Asset assetsCreateNewAsset(transferables, seed)

/assets/create [POST] Scoped to Asset

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example {#assetscreatenewasset-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seed = Seed(); // Seed | 

try {
    final result = api_instance.assetsCreateNewAsset(transferables, seed);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsCreateNewAsset: $e\n');
}
```

### Parameters {#assetscreatenewasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed) |  | [optional] 

### Return type {#assetscreatenewasset-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetscreatenewasset-authorization}

No authorization required

### HTTP request headers {#assetscreatenewasset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetsDeleteAsset** {#assetsdeleteasset}
> String assetsDeleteAsset(asset)

/assets/\{asset\}/delete [POST] Scoped to Asset

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example {#assetsdeleteasset-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    final result = api_instance.assetsDeleteAsset(asset);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsDeleteAsset: $e\n');
}
```

### Parameters {#assetsdeleteasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 

### Return type {#assetsdeleteasset-return-type}

**String**

### Authorization {#assetsdeleteasset-authorization}

No authorization required

### HTTP request headers {#assetsdeleteasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetsDraft** {#assetsdraft}
> Seed assetsDraft(transferables, seed)

/assets/draft [POST]

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example {#assetsdraft-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seed = Seed(); // Seed | 

try {
    final result = api_instance.assetsDraft(transferables, seed);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsDraft: $e\n');
}
```

### Parameters {#assetsdraft-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](../models/Seed) |  | [optional] 

### Return type {#assetsdraft-return-type}

[**Seed**](../models/Seed)

### Authorization {#assetsdraft-authorization}

No authorization required

### HTTP request headers {#assetsdraft-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **assetsGetRecommendedAssets** {#assetsgetrecommendedassets}
> Assets assetsGetRecommendedAssets(seededAssetsRecommendation)

Your GET endpoint

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example {#assetsgetrecommendedassets-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final seededAssetsRecommendation = SeededAssetsRecommendation(); // SeededAssetsRecommendation | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats.

try {
    final result = api_instance.assetsGetRecommendedAssets(seededAssetsRecommendation);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsGetRecommendedAssets: $e\n');
}
```

### Parameters {#assetsgetrecommendedassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetsRecommendation** | [**SeededAssetsRecommendation**](../models/SeededAssetsRecommendation) | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final assets = Assets(); // Assets | The body of the request is an object (Assets Model) with iterable internally.

try {
    final result = api_instance.assetsGetRelatedAssets(assets);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsGetRelatedAssets: $e\n');
}
```

### Parameters {#assetsgetrelatedassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets) | The body of the request is an object (Assets Model) with iterable internally. | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.

try {
    final result = api_instance.assetsIdentifiersSnapshot(pseudo);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsIdentifiersSnapshot: $e\n');
}
```

### Parameters {#assetsidentifierssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool** | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type {#assetsidentifierssnapshot-return-type}

[**FlattenedAssets**](../models/FlattenedAssets)

### Authorization {#assetsidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#assetsidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetsPseudoSnapshot** {#assetspseudosnapshot}
> PseudoAssets assetsPseudoSnapshot()

/assets/pseudo [GET]

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example {#assetspseudosnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();

try {
    final result = api_instance.assetsPseudoSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsPseudoSnapshot: $e\n');
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
 - **Accept**: application/json, text/plain

## **assetsSearchAssets** {#assetssearchassets}
> SearchedAssets assetsSearchAssets(query, transferables, searchableTags, pseudo)

/assets/search?query=string [GET]

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example {#assetssearchassets-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final query = query_example; // String | This is a string that you can use to search your assets.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final searchableTags = searchableTags_example; // String | This is a comma separated value of tags used for search.
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.

try {
    final result = api_instance.assetsSearchAssets(query, transferables, searchableTags, pseudo);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsSearchAssets: $e\n');
}
```

### Parameters {#assetssearchassets-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String** | This is a string that you can use to search your assets. | [optional] 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **searchableTags** | **String** | This is a comma separated value of tags used for search. | [optional] 
 **pseudo** | **bool** | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type {#assetssearchassets-return-type}

[**SearchedAssets**](../models/SearchedAssets)

### Authorization {#assetssearchassets-authorization}

No authorization required

### HTTP request headers {#assetssearchassets-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetsSearchWithFilters** {#assetssearchwithfilters}
> AssetsSearchWithFiltersOutput assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput)

/assets/search [POST]

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example {#assetssearchwithfilters-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
final assetsSearchWithFiltersInput = AssetsSearchWithFiltersInput(); // AssetsSearchWithFiltersInput | 

try {
    final result = api_instance.assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsSearchWithFilters: $e\n');
}
```

### Parameters {#assetssearchwithfilters-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **pseudo** | **bool** | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **assetsSearchWithFiltersInput** | [**AssetsSearchWithFiltersInput**](../models/AssetsSearchWithFiltersInput) |  | [optional] 

### Return type {#assetssearchwithfilters-return-type}

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### Authorization {#assetssearchwithfilters-authorization}

No authorization required

### HTTP request headers {#assetssearchwithfilters-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **assetsSnapshot** {#assetssnapshot}
> Assets assetsSnapshot(transferables, suggested, pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example {#assetssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final suggested = true; // bool | This will let us know if a developer, wants a snapshot related to suggested content or normal content
final pseudo = true; // bool | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.

try {
    final result = api_instance.assetsSnapshot(transferables, suggested, pseudo);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsSnapshot: $e\n');
}
```

### Parameters {#assetssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **suggested** | **bool** | This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional] 
 **pseudo** | **bool** | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetsSpecificAssetFormatsSnapshot(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsSpecificAssetFormatsSnapshot: $e\n');
}
```

### Parameters {#assetsspecificassetformatssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetsSpecificAssetSnapshot(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsSpecificAssetSnapshot: $e\n');
}
```

### Parameters {#assetsspecificassetsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assetsspecificassetsnapshot-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetsspecificassetsnapshot-authorization}

No authorization required

### HTTP request headers {#assetsspecificassetsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetsStreamIdentifiers** {#assetsstreamidentifiers}
> StreamedIdentifiers assetsStreamIdentifiers()

/assets/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your asset's identifiers (UUIDs).

### Example {#assetsstreamidentifiers-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();

try {
    final result = api_instance.assetsStreamIdentifiers();
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->assetsStreamIdentifiers: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();

try {
    final result = api_instance.getAssetsStreamTransferables();
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->getAssetsStreamTransferables: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetsApi();

try {
    final result = api_instance.streamAssets();
    print(result);
} catch (e) {
    print('Exception when calling AssetsApi->streamAssets: $e\n');
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

