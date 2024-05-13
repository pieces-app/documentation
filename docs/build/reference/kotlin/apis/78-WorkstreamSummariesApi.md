---
title: WorkstreamSummaries API | Kotlin SDK
---

# WorkstreamSummaries API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesCreateNewWorkstreamSummary**](#workstreamsummariescreatenewworkstreamsummary) | **POST** /workstream_summaries/create | /workstream_summaries/create [POST]
[**workstreamSummariesDeleteSpecificWorkstreamSummary**](#workstreamsummariesdeletespecificworkstreamsummary) | **POST** /workstream_summaries/\{workstream_summary\}/delete | /workstream_summaries/\{workstream_summary\}/delete [POST]
[**workstreamSummariesSnapshot**](#workstreamsummariessnapshot) | **GET** /workstream_summaries | /workstream_summaries [GET]


## **workstreamSummariesCreateNewWorkstreamSummary** {#workstreamsummariescreatenewworkstreamsummary}
> WorkstreamSummary workstreamSummariesCreateNewWorkstreamSummary(transferables, seededWorkstreamSummary)

/workstream_summaries/create [POST]

This will create a new WorkstreamSummary in the database.

### Example {#workstreamsummariescreatenewworkstreamsummary-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummariesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededWorkstreamSummary : SeededWorkstreamSummary =  // SeededWorkstreamSummary | 
try {
    val result : WorkstreamSummary = apiInstance.workstreamSummariesCreateNewWorkstreamSummary(transferables, seededWorkstreamSummary)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummariesApi#workstreamSummariesCreateNewWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummariesApi#workstreamSummariesCreateNewWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#workstreamsummariescreatenewworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededWorkstreamSummary** | [**SeededWorkstreamSummary**](../models/SeededWorkstreamSummary)|  | [optional]

### Return type {#workstreamsummariescreatenewworkstreamsummary-return-type}

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization {#workstreamsummariescreatenewworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreamsummariescreatenewworkstreamsummary-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **workstreamSummariesDeleteSpecificWorkstreamSummary** {#workstreamsummariesdeletespecificworkstreamsummary}
> workstreamSummariesDeleteSpecificWorkstreamSummary(workstreamSummary)

/workstream_summaries/\{workstream_summary\}/delete [POST]

This will delete a specific workstream_summary from the database!

### Example {#workstreamsummariesdeletespecificworkstreamsummary-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummariesApi()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.workstreamSummariesDeleteSpecificWorkstreamSummary(workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummariesApi#workstreamSummariesDeleteSpecificWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummariesApi#workstreamSummariesDeleteSpecificWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#workstreamsummariesdeletespecificworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#workstreamsummariesdeletespecificworkstreamsummary-return-type}

null (empty response body)

### Authorization {#workstreamsummariesdeletespecificworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#workstreamsummariesdeletespecificworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummariesSnapshot** {#workstreamsummariessnapshot}
> WorkstreamSummaries workstreamSummariesSnapshot(transferables)

/workstream_summaries [GET]

This will get a snapshot of all your workstream summaries.

### Example {#workstreamsummariessnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummariesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : WorkstreamSummaries = apiInstance.workstreamSummariesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummariesApi#workstreamSummariesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummariesApi#workstreamSummariesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#workstreamsummariessnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#workstreamsummariessnapshot-return-type}

[**WorkstreamSummaries**](../models/WorkstreamSummaries)

### Authorization {#workstreamsummariessnapshot-authorization}

No authorization required

### HTTP request headers {#workstreamsummariessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

