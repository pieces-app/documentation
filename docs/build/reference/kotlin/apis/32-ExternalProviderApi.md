---
title: ExternalProvider API | Kotlin SDK
---

# ExternalProvider API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProviderApiKey externalProviderApiKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeycreate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProviderApi()
val precreatedExternalProviderApiKey : PrecreatedExternalProviderApiKey =  // PrecreatedExternalProviderApiKey | 
try {
    val result : CreatedExternalProviderApiKey = apiInstance.externalProviderApiKeyCreate(precreatedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProviderApi#externalProviderApiKeyCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProviderApi#externalProviderApiKeyCreate")
    e.printStackTrace()
}
```

### Parameters {#externalproviderapikeycreate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey)|  | [optional]

### Return type {#externalproviderapikeycreate-return-type}

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey)

### Authorization {#externalproviderapikeycreate-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeycreate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProviderApiKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProviderApiKey externalProviderApiKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeydelete-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProviderApi()
val predeletedExternalProviderApiKey : PredeletedExternalProviderApiKey =  // PredeletedExternalProviderApiKey | 
try {
    val result : DeletedExternalProviderApiKey = apiInstance.externalProviderApiKeyDelete(predeletedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProviderApi#externalProviderApiKeyDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProviderApi#externalProviderApiKeyDelete")
    e.printStackTrace()
}
```

### Parameters {#externalproviderapikeydelete-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey)|  | [optional]

### Return type {#externalproviderapikeydelete-return-type}

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey)

### Authorization {#externalproviderapikeydelete-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeydelete-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProviderApiKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example {#externalproviderapikeyupdate-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProviderApi()
val preupdatedExternalProviderApiKey : PreupdatedExternalProviderApiKey =  // PreupdatedExternalProviderApiKey | 
try {
    val result : UpdatedExternalProviderApiKey = apiInstance.externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProviderApi#externalProviderApiKeyUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProviderApi#externalProviderApiKeyUpdate")
    e.printStackTrace()
}
```

### Parameters {#externalproviderapikeyupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey)|  | [optional]

### Return type {#externalproviderapikeyupdate-return-type}

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey)

### Authorization {#externalproviderapikeyupdate-authorization}

No authorization required

### HTTP request headers {#externalproviderapikeyupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

