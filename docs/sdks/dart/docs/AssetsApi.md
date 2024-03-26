# Assets API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateNewAsset**](AssetsApi#assetscreatenewasset) | **POST** /assets/create | /assets/create [POST] Scoped to Asset
[**assetsDeleteAsset**](AssetsApi#assetsdeleteasset) | **POST** /assets/\{asset\}/delete | /assets/delete [POST] Scoped to Asset
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
[**assetsStreamIdentifiers**](AssetsApi#assetsstreamidentifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [GET]
[**getAssetsStreamTransferables**](AssetsApi#getassetsstreamtransferables) | **GET** /assets/stream/transferables | Your GET endpoint
[**streamAssets**](AssetsApi#streamassets) | **GET** /assets/stream | /assets/stream [GET]


## **assetsCreateNewAsset**
> Asset assetsCreateNewAsset(transferables, seed)

/assets/create [POST] Scoped to Asset

This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](Seed)|  | [optional] 

### Return type

[**Asset**](Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsDeleteAsset**
> String assetsDeleteAsset(asset)

/assets/delete [POST] Scoped to Asset

This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsDraft**
> Seed assetsDraft(transferables, seed)

/assets/draft [POST]

This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seed** | [**Seed**](Seed)|  | [optional] 

### Return type

[**Seed**](Seed)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsGetRecommendedAssets**
> Assets assetsGetRecommendedAssets(seededAssetsRecommendation)

Your GET endpoint

An endpoint that takes in a SeededAssetsRecommendation Model within it's request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetsRecommendation** | [**SeededAssetsRecommendation**](SeededAssetsRecommendation)| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. | [optional] 

### Return type

[**Assets**](Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsGetRelatedAssets**
> Assets assetsGetRelatedAssets(assets)

/assets/related [GET]

Gets one or more related assets when provided one or more input assets. The body will expect the shape of

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](Assets)| The body of the request is an object (Assets Model) with iterable internally. | [optional] 

### Return type

[**Assets**](Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsIdentifiersSnapshot**
> FlattenedAssets assetsIdentifiersSnapshot(pseudo)

/assets/identifiers [GET]

This will get all of your asset ids

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**FlattenedAssets**](FlattenedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsPseudoSnapshot**
> PseudoAssets assetsPseudoSnapshot()

/assets/pseudo [GET]

This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**PseudoAssets**](PseudoAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsSearchAssets**
> SearchedAssets assetsSearchAssets(query, transferables, searchableTags, pseudo)

/assets/search?query=string [GET]

This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| This is a string that you can use to search your assets. | [optional] 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **searchableTags** | **String**| This is a comma separated value of tags used for search. | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**SearchedAssets**](SearchedAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsSearchWithFilters**
> AssetsSearchWithFiltersOutput assetsSearchWithFilters(transferables, pseudo, assetsSearchWithFiltersInput)

/assets/search [POST]

This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 
 **assetsSearchWithFiltersInput** | [**AssetsSearchWithFiltersInput**](AssetsSearchWithFiltersInput)|  | [optional] 

### Return type

[**AssetsSearchWithFiltersOutput**](AssetsSearchWithFiltersOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsSnapshot**
> Assets assetsSnapshot(transferables, suggested, pseudo)

/assets [GET] Scoped to Assets

Get all of the users Assets.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **suggested** | **bool**| This will let us know if a developer, wants a snapshot related to suggested content or normal content | [optional] 
 **pseudo** | **bool**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional] 

### Return type

[**Assets**](Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsSpecificAssetFormatsSnapshot**
> Formats assetsSpecificAssetFormatsSnapshot(asset, transferables)

/assets/\{asset\}/formats [GET] Scoped To Assets

This will query the formats for agiven asset when provided that asset's id.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Formats**](Formats)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsSpecificAssetSnapshot**
> Asset assetsSpecificAssetSnapshot(asset, transferables)

/assets/\{asset\} [GET] Scoped to Assets

This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Asset**](Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsStreamIdentifiers**
> StreamedIdentifiers assetsStreamIdentifiers()

/assets/stream/identifiers [GET]

This will stream the asset identifiers(uuids) that have changed via a websocket connection.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**StreamedIdentifiers**](StreamedIdentifiers)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **getAssetsStreamTransferables**
> Assets getAssetsStreamTransferables()

Your GET endpoint

This will emit changes of your assets with your transferables included. This is a websocket connection.

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Assets**](Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **streamAssets**
> Assets streamAssets()

/assets/stream [GET]

*** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables

### Example
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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Assets**](Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



