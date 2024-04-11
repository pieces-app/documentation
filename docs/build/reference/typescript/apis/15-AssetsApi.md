# Assets Model API

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
[**assetsStreamIdentifiers**](AssetsApi#assetsstreamidentifiers) | **GET** /assets/stream/identifiers | /assets/stream/identifiers [WS]
[**getAssetsStreamTransferables**](AssetsApi#getassetsstreamtransferables) | **GET** /assets/stream/transferables | /assets/stream/transferables [WS]
[**streamAssets**](AssetsApi#streamassets) | **GET** /assets/stream | /assets/stream [WS]


## **assetsCreateNewAsset** {#assetscreatenewasset}
> Asset assetsCreateNewAsset()

Accepts a seeded (a structure that comes before an asset, and will be used in creation) asset and uploads it to Pieces. The response will be the newly created Asset object.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsCreateNewAssetRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Seed |  (optional)
    seed: ,
};

apiInstance.assetsCreateNewAsset(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seed** | **Seed**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Asset**](../models/Asset)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsDeleteAsset** {#assetsdeleteasset}
> string assetsDeleteAsset()

Deletes a specific asset from the system by providing its unique identifier (UID). Upon successful deletion, it returns the UID of the deleted asset.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsDeleteAssetRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.assetsDeleteAsset(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsDraft** {#assetsdraft}
> Seed assetsDraft()

Allows developers to input a Seed and receive a drafted asset with preprocessed information. No data is persisted; this is solely an input/output endpoint.  For images, it returns the original Seed.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsDraftRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Seed (optional)
    seed: ,
};

apiInstance.assetsDraft(body).then((data: Seed) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seed** | **Seed**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Seed**](../models/Seed)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsGetRecommendedAssets** {#assetsgetrecommendedassets}
> Assets assetsGetRecommendedAssets()

Expects a SeededAssetsRecommendation Model in the request body, containing assets and interactions. Returns an Assets Model suitable for UI.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsGetRecommendedAssetsRequest = {
    // SeededAssetsRecommendation | The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. (optional)
    seededAssetsRecommendation: ,
};

apiInstance.assetsGetRecommendedAssets(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededAssetsRecommendation** | **SeededAssetsRecommendation**| The body of the request will be an SeededAssetsRecommendation Model with interaction meta data included at body.interactions.iterable and then the corrresponding index-paired body.assets.iterable with a fully populated assets array with fully sub-populated formats. |


### Return Model type

[**Assets**](../models/Assets)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsGetRelatedAssets** {#assetsgetrelatedassets}
> Assets assetsGetRelatedAssets()

Retrieves one or more related assets when provided with one or more input assets.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsGetRelatedAssetsRequest = {
    // Assets | The body of the request is an object (Assets Model) with iterable internally. (optional)
    assets: ,
};

apiInstance.assetsGetRelatedAssets(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Assets**| The body of the request is an object (Assets Model) with iterable internally. |


### Return Model type

[**Assets**](../models/Assets)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsIdentifiersSnapshot** {#assetsidentifierssnapshot}
> FlattenedAssets assetsIdentifiersSnapshot()

Retrieves all asset IDs associated with your account.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsIdentifiersSnapshotRequest = {
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.assetsIdentifiersSnapshot(body).then((data: FlattenedAssets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return Model type

[**FlattenedAssets**](../models/FlattenedAssets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsPseudoSnapshot** {#assetspseudosnapshot}
> PseudoAssets assetsPseudoSnapshot()

Retrieves a snapshot exclusively containing pseudo Assets from your Pieces drive.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

apiInstance.assetsPseudoSnapshot().then((data: PseudoAssets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**PseudoAssets**](../models/PseudoAssets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSearchAssets** {#assetssearchassets}
> SearchedAssets assetsSearchAssets()

Performs a search across your pieces and returns Assets (the results) based on your query. Presently, it only requires your query to be sent in the body. It is mandatory to include searchable_tags (comma-separated values of tags) or a query string.  If a query is provided, a fuzzy search will be conducted. If searchable tags are provided, a tag-based search will be executed.  If neither are included, a 500 error will be returned.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

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
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | This is a string that you can use to search your assets. | (optional) defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **searchableTags** | [**string**] | This is a comma separated value of tags used for search. | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return Model type

[**SearchedAssets**](../models/SearchedAssets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSearchWithFilters** {#assetssearchwithfilters}
> AssetsSearchWithFiltersOutput assetsSearchWithFilters()

Enables searching through your pieces and returns Assets (the results) based on your query.  When sending a query in the request body, fuzzy search is applied.  Additionally, the request body can include a search space, currently as a list of UUIDs (and potentially Seeds in the future). Optional filters can also be included in the request body, represented as an iterable of filters, all of which are combined using AND operations.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsSearchWithFiltersRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
    // AssetsSearchWithFiltersInput |  (optional)
    assetsSearchWithFiltersInput: ,
};

apiInstance.assetsSearchWithFilters(body).then((data: AssetsSearchWithFiltersOutput) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetsSearchWithFiltersInput** | **AssetsSearchWithFiltersInput**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return Model type

[**AssetsSearchWithFiltersOutput**](../models/AssetsSearchWithFiltersOutput)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **assetsSnapshot** {#assetssnapshot}
> Assets assetsSnapshot()

Get all of the users Assets.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // boolean | This will let us know if a developer, wants a snapshot related to suggested content or normal content (optional)
    suggested: true,
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
};

apiInstance.assetsSnapshot(body).then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **suggested** | [**boolean**] | This will let us know if a developer, wants a snapshot related to suggested content or normal content | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return Model type

[**Assets**](../models/Assets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsSpecificAssetFormatsSnapshot** {#assetsspecificassetformatssnapshot}
> Formats assetsSpecificAssetFormatsSnapshot()

Retrieves the available formats for a specific asset identified by its ID

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsSpecificAssetFormatsSnapshotRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetsSpecificAssetFormatsSnapshot(body).then((data: Formats) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Formats**](../models/Formats)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **assetsSpecificAssetSnapshot** {#assetsspecificassetsnapshot}
> Asset assetsSpecificAssetSnapshot()

Allows clients to retrieve details of a specific asset by providing its UUID in the path.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

const body: Pieces.AssetsSpecificAssetSnapshotRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.assetsSpecificAssetSnapshot(body).then((data: Asset) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Asset**](../models/Asset)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | A specific asset per the provided asset id. |  -  |
**410** | Asset no longer exists and is Gone. |  -  |

## **assetsStreamIdentifiers** {#assetsstreamidentifiers}
> StreamedIdentifiers assetsStreamIdentifiers()

Provides a WebSocket connection that emits changes to your asset\'s identifiers (UUIDs).

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

apiInstance.assetsStreamIdentifiers().then((data: StreamedIdentifiers) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**StreamedIdentifiers**](../models/StreamedIdentifiers)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **getAssetsStreamTransferables** {#getassetsstreamtransferables}
> Assets getAssetsStreamTransferables()

Provides a WebSocket connection that emits changes to your assets, including their transferable.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

apiInstance.getAssetsStreamTransferables().then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Assets**](../models/Assets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **streamAssets** {#streamassets}
> Assets streamAssets()

Provides a WebSocket connection that emits changes to your assets.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.AssetsApi(configuration)

apiInstance.streamAssets().then((data: Assets) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Assets**](../models/Assets)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


