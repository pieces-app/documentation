---
title: Relationship API | Kotlin SDK
---

# Relationship API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSpecificRelationshipSnapshot**](#relationshipsspecificrelationshipsnapshot) | **GET** /relationship/\{relationship\} | /relationship/\{relationship\} [GET]


## **relationshipsSpecificRelationshipSnapshot** {#relationshipsspecificrelationshipsnapshot}
> Relationship relationshipsSpecificRelationshipSnapshot(relationship)

/relationship/\{relationship\} [GET]

This will return a single relationship object.

### Example {#relationshipsspecificrelationshipsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = RelationshipApi()
val relationship : kotlin.String = relationship_example // kotlin.String | this is a specific relationship uuid.
try {
    val result : Relationship = apiInstance.relationshipsSpecificRelationshipSnapshot(relationship)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationshipApi#relationshipsSpecificRelationshipSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationshipApi#relationshipsSpecificRelationshipSnapshot")
    e.printStackTrace()
}
```

### Parameters {#relationshipsspecificrelationshipsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | **kotlin.String**| this is a specific relationship uuid. |

### Return type {#relationshipsspecificrelationshipsnapshot-return-type}

[**Relationship**](../models/Relationship)

### Authorization {#relationshipsspecificrelationshipsnapshot-authorization}

No authorization required

### HTTP request headers {#relationshipsspecificrelationshipsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

