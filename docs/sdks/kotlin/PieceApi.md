# PieceApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**htmlShare**](PieceApi#htmlShare) | **GET** / | / [GET]


<a id="htmlShare"></a>
## **htmlShare**
> kotlin.String htmlShare(p)

/ [GET]

This is a cloud only Api. This will get a preview of your publically accessble Piece.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PieceApi()
val p : kotlin.String = p_example // kotlin.String | this is the a query param, that a shortened version of the share.
try {
    val result : kotlin.String = apiInstance.htmlShare(p)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PieceApi#htmlShare")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PieceApi#htmlShare")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p** | **kotlin.String**| this is the a query param, that a shortened version of the share. |

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

