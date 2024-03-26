# Anchors API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorDisassociateAsset**](AnchorsApi.md#anchorDisassociateAsset) | **POST** /anchors/\{anchor\}/assets/delete/\{asset\} | /anchors/\{anchor\}/assets/delete/\{asset\} [POST]
[**anchorsCreateNewAnchor**](AnchorsApi.md#anchorsCreateNewAnchor) | **POST** /anchors/create | /anchors/create [POST]
[**anchorsDeleteSpecificAnchor**](AnchorsApi.md#anchorsDeleteSpecificAnchor) | **POST** /anchors/\{anchor\}/delete | /anchors/\{anchor\}/delete [POST]
[**anchorsSnapshot**](AnchorsApi.md#anchorsSnapshot) | **GET** /anchors | /anchors [GET]


<a id="anchorDisassociateAsset"></a>
## **anchorDisassociateAsset**
> anchorDisassociateAsset(anchor, asset)

/anchors/\{anchor\}/assets/delete/\{asset\} [POST]

This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorsApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.anchorDisassociateAsset(anchor, asset)
} catch (e: ClientException) {
    println("4xx response calling AnchorsApi#anchorDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorsApi#anchorDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="anchorsCreateNewAnchor"></a>
## **anchorsCreateNewAnchor**
> Anchor anchorsCreateNewAnchor(transferables, seededAnchor)

/anchors/create [POST]

This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val seededAnchor : SeededAnchor =  // SeededAnchor | 
try {
    val result : Anchor = apiInstance.anchorsCreateNewAnchor(transferables, seededAnchor)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorsApi#anchorsCreateNewAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorsApi#anchorsCreateNewAnchor")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededAnchor** | [**SeededAnchor**](SeededAnchor.md)|  | [optional]

### Return type

[**Anchor**](Anchor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="anchorsDeleteSpecificAnchor"></a>
## **anchorsDeleteSpecificAnchor**
> anchorsDeleteSpecificAnchor(anchor)

/anchors/\{anchor\}/delete [POST]

This will delete a specific anchor!

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorsApi()
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
try {
    apiInstance.anchorsDeleteSpecificAnchor(anchor)
} catch (e: ClientException) {
    println("4xx response calling AnchorsApi#anchorsDeleteSpecificAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorsApi#anchorsDeleteSpecificAnchor")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="anchorsSnapshot"></a>
## **anchorsSnapshot**
> Anchors anchorsSnapshot(transferables)

/anchors [GET]

This will get a snapshot of all your anchors.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AnchorsApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Anchors = apiInstance.anchorsSnapshot(transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AnchorsApi#anchorsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AnchorsApi#anchorsSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Anchors**](Anchors.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

