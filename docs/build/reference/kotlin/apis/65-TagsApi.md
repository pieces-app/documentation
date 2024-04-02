# Tags API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreateNewTag**](#tagscreatenewtag) | **POST** /tags/create | /tags/create [POST]
[**tagsDeleteSpecificTag**](#tagsdeletespecifictag) | **POST** /tags/\{tag\}/delete | /tags/\{tag\}/delete [POST]
[**tagsExists**](#tagsexists) | **POST** /tags/exists | /tags/exists [POST]
[**tagsSnapshot**](#tagssnapshot) | **GET** /tags | /tags [GET]


<a id="tagsCreateNewTag"></a>
## **tagsCreateNewTag**
> Tag tagsCreateNewTag(transferables, seededTag)

/tags/create [POST]

This will create a new tag.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededTag : SeededTag =  // SeededTag | 
try {
    val result : Tag = apiInstance.tagsCreateNewTag(transferables, seededTag)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TagsApi#tagsCreateNewTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagsApi#tagsCreateNewTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededTag** | [**SeededTag**](../models/SeededTag)|  | [optional]

### Return type

[**Tag**](../models/Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="tagsDeleteSpecificTag"></a>
## **tagsDeleteSpecificTag**
> tagsDeleteSpecificTag(tag)

/tags/\{tag\}/delete [POST]

This will delete a specific tag.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagsApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
try {
    apiInstance.tagsDeleteSpecificTag(tag)
} catch (e: ClientException) {
    println("4xx response calling TagsApi#tagsDeleteSpecificTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagsApi#tagsDeleteSpecificTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagsExists"></a>
## **tagsExists**
> ExistingMetadata tagsExists(existentMetadata)

/tags/exists [POST]

This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagsApi()
val existentMetadata : ExistentMetadata =  // ExistentMetadata | 
try {
    val result : ExistingMetadata = apiInstance.tagsExists(existentMetadata)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TagsApi#tagsExists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagsApi#tagsExists")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existentMetadata** | [**ExistentMetadata**](../models/ExistentMetadata)|  | [optional]

### Return type

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="tagsSnapshot"></a>
## **tagsSnapshot**
> Tags tagsSnapshot(transferables)

/tags [GET]

This will get a snapshot of all of your tags.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Tags = apiInstance.tagsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TagsApi#tagsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagsApi#tagsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Tags**](../models/Tags)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

