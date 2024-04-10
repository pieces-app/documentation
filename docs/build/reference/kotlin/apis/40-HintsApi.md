# Hints API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**hintsCreateNewHint**](#hintscreatenewhint) | **POST** /hints/create
[**hintsDeleteSpecificHint**](#hintsdeletespecifichint) | **POST** /hints/\{hint\}/delete
[**hintsSnapshot**](#hintssnapshot) | **GET** /hints


<a id="hintsCreateNewHint"></a>
## **hintsCreateNewHint** {#hintscreatenewhint}
> Hint hintsCreateNewHint(seededHint)

/hints/create [POST]

This will create a hint.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = HintsApi()
val seededHint : SeededHint =  // SeededHint | 
try {
    val result : Hint = apiInstance.hintsCreateNewHint(seededHint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HintsApi#hintsCreateNewHint")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintsApi#hintsCreateNewHint")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededHint** | [**SeededHint**](../models/SeededHint)|  | [optional]

### Return type

[**Hint**](../models/Hint)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="hintsDeleteSpecificHint"></a>
## **hintsDeleteSpecificHint** {#hintsdeletespecifichint}
> hintsDeleteSpecificHint(hint)

/hints/\{hint\}/delete [POST]

This will delete a specific hint.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = HintsApi()
val hint : kotlin.String = hint_example // kotlin.String | This is a specific hint uuid
try {
    apiInstance.hintsDeleteSpecificHint(hint)
} catch (e: ClientException) {
    println("4xx response calling HintsApi#hintsDeleteSpecificHint")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintsApi#hintsDeleteSpecificHint")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **kotlin.String**| This is a specific hint uuid |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="hintsSnapshot"></a>
## **hintsSnapshot** {#hintssnapshot}
> Hints hintsSnapshot()

/hints [GET]

This will get a snapshot of all of the hints.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = HintsApi()
try {
    val result : Hints = apiInstance.hintsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HintsApi#hintsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintsApi#hintsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameters.

### Return type

[**Hints**](../models/Hints)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

