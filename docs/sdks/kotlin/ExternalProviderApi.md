# ExternalProviderApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**externalProviderApiKeyCreate**](ExternalProviderApi#externalProviderApiKeyCreate) | **POST** /external_provider/api_key/create | /external_provider/api_key/create [POST]
[**externalProviderApiKeyDelete**](ExternalProviderApi#externalProviderApiKeyDelete) | **POST** /external_provider/api_key/delete | /external_provider/api_key/delete [POST]
[**externalProviderApiKeyUpdate**](ExternalProviderApi#externalProviderApiKeyUpdate) | **POST** /external_provider/api_key/update | /external_provider/api_key/update [POST]


<a id="externalProviderApiKeyCreate"></a>
## **externalProviderApiKeyCreate**
> CreatedExternalProviderApiKey externalProviderApiKeyCreate(precreatedExternalProviderApiKey)

/external_provider/api_key/create [POST]

This will create a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="externalProviderApiKeyDelete"></a>
## **externalProviderApiKeyDelete**
> DeletedExternalProviderApiKey externalProviderApiKeyDelete(predeletedExternalProviderApiKey)

/external_provider/api_key/delete [POST]

This will remove a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

<a id="externalProviderApiKeyUpdate"></a>
## **externalProviderApiKeyUpdate**
> UpdatedExternalProviderApiKey externalProviderApiKeyUpdate(preupdatedExternalProviderApiKey)

/external_provider/api_key/update [POST]

This will update a specific external_provider api_key from a specific user Auth0UserMetadata

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

