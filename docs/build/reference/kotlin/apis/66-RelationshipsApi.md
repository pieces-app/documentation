# Relationships API

All URIs are relative to *http://localhost:3000*

Method | HTTP request
------------- | -------------
[**relationshipsSnapshot**](#relationshipssnapshot) | **GET** /relationships


<a id="relationshipsSnapshot"></a>
## **relationshipsSnapshot** {#relationshipssnapshot}
> Relationships relationshipsSnapshot()

/relationships [GET]

This will reurn all of the relationships that exists within your pieces db.

### Example
```kotlin
// Import classes:
// import app.pieces.pieces-os-client.infrastructure.*
// import app.pieces.pieces-os-client.models.*

val apiInstance = RelationshipsApi()
try {
    val result : Relationships = apiInstance.relationshipsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RelationshipsApi#relationshipsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RelationshipsApi#relationshipsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameters.

### Return type

[**Relationships**](../models/Relationships)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

