# Sensitive API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**sensitiveScoresIncrement**](#sensitivescoresincrement) | **POST** /sensitive/\{sensitive\}/scores/increment
[**sensitiveSnapshot**](#sensitivesnapshot) | **GET** /sensitive/\{sensitive\}
[**updateSensitive**](#updatesensitive) | **POST** /sensitive/update


<a id="sensitiveScoresIncrement"></a>
## **sensitiveScoresIncrement** {#sensitivescoresincrement}
> sensitiveScoresIncrement(sensitive, seededScoreIncrement)

&#39;/sensitive/\{sensitive\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="sensitiveSnapshot"></a>
## **sensitiveSnapshot** {#sensitivesnapshot}
> Sensitive sensitiveSnapshot(sensitive)

/sensitive/\{sensitive\} [GET]

This will get a specific sensitive via the sensitive uuid.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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

[**Sensitive**](../models/Sensitive)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateSensitive"></a>
## **updateSensitive** {#updatesensitive}
> Sensitive updateSensitive(sensitive)

/sensitive/update [POST]

This will update a specific sensitive

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

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
 **sensitive** | [**Sensitive**](../models/Sensitive)|  | [optional]

### Return type

[**Sensitive**](../models/Sensitive)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

