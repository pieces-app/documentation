---
title: Asset API | Dart SDK
---

# Asset API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetAssociateTag**](AssetApi#assetassociatetag) | **POST** /asset/\{asset\}/tags/associate/\{tag\} | /asset/\{asset\}/tags/associate/\{tag\} [POST]
[**assetAssociateWebsite**](AssetApi#assetassociatewebsite) | **POST** /asset/\{asset\}/websites/associate/\{website\} | /asset/\{asset\}/websites/associate/\{website\} [POST]
[**assetAssociateWorkstreamSummary**](AssetApi#assetassociateworkstreamsummary) | **POST** /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} | /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**assetDisassociateTag**](AssetApi#assetdisassociatetag) | **POST** /asset/\{asset\}/tags/disassociate/\{tag\} | /asset/\{asset\}/tags/disassociate/\{tag\} [POST]
[**assetDisassociateWebsite**](AssetApi#assetdisassociatewebsite) | **POST** /asset/\{asset\}/websites/disassociate/\{website\} | /asset/\{asset\}/websites/disassociate/\{website\} [POST]
[**assetDisassociateWorkstreamSummary**](AssetApi#assetdisassociateworkstreamsummary) | **POST** /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} | /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**assetFormats**](AssetApi#assetformats) | **GET** /asset/\{asset\}/formats | /asset/\{asset\}/formats [GET] Scoped To Asset
[**assetReclassify**](AssetApi#assetreclassify) | **POST** /asset/reclassify | /asset/reclassify [POST]
[**assetScoresIncrement**](AssetApi#assetscoresincrement) | **POST** /asset/\{asset\}/scores/increment | /asset/\{asset\}/scores/increment [POST]
[**assetSnapshot**](AssetApi#assetsnapshot) | **GET** /asset/\{asset\} | /asset/\{asset\} [GET] Scoped To Asset
[**assetSnapshotPost**](AssetApi#assetsnapshotpost) | **POST** /asset/\{asset\} | /asset/\{asset\} [POST] Scoped to an Asset
[**assetSpecificAssetActivities**](AssetApi#assetspecificassetactivities) | **GET** /asset/\{asset\}/activities | /asset/\{asset\}/activities [GET]
[**assetSpecificAssetConversations**](AssetApi#assetspecificassetconversations) | **GET** /asset/\{asset\}/conversations | /asset/\{asset\}/conversations [GET]
[**assetSpecificAssetExport**](AssetApi#assetspecificassetexport) | **GET** /asset/\{asset\}/export | /asset/\{asset\}/export [GET]
[**assetUpdate**](AssetApi#assetupdate) | **POST** /asset/update | /asset/update [POST] Scoped to Asset


## **assetAssociateTag** {#assetassociatetag}
> assetAssociateTag(asset, tag)

/asset/\{asset\}/tags/associate/\{tag\} [POST]

Associates a tag with a specified asset. It performs the same action as the tag equivalent.

### Example {#assetassociatetag-example}
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

### Parameters {#assetassociatetag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **tag** | **String** | tag id | 

### Return type {#assetassociatetag-return-type}

void (empty response body)

### Authorization {#assetassociatetag-authorization}

No authorization required

### HTTP request headers {#assetassociatetag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetAssociateWebsite** {#assetassociatewebsite}
> assetAssociateWebsite(asset, website)

/asset/\{asset\}/websites/associate/\{website\} [POST]

Associates a website with an asset. It performs the same action as its website equivalent.

### Example {#assetassociatewebsite-example}
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

### Parameters {#assetassociatewebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **website** | **String** | website id | 

### Return type {#assetassociatewebsite-return-type}

void (empty response body)

### Authorization {#assetassociatewebsite-authorization}

No authorization required

### HTTP request headers {#assetassociatewebsite-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetAssociateWorkstreamSummary** {#assetassociateworkstreamsummary}
> assetAssociateWorkstreamSummary(asset, workstreamSummary)

/asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#assetassociateworkstreamsummary-example}
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

### Parameters {#assetassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#assetassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#assetassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#assetassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetDisassociateTag** {#assetdisassociatetag}
> assetDisassociateTag(tag, asset)

/asset/\{asset\}/tags/disassociate/\{tag\} [POST]

Disassociates a tag from an asset. It performs the same action as the tag equivalent.

### Example {#assetdisassociatetag-example}
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

### Parameters {#assetdisassociatetag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String** | tag id | 
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 

### Return type {#assetdisassociatetag-return-type}

void (empty response body)

### Authorization {#assetdisassociatetag-authorization}

No authorization required

### HTTP request headers {#assetdisassociatetag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetDisassociateWebsite** {#assetdisassociatewebsite}
> assetDisassociateWebsite(website, asset)

/asset/\{asset\}/websites/disassociate/\{website\} [POST]

Disassociates a website from an asset. It performs the same action as the website equivalent.

### Example {#assetdisassociatewebsite-example}
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

### Parameters {#assetdisassociatewebsite-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **String** | website id | 
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 

### Return type {#assetdisassociatewebsite-return-type}

void (empty response body)

### Authorization {#assetdisassociatewebsite-authorization}

No authorization required

### HTTP request headers {#assetdisassociatewebsite-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetDisassociateWorkstreamSummary** {#assetdisassociateworkstreamsummary}
> assetDisassociateWorkstreamSummary(asset, workstreamSummary)

/asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#assetdisassociateworkstreamsummary-example}
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

### Parameters {#assetdisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **workstreamSummary** | **String** | This is a identifier that is used to identify a specific workstream_summary. | 

### Return type {#assetdisassociateworkstreamsummary-return-type}

void (empty response body)

### Authorization {#assetdisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#assetdisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **assetFormats** {#assetformats}
> Formats assetFormats(asset, transferables)

/asset/\{asset\}/formats [GET] Scoped To Asset

Retrieves the formats available for a specified asset.

### Example {#assetformats-example}
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

### Parameters {#assetformats-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assetformats-return-type}

[**Formats**](../models/Formats)

### Authorization {#assetformats-authorization}

No authorization required

### HTTP request headers {#assetformats-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **assetReclassify** {#assetreclassify}
> Asset assetReclassify(transferables, assetReclassification)

/asset/reclassify [POST]

Retrieves the formats available for a specified asset.

### Example {#assetreclassify-example}
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

### Parameters {#assetreclassify-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **assetReclassification** | [**AssetReclassification**](../models/AssetReclassification) | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. | [optional] 

### Return type {#assetreclassify-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetreclassify-authorization}

No authorization required

### HTTP request headers {#assetreclassify-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetScoresIncrement** {#assetscoresincrement}
> assetScoresIncrement(asset, seededScoreIncrement)

/asset/\{asset\}/scores/increment [POST]

Increments the scores associated with the specified asset based on the provided SeededScoreIncrement data in the request body.

### Example {#assetscoresincrement-example}
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

### Parameters {#assetscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement) |  | [optional] 

### Return type {#assetscoresincrement-return-type}

void (empty response body)

### Authorization {#assetscoresincrement-authorization}

No authorization required

### HTTP request headers {#assetscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **assetSnapshot** {#assetsnapshot}
> Asset assetSnapshot(asset, transferables)

/asset/\{asset\} [GET] Scoped To Asset

Retrieves the snapshot of a specific asset

### Example {#assetsnapshot-example}
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

### Parameters {#assetsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assetsnapshot-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetsnapshot-authorization}

No authorization required

### HTTP request headers {#assetsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetSnapshotPost** {#assetsnapshotpost}
> Asset assetSnapshotPost(asset, transferables, seededAccessor)

/asset/\{asset\} [POST] Scoped to an Asset

Retrieves a snapshot of a specific asset, along with the user requesting the snapshot.

### Example {#assetsnapshotpost-example}
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

### Parameters {#assetsnapshotpost-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededAccessor** | [**SeededAccessor**](../models/SeededAccessor) |  | [optional] 

### Return type {#assetsnapshotpost-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetsnapshotpost-authorization}

No authorization required

### HTTP request headers {#assetsnapshotpost-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **assetSpecificAssetActivities** {#assetspecificassetactivities}
> Activities assetSpecificAssetActivities(asset, transferables)

/asset/\{asset\}/activities [GET]

Retrieves activity events specific to the given asset.

### Example {#assetspecificassetactivities-example}
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

### Parameters {#assetspecificassetactivities-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assetspecificassetactivities-return-type}

[**Activities**](../models/Activities)

### Authorization {#assetspecificassetactivities-authorization}

No authorization required

### HTTP request headers {#assetspecificassetactivities-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetSpecificAssetConversations** {#assetspecificassetconversations}
> Conversations assetSpecificAssetConversations(asset, transferables)

/asset/\{asset\}/conversations [GET]

Retrieves conversations specific to the given asset.

### Example {#assetspecificassetconversations-example}
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

### Parameters {#assetspecificassetconversations-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#assetspecificassetconversations-return-type}

[**Conversations**](../models/Conversations)

### Authorization {#assetspecificassetconversations-authorization}

No authorization required

### HTTP request headers {#assetspecificassetconversations-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetSpecificAssetExport** {#assetspecificassetexport}
> ExportedAsset assetSpecificAssetExport(asset, exportType)

/asset/\{asset\}/export [GET]

Retrieves an export version of the specified asset.

### Example {#assetspecificassetexport-example}
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

### Parameters {#assetspecificassetexport-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String** | The id (uuid) of the asset that you are trying to access. | 
 **exportType** | **String** | This specifies the type of export the user wants. | 

### Return type {#assetspecificassetexport-return-type}

[**ExportedAsset**](../models/ExportedAsset)

### Authorization {#assetspecificassetexport-authorization}

No authorization required

### HTTP request headers {#assetspecificassetexport-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **assetUpdate** {#assetupdate}
> Asset assetUpdate(transferables, asset)

/asset/update [POST] Scoped to Asset

Allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

### Example {#assetupdate-example}
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

### Parameters {#assetupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool** | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **asset** | [**Asset**](../models/Asset) | This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. | [optional] 

### Return type {#assetupdate-return-type}

[**Asset**](../models/Asset)

### Authorization {#assetupdate-authorization}

No authorization required

### HTTP request headers {#assetupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

