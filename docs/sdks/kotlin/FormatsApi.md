# Formats API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatsSnapshot**](FormatsApi#formatsSnapshot) | **GET** /formats | /formats [GET] Scoped to Formats
[**formatsSpecificFormatSnapshot**](FormatsApi#formatsSpecificFormatSnapshot) | **GET** /formats/\{format\} | /formats/\{format\} [GET] Scoped to Formats


<a id="formatsSnapshot"></a>
## **formatsSnapshot**
> Formats formatsSnapshot(transferables)

/formats [GET] Scoped to Formats

Get all of your formats for a given user.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Formats = apiInstance.formatsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatsApi#formatsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatsApi#formatsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Formats**](Formats)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="formatsSpecificFormatSnapshot"></a>
## **formatsSpecificFormatSnapshot**
> Format formatsSpecificFormatSnapshot(format, transferable)

/formats/\{format\} [GET] Scoped to Formats

Request a specific format when given a id (uuid in path params)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatsApi()
val format : java.util.UUID = 102ff265-fdfb-4142-8d94-4932d400199c // java.util.UUID | The id (uuid) for a specific format.
val transferable : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Format = apiInstance.formatsSpecificFormatSnapshot(format, transferable)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatsApi#formatsSpecificFormatSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatsApi#formatsSpecificFormatSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **java.util.UUID**| The id (uuid) for a specific format. |
 **transferable** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

