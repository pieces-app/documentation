# Assets API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**assetsCreateNewAsset**](AssetsApi#assetscreatenewasset) | **POST** /assets/create
[**assetsDeleteAsset**](AssetsApi#assetsdeleteasset) | **POST** /assets/\{asset\}/delete
[**assetsDraft**](AssetsApi#assetsdraft) | **POST** /assets/draft
[**assetsGetRecommendedAssets**](AssetsApi#assetsgetrecommendedassets) | **GET** /assets/recommended
[**assetsGetRelatedAssets**](AssetsApi#assetsgetrelatedassets) | **GET** /assets/related
[**assetsIdentifiersSnapshot**](AssetsApi#assetsidentifierssnapshot) | **GET** /assets/identifiers
[**assetsPseudoSnapshot**](AssetsApi#assetspseudosnapshot) | **GET** /assets/pseudo
[**assetsSearchAssets**](AssetsApi#assetssearchassets) | **GET** /assets/search
[**assetsSearchWithFilters**](AssetsApi#assetssearchwithfilters) | **POST** /assets/search
[**assetsSnapshot**](AssetsApi#assetssnapshot) | **GET** /assets
[**assetsSpecificAssetFormatsSnapshot**](AssetsApi#assetsspecificassetformatssnapshot) | **GET** /assets/\{asset\}/formats
[**assetsSpecificAssetSnapshot**](AssetsApi#assetsspecificassetsnapshot) | **GET** /assets/\{asset\}
[**assetsStreamIdentifiers**](AssetsApi#assetsstreamidentifiers) | **GET** /assets/stream/identifiers
[**getAssetsStreamTransferables**](AssetsApi#getassetsstreamtransferables) | **GET** /assets/stream/transferables
[**streamAssets**](AssetsApi#streamassets) | **GET** /assets/stream


## **assetsCreateNewAsset**
> Asset assetsCreateNewAsset()

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsCreateNewAssetRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Seed |  (optional)
    seed: ,
};

apiInstance.assetsCreateNewAsset(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seed** | **Seed**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Asset**](../models/Asset)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsDeleteAsset**
> string assetsDeleteAsset()

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsDeleteAssetRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetsDeleteAsset(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsDraft**
> Seed assetsDraft()

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsDraftRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Seed (optional)
    seed: ,
};

apiInstance.assetsDraft(body).then((data: Seed) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seed** | **Seed**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Seed**](../models/Seed)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsGetRecommendedAssets**
> Assets assetsGetRecommendedAssets()

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsGetRecommendedAssetsRequest = {
    // SeededAssetsRecommendation | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. (optional)
    seededAssetsRecommendation: ,
};

apiInstance.assetsGetRecommendedAssets(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededAssetsRecommendation** | **SeededAssetsRecommendation**| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. |


### Return type

[**Assets**](../models/Assets)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsGetRelatedAssets**
> Assets assetsGetRelatedAssets()

Retrieves one or more related assets when provided with one or more input assets.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsGetRelatedAssetsRequest = {
    // Assets | The body of the request is an object (Assets Model) with iterable internally. (optional)
    assets: ,
};

apiInstance.assetsGetRelatedAssets(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **assets** | **Assets**| The body of the request is an object (Assets Model) with iterable internally. |


### Return type

[**Assets**](../models/Assets)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsIdentifiersSnapshot**
> FlattenedAssets assetsIdentifiersSnapshot()

Retrieves all asset IDs associated with your account.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsIdentifiersSnapshotRequest = {
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.assetsIdentifiersSnapshot(body).then((data: FlattenedAssets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

[**FlattenedAssets**](../models/FlattenedAssets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsPseudoSnapshot**
> PseudoAssets assetsPseudoSnapshot()

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

apiInstance.assetsPseudoSnapshot().then((data: PseudoAssets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**PseudoAssets**](../models/PseudoAssets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSearchAssets**
> SearchedAssets assetsSearchAssets()

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsSearchAssetsRequest = {
    // string | This is a string that you can use to search your assets. (optional)
    query: query_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // string | This is a comma separated value of tags used for search. (optional)
    searchableTags: searchableTags_example,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.assetsSearchAssets(body).then((data: SearchedAssets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **query** | [**string**] | This is a string that you can use to search your assets. | (optional) defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **searchableTags** | [**string**] | This is a comma separated value of tags used for search. | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

[**SearchedAssets**](../models/SearchedAssets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSearchWithFilters**
> AssetsSearchWithFiltersOutput assetsSearchWithFilters()

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsSearchWithFiltersRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
    // AssetsSearchWithFiltersInput |  (optional)
    assetsSearchWithFiltersInput: ,
};

apiInstance.assetsSearchWithFilters(body).then((data: AssetsSearchWithFiltersOutput) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **assetsSearchWithFiltersInput** | **AssetsSearchWithFiltersInput**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSnapshot**
> Assets assetsSnapshot()

Get all of the users Assets.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // boolean | This will let us know if a developer, wants a snapshot related to suggested content or normal content (optional)
    suggested: true,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.assetsSnapshot(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **suggested** | [**boolean**] | This will let us know if a developer, wants a snapshot related to suggested content or normal content | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type

[**Assets**](../models/Assets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsSpecificAssetFormatsSnapshot**
> Formats assetsSpecificAssetFormatsSnapshot()

Retrieves the available formats for a specific asset identified by its ID

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsSpecificAssetFormatsSnapshotRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetsSpecificAssetFormatsSnapshot(body).then((data: Formats) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Formats**](../models/Formats)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsSpecificAssetSnapshot**
> Asset assetsSpecificAssetSnapshot()

Allows clients to retrieve details of a specific asset by providing its UUID in the path.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

const body: Pieces.AssetsSpecificAssetSnapshotRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetsSpecificAssetSnapshot(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Asset**](../models/Asset)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | A specific asset per the provided asset id. |  -  |
**410** | Asset no longer exists and is Gone. |  -  |

## **assetsStreamIdentifiers**
> StreamedIdentifiers assetsStreamIdentifiers()

Streams the identifiers (UUIDs) of assets that have been updated via a WebSocket connection.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

apiInstance.assetsStreamIdentifiers().then((data: StreamedIdentifiers) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **getAssetsStreamTransferables**
> Assets getAssetsStreamTransferables()

Provides a WebSocket connection that emits changes to your assets, including their transferable.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

apiInstance.getAssetsStreamTransferables().then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Assets**](../models/Assets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **streamAssets**
> Assets streamAssets()

IMPORTANT: This stream emits changes without transferables in a specific format. If transferables are required, please use /assets/stream/transferables.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.AssetsApi(configuration);

apiInstance.streamAssets().then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Assets**](../models/Assets)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


