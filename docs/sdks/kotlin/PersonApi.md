# Person API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personScoresIncrement**](PersonApi#personScoresIncrement) | **POST** /person/\{person\}/scores/increment | &#39;/person/\{person\}/scores/increment&#39; [POST]
[**personSnapshot**](PersonApi#personSnapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**updatePerson**](PersonApi#updatePerson) | **POST** /person/update | /person/update [POST]


<a id="personScoresIncrement"></a>
## **personScoresIncrement**
> personScoresIncrement(person, seededScoreIncrement)

&#39;/person/\{person\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.personScoresIncrement(person, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling PersonApi#personScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonApi#personScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="personSnapshot"></a>
## **personSnapshot**
> Person personSnapshot(person, transferables)

/person/\{person\} [GET]

This will get a snapshot of a specific person

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Person = apiInstance.personSnapshot(person, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PersonApi#personSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonApi#personSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Person**](Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updatePerson"></a>
## **updatePerson**
> Person updatePerson(transferables, person)

/person/update [POST]

This will update a specific person

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val person : Person =  // Person | 
try {
    val result : Person = apiInstance.updatePerson(transferables, person)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PersonApi#updatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonApi#updatePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **person** | [**Person**](Person)|  | [optional]

### Return type

[**Person**](Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

