# Persons API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personDisassociateAsset**](PersonsApi#personDisassociateAsset) | **POST** /persons/\{person\}/assets/delete/\{asset\} | /persons/\{person\}/assets/delete/\{asset\} [POST]
[**personsCreateNewPerson**](PersonsApi#personsCreateNewPerson) | **POST** /persons/create | /persons/create [POST]
[**personsDeletePerson**](PersonsApi#personsDeletePerson) | **POST** /persons/\{person\}/delete | /persons/\{person\}/delete [POST]
[**personsSnapshot**](PersonsApi#personsSnapshot) | **GET** /persons | /persons [GET]


<a id="personDisassociateAsset"></a>
## **personDisassociateAsset**
> personDisassociateAsset(person, asset)

/persons/\{person\}/assets/delete/\{asset\} [POST]

This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonsApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.personDisassociateAsset(person, asset)
} catch (e: ClientException) {
    println("4xx response calling PersonsApi#personDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonsApi#personDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="personsCreateNewPerson"></a>
## **personsCreateNewPerson**
> Person personsCreateNewPerson(transferables, seededPerson)

/persons/create [POST]

This will create a new person.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededPerson : SeededPerson =  // SeededPerson | 
try {
    val result : Person = apiInstance.personsCreateNewPerson(transferables, seededPerson)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PersonsApi#personsCreateNewPerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonsApi#personsCreateNewPerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededPerson** | [**SeededPerson**](SeededPerson)|  | [optional]

### Return type

[**Person**](Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="personsDeletePerson"></a>
## **personsDeletePerson**
> personsDeletePerson(person)

/persons/\{person\}/delete [POST]

This will delete a specific person.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonsApi()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.personsDeletePerson(person)
} catch (e: ClientException) {
    println("4xx response calling PersonsApi#personsDeletePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonsApi#personsDeletePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="personsSnapshot"></a>
## **personsSnapshot**
> Persons personsSnapshot(transferables)

/persons [GET]

This will get a snapshot of all of your people

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PersonsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Persons = apiInstance.personsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PersonsApi#personsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PersonsApi#personsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Persons**](Persons)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

