---
title: core_openapi.api.AssetApi | Dart SDK
---

# core_openapi.api.AssetApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetAssociateTag**](AssetApi.md#assetassociatetag) | **POST** /asset/{asset}/tags/associate/{tag} | /asset/{asset}/tags/associate/{tag} [POST]
[**assetAssociateWebsite**](AssetApi.md#assetassociatewebsite) | **POST** /asset/{asset}/websites/associate/{website} | /asset/{asset}/websites/associate/{website} [POST]
[**assetAssociateWorkstreamSummary**](AssetApi.md#assetassociateworkstreamsummary) | **POST** /asset/{asset}/workstream_summaries/associate/{workstream_summary} | /asset/{asset}/workstream_summaries/associate/{workstream_summary} [POST]
[**assetDisassociateTag**](AssetApi.md#assetdisassociatetag) | **POST** /asset/{asset}/tags/disassociate/{tag} | /asset/{asset}/tags/disassociate/{tag} [POST]
[**assetDisassociateWebsite**](AssetApi.md#assetdisassociatewebsite) | **POST** /asset/{asset}/websites/disassociate/{website} | /asset/{asset}/websites/disassociate/{website} [POST]
[**assetDisassociateWorkstreamSummary**](AssetApi.md#assetdisassociateworkstreamsummary) | **POST** /asset/{asset}/workstream_summaries/disassociate/{workstream_summary} | /asset/{asset}/workstream_summaries/disassociate/{workstream_summary} [POST]
[**assetFormats**](AssetApi.md#assetformats) | **GET** /asset/{asset}/formats | /asset/{asset}/formats [GET] Scoped To Asset
[**assetReclassify**](AssetApi.md#assetreclassify) | **POST** /asset/reclassify | /asset/reclassify [POST]
[**assetScoresIncrement**](AssetApi.md#assetscoresincrement) | **POST** /asset/{asset}/scores/increment | /asset/{asset}/scores/increment [POST]
[**assetSnapshot**](AssetApi.md#assetsnapshot) | **GET** /asset/{asset} | /asset/{asset} [GET] Scoped To Asset
[**assetSnapshotPost**](AssetApi.md#assetsnapshotpost) | **POST** /asset/{asset} | /asset/{asset} [POST] Scoped to an Asset
[**assetSpecificAssetActivities**](AssetApi.md#assetspecificassetactivities) | **GET** /asset/{asset}/activities | /asset/{asset}/activities [GET]
[**assetSpecificAssetConversations**](AssetApi.md#assetspecificassetconversations) | **GET** /asset/{asset}/conversations | /asset/{asset}/conversations [GET]
[**assetSpecificAssetExport**](AssetApi.md#assetspecificassetexport) | **GET** /asset/{asset}/export | /asset/{asset}/export [GET]
[**assetUpdate**](AssetApi.md#assetupdate) | **POST** /asset/update | /asset/update [POST] Scoped to Asset


## **assetAssociateTag** {#assetassociatetag}
> assetAssociateTag(asset, tag)

/asset/{asset}/tags/associate/{tag} [POST]

Associates a tag with a specified asset. It performs the same action as the tag equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final tag = tag_example; // String | tag id

try {
    api_instance.assetAssociateTag(asset, tag);
} catch (e) {
    print('Exception when calling AssetApi->assetAssociateTag: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **tag** | **String**| tag id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetAssociateWebsite** {#assetassociatewebsite}
> assetAssociateWebsite(asset, website)

/asset/{asset}/websites/associate/{website} [POST]

Associates a website with an asset. It performs the same action as its website equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final website = website_example; // String | website id

try {
    api_instance.assetAssociateWebsite(asset, website);
} catch (e) {
    print('Exception when calling AssetApi->assetAssociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **website** | **String**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetAssociateWorkstreamSummary** {#assetassociateworkstreamsummary}
> assetAssociateWorkstreamSummary(asset, workstreamSummary)

/asset/{asset}/workstream_summaries/associate/{workstream_summary} [POST]

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.assetAssociateWorkstreamSummary(asset, workstreamSummary);
} catch (e) {
    print('Exception when calling AssetApi->assetAssociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetDisassociateTag** {#assetdisassociatetag}
> assetDisassociateTag(tag, asset)

/asset/{asset}/tags/disassociate/{tag} [POST]

Disassociates a tag from an asset. It performs the same action as the tag equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final tag = tag_example; // String | tag id
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.assetDisassociateTag(tag, asset);
} catch (e) {
    print('Exception when calling AssetApi->assetDisassociateTag: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetDisassociateWebsite** {#assetdisassociatewebsite}
> assetDisassociateWebsite(website, asset)

/asset/{asset}/websites/disassociate/{website} [POST]

Disassociates a website from an asset. It performs the same action as the website equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final website = website_example; // String | website id
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.assetDisassociateWebsite(website, asset);
} catch (e) {
    print('Exception when calling AssetApi->assetDisassociateWebsite: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String**| website id | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetDisassociateWorkstreamSummary** {#assetdisassociateworkstreamsummary}
> assetDisassociateWorkstreamSummary(asset, workstreamSummary)

/asset/{asset}/workstream_summaries/disassociate/{workstream_summary} [POST]

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final workstreamSummary = workstreamSummary_example; // String | This is a identifier that is used to identify a specific workstream_summary.

try {
    api_instance.assetDisassociateWorkstreamSummary(asset, workstreamSummary);
} catch (e) {
    print('Exception when calling AssetApi->assetDisassociateWorkstreamSummary: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **workstreamSummary** | **String**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetFormats** {#assetformats}
> Formats assetFormats(asset, transferables)

/asset/{asset}/formats [GET] Scoped To Asset

Retrieves the formats available for a specified asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetFormats(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetFormats: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Formats**](Formats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetReclassify** {#assetreclassify}
> Asset assetReclassify(transferables, assetReclassification)

/asset/reclassify [POST]

Retrieves the formats available for a specified asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final assetReclassification = AssetReclassification(); // AssetReclassification | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified.

try {
    final result = api_instance.assetReclassify(transferables, assetReclassification);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetReclassify: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **assetReclassification** | [**AssetReclassification**](AssetReclassification.md)| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetScoresIncrement** {#assetscoresincrement}
> assetScoresIncrement(asset, seededScoreIncrement)

/asset/{asset}/scores/increment [POST]

Increments the scores associated with the specified asset based on the provided SeededScoreIncrement data in the request body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.assetScoresIncrement(asset, seededScoreIncrement);
} catch (e) {
    print('Exception when calling AssetApi->assetScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetSnapshot** {#assetsnapshot}
> Asset assetSnapshot(asset, transferables)

/asset/{asset} [GET] Scoped To Asset

Retrieves the snapshot of a specific asset

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetSnapshot(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetSnapshotPost** {#assetsnapshotpost}
> Asset assetSnapshotPost(asset, transferables, seededAccessor)

/asset/{asset} [POST] Scoped to an Asset

Retrieves a snapshot of a specific asset, along with the user requesting the snapshot.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededAccessor = SeededAccessor(); // SeededAccessor | 

try {
    final result = api_instance.assetSnapshotPost(asset, transferables, seededAccessor);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetSnapshotPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededAccessor** | [**SeededAccessor**](SeededAccessor.md)|  | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetSpecificAssetActivities** {#assetspecificassetactivities}
> Activities assetSpecificAssetActivities(asset, transferables)

/asset/{asset}/activities [GET]

Retrieves activity events specific to the given asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetSpecificAssetActivities(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetSpecificAssetActivities: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Activities**](Activities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetSpecificAssetConversations** {#assetspecificassetconversations}
> Conversations assetSpecificAssetConversations(asset, transferables)

/asset/{asset}/conversations [GET]

Retrieves conversations specific to the given asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.assetSpecificAssetConversations(asset, transferables);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetSpecificAssetConversations: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversations**](Conversations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetSpecificAssetExport** {#assetspecificassetexport}
> ExportedAsset assetSpecificAssetExport(asset, exportType)

/asset/{asset}/export [GET]

Retrieves an export version of the specified asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final exportType = exportType_example; // String | This specifies the type of export the user wants.

try {
    final result = api_instance.assetSpecificAssetExport(asset, exportType);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetSpecificAssetExport: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **exportType** | **String**| This specifies the type of export the user wants. | 

### Return type

[**ExportedAsset**](ExportedAsset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **assetUpdate** {#assetupdate}
> Asset assetUpdate(transferables, asset)

/asset/update [POST] Scoped to Asset

Allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AssetApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final asset = Asset(); // Asset | This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

try {
    final result = api_instance.assetUpdate(transferables, asset);
    print(result);
} catch (e) {
    print('Exception when calling AssetApi->assetUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **asset** | [**Asset**](Asset.md)| This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

