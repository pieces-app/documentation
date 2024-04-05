# Website API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websiteAssociateAsset**](WebsiteApi#websiteassociateasset) | **POST** /website/\{website\}/assets/associate/\{asset\} | /website/\{website\}/assets/associate/\{asset\} [POST]
[**websiteAssociateConversation**](WebsiteApi#websiteassociateconversation) | **POST** /website/\{website\}/conversations/associate/\{conversation\} | /website/\{website\}/conversations/associate/\{conversation\} [POST]
[**websiteAssociatePerson**](WebsiteApi#websiteassociateperson) | **POST** /website/\{website\}/persons/associate/\{person\} | /website/\{website\}/persons/associate/\{person\} [POST]
[**websiteAssociateWorkstreamSummary**](WebsiteApi#websiteassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**websiteDisassociateAsset**](WebsiteApi#websitedisassociateasset) | **POST** /website/\{website\}/assets/disassociate/\{asset\} | /website/\{website\}/assets/disassociate/\{asset\} [POST]
[**websiteDisassociateConversation**](WebsiteApi#websitedisassociateconversation) | **POST** /website/\{website\}/conversations/disassociate/\{conversation\} | /website/\{website\}/conversations/disassociate/\{conversation\} [POST]
[**websiteDisassociatePerson**](WebsiteApi#websitedisassociateperson) | **POST** /website/\{website\}/persons/disassociate/\{person\} | /website/\{website\}/persons/disassociate/\{person\} [POST]
[**websiteDisassociateWorkstreamSummary**](WebsiteApi#websitedisassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**websiteScoresIncrement**](WebsiteApi#websitescoresincrement) | **POST** /website/\{website\}/scores/increment | \&#39;/website/\{website\}/scores/increment\&#39; [POST]
[**websiteUpdate**](WebsiteApi#websiteupdate) | **POST** /website/update | /website/update [POST]
[**websitesSpecificWebsiteSnapshot**](WebsiteApi#websitesspecificwebsitesnapshot) | **GET** /website/\{website\} | /website/\{website\} [GET]


## **websiteAssociateAsset**
> websiteAssociateAsset()

This will associate a website with a asset.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteAssociateAssetRequest = {
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
    // string | website id
    website: website_example,
};

apiInstance.websiteAssociateAsset(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteAssociateConversation**
> websiteAssociateConversation()

This will associate a website with a conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteAssociateConversationRequest = {
    // string | website id
    website: website_example,
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.websiteAssociateConversation(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteAssociatePerson**
> websiteAssociatePerson()

This will associate a website with a person.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteAssociatePersonRequest = {
    // string | website id
    website: website_example,
    // string | This is a uuid that represents a person.
    person: person_example,
};

apiInstance.websiteAssociatePerson(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteAssociateWorkstreamSummary**
> websiteAssociateWorkstreamSummary()

This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteAssociateWorkstreamSummaryRequest = {
    // string | website id
    website: website_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.websiteAssociateWorkstreamSummary(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteDisassociateAsset**
> websiteDisassociateAsset()

This will enable us to dissassociate a website from a asset.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteDisassociateAssetRequest = {
    // string | website id
    website: website_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.websiteDisassociateAsset(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteDisassociateConversation**
> websiteDisassociateConversation()

This will enable us to dissassociate a website from a conversation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteDisassociateConversationRequest = {
    // string | website id
    website: website_example,
    // string | This is the uuid of a conversation.
    conversation: conversation_example,
};

apiInstance.websiteDisassociateConversation(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteDisassociatePerson**
> websiteDisassociatePerson()

This will enable us to dissassociate a website from a person.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteDisassociatePersonRequest = {
    // string | website id
    website: website_example,
    // string | This is a uuid that represents a person.
    person: person_example,
};

apiInstance.websiteDisassociatePerson(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteDisassociateWorkstreamSummary**
> websiteDisassociateWorkstreamSummary()

This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteDisassociateWorkstreamSummaryRequest = {
    // string | website id
    website: website_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.websiteDisassociateWorkstreamSummary(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteScoresIncrement**
> websiteScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteScoresIncrementRequest = {
    // string | website id
    website: website_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.websiteScoresIncrement(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websiteUpdate**
> Website websiteUpdate()

This will update a specific website.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsiteUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Website (optional)
    website: ,
};

apiInstance.websiteUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **Website**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Website**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **websitesSpecificWebsiteSnapshot**
> Website websitesSpecificWebsiteSnapshot()

This will get a snapshot of a single website.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.WebsiteApi(configuration);

let body:.WebsiteApiWebsitesSpecificWebsiteSnapshotRequest = {
    // string | website id
    website: website_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.websitesSpecificWebsiteSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Website**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Website not found. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


