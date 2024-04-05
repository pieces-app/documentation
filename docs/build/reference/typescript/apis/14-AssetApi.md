# Asset API

All URIs are relative to *http://localhost:1000*

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
[**assetScoresIncrement**](AssetApi#assetscoresincrement) | **POST** /asset/\{asset\}/scores/increment | \&#39;/asset/\{asset\}/scores/increment\&#39; [POST]
[**assetSnapshot**](AssetApi#assetsnapshot) | **GET** /asset/\{asset\} | /asset/\{asset\} [GET] Scoped To Asset
[**assetSnapshotPost**](AssetApi#assetsnapshotpost) | **POST** /asset/\{asset\} | /asset/\{asset\} [POST] Scoped to an Asset
[**assetSpecificAssetActivities**](AssetApi#assetspecificassetactivities) | **GET** /asset/\{asset\}/activities | /asset/\{asset\}/activities [GET]
[**assetSpecificAssetConversations**](AssetApi#assetspecificassetconversations) | **GET** /asset/\{asset\}/conversations | /asset/\{asset\}/conversations [GET]
[**assetSpecificAssetExport**](AssetApi#assetspecificassetexport) | **GET** /asset/\{asset\}/export | [GET] /asset/\{asset\}/export
[**assetUpdate**](AssetApi#assetupdate) | **POST** /asset/update | /asset/update [POST] Scoped to Asset


## **assetAssociateTag**
> assetAssociateTag()

This will associate a tag with a asset. This will do the same thing as the tag equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetAssociateTagRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // string | tag id
    tag: tag_example,
};

apiInstance.assetAssociateTag(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **tag** | [**string**] | tag id | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetAssociateWebsite**
> assetAssociateWebsite()

This will associate a website with a asset. This will do the same thing as the website equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetAssociateWebsiteRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // string | website id
    website: website_example,
};

apiInstance.assetAssociateWebsite(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetAssociateWorkstreamSummary**
> assetAssociateWorkstreamSummary()

This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetAssociateWorkstreamSummaryRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.assetAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetDisassociateTag**
> assetDisassociateTag()

This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetDisassociateTagRequest = {
    // string | tag id
    tag: tag_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetDisassociateTag(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**string**] | tag id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetDisassociateWebsite**
> assetDisassociateWebsite()

This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetDisassociateWebsiteRequest = {
    // string | website id
    website: website_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetDisassociateWebsite(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetDisassociateWorkstreamSummary**
> assetDisassociateWorkstreamSummary()

This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetDisassociateWorkstreamSummaryRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.assetDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetFormats**
> Formats assetFormats()

Get the formats for a given asset.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetFormatsRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetFormats(body).then((data: Formats) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Formats**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assetReclassify**
> Asset assetReclassify()

This will update the classification of this asset to the proper classification.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetReclassifyRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // AssetReclassification | This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. (optional)
    assetReclassification: ,
};

apiInstance.assetReclassify(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetReclassification** | **AssetReclassification**| This will accept a Reclassification that includeds and assetand a language that this assets needs to be reclassified to. We will just return an Asset that has been reclassified. |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Asset**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assetScoresIncrement**
> assetScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetScoresIncrementRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.assetScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **assetSnapshot**
> Asset assetSnapshot()

Get the snapshot of a specific asset.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetSnapshotRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetSnapshot(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Asset**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Asset no longer exists and is Gone. |  -  |



## **assetSnapshotPost**
> Asset assetSnapshotPost()

Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetSnapshotPostRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededAccessor (optional)
    seededAccessor: ,
};

apiInstance.assetSnapshotPost(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAccessor** | **SeededAccessor**|  |
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Asset**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **assetSpecificAssetActivities**
> Activities assetSpecificAssetActivities()

This will get a specific asset\'s activity events

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetSpecificAssetActivitiesRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetSpecificAssetActivities(body).then((data: Activities) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Activities**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **assetSpecificAssetConversations**
> Conversations assetSpecificAssetConversations()

This will get a specific asset\'s conversations

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetSpecificAssetConversationsRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetSpecificAssetConversations(body).then((data: Conversations) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Conversations**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **assetSpecificAssetExport**
> ExportedAsset assetSpecificAssetExport()

This will return a export version of your asset.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetSpecificAssetExportRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // 'HTML' | 'MD' | This specifies the type of export the user wants.
    exportType: exportType_example,
};

apiInstance.assetSpecificAssetExport(body).then((data: ExportedAsset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **exportType** | [**&#39;HTML&#39; | &#39;MD&#39;**]**Array\<&#39;HTML&#39; &#124; &#39;MD&#39;\>** | This specifies the type of export the user wants. | defaults to undefined


### Return type

**ExportedAsset**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **assetUpdate**
> Asset assetUpdate()

This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetApi(configuration);

const body: Pieces.AssetUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Asset | This is the updated Asset that needs to be updated in our db. (optional)
    asset: ,
};

apiInstance.assetUpdate(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **Asset**| This is the updated Asset that needs to be updated in our db. |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Asset**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




