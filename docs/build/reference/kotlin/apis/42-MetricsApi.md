---
title: Metrics API | Kotlin SDK
---

# Metrics API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetricsFormats**](#getmetricsformats) | **GET** /metrics/formats | /metrics/formats [GET]
[**metricsFormatsOrdered**](#metricsformatsordered) | **GET** /metrics/formats/ordered | /metrics/formats/ordered [GET]


## **getMetricsFormats** {#getmetricsformats}
> FormatsMetrics getMetricsFormats()

/metrics/formats [GET]

This is going to get a snapshot of our FormatsMetrics

### Example {#getmetricsformats-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#getmetricsformats-parameters}
This endpoint does not need any parameter.

### Return type {#getmetricsformats-return-type}

[**FormatsMetrics**](../models/FormatsMetrics)

### Authorization {#getmetricsformats-authorization}

No authorization required

### HTTP request headers {#getmetricsformats-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **metricsFormatsOrdered** {#metricsformatsordered}
> OrderedMetrics metricsFormatsOrdered()

/metrics/formats/ordered [GET]

This will return a list of code formats in desc order from most to least formats uploaded.

### Example {#metricsformatsordered-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#metricsformatsordered-parameters}
This endpoint does not need any parameter.

### Return type {#metricsformatsordered-return-type}

[**OrderedMetrics**](../models/OrderedMetrics)

### Authorization {#metricsformatsordered-authorization}

No authorization required

### HTTP request headers {#metricsformatsordered-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

