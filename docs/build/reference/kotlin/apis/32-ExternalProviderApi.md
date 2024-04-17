---
title: ExternalProvider API | Kotlin SDK
---

# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProviderApiKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProvider APIKey externalProvider APIKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProvider API()
val precreatedExternalProvider APIKey : PrecreatedExternalProvider APIKey =  // PrecreatedExternalProvider APIKey | 
try {
    val result : CreatedExternalProvider APIKey = apiInstance.externalProviderApiKeyCreate(precreatedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProviderApiKeyCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProviderApiKeyCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProviderApiKey** | [**PrecreatedExternalProviderApiKey**](PrecreatedExternalProviderApiKey)|  | [optional]

### Return type

[**CreatedExternalProviderApiKey**](CreatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProviderApiKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProvider APIKey externalProvider APIKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProvider API()
val predeletedExternalProvider APIKey : PredeletedExternalProvider APIKey =  // PredeletedExternalProvider APIKey | 
try {
    val result : DeletedExternalProvider APIKey = apiInstance.externalProviderApiKeyDelete(predeletedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProviderApiKeyDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProviderApiKeyDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProviderApiKey** | [**PredeletedExternalProviderApiKey**](PredeletedExternalProviderApiKey)|  | [optional]

### Return type

[**DeletedExternalProviderApiKey**](DeletedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProviderApiKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProvider APIKey externalProvider APIKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = ExternalProvider API()
val preupdatedExternalProvider APIKey : PreupdatedExternalProvider APIKey =  // PreupdatedExternalProvider APIKey | 
try {
    val result : UpdatedExternalProvider APIKey = apiInstance.externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProviderApiKeyUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProviderApiKeyUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProviderApiKey** | [**PreupdatedExternalProviderApiKey**](PreupdatedExternalProviderApiKey)|  | [optional]

### Return type

[**UpdatedExternalProviderApiKey**](UpdatedExternalProviderApiKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

