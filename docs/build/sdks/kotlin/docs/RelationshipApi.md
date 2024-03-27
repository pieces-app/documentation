# Relationship API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**relationshipsSpecificRelationshipSnapshot**](RelationshipApi.md#relationshipsspecificrelationshipsnapshot) | **GET** /relationship/\{relationship\} | /relationship/\{relationship\} [GET]


<a id="relationshipsSpecificRelationshipSnapshot"></a>
## **relationshipsSpecificRelationshipSnapshot**
> Relationship relationshipsSpecificRelationshipSnapshot(relationship)

/relationship/\{relationship\} [GET]

This will return a single relationship object.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationship** | **kotlin.String**| this is a specific relationship uuid. |

### Return type

[**Relationship**](Relationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

