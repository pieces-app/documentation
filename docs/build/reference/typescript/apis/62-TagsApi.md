# Tags Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreateNewTag**](TagsApi#tagscreatenewtag) | **POST** /tags/create | /tags/create [POST]
[**tagsDeleteSpecificTag**](TagsApi#tagsdeletespecifictag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tagsExists**](TagsApi#tagsexists) | **POST** /tags/exists | /tags/exists [POST]
[**tagsSnapshot**](TagsApi#tagssnapshot) | **GET** /tags | /tags [GET]


## **tagsCreateNewTag** {#tagscreatenewtag}
> Tag tagsCreateNewTag()

This will create a new tag.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTag** | **SeededTag**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Tag**](../models/Tag)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tagsDeleteSpecificTag** {#tagsdeletespecifictag}
> tagsDeleteSpecificTag()

This will delete a specific tag.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**string**] | tag id | defaults to undefined


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **tagsExists** {#tagsexists}
> ExistingMetadata tagsExists()

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | **ExistentMetadata**|  |


### Return Model type

[**ExistingMetadata**](../models/ExistingMetadata)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **tagsSnapshot** {#tagssnapshot}
> Tags tagsSnapshot()

This will get a snapshot of all of your tags.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**Tags**](../models/Tags)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


