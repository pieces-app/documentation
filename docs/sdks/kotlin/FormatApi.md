# Format API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatAnalysis**](FormatApi#formatAnalysis) | **GET** /format/\{format\}/analysis | /format/\{format\}/analysis [GET]
[**formatReclassify**](FormatApi#formatReclassify) | **POST** /format/reclassify | /format/reclassify [POST]
[**formatSnapshot**](FormatApi#formatSnapshot) | **GET** /format/\{format\} | /format/\{format\} [GET] Scoped to Format
[**formatUpdateValue**](FormatApi#formatUpdateValue) | **POST** /format/update/value | [POST] /format/update/value
[**formatUsageEvent**](FormatApi#formatUsageEvent) | **POST** /format/usage/event | /format/usage/event [POST] Scoped to Format


<a id="formatAnalysis"></a>
## **formatAnalysis**
> Analysis formatAnalysis(format)

/format/\{format\}/analysis [GET]

This will get an analysis from a format&#39;s id.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatApi()
val format : java.util.UUID = 102ff265-fdfb-4142-8d94-4932d400199c // java.util.UUID | The id (uuid) for a specific format.
try {
    val result : Analysis = apiInstance.formatAnalysis(format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatApi#formatAnalysis")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatApi#formatAnalysis")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **java.util.UUID**| The id (uuid) for a specific format. |

### Return type

[**Analysis**](Analysis)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="formatReclassify"></a>
## **formatReclassify**
> Format formatReclassify(transferable, formatReclassification)

/format/reclassify [POST]

This endpoint will be used to reclassify a single Format.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatApi()
val transferable : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val formatReclassification : FormatReclassification =  // FormatReclassification | 
try {
    val result : Format = apiInstance.formatReclassify(transferable, formatReclassification)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatApi#formatReclassify")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatApi#formatReclassify")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferable** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **formatReclassification** | [**FormatReclassification**](FormatReclassification)|  | [optional]

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="formatSnapshot"></a>
## **formatSnapshot**
> Format formatSnapshot(format, transferable)

/format/\{format\} [GET] Scoped to Format

Get a snapshot of a specific format.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatApi()
val format : java.util.UUID = 102ff265-fdfb-4142-8d94-4932d400199c // java.util.UUID | The id (uuid) for a specific format.
val transferable : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Format = apiInstance.formatSnapshot(format, transferable)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatApi#formatSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatApi#formatSnapshot")
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

<a id="formatUpdateValue"></a>
## **formatUpdateValue**
> Format formatUpdateValue(transferable, format)

[POST] /format/update/value

This will update a format&#39;s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original&#39;s value. if this format is an asset.preview.original we will update the asset.preview.base&#39;s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original&#39;s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base&#39;s fragment string.  image fragment/file: We will not modify preview -&gt; orignal or original -&gt; preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatApi()
val transferable : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val format : Format =  // Format | This is the format that you want to update.
try {
    val result : Format = apiInstance.formatUpdateValue(transferable, format)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatApi#formatUpdateValue")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatApi#formatUpdateValue")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferable** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **format** | [**Format**](Format)| This is the format that you want to update. | [optional]

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="formatUsageEvent"></a>
## **formatUsageEvent**
> TrackedFormatEvent formatUsageEvent(seededTrackedFormatEvent)

/format/usage/event [POST] Scoped to Format

This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FormatApi()
val seededTrackedFormatEvent : SeededTrackedFormatEvent =  // SeededTrackedFormatEvent | This is a SeededTrackedFormatEvent, per tracked event:)
try {
    val result : TrackedFormatEvent = apiInstance.formatUsageEvent(seededTrackedFormatEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FormatApi#formatUsageEvent")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FormatApi#formatUsageEvent")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedFormatEvent** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent)| This is a SeededTrackedFormatEvent, per tracked event:) | [optional]

### Return type

[**TrackedFormatEvent**](TrackedFormatEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

