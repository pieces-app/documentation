---
title: Persons API | Kotlin SDK
---

# Persons API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**personDisassociateAsset**](#persondisassociateasset) | **POST** /persons/\{person\}/assets/delete/\{asset\} | /persons/\{person\}/assets/delete/\{asset\} [POST]
[**personsCreateNewPerson**](#personscreatenewperson) | **POST** /persons/create | /persons/create [POST]
[**personsDeletePerson**](#personsdeleteperson) | **POST** /persons/\{person\}/delete | /persons/\{person\}/delete [POST]
[**personsSnapshot**](#personssnapshot) | **GET** /persons | /persons [GET]


## **personDisassociateAsset** {#persondisassociateasset}
> personDisassociateAsset(person, asset)

/persons/\{person\}/assets/delete/\{asset\} [POST]

This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example {#persondisassociateasset-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Persons API()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.personDisassociateAsset(person, asset)
} catch (e: ClientException) {
    println("4xx response calling Persons API#personDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Persons API#personDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters {#persondisassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#persondisassociateasset-return-type}

null (empty response body)

### Authorization {#persondisassociateasset-authorization}

No authorization required

### HTTP request headers {#persondisassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **personsCreateNewPerson** {#personscreatenewperson}
> Person personsCreateNewPerson(transferables, seededPerson)

/persons/create [POST]

This will create a new person.

### Example {#personscreatenewperson-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Persons API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededPerson : SeededPerson =  // SeededPerson | 
try {
    val result : Person = apiInstance.personsCreateNewPerson(transferables, seededPerson)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Persons API#personsCreateNewPerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Persons API#personsCreateNewPerson")
    e.printStackTrace()
}
```

### Parameters {#personscreatenewperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededPerson** | [**SeededPerson**](../models/SeededPerson)|  | [optional]

### Return type {#personscreatenewperson-return-type}

[**Person**](../models/Person)

### Authorization {#personscreatenewperson-authorization}

No authorization required

### HTTP request headers {#personscreatenewperson-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **personsDeletePerson** {#personsdeleteperson}
> personsDeletePerson(person)

/persons/\{person\}/delete [POST]

This will delete a specific person.

### Example {#personsdeleteperson-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Persons API()
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.personsDeletePerson(person)
} catch (e: ClientException) {
    println("4xx response calling Persons API#personsDeletePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Persons API#personsDeletePerson")
    e.printStackTrace()
}
```

### Parameters {#personsdeleteperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type {#personsdeleteperson-return-type}

null (empty response body)

### Authorization {#personsdeleteperson-authorization}

No authorization required

### HTTP request headers {#personsdeleteperson-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **personsSnapshot** {#personssnapshot}
> Persons personsSnapshot(transferables)

/persons [GET]

This will get a snapshot of all of your people

### Example {#personssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Persons API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Persons = apiInstance.personsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Persons API#personsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Persons API#personsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#personssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#personssnapshot-return-type}

[**Persons**](../models/Persons)

### Authorization {#personssnapshot-authorization}

No authorization required

### HTTP request headers {#personssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

