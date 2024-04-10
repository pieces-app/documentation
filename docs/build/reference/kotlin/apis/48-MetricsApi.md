# Metrics API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getMetricsFormats**](#getmetricsformats) | **GET** /metrics/formats
[**metricsFormatsOrdered**](#metricsformatsordered) | **GET** /metrics/formats/ordered


<a id="getMetricsFormats"></a>
## **getMetricsFormats** {#getmetricsformats}
> FormatsMetrics getMetricsFormats()

/metrics/formats [GET]

This is going to get a snapshot of our FormatsMetrics

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = MetricsApi()
try {
    val result : FormatsMetrics = apiInstance.getMetricsFormats()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MetricsApi#getMetricsFormats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MetricsApi#getMetricsFormats")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameters.

### Return type

[**FormatsMetrics**](../models/FormatsMetrics)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="metricsFormatsOrdered"></a>
## **metricsFormatsOrdered** {#metricsformatsordered}
> OrderedMetrics metricsFormatsOrdered()

/metrics/formats/ordered [GET]

This will return a list of code formats in desc order from most to least formats uploaded.

### Example
```kotlin
// Import classes:
// import org.openapitools.client.infrastructure.*
// import org.openapitools.client.models.*

val apiInstance = MetricsApi()
try {
    val result : OrderedMetrics = apiInstance.metricsFormatsOrdered()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MetricsApi#metricsFormatsOrdered")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MetricsApi#metricsFormatsOrdered")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameters.

### Return type

[**OrderedMetrics**](../models/OrderedMetrics)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

