---
title: ExternalProvider API | Kotlin SDK
---

# ExternalProvider API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProvider APIKeyCreate**](#externalproviderapikeycreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProvider APIKeyDelete**](#externalproviderapikeydelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProvider APIKeyUpdate**](#externalproviderapikeyupdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


## **externalProvider APIKeyCreate** {#externalproviderapikeycreate}
> CreatedExternalProvider APIKey externalProvider APIKeyCreate(precreatedExternalProvider APIKey)

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
    val result : CreatedExternalProvider APIKey = apiInstance.externalProvider APIKeyCreate(precreatedExternalProvider APIKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProvider APIKeyCreate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProvider APIKeyCreate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **precreatedExternalProvider APIKey** | [**PrecreatedExternalProvider APIKey**](PrecreatedExternalProvider APIKey)|  | [optional]

### Return type

[**CreatedExternalProvider APIKey**](CreatedExternalProvider APIKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProvider APIKeyDelete** {#externalproviderapikeydelete}
> DeletedExternalProvider APIKey externalProvider APIKeyDelete(predeletedExternalProvider APIKey)

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
    val result : DeletedExternalProvider APIKey = apiInstance.externalProvider APIKeyDelete(predeletedExternalProvider APIKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProvider APIKeyDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProvider APIKeyDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predeletedExternalProvider APIKey** | [**PredeletedExternalProvider APIKey**](PredeletedExternalProvider APIKey)|  | [optional]

### Return type

[**DeletedExternalProvider APIKey**](DeletedExternalProvider APIKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **externalProvider APIKeyUpdate** {#externalproviderapikeyupdate}
> UpdatedExternalProvider APIKey externalProvider APIKeyUpdate(preupdatedExternalProvider APIKey)

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
    val result : UpdatedExternalProvider APIKey = apiInstance.externalProvider APIKeyUpdate(preupdatedExternalProvider APIKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalProvider API#externalProvider APIKeyUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalProvider API#externalProvider APIKeyUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preupdatedExternalProvider APIKey** | [**PreupdatedExternalProvider APIKey**](PreupdatedExternalProvider APIKey)|  | [optional]

### Return type

[**UpdatedExternalProvider APIKey**](UpdatedExternalProvider APIKey)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

