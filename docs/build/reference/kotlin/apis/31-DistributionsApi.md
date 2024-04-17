---
title: Distributions API | Kotlin SDK
---

# Distributions API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](#distributionscreatenewdistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](#distributionsdeletespecificdistribution) | **POST** /distributions/\{distribution\}/delete | /distributions/\{distribution\}/delete [POST]
[**distributionsSnapshot**](#distributionssnapshot) | **GET** /distributions | /distributions [GET]


## **distributionsCreateNewDistribution** {#distributionscreatenewdistribution}
> Distribution distributionsCreateNewDistribution(seededDistribution)

/distributions/create [POST]

This will create a new distribution.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Distributions API()
val seededDistribution : SeededDistribution =  // SeededDistribution | 
try {
    val result : Distribution = apiInstance.distributionsCreateNewDistribution(seededDistribution)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Distributions API#distributionsCreateNewDistribution")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Distributions API#distributionsCreateNewDistribution")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | [**SeededDistribution**](../models/SeededDistribution)|  | [optional]

### Return type

[**Distribution**](../models/Distribution)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **distributionsDeleteSpecificDistribution** {#distributionsdeletespecificdistribution}
> distributionsDeleteSpecificDistribution(distribution)

/distributions/\{distribution\}/delete [POST]

This will delete a specific distribution.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Distributions API()
val distribution : kotlin.String = distribution_example // kotlin.String | This is the uuid of a specific distribution.
try {
    apiInstance.distributionsDeleteSpecificDistribution(distribution)
} catch (e: ClientException) {
    println("4xx response calling Distributions API#distributionsDeleteSpecificDistribution")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Distributions API#distributionsDeleteSpecificDistribution")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **kotlin.String**| This is the uuid of a specific distribution. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **distributionsSnapshot** {#distributionssnapshot}
> Distributions distributionsSnapshot()

/distributions [GET]

This will get a specific snapshot of all our distributions.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Distributions API()
try {
    val result : Distributions = apiInstance.distributionsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Distributions API#distributionsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Distributions API#distributionsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Distributions**](../models/Distributions)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

