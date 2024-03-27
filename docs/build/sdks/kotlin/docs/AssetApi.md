# Asset API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetAssociateTag**](AssetApi.md#assetassociatetag) | **POST** /asset/\{asset\}/tags/associate/\{tag\} | /asset/\{asset\}/tags/associate/\{tag\} [POST]
[**assetAssociateWebsite**](AssetApi.md#assetassociatewebsite) | **POST** /asset/\{asset\}/websites/associate/\{website\} | /asset/\{asset\}/websites/associate/\{website\} [POST]
[**assetDisassociateTag**](AssetApi.md#assetdisassociatetag) | **POST** /asset/\{asset\}/tags/disassociate/\{tag\} | /asset/\{asset\}/tags/disassociate/\{tag\} [POST]
[**assetDisassociateWebsite**](AssetApi.md#assetdisassociatewebsite) | **POST** /asset/\{asset\}/websites/disassociate/\{website\} | /asset/\{asset\}/websites/disassociate/\{website\} [POST]
[**assetFormats**](AssetApi.md#assetformats) | **GET** /asset/\{asset\}/formats | /asset/\{asset\}/formats [GET] Scoped To Asset
[**assetReclassify**](AssetApi.md#assetreclassify) | **POST** /asset/reclassify | /asset/reclassify [POST]
[**assetScoresIncrement**](AssetApi.md#assetscoresincrement) | **POST** /asset/\{asset\}/scores/increment | &#39;/asset/\{asset\}/scores/increment&#39; [POST]
[**assetSnapshot**](AssetApi.md#assetsnapshot) | **GET** /asset/\{asset\} | /asset/\{asset\} [GET] Scoped To Asset
[**assetSnapshotPost**](AssetApi.md#assetsnapshotpost) | **POST** /asset/\{asset\} | /asset/\{asset\} [POST] Scoped to an Asset
[**assetSpecificAssetActivities**](AssetApi.md#assetspecificassetactivities) | **GET** /asset/\{asset\}/activities | /asset/\{asset\}/activities [GET]
[**assetSpecificAssetConversations**](AssetApi.md#assetspecificassetconversations) | **GET** /asset/\{asset\}/conversations | /asset/\{asset\}/conversations [GET]
[**assetSpecificAssetExport**](AssetApi.md#assetspecificassetexport) | **GET** /asset/\{asset\}/export | [GET] /asset/\{asset\}/export
[**assetUpdate**](AssetApi.md#assetupdate) | **POST** /asset/update | /asset/update [POST] Scoped to Asset


<a id="assetAssociateTag"></a>
## **assetAssociateTag**
> assetAssociateTag(asset, tag)

/asset/\{asset\}/tags/associate/\{tag\} [POST]

This will associate a tag with a asset. This will do the same thing as the tag equivilant.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val tag : kotlin.String = tag_example // kotlin.String | tag id
try {
    apiInstance.assetAssociateTag(asset, tag)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetAssociateTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetAssociateTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **tag** | **kotlin.String**| tag id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetAssociateWebsite"></a>
## **assetAssociateWebsite**
> assetAssociateWebsite(asset, website)

/asset/\{asset\}/websites/associate/\{website\} [POST]

This will associate a website with a asset. This will do the same thing as the website equivilant.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.assetAssociateWebsite(asset, website)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetAssociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetAssociateWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetDisassociateTag"></a>
## **assetDisassociateTag**
> assetDisassociateTag(tag, asset)

/asset/\{asset\}/tags/disassociate/\{tag\} [POST]

This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.assetDisassociateTag(tag, asset)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetDisassociateTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetDisassociateTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetDisassociateWebsite"></a>
## **assetDisassociateWebsite**
> assetDisassociateWebsite(website, asset)

/asset/\{asset\}/websites/disassociate/\{website\} [POST]

This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val website : kotlin.String = website_example // kotlin.String | website id
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.assetDisassociateWebsite(website, asset)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetDisassociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetDisassociateWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetFormats"></a>
## **assetFormats**
> Formats assetFormats(asset, transferables)

/asset/\{asset\}/formats [GET] Scoped To Asset

Get the formats for a given asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Formats = apiInstance.assetFormats(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetFormats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetFormats")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Formats**](Formats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetReclassify"></a>
## **assetReclassify**
> Asset assetReclassify(transferables, assetReclassification)

/asset/reclassify [POST]

This will update the classification of this asset to the proper classification.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val assetReclassification : AssetReclassification =  // AssetReclassification | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified.
try {
    val result : Asset = apiInstance.assetReclassify(transferables, assetReclassification)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetReclassify")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetReclassify")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **assetReclassification** | [**AssetReclassification**](AssetReclassification.md)| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. | [optional]

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetScoresIncrement"></a>
## **assetScoresIncrement**
> assetScoresIncrement(asset, seededScoreIncrement)

&#39;/asset/\{asset\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.assetScoresIncrement(asset, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetSnapshot"></a>
## **assetSnapshot**
> Asset assetSnapshot(asset, transferables)

/asset/\{asset\} [GET] Scoped To Asset

Get the snapshot of a specific asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Asset = apiInstance.assetSnapshot(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSnapshotPost"></a>
## **assetSnapshotPost**
> Asset assetSnapshotPost(asset, transferables, seededAccessor)

/asset/\{asset\} [POST] Scoped to an Asset

Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededAccessor : SeededAccessor =  // SeededAccessor | 
try {
    val result : Asset = apiInstance.assetSnapshotPost(asset, transferables, seededAccessor)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetSnapshotPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetSnapshotPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededAccessor** | [**SeededAccessor**](SeededAccessor.md)|  | [optional]

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetSpecificAssetActivities"></a>
## **assetSpecificAssetActivities**
> Activities assetSpecificAssetActivities(asset, transferables)

/asset/\{asset\}/activities [GET]

This will get a specific asset&#39;s activity events

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Activities = apiInstance.assetSpecificAssetActivities(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetSpecificAssetActivities")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetSpecificAssetActivities")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Activities**](Activities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSpecificAssetConversations"></a>
## **assetSpecificAssetConversations**
> Conversations assetSpecificAssetConversations(asset, transferables)

/asset/\{asset\}/conversations [GET]

This will get a specific asset&#39;s conversations

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Conversations = apiInstance.assetSpecificAssetConversations(asset, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetSpecificAssetConversations")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetSpecificAssetConversations")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Conversations**](Conversations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSpecificAssetExport"></a>
## **assetSpecificAssetExport**
> ExportedAsset assetSpecificAssetExport(asset, exportType)

[GET] /asset/\{asset\}/export

This will return a export version of your asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val exportType : kotlin.String = exportType_example // kotlin.String | This specifies the type of export the user wants.
try {
    val result : ExportedAsset = apiInstance.assetSpecificAssetExport(asset, exportType)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetSpecificAssetExport")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetSpecificAssetExport")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **exportType** | **kotlin.String**| This specifies the type of export the user wants. | [enum: HTML,]

### Return type

[**ExportedAsset**](ExportedAsset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetUpdate"></a>
## **assetUpdate**
> Asset assetUpdate(transferables, asset)

/asset/update [POST] Scoped to Asset

This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AssetApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val asset : Asset =  // Asset | This is the updated Asset that needs to be updated in our db.
try {
    val result : Asset = apiInstance.assetUpdate(transferables, asset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **asset** | [**Asset**](Asset.md)| This is the updated Asset that needs to be updated in our db. | [optional]

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

