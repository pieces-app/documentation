---
title: Activities API | Kotlin SDK
---

# Activities API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesCreateNewActivity**](#activitiescreatenewactivity) | **POST** /activities/create | /activities/create [POST]
[**activitiesDeleteSpecificActivity**](#activitiesdeletespecificactivity) | **POST** /activities/\{activity\}/delete | /activities/\{activity\}/delete [POST]
[**activitiesSnapshot**](#activitiessnapshot) | **GET** /activities | /activities [GET]


## **activitiesCreateNewActivity** {#activitiescreatenewactivity}
> Activity activitiesCreateNewActivity(transferables, seededActivity)

/activities/create [POST]

This will create a new Activity.

### Example {#activitiescreatenewactivity-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivitiesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededActivity : SeededActivity =  // SeededActivity | 
try {
    val result : Activity = apiInstance.activitiesCreateNewActivity(transferables, seededActivity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivitiesApi#activitiesCreateNewActivity")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivitiesApi#activitiesCreateNewActivity")
    e.printStackTrace()
}
```

### Parameters {#activitiescreatenewactivity-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededActivity** | [**SeededActivity**](../models/SeededActivity)|  | [optional]

### Return type {#activitiescreatenewactivity-return-type}

[**Activity**](../models/Activity)

### Authorization {#activitiescreatenewactivity-authorization}

No authorization required

### HTTP request headers {#activitiescreatenewactivity-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **activitiesDeleteSpecificActivity** {#activitiesdeletespecificactivity}
> activitiesDeleteSpecificActivity(activity)

/activities/\{activity\}/delete [POST]

This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.

### Example {#activitiesdeletespecificactivity-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivitiesApi()
val activity : kotlin.String = activity_example // kotlin.String | This is a specific activity uuid.
try {
    apiInstance.activitiesDeleteSpecificActivity(activity)
} catch (e: ClientException) {
    println("4xx response calling ActivitiesApi#activitiesDeleteSpecificActivity")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivitiesApi#activitiesDeleteSpecificActivity")
    e.printStackTrace()
}
```

### Parameters {#activitiesdeletespecificactivity-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | **kotlin.String**| This is a specific activity uuid. |

### Return type {#activitiesdeletespecificactivity-return-type}

null (empty response body)

### Authorization {#activitiesdeletespecificactivity-authorization}

No authorization required

### HTTP request headers {#activitiesdeletespecificactivity-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **activitiesSnapshot** {#activitiessnapshot}
> Activities activitiesSnapshot(transferables, pseudo)

/activities [GET]

This will get a snapshot of all of the activities

### Example {#activitiessnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivitiesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
try {
    val result : Activities = apiInstance.activitiesSnapshot(transferables, pseudo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivitiesApi#activitiesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivitiesApi#activitiesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#activitiessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]

### Return type {#activitiessnapshot-return-type}

[**Activities**](../models/Activities)

### Authorization {#activitiessnapshot-authorization}

No authorization required

### HTTP request headers {#activitiessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

