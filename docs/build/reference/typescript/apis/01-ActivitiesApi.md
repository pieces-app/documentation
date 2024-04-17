---
title: Activities API | TypeScript SDK
---

# Activities API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesCreateNewActivity**](ActivitiesApi#activitiescreatenewactivity) | **POST** /activities/create | /activities/create [POST]
[**activitiesDeleteSpecificActivity**](ActivitiesApi#activitiesdeletespecificactivity) | **POST** /activities/\{activity\}/delete | /activities/\{activity\}/delete [POST]
[**activitiesSnapshot**](ActivitiesApi#activitiessnapshot) | **GET** /activities | /activities [GET]


## **activitiesCreateNewActivity** {#activitiescreatenewactivity}
> Activity activitiesCreateNewActivity()

This will create a new Activity.

### Example {#activitiescreatenewactivity-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ActivitiesApi(configuration)

const body: Pieces.ActivitiesCreateNewActivityRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// SeededActivity (optional)
seededActivity: ,
};

apiInstance.activitiesCreateNewActivity(body).then((data: Activity) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#activitiescreatenewactivity-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededActivity** | **SeededActivity**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#activitiescreatenewactivity-return-type}

[**Activity**](../models/Activity)

### HTTP request headers {#activitiescreatenewactivity-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#activitiescreatenewactivity-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **activitiesDeleteSpecificActivity** {#activitiesdeletespecificactivity}
> activitiesDeleteSpecificActivity()

This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.

### Example {#activitiesdeletespecificactivity-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ActivitiesApi(configuration)

const body: Pieces.ActivitiesDeleteSpecificActivityRequest = {
// string | This is a specific activity uuid.
activity: activity_example,
};

apiInstance.activitiesDeleteSpecificActivity(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#activitiesdeletespecificactivity-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | [**string**] | This is a specific activity uuid. | defaults to undefined


### Return type {#activitiesdeletespecificactivity-return-type}

void (empty response body)

### HTTP request headers {#activitiesdeletespecificactivity-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#activitiesdeletespecificactivity-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **activitiesSnapshot** {#activitiessnapshot}
> Activities activitiesSnapshot()

This will get a snapshot of all of the activities

### Example {#activitiessnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ActivitiesApi(configuration)

const body: Pieces.ActivitiesSnapshotRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. (optional)
pseudo: true,
};

apiInstance.activitiesSnapshot(body).then((data: Activities) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#activitiessnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined
 **pseudo** | [**boolean**] | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | (optional) defaults to undefined


### Return type {#activitiessnapshot-return-type}

[**Activities**](../models/Activities)

### HTTP request headers {#activitiessnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#activitiessnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


