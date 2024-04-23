---
title: Tags API | Kotlin SDK
---

# Tags API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreateNewTag**](#tagscreatenewtag) | **POST** /tags/create | /tags/create [POST]
[**tagsDeleteSpecificTag**](#tagsdeletespecifictag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tagsExists**](#tagsexists) | **POST** /tags/exists | /tags/exists [POST]
[**tagsSnapshot**](#tagssnapshot) | **GET** /tags | /tags [GET]


## **tagsCreateNewTag** {#tagscreatenewtag}
> Tag tagsCreateNewTag(transferables, seededTag)

/tags/create [POST]

This will create a new tag.

### Example {#tagscreatenewtag-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Tags API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededTag : SeededTag =  // SeededTag | 
try {
    val result : Tag = apiInstance.tagsCreateNewTag(transferables, seededTag)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Tags API#tagsCreateNewTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Tags API#tagsCreateNewTag")
    e.printStackTrace()
}
```

### Parameters {#tagscreatenewtag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededTag** | [**SeededTag**](../models/SeededTag)|  | [optional]

### Return type {#tagscreatenewtag-return-type}

[**Tag**](../models/Tag)

### Authorization {#tagscreatenewtag-authorization}

No authorization required

### HTTP request headers {#tagscreatenewtag-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **tagsDeleteSpecificTag** {#tagsdeletespecifictag}
> tagsDeleteSpecificTag(tag)

/tags/\{tag\}/delete [POST]

This will delete a specific tag.

### Example {#tagsdeletespecifictag-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Tags API()
val tag : kotlin.String = tag_example // kotlin.String | tag id
try {
    apiInstance.tagsDeleteSpecificTag(tag)
} catch (e: ClientException) {
    println("4xx response calling Tags API#tagsDeleteSpecificTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Tags API#tagsDeleteSpecificTag")
    e.printStackTrace()
}
```

### Parameters {#tagsdeletespecifictag-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |

### Return type {#tagsdeletespecifictag-return-type}

null (empty response body)

### Authorization {#tagsdeletespecifictag-authorization}

No authorization required

### HTTP request headers {#tagsdeletespecifictag-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **tagsExists** {#tagsexists}
> ExistingMetadata tagsExists(existentMetadata)

/tags/exists [POST]

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example {#tagsexists-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Tags API()
val existentMetadata : ExistentMetadata =  // ExistentMetadata | 
try {
    val result : ExistingMetadata = apiInstance.tagsExists(existentMetadata)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Tags API#tagsExists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Tags API#tagsExists")
    e.printStackTrace()
}
```

### Parameters {#tagsexists-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | [**ExistentMetadata**](../models/ExistentMetadata)|  | [optional]

### Return type {#tagsexists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization {#tagsexists-authorization}

No authorization required

### HTTP request headers {#tagsexists-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **tagsSnapshot** {#tagssnapshot}
> Tags tagsSnapshot(transferables)

/tags [GET]

This will get a snapshot of all of your tags.

### Example {#tagssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Tags API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Tags = apiInstance.tagsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Tags API#tagsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Tags API#tagsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#tagssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#tagssnapshot-return-type}

[**Tags**](../models/Tags)

### Authorization {#tagssnapshot-authorization}

No authorization required

### HTTP request headers {#tagssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

