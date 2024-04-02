# Hint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hintScoresIncrement**](#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment | &#39;/hint/\{hint\}/scores/increment&#39; [POST]
[**hintSpecificHintSnapshot**](#hintspecifichintsnapshot) | **GET** /hint/\{hint\} | /hint/\{hint\} [POST]
[**hintUpdate**](#hintupdate) | **POST** /hint/update | /hint/update [POST]


<a id="hintScoresIncrement"></a>
## **hintScoresIncrement**
> hintScoresIncrement(hint, seededScoreIncrement)

&#39;/hint/\{hint\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = HintApi()
val hint : kotlin.String = hint_example // kotlin.String | This is a specific hint uuid
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.hintScoresIncrement(hint, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling HintApi#hintScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintApi#hintScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **kotlin.String**| This is a specific hint uuid |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="hintSpecificHintSnapshot"></a>
## **hintSpecificHintSnapshot**
> Hint hintSpecificHintSnapshot(hint)

/hint/\{hint\} [POST]

This will get a snapshot of a specific hint.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = HintApi()
val hint : kotlin.String = hint_example // kotlin.String | This is a specific hint uuid
try {
    val result : Hint = apiInstance.hintSpecificHintSnapshot(hint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HintApi#hintSpecificHintSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintApi#hintSpecificHintSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **kotlin.String**| This is a specific hint uuid |

### Return type

[**Hint**](../models/Hint)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="hintUpdate"></a>
## **hintUpdate**
> Hint hintUpdate(hint)

/hint/update [POST]

This will update a specific hint.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = HintApi()
val hint : Hint =  // Hint | 
try {
    val result : Hint = apiInstance.hintUpdate(hint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling HintApi#hintUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling HintApi#hintUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**Hint**](../models/Hint)|  | [optional]

### Return type

[**Hint**](../models/Hint)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

