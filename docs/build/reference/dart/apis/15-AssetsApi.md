# Assets API

All URIs are relative to *http://localhost:1000*

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
[**assetsStreamIdentifiers**](AssetsApi#assetsstreamidentifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [GET]
[**getAssetsStreamTransferables**](AssetsApi#getassetsstreamtransferables) | **GET** /assets/stream/transferables | Your GET endpoint
[**streamAssets**](AssetsApi#streamassets) | **GET** /assets/stream | /assets/stream [GET]


## **assetsCreateNewAsset** {#assetscreatenewasset}
> Asset assetsCreateNewAsset(transferables, seed)

/assets/create [POST] Scoped to Asset

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

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
 **seed** | [**Seed**](../models/Seed)|  | [optional] 

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **assetsDeleteAsset** {#assetsdeleteasset}
> String assetsDeleteAsset(asset)

/assets/\{asset\}/delete [POST] Scoped to Asset

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

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



## **assetsDraft** {#assetsdraft}
> Seed assetsDraft(transferables, seed)

/assets/draft [POST]

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

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

[**PseudoAssets**](../models/PseudoAssets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsSearchAssets** {#assetssearchassets}
> SearchedAssets assetsSearchAssets(query, transferables, searchableTags, pseudo)

/assets/search?query=string [GET]

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

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

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **assetsStreamIdentifiers** {#assetsstreamidentifiers}
> StreamedIdentifiers assetsStreamIdentifiers()

/assets/stream/identifiers [GET]

Streams the identifiers (UUIDs) of assets that have been updated via a WebSocket connection.

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

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **getAssetsStreamTransferables** {#getassetsstreamtransferables}
> Assets getAssetsStreamTransferables()

Your GET endpoint

Provides a WebSocket connection that emits changes to your assets, including their transferable.

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

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **streamAssets** {#streamassets}
> Assets streamAssets()

/assets/stream [GET]

IMPORTANT: This stream emits changes without transferables in a specific format. If transferables are required, please use /assets/stream/transferables.

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

[**Assets**](../models/Assets)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



