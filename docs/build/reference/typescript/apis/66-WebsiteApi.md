---
title: Website API | TypeScript SDK
---

# Website API

All URIs are relative to `http://localhost:1000`

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
[**websiteScoresIncrement**](WebsiteApi#websitescoresincrement) | **POST** /website/\{website\}/scores/increment | \'/website/\{website\}/scores/increment\' [POST]
[**websiteUpdate**](WebsiteApi#websiteupdate) | **POST** /website/update | /website/update [POST]
[**websitesSpecificWebsiteSnapshot**](WebsiteApi#websitesspecificwebsitesnapshot) | **GET** /website/\{website\} | /website/\{website\} [GET]


## **websiteAssociateAsset** {#websiteassociateasset}
> websiteAssociateAsset()

This will associate a website with a asset.

### Example {#websiteassociateasset-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteAssociateAssetRequest = {
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
// string | website id
website: website_example,
};

apiInstance.websiteAssociateAsset(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websiteassociateasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined
 **website** | [**string**] | website id | defaults to undefined


### Return type {#websiteassociateasset-return-type}

void (empty response body)

### HTTP request headers {#websiteassociateasset-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websiteassociateasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteAssociateConversation** {#websiteassociateconversation}
> websiteAssociateConversation()

This will associate a website with a conversation.

### Example {#websiteassociateconversation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteAssociateConversationRequest = {
// string | website id
website: website_example,
// string | This is the uuid of a conversation.
conversation: conversation_example,
};

apiInstance.websiteAssociateConversation(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websiteassociateconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type {#websiteassociateconversation-return-type}

void (empty response body)

### HTTP request headers {#websiteassociateconversation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websiteassociateconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteAssociatePerson** {#websiteassociateperson}
> websiteAssociatePerson()

This will associate a website with a person.

### Example {#websiteassociateperson-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteAssociatePersonRequest = {
// string | website id
website: website_example,
// string | This is a uuid that represents a person.
person: person_example,
};

apiInstance.websiteAssociatePerson(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websiteassociateperson-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type {#websiteassociateperson-return-type}

void (empty response body)

### HTTP request headers {#websiteassociateperson-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websiteassociateperson-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteAssociateWorkstreamSummary** {#websiteassociateworkstreamsummary}
> websiteAssociateWorkstreamSummary()

This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websiteassociateworkstreamsummary-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteAssociateWorkstreamSummaryRequest = {
// string | website id
website: website_example,
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
};

apiInstance.websiteAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websiteassociateworkstreamsummary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type {#websiteassociateworkstreamsummary-return-type}

void (empty response body)

### HTTP request headers {#websiteassociateworkstreamsummary-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websiteassociateworkstreamsummary-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteDisassociateAsset** {#websitedisassociateasset}
> websiteDisassociateAsset()

This will enable us to dissassociate a website from a asset.

### Example {#websitedisassociateasset-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteDisassociateAssetRequest = {
// string | website id
website: website_example,
// string | The id (uuid) of the asset that you are trying to access.
asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.websiteDisassociateAsset(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitedisassociateasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


### Return type {#websitedisassociateasset-return-type}

void (empty response body)

### HTTP request headers {#websitedisassociateasset-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websitedisassociateasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteDisassociateConversation** {#websitedisassociateconversation}
> websiteDisassociateConversation()

This will enable us to dissassociate a website from a conversation.

### Example {#websitedisassociateconversation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteDisassociateConversationRequest = {
// string | website id
website: website_example,
// string | This is the uuid of a conversation.
conversation: conversation_example,
};

apiInstance.websiteDisassociateConversation(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitedisassociateconversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **conversation** | [**string**] | This is the uuid of a conversation. | defaults to undefined


### Return type {#websitedisassociateconversation-return-type}

void (empty response body)

### HTTP request headers {#websitedisassociateconversation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websitedisassociateconversation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteDisassociatePerson** {#websitedisassociateperson}
> websiteDisassociatePerson()

This will enable us to dissassociate a website from a person.

### Example {#websitedisassociateperson-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteDisassociatePersonRequest = {
// string | website id
website: website_example,
// string | This is a uuid that represents a person.
person: person_example,
};

apiInstance.websiteDisassociatePerson(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitedisassociateperson-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type {#websitedisassociateperson-return-type}

void (empty response body)

### HTTP request headers {#websitedisassociateperson-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websitedisassociateperson-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteDisassociateWorkstreamSummary** {#websitedisassociateworkstreamsummary}
> websiteDisassociateWorkstreamSummary()

This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websitedisassociateworkstreamsummary-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteDisassociateWorkstreamSummaryRequest = {
// string | website id
website: website_example,
// string | This is a identifier that is used to identify a specific workstream_summary.
workstreamSummary: workstreamSummary_example,
};

apiInstance.websiteDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitedisassociateworkstreamsummary-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type {#websitedisassociateworkstreamsummary-return-type}

void (empty response body)

### HTTP request headers {#websitedisassociateworkstreamsummary-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websitedisassociateworkstreamsummary-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteScoresIncrement** {#websitescoresincrement}
> websiteScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#websitescoresincrement-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteScoresIncrementRequest = {
// string | website id
website: website_example,
// SeededScoreIncrement (optional)
seededScoreIncrement: ,
};

apiInstance.websiteScoresIncrement(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitescoresincrement-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **website** | [**string**] | website id | defaults to undefined


### Return type {#websitescoresincrement-return-type}

void (empty response body)

### HTTP request headers {#websitescoresincrement-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#websitescoresincrement-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websiteUpdate** {#websiteupdate}
> Website websiteUpdate()

This will update a specific website.

### Example {#websiteupdate-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsiteUpdateRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// Website (optional)
website: ,
};

apiInstance.websiteUpdate(body).then((data: Website) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websiteupdate-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **Website**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#websiteupdate-return-type}

[**Website**](../models/Website)

### HTTP request headers {#websiteupdate-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#websiteupdate-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websitesSpecificWebsiteSnapshot** {#websitesspecificwebsitesnapshot}
> Website websitesSpecificWebsiteSnapshot()

This will get a snapshot of a single website.

### Example {#websitesspecificwebsitesnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsiteApi(configuration)

const body: Pieces.WebsitesSpecificWebsiteSnapshotRequest = {
// string | website id
website: website_example,
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.websitesSpecificWebsiteSnapshot(body).then((data: Website) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitesspecificwebsitesnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#websitesspecificwebsitesnapshot-return-type}

[**Website**](../models/Website)

### HTTP request headers {#websitesspecificwebsitesnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#websitesspecificwebsitesnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Website not found. |  -  |


