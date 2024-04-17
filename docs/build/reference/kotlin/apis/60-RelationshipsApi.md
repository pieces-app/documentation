---
title: Relationships API | Kotlin SDK
---

# Relationships API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSnapshot**](#relationshipssnapshot) | **GET** /relationships | /relationships [GET]


## **relationshipsSnapshot** {#relationshipssnapshot}
> Relationships relationshipsSnapshot()

/relationships [GET]

This will return all of the relationships that exists within your pieces db.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Relationships API()
try {
    val result : Relationships = apiInstance.relationshipsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Relationships API#relationshipsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Relationships API#relationshipsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Relationships**](../models/Relationships)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

