---
title: Connector API | Kotlin SDK
---

# Connector API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**connect**](#connect) | **POST** /connect | /connect [POST]
[**intention**](#intention) | **POST** /\{application\}/intention | /\{application\}/intention [POST]
[**onboarded**](#onboarded) | **POST** /\{application\}/onboarded | /onboarded [POST]
[**react**](#react) | **POST** /\{application\}/reaction | /\{application\}/reaction [POST]
[**suggest**](#suggest) | **POST** /\{application\}/suggestion | /\{application\}/suggestion [POST]
[**track**](#track) | **POST** /\{application\}/track | /\{application\}/track [POST]


## **connect** {#connect}
> Context connect(seededConnectorConnection)

/connect [POST]

Abstracts a bootup/connection for a specific context.

### Example {#connect-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val seededConnectorConnection : SeededConnectorConnection =  // SeededConnectorConnection | 
try {
    val result : Context = apiInstance.connect(seededConnectorConnection)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#connect")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#connect")
    e.printStackTrace()
}
```

### Parameters {#connect-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorConnection** | [**SeededConnectorConnection**](../models/SeededConnectorConnection)|  | [optional]

### Return type {#connect-return-type}

[**Context**](../models/Context)

### Authorization {#connect-authorization}

No authorization required

### HTTP request headers {#connect-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **intention** {#intention}
> kotlin.String intention(application, seededConnectorAsset)

/\{application\}/intention [POST]

Allows you to send a SeededAsset for future comparison.

### Example {#intention-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val application : kotlin.String = application_example // kotlin.String | 
val seededConnectorAsset : SeededConnectorAsset =  // SeededConnectorAsset | 
try {
    val result : kotlin.String = apiInstance.intention(application, seededConnectorAsset)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#intention")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#intention")
    e.printStackTrace()
}
```

### Parameters {#intention-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **seededConnectorAsset** | [**SeededConnectorAsset**](../models/SeededConnectorAsset)|  | [optional]

### Return type {#intention-return-type}

**kotlin.String**

### Authorization {#intention-authorization}

No authorization required

### HTTP request headers {#intention-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **onboarded** {#onboarded}
> kotlin.String onboarded(application, body)

/onboarded [POST]

A central endpoint to manage updates to the onboarding process.

### Example {#onboarded-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val application : kotlin.String = application_example // kotlin.String | This is a uuid that represents an application
val body : kotlin.Boolean = true // kotlin.Boolean | Whether or not that application has been onboarded.
try {
    val result : kotlin.String = apiInstance.onboarded(application, body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#onboarded")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#onboarded")
    e.printStackTrace()
}
```

### Parameters {#onboarded-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |
 **body** | **kotlin.Boolean**| Whether or not that application has been onboarded. | [optional]

### Return type {#onboarded-return-type}

**kotlin.String**

### Authorization {#onboarded-authorization}

No authorization required

### HTTP request headers {#onboarded-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **react** {#react}
> kotlin.String react(application, reaction)

/\{application\}/reaction [POST]

This will respond to the output generated by the /suggest endpoint.

### Example {#react-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val application : kotlin.String = application_example // kotlin.String | 
val reaction : Reaction =  // Reaction | ** This body will need to be modified.
try {
    val result : kotlin.String = apiInstance.react(application, reaction)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#react")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#react")
    e.printStackTrace()
}
```

### Parameters {#react-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **reaction** | [**Reaction**](../models/Reaction)| ** This body will need to be modified. | [optional]

### Return type {#react-return-type}

**kotlin.String**

### Authorization {#react-authorization}

No authorization required

### HTTP request headers {#react-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **suggest** {#suggest}
> Suggestion suggest(application, seededConnectorCreation)

/\{application\}/suggestion [POST]

Invoked whenever a code snippet is copied from an integration. For instance, if a JetBrains user copies code, this endpoint can be called to assess whether to suggest reusing a piece (if reuse is true, the endpoint provides assets that the user may consider using), saving the code snippet, or taking no action.   **Note: This endpoint could potentially accept a SeededFormat for the request body if required.

### Example {#suggest-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val application : kotlin.String = application_example // kotlin.String | 
val seededConnectorCreation : SeededConnectorCreation =  // SeededConnectorCreation | This is the Snippet that we will compare to all the saved assets to determine what we want to do with it!
try {
    val result : Suggestion = apiInstance.suggest(application, seededConnectorCreation)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#suggest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#suggest")
    e.printStackTrace()
}
```

### Parameters {#suggest-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **seededConnectorCreation** | [**SeededConnectorCreation**](../models/SeededConnectorCreation)| This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! | [optional]

### Return type {#suggest-return-type}

[**Suggestion**](../models/Suggestion)

### Authorization {#suggest-authorization}

No authorization required

### HTTP request headers {#suggest-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **track** {#track}
> kotlin.String track(application, seededConnectorTracking)

/\{application\}/track [POST]

Abstracts the process of packaging segments on a per-context basis.

### Example {#track-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ConnectorApi()
val application : kotlin.String = application_example // kotlin.String | This is a uuid that represents an application
val seededConnectorTracking : SeededConnectorTracking =  // SeededConnectorTracking | The body is able to take in several properties 
try {
    val result : kotlin.String = apiInstance.track(application, seededConnectorTracking)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ConnectorApi#track")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ConnectorApi#track")
    e.printStackTrace()
}
```

### Parameters {#track-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |
 **seededConnectorTracking** | [**SeededConnectorTracking**](../models/SeededConnectorTracking)| The body is able to take in several properties  | [optional]

### Return type {#track-return-type}

**kotlin.String**

### Authorization {#track-authorization}

No authorization required

### HTTP request headers {#track-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

