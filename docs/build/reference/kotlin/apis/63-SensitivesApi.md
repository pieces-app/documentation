---
title: Sensitives API | Kotlin SDK
---

# Sensitives API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitivesCreateNewSensitive**](#sensitivescreatenewsensitive) | **POST** /sensitives/create | /sensitives/create [POST]
[**sensitivesDeleteSensitive**](#sensitivesdeletesensitive) | **POST** /sensitives/\{sensitive\}/delete | /sensitives/\{sensitive\}/delete [POST]
[**sensitivesSnapshot**](#sensitivessnapshot) | **GET** /sensitives | /sensitives [GET]


## **sensitivesCreateNewSensitive** {#sensitivescreatenewsensitive}
> Sensitive sensitivesCreateNewSensitive(seededSensitive)

/sensitives/create [POST]

This will create a new sensitive model.

### Example {#sensitivescreatenewsensitive-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = SensitivesApi()
val seededSensitive : SeededSensitive =  // SeededSensitive | 
try {
    val result : Sensitive = apiInstance.sensitivesCreateNewSensitive(seededSensitive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SensitivesApi#sensitivesCreateNewSensitive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitivesApi#sensitivesCreateNewSensitive")
    e.printStackTrace()
}
```

### Parameters {#sensitivescreatenewsensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededSensitive** | [**SeededSensitive**](../models/SeededSensitive)|  | [optional]

### Return type {#sensitivescreatenewsensitive-return-type}

[**Sensitive**](../models/Sensitive)

### Authorization {#sensitivescreatenewsensitive-authorization}

No authorization required

### HTTP request headers {#sensitivescreatenewsensitive-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **sensitivesDeleteSensitive** {#sensitivesdeletesensitive}
> sensitivesDeleteSensitive(sensitive)

/sensitives/\{sensitive\}/delete [POST]

This will delete a sensitive based on the sensitive uuid.

### Example {#sensitivesdeletesensitive-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = SensitivesApi()
val sensitive : kotlin.String = sensitive_example // kotlin.String | This is a uuid that represents a sensitive.
try {
    apiInstance.sensitivesDeleteSensitive(sensitive)
} catch (e: ClientException) {
    println("4xx response calling SensitivesApi#sensitivesDeleteSensitive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitivesApi#sensitivesDeleteSensitive")
    e.printStackTrace()
}
```

### Parameters {#sensitivesdeletesensitive-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **kotlin.String**| This is a uuid that represents a sensitive. |

### Return type {#sensitivesdeletesensitive-return-type}

null (empty response body)

### Authorization {#sensitivesdeletesensitive-authorization}

No authorization required

### HTTP request headers {#sensitivesdeletesensitive-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **sensitivesSnapshot** {#sensitivessnapshot}
> Sensitives sensitivesSnapshot()

/sensitives [GET]

This will get a snapshot of all of the sensitives.

### Example {#sensitivessnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = SensitivesApi()
try {
    val result : Sensitives = apiInstance.sensitivesSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SensitivesApi#sensitivesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitivesApi#sensitivesSnapshot")
    e.printStackTrace()
}
```

### Parameters {#sensitivessnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#sensitivessnapshot-return-type}

[**Sensitives**](../models/Sensitives)

### Authorization {#sensitivessnapshot-authorization}

No authorization required

### HTTP request headers {#sensitivessnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

