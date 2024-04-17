---
title: WorkstreamEvent API | Kotlin SDK
---

# WorkstreamEvent API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamEventAssociateWorkstreamSummary**](#workstreameventassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**workstreamEventDisassociateWorkstreamSummary**](#workstreameventdisassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**workstreamEventScoresIncrement**](#workstreameventscoresincrement) | **POST** /workstream_event/\{workstream_event\}/scores/increment | '/workstream_event/\{workstream_event\}/scores/increment' [POST]
[**workstreamEventUpdate**](#workstreameventupdate) | **POST** /workstream_event/update | /workstream_event/update [POST]
[**workstreamEventsSpecificWorkstreamEventSnapshot**](#workstreameventsspecificworkstreameventsnapshot) | **GET** /workstream_event/\{workstream_event\} | /workstream_event/\{workstream_event\} [GET]


## **workstreamEventAssociateWorkstreamSummary** {#workstreameventassociateworkstreamsummary}
> workstreamEventAssociateWorkstreamSummary(workstreamEvent, workstreamSummary)

/workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a workstream_event with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#workstreameventassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamEvent API()
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.workstreamEventAssociateWorkstreamSummary(workstreamEvent, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamEvent API#workstreamEventAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamEvent API#workstreamEventAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#workstreameventassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#workstreameventassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#workstreameventassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreameventassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamEventDisassociateWorkstreamSummary** {#workstreameventdisassociateworkstreamsummary}
> workstreamEventDisassociateWorkstreamSummary(workstreamEvent, workstreamSummary)

/workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a workstream_event from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#workstreameventdisassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamEvent API()
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.workstreamEventDisassociateWorkstreamSummary(workstreamEvent, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamEvent API#workstreamEventDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamEvent API#workstreamEventDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#workstreameventdisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#workstreameventdisassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#workstreameventdisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreameventdisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamEventScoresIncrement** {#workstreameventscoresincrement}
> workstreamEventScoresIncrement(workstreamEvent, seededScoreIncrement)

&#39;/workstream_event/\{workstream_event\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#workstreameventscoresincrement-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamEvent API()
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.workstreamEventScoresIncrement(workstreamEvent, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamEvent API#workstreamEventScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamEvent API#workstreamEventScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#workstreameventscoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#workstreameventscoresincrement-return-type}

null (empty response body)

### Authorization {#workstreameventscoresincrement-authorization}

No authorization required

### HTTP request headers {#workstreameventscoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **workstreamEventUpdate** {#workstreameventupdate}
> WorkstreamEvent workstreamEventUpdate(transferables, workstreamEvent)

/workstream_event/update [POST]

This will update a specific workstream_event.

### Example {#workstreameventupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamEvent API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val workstreamEvent : WorkstreamEvent =  // WorkstreamEvent | 
try {
    val result : WorkstreamEvent = apiInstance.workstreamEventUpdate(transferables, workstreamEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamEvent API#workstreamEventUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamEvent API#workstreamEventUpdate")
    e.printStackTrace()
}
```

### Parameters {#workstreameventupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **workstreamEvent** | [**WorkstreamEvent**](../models/WorkstreamEvent)|  | [optional]

### Return type {#workstreameventupdate-return-type}

[**WorkstreamEvent**](../models/WorkstreamEvent)

### Authorization {#workstreameventupdate-authorization}

No authorization required

### HTTP request headers {#workstreameventupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **workstreamEventsSpecificWorkstreamEventSnapshot** {#workstreameventsspecificworkstreameventsnapshot}
> WorkstreamEvent workstreamEventsSpecificWorkstreamEventSnapshot(workstreamEvent, transferables)

/workstream_event/\{workstream_event\} [GET]

This will get a snapshot of a single workstream_event.

### Example {#workstreameventsspecificworkstreameventsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamEvent API()
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : WorkstreamEvent = apiInstance.workstreamEventsSpecificWorkstreamEventSnapshot(workstreamEvent, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamEvent API#workstreamEventsSpecificWorkstreamEventSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamEvent API#workstreamEventsSpecificWorkstreamEventSnapshot")
    e.printStackTrace()
}
```

### Parameters {#workstreameventsspecificworkstreameventsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#workstreameventsspecificworkstreameventsnapshot-return-type}

[**WorkstreamEvent**](../models/WorkstreamEvent)

### Authorization {#workstreameventsspecificworkstreameventsnapshot-authorization}

No authorization required

### HTTP request headers {#workstreameventsspecificworkstreameventsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

