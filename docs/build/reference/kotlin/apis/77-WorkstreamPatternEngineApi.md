# WorkstreamPatternEngine API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamPatternEngineProcessorsVisionActivate**](#workstreampatternengineprocessorsvisionactivate) | **POST** /workstream_pattern_engine/processors/vision/activate | /workstream_pattern_engine/processors/vision/activate [POST]
[**workstreamPatternEngineProcessorsVisionDataClear**](#workstreampatternengineprocessorsvisiondataclear) | **POST** /workstream_pattern_engine/processors/vision/data/clear | /workstream_pattern_engine/processors/vision/data/clear [POST]
[**workstreamPatternEngineProcessorsVisionDeactivate**](#workstreampatternengineprocessorsvisiondeactivate) | **POST** /workstream_pattern_engine/processors/vision/deactivate | /workstream_pattern_engine/processors/vision/deactivate [POST]
[**workstreamPatternEngineProcessorsVisionStatus**](#workstreampatternengineprocessorsvisionstatus) | **GET** /workstream_pattern_engine/processors/vision/status | /workstream_pattern_engine/processors/vision/status [GET]


## **workstreamPatternEngineProcessorsVisionActivate** {#workstreampatternengineprocessorsvisionactivate}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionActivate(workstreamPatternEngineStatus)

/workstream_pattern_engine/processors/vision/activate [POST]

This will activate your Workstream Pattern Engine. This is used to aggregate information on your user&#39;s desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamPatternEngineApi()
val workstreamPatternEngineStatus : WorkstreamPatternEngineStatus =  // WorkstreamPatternEngineStatus | 
try {
    val result : WorkstreamPatternEngineStatus = apiInstance.workstreamPatternEngineProcessorsVisionActivate(workstreamPatternEngineStatus)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionActivate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionActivate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineStatus** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional]

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **workstreamPatternEngineProcessorsVisionDataClear** {#workstreampatternengineprocessorsvisiondataclear}
> workstreamPatternEngineProcessorsVisionDataClear(workstreamPatternEngineDataCleanupRequest)

/workstream_pattern_engine/processors/vision/data/clear [POST]

This will clear the data for the Workstream Pattern Engine, specifically for our vision data.  This boy will accept ranges of time that the user wants to remove the processing from.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamPatternEngineApi()
val workstreamPatternEngineDataCleanupRequest : WorkstreamPatternEngineDataCleanupRequest =  // WorkstreamPatternEngineDataCleanupRequest | 
try {
    apiInstance.workstreamPatternEngineProcessorsVisionDataClear(workstreamPatternEngineDataCleanupRequest)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionDataClear")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionDataClear")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineDataCleanupRequest** | [**WorkstreamPatternEngineDataCleanupRequest**](../models/WorkstreamPatternEngineDataCleanupRequest)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **workstreamPatternEngineProcessorsVisionDeactivate** {#workstreampatternengineprocessorsvisiondeactivate}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionDeactivate(workstreamPatternEngineStatus)

/workstream_pattern_engine/processors/vision/deactivate [POST]

This will deactivate your Workstream Pattern Engine. This is used to aggregate information on your user&#39;s desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamPatternEngineApi()
val workstreamPatternEngineStatus : WorkstreamPatternEngineStatus =  // WorkstreamPatternEngineStatus | 
try {
    val result : WorkstreamPatternEngineStatus = apiInstance.workstreamPatternEngineProcessorsVisionDeactivate(workstreamPatternEngineStatus)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionDeactivate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionDeactivate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamPatternEngineStatus** | [**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)|  | [optional]

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **workstreamPatternEngineProcessorsVisionStatus** {#workstreampatternengineprocessorsvisionstatus}
> WorkstreamPatternEngineStatus workstreamPatternEngineProcessorsVisionStatus()

/workstream_pattern_engine/processors/vision/status [GET]

This will get a snapshot of the status your Workstream Pattern Engine. This is used to aggregate information on your user&#39;s desktop, specifically recording the application in focus and aggregating relevant context that will then be used to ground the copilot conversations, as well as the feed.  Note: required to be a beta user to use this feature until this is live(roughly mid to late April)

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamPatternEngineApi()
try {
    val result : WorkstreamPatternEngineStatus = apiInstance.workstreamPatternEngineProcessorsVisionStatus()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamPatternEngineApi#workstreamPatternEngineProcessorsVisionStatus")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorkstreamPatternEngineStatus**](../models/WorkstreamPatternEngineStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

