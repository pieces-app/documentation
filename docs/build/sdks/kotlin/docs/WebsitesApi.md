# Websites API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websitesCreateNewWebsite**](WebsitesApi.md#websitescreatenewwebsite) | **POST** /websites/create | /websites/create [POST]
[**websitesDeleteSpecificWebsite**](WebsitesApi.md#websitesdeletespecificwebsite) | **POST** /websites/\{website\}/delete | /websites/\{website\}/delete [POST]
[**websitesExists**](WebsitesApi.md#websitesexists) | **POST** /websites/exists | /websites/exists [POST]
[**websitesSnapshot**](WebsitesApi.md#websitessnapshot) | **GET** /websites | /websites [GET]


<a id="websitesCreateNewWebsite"></a>
## **websitesCreateNewWebsite**
> Website websitesCreateNewWebsite(transferables, seededWebsite)

/websites/create [POST]

This will create a website and attach it to a specific asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WebsitesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededWebsite : SeededWebsite =  // SeededWebsite | 
try {
    val result : Website = apiInstance.websitesCreateNewWebsite(transferables, seededWebsite)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebsitesApi#websitesCreateNewWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsitesApi#websitesCreateNewWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededWebsite** | [**SeededWebsite**](SeededWebsite.md)|  | [optional]

### Return type

[**Website**](Website.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="websitesDeleteSpecificWebsite"></a>
## **websitesDeleteSpecificWebsite**
> websitesDeleteSpecificWebsite(website)

/websites/\{website\}/delete [POST]

This will delete a specific website!

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WebsitesApi()
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.websitesDeleteSpecificWebsite(website)
} catch (e: ClientException) {
    println("4xx response calling WebsitesApi#websitesDeleteSpecificWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsitesApi#websitesDeleteSpecificWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="websitesExists"></a>
## **websitesExists**
> ExistingMetadata websitesExists(existentMetadata)

/websites/exists [POST]

This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WebsitesApi()
val existentMetadata : ExistentMetadata =  // ExistentMetadata | 
try {
    val result : ExistingMetadata = apiInstance.websitesExists(existentMetadata)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebsitesApi#websitesExists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsitesApi#websitesExists")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | [**ExistentMetadata**](ExistentMetadata.md)|  | [optional]

### Return type

[**ExistingMetadata**](ExistingMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="websitesSnapshot"></a>
## **websitesSnapshot**
> Websites websitesSnapshot(transferables)

/websites [GET]

This will get a snapshot of all your websites.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WebsitesApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Websites = apiInstance.websitesSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebsitesApi#websitesSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsitesApi#websitesSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Websites**](Websites.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

