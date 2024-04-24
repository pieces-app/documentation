---
title: Distribution API | Kotlin SDK
---

# Distribution API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionUpdate**](#distributionupdate) | **POST** /distribution/update | /distribution/update [POST]
[**distributionsSpecificDistributionSnapshot**](#distributionsspecificdistributionsnapshot) | **GET** /distribution/\{distribution\} | /distribution/\{distribution\} [GET]


## **distributionUpdate** {#distributionupdate}
> Distribution distributionUpdate(distribution)

/distribution/update [POST]

This will update a specific Distribution.

### Example {#distributionupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DistributionApi()
val distribution : Distribution =  // Distribution | 
try {
    val result : Distribution = apiInstance.distributionUpdate(distribution)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DistributionApi#distributionUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DistributionApi#distributionUpdate")
    e.printStackTrace()
}
```

### Parameters {#distributionupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | [**Distribution**](../models/Distribution)|  | [optional]

### Return type {#distributionupdate-return-type}

[**Distribution**](../models/Distribution)

### Authorization {#distributionupdate-authorization}

No authorization required

### HTTP request headers {#distributionupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **distributionsSpecificDistributionSnapshot** {#distributionsspecificdistributionsnapshot}
> Distribution distributionsSpecificDistributionSnapshot(distribution)

/distribution/\{distribution\} [GET]

This will get a specific snapshot of a distribution.

### Example {#distributionsspecificdistributionsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = DistributionApi()
val distribution : kotlin.String = distribution_example // kotlin.String | This is the uuid of a specific distribution.
try {
    val result : Distribution = apiInstance.distributionsSpecificDistributionSnapshot(distribution)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DistributionApi#distributionsSpecificDistributionSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DistributionApi#distributionsSpecificDistributionSnapshot")
    e.printStackTrace()
}
```

### Parameters {#distributionsspecificdistributionsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution** | **kotlin.String**| This is the uuid of a specific distribution. |

### Return type {#distributionsspecificdistributionsnapshot-return-type}

[**Distribution**](../models/Distribution)

### Authorization {#distributionsspecificdistributionsnapshot-authorization}

No authorization required

### HTTP request headers {#distributionsspecificdistributionsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

