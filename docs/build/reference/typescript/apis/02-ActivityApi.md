---
title: Activity API | TypeScript SDK
---

# Activity API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesSpecificActivitySnapshot**](Activity API#activitiesspecificactivitysnapshot) | **GET** /activity/\{activity\} | /activity/\{activity\} [GET]
[**activityIdentifiersSnapshot**](Activity API#activityidentifierssnapshot) | **GET** /activity/identifiers | /activity/identifiers [GET]
[**activityUpdate**](Activity API#activityupdate) | **POST** /activity/update | /activity/update [POST]


## **activitiesSpecificActivitySnapshot** {#activitiesspecificactivitysnapshot}
> Activity activitiesSpecificActivitySnapshot()

This will attempt to get a specific activity.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Activity API(configuration)

const body: Pieces.ActivitiesSpecificActivitySnapshotRequest = {
    // string | This is a specific activity uuid.
    activity: activity_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.activitiesSpecificActivitySnapshot(body).then((data: Activity) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | [**string**] | This is a specific activity uuid. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Activity**](../models/Activity)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | Activity was not found. |  -  |
**500** | Internal Server Error |  -  |

## **activityIdentifiersSnapshot** {#activityidentifierssnapshot}
> FlattenedActivities activityIdentifiersSnapshot()

This is going to return all the identifiers of the activity event in order of most recent -> oldest.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Activity API(configuration)

const body: Pieces.ActivityIdentifiersSnapshotRequest = {
    // boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
    pseudo: true,
    // 'CREATED' | 'UPDATED' | 'DELETED' | 'REFERENCED' | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. (optional)
    activityFilterEnum: activityFilterEnum_example,
};

apiInstance.activityIdentifiersSnapshot(body).then((data: FlattenedActivities) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined
 **activityFilterEnum** | [**&#39;CREATED&#39; | &#39;UPDATED&#39; | &#39;DELETED&#39; | &#39;REFERENCED&#39;**]**Array\<&#39;CREATED&#39; &#124; &#39;UPDATED&#39; &#124; &#39;DELETED&#39; &#124; &#39;REFERENCED&#39;\>** | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. | (optional) defaults to undefined


### Return type

[**FlattenedActivities**](../models/FlattenedActivities)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **activityUpdate** {#activityupdate}
> Activity activityUpdate()

this will update a specific activity.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Activity API(configuration)

const body: Pieces.ActivityUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Activity (optional)
    activity: ,
};

apiInstance.activityUpdate(body).then((data: Activity) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | **Activity**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Activity**](../models/Activity)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


