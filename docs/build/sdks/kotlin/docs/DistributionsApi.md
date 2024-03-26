# Distributions API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionsCreateNewDistribution**](DistributionsApi.md#distributionsCreateNewDistribution) | **POST** /distributions/create | /distributions/create [POST]
[**distributionsDeleteSpecificDistribution**](DistributionsApi.md#distributionsDeleteSpecificDistribution) | **POST** /distributions/\{distribution\}/delete | /distributions/\{distribution\}/delete [POST]
[**distributionsSnapshot**](DistributionsApi.md#distributionsSnapshot) | **GET** /distributions | /distributions [GET]


<a id="distributionsCreateNewDistribution"></a>
## **distributionsCreateNewDistribution**
> Distribution distributionsCreateNewDistribution(seededDistribution)

/distributions/create [POST]

This will create a new distribution.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededDistribution** | [**SeededDistribution**](SeededDistribution.md)|  | [optional]

### Return type

[**Distribution**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="distributionsDeleteSpecificDistribution"></a>
## **distributionsDeleteSpecificDistribution**
> distributionsDeleteSpecificDistribution(distribution)

/distributions/\{distribution\}/delete [POST]

This will delete a specific distribution.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 - **Accept**: application/json

<a id="distributionsSnapshot"></a>
## **distributionsSnapshot**
> Distributions distributionsSnapshot()

/distributions [GET]

This will get a specific snapshot of all our distributions.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Distributions**](Distributions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

