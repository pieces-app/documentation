# Sensitive API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensitiveScoresIncrement**](SensitiveApi.md#sensitivescoresincrement) | **POST** /sensitive/\{sensitive\}/scores/increment | &#39;/sensitive/\{sensitive\}/scores/increment&#39; [POST]
[**sensitiveSnapshot**](SensitiveApi.md#sensitivesnapshot) | **GET** /sensitive/\{sensitive\} | /sensitive/\{sensitive\} [GET]
[**updateSensitive**](SensitiveApi.md#updatesensitive) | **POST** /sensitive/update | /sensitive/update [POST]


<a id="sensitiveScoresIncrement"></a>
## **sensitiveScoresIncrement**
> sensitiveScoresIncrement(sensitive, seededScoreIncrement)

&#39;/sensitive/\{sensitive\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SensitiveApi()
val sensitive : kotlin.String = sensitive_example // kotlin.String | This is a uuid that represents a sensitive.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.sensitiveScoresIncrement(sensitive, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling SensitiveApi#sensitiveScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitiveApi#sensitiveScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **kotlin.String**| This is a uuid that represents a sensitive. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="sensitiveSnapshot"></a>
## **sensitiveSnapshot**
> Sensitive sensitiveSnapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SensitiveApi()
val sensitive : kotlin.String = sensitive_example // kotlin.String | 
try {
    val result : Sensitive = apiInstance.sensitiveSnapshot(sensitive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SensitiveApi#sensitiveSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitiveApi#sensitiveSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | **kotlin.String**|  |

### Return type

[**Sensitive**](Sensitive.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSensitive"></a>
## **updateSensitive**
> Sensitive updateSensitive(sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SensitiveApi()
val sensitive : Sensitive =  // Sensitive | 
try {
    val result : Sensitive = apiInstance.updateSensitive(sensitive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SensitiveApi#updateSensitive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SensitiveApi#updateSensitive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensitive** | [**Sensitive**](Sensitive.md)|  | [optional]

### Return type

[**Sensitive**](Sensitive.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

