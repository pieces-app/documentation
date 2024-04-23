---
title: Tags API | TypeScript SDK
---

# Tags API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreateNewTag**](TagsApi#tagscreatenewtag) | **POST** /tags/create | /tags/create [POST]
[**tagsDeleteSpecificTag**](TagsApi#tagsdeletespecifictag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tagsExists**](TagsApi#tagsexists) | **POST** /tags/exists | /tags/exists [POST]
[**tagsSnapshot**](TagsApi#tagssnapshot) | **GET** /tags | /tags [GET]


## **tagsCreateNewTag** {#tagscreatenewtag}
> Tag tagsCreateNewTag()

This will create a new tag.

### Example {#tagscreatenewtag-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.TagsApi(configuration)

const body: Pieces.TagsCreateNewTagRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// SeededTag (optional)
seededTag: ,
};

apiInstance.tagsCreateNewTag(body).then((data: Tag) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#tagscreatenewtag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTag** | **SeededTag**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#tagscreatenewtag-return-type}

[**Tag**](../models/Tag)

### HTTP request headers {#tagscreatenewtag-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#tagscreatenewtag-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tagsDeleteSpecificTag** {#tagsdeletespecifictag}
> tagsDeleteSpecificTag()

This will delete a specific tag.

### Example {#tagsdeletespecifictag-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.TagsApi(configuration)

const body: Pieces.TagsDeleteSpecificTagRequest = {
// string | tag id
tag: tag_example,
};

apiInstance.tagsDeleteSpecificTag(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#tagsdeletespecifictag-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**string**] | tag id | defaults to undefined


### Return type {#tagsdeletespecifictag-return-type}

void (empty response body)

### HTTP request headers {#tagsdeletespecifictag-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#tagsdeletespecifictag-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **tagsExists** {#tagsexists}
> ExistingMetadata tagsExists()

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example {#tagsexists-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.TagsApi(configuration)

const body: Pieces.TagsExistsRequest = {
// ExistentMetadata (optional)
existentMetadata: ,
};

apiInstance.tagsExists(body).then((data: ExistingMetadata) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#tagsexists-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | **ExistentMetadata**|  |


### Return type {#tagsexists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### HTTP request headers {#tagsexists-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#tagsexists-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tagsSnapshot** {#tagssnapshot}
> Tags tagsSnapshot()

This will get a snapshot of all of your tags.

### Example {#tagssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.TagsApi(configuration)

const body: Pieces.TagsSnapshotRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
};

apiInstance.tagsSnapshot(body).then((data: Tags) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#tagssnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#tagssnapshot-return-type}

[**Tags**](../models/Tags)

### HTTP request headers {#tagssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#tagssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


