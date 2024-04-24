---
title: Activity API | Kotlin SDK
---

# Activity API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesSpecificActivitySnapshot**](#activitiesspecificactivitysnapshot) | **GET** /activity/\{activity\} | /activity/\{activity\} [GET]
[**activityIdentifiersSnapshot**](#activityidentifierssnapshot) | **GET** /activity/identifiers | /activity/identifiers [GET]
[**activityUpdate**](#activityupdate) | **POST** /activity/update | /activity/update [POST]


## **activitiesSpecificActivitySnapshot** {#activitiesspecificactivitysnapshot}
> Activity activitiesSpecificActivitySnapshot(activity, transferables)

/activity/\{activity\} [GET]

This will attempt to get a specific activity.

### Example {#activitiesspecificactivitysnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivityApi()
val activity : kotlin.String = activity_example // kotlin.String | This is a specific activity uuid.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Activity = apiInstance.activitiesSpecificActivitySnapshot(activity, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivityApi#activitiesSpecificActivitySnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivityApi#activitiesSpecificActivitySnapshot")
    e.printStackTrace()
}
```

### Parameters {#activitiesspecificactivitysnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | **kotlin.String**| This is a specific activity uuid. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#activitiesspecificactivitysnapshot-return-type}

[**Activity**](../models/Activity)

### Authorization {#activitiesspecificactivitysnapshot-authorization}

No authorization required

### HTTP request headers {#activitiesspecificactivitysnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **activityIdentifiersSnapshot** {#activityidentifierssnapshot}
> FlattenedActivities activityIdentifiersSnapshot(pseudo, activityFilterEnum)

/activity/identifiers [GET]

This is going to return all the identifiers of the activity event in order of most recent -&gt; oldest.

### Example {#activityidentifierssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivityApi()
val pseudo : kotlin.Boolean = true // kotlin.Boolean | This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false.
val activityFilterEnum : kotlin.String = activityFilterEnum_example // kotlin.String | This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated.
try {
    val result : FlattenedActivities = apiInstance.activityIdentifiersSnapshot(pseudo, activityFilterEnum)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivityApi#activityIdentifiersSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivityApi#activityIdentifiersSnapshot")
    e.printStackTrace()
}
```

### Parameters {#activityidentifierssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pseudo** | **kotlin.Boolean**| This is helper boolean that will give you the ability to also include your pseudo assets, we will always default to false. | [optional]
 **activityFilterEnum** | **kotlin.String**| This is an ActivityFilterEnum as a optional filter. Ensure you update ActivityFilterEnum if this is updated. | [optional] [enum: CREATED, UPDATED, DELETED, REFERENCED]

### Return type {#activityidentifierssnapshot-return-type}

[**FlattenedActivities**](../models/FlattenedActivities)

### Authorization {#activityidentifierssnapshot-authorization}

No authorization required

### HTTP request headers {#activityidentifierssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **activityUpdate** {#activityupdate}
> Activity activityUpdate(transferables, activity)

/activity/update [POST]

this will update a specific activity.

### Example {#activityupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ActivityApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val activity : Activity =  // Activity | 
try {
    val result : Activity = apiInstance.activityUpdate(transferables, activity)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ActivityApi#activityUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ActivityApi#activityUpdate")
    e.printStackTrace()
}
```

### Parameters {#activityupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **activity** | [**Activity**](../models/Activity)|  | [optional]

### Return type {#activityupdate-return-type}

[**Activity**](../models/Activity)

### Authorization {#activityupdate-authorization}

No authorization required

### HTTP request headers {#activityupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

