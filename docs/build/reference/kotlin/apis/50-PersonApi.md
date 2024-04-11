# Person API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personAssociateWorkstreamSummary**](#personassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**personDisassociateWorkstreamSummary**](#persondisassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**personScoresIncrement**](#personscoresincrement) | **POST** /person/\{person\}/scores/increment | '/person/\{person\}/scores/increment' [POST]
[**personSnapshot**](#personsnapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**updatePerson**](#updateperson) | **POST** /person/update | /person/update [POST]


## **personAssociateWorkstreamSummary** {#personassociateworkstreamsummary}
> personAssociateWorkstreamSummary(person, workstreamSummary)

/person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a person with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = PersonApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.personAssociateWorkstreamSummary(person, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling PersonApi#personAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonApi#personAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **personDisassociateWorkstreamSummary** {#persondisassociateworkstreamsummary}
> personDisassociateWorkstreamSummary(person, workstreamSummary)

/person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an person from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = PersonApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.personDisassociateWorkstreamSummary(person, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling PersonApi#personDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonApi#personDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **personScoresIncrement** {#personscoresincrement}
> personScoresIncrement(person, seededScoreIncrement)

&#39;/person/\{person\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **personSnapshot** {#personsnapshot}
> Person personSnapshot(person, transferables)

/person/\{person\} [GET]

This will get a snapshot of a specific person

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **updatePerson** {#updateperson}
> Person updatePerson(transferables, person)

/person/update [POST]

This will update a specific person

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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
 **person** | [**Person**](../models/Person)|  | [optional]

### Return type

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

