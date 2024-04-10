# Asset API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**assetAssociateTag**](#assetassociatetag) | **POST** /asset/\{asset\}/tags/associate/\{tag\}
[**assetAssociateWebsite**](#assetassociatewebsite) | **POST** /asset/\{asset\}/websites/associate/\{website\}
[**assetAssociateWorkstreamSummary**](#assetassociateworkstreamsummary) | **POST** /asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\}
[**assetDisassociateTag**](#assetdisassociatetag) | **POST** /asset/\{asset\}/tags/disassociate/\{tag\}
[**assetDisassociateWebsite**](#assetdisassociatewebsite) | **POST** /asset/\{asset\}/websites/disassociate/\{website\}
[**assetDisassociateWorkstreamSummary**](#assetdisassociateworkstreamsummary) | **POST** /asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\}
[**assetFormats**](#assetformats) | **GET** /asset/\{asset\}/formats
[**assetReclassify**](#assetreclassify) | **POST** /asset/reclassify
[**assetScoresIncrement**](#assetscoresincrement) | **POST** /asset/\{asset\}/scores/increment
[**assetSnapshot**](#assetsnapshot) | **GET** /asset/\{asset\}
[**assetSnapshotPost**](#assetsnapshotpost) | **POST** /asset/\{asset\}
[**assetSpecificAssetActivities**](#assetspecificassetactivities) | **GET** /asset/\{asset\}/activities
[**assetSpecificAssetConversations**](#assetspecificassetconversations) | **GET** /asset/\{asset\}/conversations
[**assetSpecificAssetExport**](#assetspecificassetexport) | **GET** /asset/\{asset\}/export
[**assetUpdate**](#assetupdate) | **POST** /asset/update


<a id="assetAssociateTag"></a>
## **assetAssociateTag** {#assetassociatetag}
> assetAssociateTag(asset, tag)

/asset/\{asset\}/tags/associate/\{tag\} [POST]

Associates a tag with a specified asset. It performs the same action as the tag equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
## **assetAssociateWebsite** {#assetassociatewebsite}
> assetAssociateWebsite(asset, website)

/asset/\{asset\}/websites/associate/\{website\} [POST]

Associates a website with an asset. It performs the same action as its website equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

<a id="assetAssociateWorkstreamSummary"></a>
## **assetAssociateWorkstreamSummary** {#assetassociateworkstreamsummary}
> assetAssociateWorkstreamSummary(asset, workstreamSummary)

/asset/\{asset\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.assetAssociateWorkstreamSummary(asset, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetDisassociateTag"></a>
## **assetDisassociateTag** {#assetdisassociatetag}
> assetDisassociateTag(tag, asset)

/asset/\{asset\}/tags/disassociate/\{tag\} [POST]

Disassociates a tag from an asset. It performs the same action as the tag equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
## **assetDisassociateWebsite** {#assetdisassociatewebsite}
> assetDisassociateWebsite(website, asset)

/asset/\{asset\}/websites/disassociate/\{website\} [POST]

Disassociates a website from an asset. It performs the same action as the website equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

<a id="assetDisassociateWorkstreamSummary"></a>
## **assetDisassociateWorkstreamSummary** {#assetdisassociateworkstreamsummary}
> assetDisassociateWorkstreamSummary(asset, workstreamSummary)

/asset/\{asset\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AssetApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.assetDisassociateWorkstreamSummary(asset, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling AssetApi#assetDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AssetApi#assetDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetFormats"></a>
## **assetFormats** {#assetformats}
> Formats assetFormats(asset, transferables)

/asset/\{asset\}/formats [GET] Scoped To Asset

Retrieves the formats available for a specified asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

[**Formats**](../models/Formats)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetReclassify"></a>
## **assetReclassify** {#assetreclassify}
> Asset assetReclassify(transferables, assetReclassification)

/asset/reclassify [POST]

Retrieves the formats available for a specified asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **assetReclassification** | [**AssetReclassification**](../models/AssetReclassification)| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. | [optional]

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetScoresIncrement"></a>
## **assetScoresIncrement** {#assetscoresincrement}
> assetScoresIncrement(asset, seededScoreIncrement)

/asset/\{asset\}/scores/increment [POST]

Increments the scores associated with the specified asset based on the provided SeededScoreIncrement data in the request body.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetSnapshot"></a>
## **assetSnapshot** {#assetsnapshot}
> Asset assetSnapshot(asset, transferables)

/asset/\{asset\} [GET] Scoped To Asset

Retrieves the snapshot of a specific asset

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSnapshotPost"></a>
## **assetSnapshotPost** {#assetsnapshotpost}
> Asset assetSnapshotPost(asset, transferables, seededAccessor)

/asset/\{asset\} [POST] Scoped to an Asset

Retrieves a snapshot of a specific asset, along with the user requesting the snapshot.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **seededAccessor** | [**SeededAccessor**](../models/SeededAccessor)|  | [optional]

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="assetSpecificAssetActivities"></a>
## **assetSpecificAssetActivities** {#assetspecificassetactivities}
> Activities assetSpecificAssetActivities(asset, transferables)

/asset/\{asset\}/activities [GET]

Retrieves activity events specific to the given asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

[**Activities**](../models/Activities)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSpecificAssetConversations"></a>
## **assetSpecificAssetConversations** {#assetspecificassetconversations}
> Conversations assetSpecificAssetConversations(asset, transferables)

/asset/\{asset\}/conversations [GET]

Retrieves conversations specific to the given asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

[**Conversations**](../models/Conversations)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetSpecificAssetExport"></a>
## **assetSpecificAssetExport** {#assetspecificassetexport}
> ExportedAsset assetSpecificAssetExport(asset, exportType)

/asset/\{asset\}/export [GET]

Retrieves an export version of the specified asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **exportType** | **kotlin.String**| This specifies the type of export the user wants. | [enum: HTML, MD]

### Return type

[**ExportedAsset**](../models/ExportedAsset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="assetUpdate"></a>
## **assetUpdate** {#assetupdate}
> Asset assetUpdate(transferables, asset)

/asset/update [POST] Scoped to Asset

Allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = AssetApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val asset : Asset =  // Asset | This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.
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
 **asset** | [**Asset**](../models/Asset)| This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. | [optional]

### Return type

[**Asset**](../models/Asset)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

