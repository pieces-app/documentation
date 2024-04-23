---
title: Sensitive API | Kotlin SDK
---

# Sensitive API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitiveScoresIncrement**](#sensitivescoresincrement) | **POST** /sensitive/\{sensitive\}/scores/increment | '/sensitive/\{sensitive\}/scores/increment' [POST]
[**sensitiveSnapshot**](#sensitivesnapshot) | **GET** /sensitive/\{sensitive\} | /sensitive/\{sensitive\} [GET]
[**updateSensitive**](#updatesensitive) | **POST** /sensitive/update | /sensitive/update [POST]


## **sensitiveScoresIncrement** {#sensitivescoresincrement}
> sensitiveScoresIncrement(sensitive, seededScoreIncrement)

&#39;/sensitive/\{sensitive\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#sensitivescoresincrement-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Sensitive API()
val sensitive : kotlin.String = sensitive_example // kotlin.String | This is a uuid that represents a sensitive.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.sensitiveScoresIncrement(sensitive, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling Sensitive API#sensitiveScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Sensitive API#sensitiveScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#sensitivescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **kotlin.String**| This is a uuid that represents a sensitive. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#sensitivescoresincrement-return-type}

null (empty response body)

### Authorization {#sensitivescoresincrement-authorization}

No authorization required

### HTTP request headers {#sensitivescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **sensitiveSnapshot** {#sensitivesnapshot}
> Sensitive sensitiveSnapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example {#sensitivesnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Sensitive API()
val sensitive : kotlin.String = sensitive_example // kotlin.String | 
try {
    val result : Sensitive = apiInstance.sensitiveSnapshot(sensitive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Sensitive API#sensitiveSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Sensitive API#sensitiveSnapshot")
    e.printStackTrace()
}
```

### Parameters {#sensitivesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **kotlin.String**|  |

### Return type {#sensitivesnapshot-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#sensitivesnapshot-authorization}

No authorization required

### HTTP request headers {#sensitivesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **updateSensitive** {#updatesensitive}
> Sensitive updateSensitive(sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example {#updatesensitive-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Sensitive API()
val sensitive : Sensitive =  // Sensitive | 
try {
    val result : Sensitive = apiInstance.updateSensitive(sensitive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Sensitive API#updateSensitive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Sensitive API#updateSensitive")
    e.printStackTrace()
}
```

### Parameters {#updatesensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**Sensitive**](../models/Sensitive)|  | [optional]

### Return type {#updatesensitive-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#updatesensitive-authorization}

No authorization required

### HTTP request headers {#updatesensitive-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

