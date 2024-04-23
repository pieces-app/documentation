---
title: Asset API | TypeScript SDK
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
> assetAssociateTag()

Associates a tag with a specified asset. It performs the same action as the tag equivalent.

### Example {#assetassociatetag-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetAssociateTagRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// string | tag id
tag: tag_example,
};

apiInstance.assetAssociateTag(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetassociatetag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **tag** | [**string**] | tag id | defaults to undefined


### Return type {#assetassociatetag-return-type}

void (empty response body)

### HTTP request headers {#assetassociatetag-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetassociatetag-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetAssociateWebsite** {#assetassociatewebsite}
> assetAssociateWebsite()

Associates a website with an asset. It performs the same action as its website equivalent.

### Example {#assetassociatewebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetAssociateWebsiteRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// string | website id
website: website_example,
};

apiInstance.assetAssociateWebsite(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetassociatewebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type {#assetassociatewebsite-return-type}

void (empty response body)

### HTTP request headers {#assetassociatewebsite-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetassociatewebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetAssociateWorkstreamSummary** {#assetassociateworkstreamsummary}
> assetAssociateWorkstreamSummary()

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#assetassociateworkstreamsummary-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetAssociateWorkstreamSummaryRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
};

apiInstance.assetAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetassociateworkstreamsummary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type {#assetassociateworkstreamsummary-return-type}

void (empty response body)

### HTTP request headers {#assetassociateworkstreamsummary-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetassociateworkstreamsummary-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetDisassociateTag** {#assetdisassociatetag}
> assetDisassociateTag()

Disassociates a tag from an asset. It performs the same action as the tag equivalent.

### Example {#assetdisassociatetag-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetDisassociateTagRequest = {
// string | tag id
tag: tag_example,
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetDisassociateTag(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetdisassociatetag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**string**] | tag id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#assetdisassociatetag-return-type}

void (empty response body)

### HTTP request headers {#assetdisassociatetag-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetdisassociatetag-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetDisassociateWebsite** {#assetdisassociatewebsite}
> assetDisassociateWebsite()

Disassociates a website from an asset. It performs the same action as the website equivalent.

### Example {#assetdisassociatewebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetDisassociateWebsiteRequest = {
// string | website id
website: website_example,
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetDisassociateWebsite(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetdisassociatewebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#assetdisassociatewebsite-return-type}

void (empty response body)

### HTTP request headers {#assetdisassociatewebsite-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetdisassociatewebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetDisassociateWorkstreamSummary** {#assetdisassociateworkstreamsummary}
> assetDisassociateWorkstreamSummary()

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#assetdisassociateworkstreamsummary-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetDisassociateWorkstreamSummaryRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
};

apiInstance.assetDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetdisassociateworkstreamsummary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type {#assetdisassociateworkstreamsummary-return-type}

void (empty response body)

### HTTP request headers {#assetdisassociateworkstreamsummary-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#assetdisassociateworkstreamsummary-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetFormats** {#assetformats}
> Formats assetFormats()

Retrieves the formats available for a specified asset.

### Example {#assetformats-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetFormatsRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.assetFormats(body).then((data: Formats) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetformats-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetformats-return-type}

[**Formats**](../models/Formats)

### HTTP request headers {#assetformats-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#assetformats-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetReclassify** {#assetreclassify}
> Asset assetReclassify()

Retrieves the formats available for a specified asset.

### Example {#assetreclassify-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetReclassifyRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// AssetReclassification | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. (optional)
assetReclassification: ,
};

apiInstance.assetReclassify(body).then((data: Asset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetreclassify-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetReclassification** | **AssetReclassification**| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetreclassify-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetreclassify-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#assetreclassify-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetScoresIncrement** {#assetscoresincrement}
> assetScoresIncrement()

Increments the scores associated with the specified asset based on the provided SeededScoreIncrement data in the request body.

### Example {#assetscoresincrement-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetScoresIncrementRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// SeededScoreIncrement (optional)
seededScoreIncrement: ,
};

apiInstance.assetScoresIncrement(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetscoresincrement-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#assetscoresincrement-return-type}

void (empty response body)

### HTTP request headers {#assetscoresincrement-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#assetscoresincrement-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **assetSnapshot** {#assetsnapshot}
> Asset assetSnapshot()

Retrieves the snapshot of a specific asset

### Example {#assetsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetSnapshotRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.assetSnapshot(body).then((data: Asset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetsnapshot-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#assetsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Asset no longer exists and is Gone. |  -  |

## **assetSnapshotPost** {#assetsnapshotpost}
> Asset assetSnapshotPost()

Retrieves a snapshot of a specific asset, along with the user requesting the snapshot.

### Example {#assetsnapshotpost-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetSnapshotPostRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// SeededAccessor (optional)
seededAccessor: ,
};

apiInstance.assetSnapshotPost(body).then((data: Asset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetsnapshotpost-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAccessor** | **SeededAccessor**|  |
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetsnapshotpost-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetsnapshotpost-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#assetsnapshotpost-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetSpecificAssetActivities** {#assetspecificassetactivities}
> Activities assetSpecificAssetActivities()

Retrieves activity events specific to the given asset.

### Example {#assetspecificassetactivities-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetSpecificAssetActivitiesRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.assetSpecificAssetActivities(body).then((data: Activities) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetspecificassetactivities-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetspecificassetactivities-return-type}

[**Activities**](../models/Activities)

### HTTP request headers {#assetspecificassetactivities-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#assetspecificassetactivities-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetSpecificAssetConversations** {#assetspecificassetconversations}
> Conversations assetSpecificAssetConversations()

Retrieves conversations specific to the given asset.

### Example {#assetspecificassetconversations-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetSpecificAssetConversationsRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.assetSpecificAssetConversations(body).then((data: Conversations) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetspecificassetconversations-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetspecificassetconversations-return-type}

[**Conversations**](../models/Conversations)

### HTTP request headers {#assetspecificassetconversations-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#assetspecificassetconversations-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetSpecificAssetExport** {#assetspecificassetexport}
> ExportedAsset assetSpecificAssetExport()

Retrieves an export version of the specified asset.

### Example {#assetspecificassetexport-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetSpecificAssetExportRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// 'HTML' | 'MD' | This specifies the type of export the user wants.
exportType: exportType_example,
};

apiInstance.assetSpecificAssetExport(body).then((data: ExportedAsset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetspecificassetexport-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **exportType** | [**&#39;HTML&#39; | &#39;MD&#39;**]**Array\<&#39;HTML&#39; &#124; &#39;MD&#39;\>** | This specifies the type of export the user wants. | defaults to undefined


### Return type {#assetspecificassetexport-return-type}

[**ExportedAsset**](../models/ExportedAsset)

### HTTP request headers {#assetspecificassetexport-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#assetspecificassetexport-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetUpdate** {#assetupdate}
> Asset assetUpdate()

Allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset.

### Example {#assetupdate-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetApi(configuration)

const body: Pieces.AssetUpdateRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// Asset | This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. (optional)
asset: ,
};

apiInstance.assetUpdate(body).then((data: Asset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetupdate-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **Asset**| This endpoint allows the user to update an existing Asset. It accepts the Asset object that needs updating and returns the fully updated Asset. |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#assetupdate-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetupdate-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#assetupdate-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


