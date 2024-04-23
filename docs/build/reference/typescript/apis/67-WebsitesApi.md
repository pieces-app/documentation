---
title: Websites API | TypeScript SDK
---

# Websites API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**websitesCreateNewWebsite**](WebsitesApi#websitescreatenewwebsite) | **POST** /websites/create | /websites/create [POST]
[**websitesDeleteSpecificWebsite**](WebsitesApi#websitesdeletespecificwebsite) | **POST** /websites/\{website\}/delete | /websites/\{website\}/delete [POST]
[**websitesExists**](WebsitesApi#websitesexists) | **POST** /websites/exists | /websites/exists [POST]
[**websitesSnapshot**](WebsitesApi#websitessnapshot) | **GET** /websites | /websites [GET]


## **websitesCreateNewWebsite** {#websitescreatenewwebsite}
> Website websitesCreateNewWebsite()

This will create a website and attach it to a specific asset.

### Example {#websitescreatenewwebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsitesApi(configuration)

const body: Pieces.WebsitesCreateNewWebsiteRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// SeededWebsite (optional)
seededWebsite: ,
};

apiInstance.websitesCreateNewWebsite(body).then((data: Website) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitescreatenewwebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededWebsite** | **SeededWebsite**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#websitescreatenewwebsite-return-type}

[**Website**](../models/Website)

### HTTP request headers {#websitescreatenewwebsite-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#websitescreatenewwebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websitesDeleteSpecificWebsite** {#websitesdeletespecificwebsite}
> websitesDeleteSpecificWebsite()

This will delete a specific website!

### Example {#websitesdeletespecificwebsite-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsitesApi(configuration)

const body: Pieces.WebsitesDeleteSpecificWebsiteRequest = {
// string | website id
website: website_example,
};

apiInstance.websitesDeleteSpecificWebsite(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitesdeletespecificwebsite-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | [**string**] | website id | defaults to undefined


### Return type {#websitesdeletespecificwebsite-return-type}

void (empty response body)

### HTTP request headers {#websitesdeletespecificwebsite-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#websitesdeletespecificwebsite-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websitesExists** {#websitesexists}
> ExistingMetadata websitesExists()

This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.

### Example {#websitesexists-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsitesApi(configuration)

const body: Pieces.WebsitesExistsRequest = {
// ExistentMetadata (optional)
existentMetadata: ,
};

apiInstance.websitesExists(body).then((data: ExistingMetadata) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitesexists-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | **ExistentMetadata**|  |


### Return type {#websitesexists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### HTTP request headers {#websitesexists-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#websitesexists-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websitesSnapshot** {#websitessnapshot}
> Websites websitesSnapshot()

This will get a snapshot of all your websites.

### Example {#websitessnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WebsitesApi(configuration)

const body: Pieces.WebsitesSnapshotRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.websitesSnapshot(body).then((data: Websites) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#websitessnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#websitessnapshot-return-type}

[**Websites**](../models/Websites)

### HTTP request headers {#websitessnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#websitessnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


