---
title: Distributions API | Kotlin SDK
---

# Distributions API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](#distributionscreatenewdistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](#distributionsdeletespecificdistribution) | **POST** /distributions/\{distribution\}/delete | /distributions/\{distribution\}/delete [POST]
[**distributionsSnapshot**](#distributionssnapshot) | **GET** /distributions | /distributions [GET]


## **distributionsCreateNewDistribution** {#distributionscreatenewdistribution}
> Distribution distributionsCreateNewDistribution(seededDistribution)

/distributions/create [POST]

This will create a new distribution.

### Example {#distributionscreatenewdistribution-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DistributionsApi()
val seededDistribution : SeededDistribution =  // SeededDistribution | 
try {
    val result : Distribution = apiInstance.distributionsCreateNewDistribution(seededDistribution)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DistributionsApi#distributionsCreateNewDistribution")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DistributionsApi#distributionsCreateNewDistribution")
    e.printStackTrace()
}
```

### Parameters {#distributionscreatenewdistribution-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | [**SeededDistribution**](../models/SeededDistribution)|  | [optional]

### Return type {#distributionscreatenewdistribution-return-type}

[**Distribution**](../models/Distribution)

### Authorization {#distributionscreatenewdistribution-authorization}

No authorization required

### HTTP request headers {#distributionscreatenewdistribution-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **distributionsDeleteSpecificDistribution** {#distributionsdeletespecificdistribution}
> distributionsDeleteSpecificDistribution(distribution)

/distributions/\{distribution\}/delete [POST]

This will delete a specific distribution.

### Example {#distributionsdeletespecificdistribution-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DistributionsApi()
val distribution : kotlin.String = distribution_example // kotlin.String | This is the uuid of a specific distribution.
try {
    apiInstance.distributionsDeleteSpecificDistribution(distribution)
} catch (e: ClientException) {
    println("4xx response calling DistributionsApi#distributionsDeleteSpecificDistribution")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DistributionsApi#distributionsDeleteSpecificDistribution")
    e.printStackTrace()
}
```

### Parameters {#distributionsdeletespecificdistribution-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **kotlin.String**| This is the uuid of a specific distribution. |

### Return type {#distributionsdeletespecificdistribution-return-type}

null (empty response body)

### Authorization {#distributionsdeletespecificdistribution-authorization}

No authorization required

### HTTP request headers {#distributionsdeletespecificdistribution-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **distributionsSnapshot** {#distributionssnapshot}
> Distributions distributionsSnapshot()

/distributions [GET]

This will get a specific snapshot of all our distributions.

### Example {#distributionssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DistributionsApi()
try {
    val result : Distributions = apiInstance.distributionsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DistributionsApi#distributionsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DistributionsApi#distributionsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#distributionssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#distributionssnapshot-return-type}

[**Distributions**](../models/Distributions)

### Authorization {#distributionssnapshot-authorization}

No authorization required

### HTTP request headers {#distributionssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

