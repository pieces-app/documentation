# Websites API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**websitesCreateNewWebsite**](WebsitesApi#websitescreatenewwebsite) | **POST** /websites/create
[**websitesDeleteSpecificWebsite**](WebsitesApi#websitesdeletespecificwebsite) | **POST** /websites/\{website\}/delete
[**websitesExists**](WebsitesApi#websitesexists) | **POST** /websites/exists
[**websitesSnapshot**](WebsitesApi#websitessnapshot) | **GET** /websites


## **websitesCreateNewWebsite**
> Website websitesCreateNewWebsite()

This will create a website and attach it to a specific asset.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WebsitesApi(configuration);

const body: Pieces.WebsitesCreateNewWebsiteRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededWebsite (optional)
    seededWebsite: ,
};

apiInstance.websitesCreateNewWebsite(body).then((data: Website) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededWebsite** | **SeededWebsite**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Website**](../models/Website)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websitesDeleteSpecificWebsite**
> websitesDeleteSpecificWebsite()

This will delete a specific website!

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WebsitesApi(configuration);

const body: Pieces.WebsitesDeleteSpecificWebsiteRequest = {
    // string | website id
    website: website_example,
};

apiInstance.websitesDeleteSpecificWebsite(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **website** | [**string**] | website id | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websitesExists**
> ExistingMetadata websitesExists()

This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WebsitesApi(configuration);

const body: Pieces.WebsitesExistsRequest = {
    // ExistentMetadata (optional)
    existentMetadata: ,
};

apiInstance.websitesExists(body).then((data: ExistingMetadata) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **existentMetadata** | **ExistentMetadata**|  |


### Return type

[**ExistingMetadata**](../models/ExistingMetadata)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websitesSnapshot**
> Websites websitesSnapshot()

This will get a snapshot of all your websites.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WebsitesApi(configuration);

const body: Pieces.WebsitesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.websitesSnapshot(body).then((data: Websites) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Websites**](../models/Websites)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


