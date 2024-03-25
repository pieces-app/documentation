# Connector API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connect**](ConnectorApi.md#connect) | **POST** /connect | /connect [POST]
[**intention**](ConnectorApi.md#intention) | **POST** /\{application\}/intention | /\{application\}/intention [POST]
[**onboarded**](ConnectorApi.md#onboarded) | **POST** /\{application\}/onboarded | /onboarded [POST]
[**react**](ConnectorApi.md#react) | **POST** /\{application\}/reaction | /\{application\}/reaction [POST]
[**suggest**](ConnectorApi.md#suggest) | **POST** /\{application\}/suggestion | /\{application\}/suggestion [POST]
[**track**](ConnectorApi.md#track) | **POST** /\{application\}/track | /\{application\}/track [POST]


<a id="connect"></a>
## **connect**
> Context connect(seededConnectorConnection)

/connect [POST]

An endpoint which abstracts a bootup/connection for a specific context

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorConnection** | [**SeededConnectorConnection**](SeededConnectorConnection.md)|  | [optional]

### Return type

[**Context**](Context.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="intention"></a>
## **intention**
> kotlin.String intention(application, seededConnectorAsset)

/\{application\}/intention [POST]

This can be used to send a SeededAsset over that you may use to compair in the future.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **seededConnectorAsset** | [**SeededConnectorAsset**](SeededConnectorAsset.md)|  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="onboarded"></a>
## **onboarded**
> kotlin.String onboarded(application, body)

/onboarded [POST]

A consolidation endpoint to handle the updating of an onboarding process.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |
 **body** | **kotlin.Boolean**| Whether or not that application has been onboarded. | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="react"></a>
## **react**
> kotlin.String react(application, reaction)

/\{application\}/reaction [POST]

This will react to the response returned from the /suggest endpoint. 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **reaction** | [**Reaction**](Reaction.md)| ** This body will need to be modified. | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="suggest"></a>
## **suggest**
> Suggestion suggest(application, seededConnectorCreation)

/\{application\}/suggestion [POST]

This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**|  |
 **seededConnectorCreation** | [**SeededConnectorCreation**](SeededConnectorCreation.md)| This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! | [optional]

### Return type

[**Suggestion**](Suggestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="track"></a>
## **track**
> kotlin.String track(application, seededConnectorTracking)

/\{application\}/track [POST]

This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |
 **seededConnectorTracking** | [**SeededConnectorTracking**](SeededConnectorTracking.md)| The body is able to take in several properties  | [optional]

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

