---
title: Anchors API | Kotlin SDK
---

# Anchors API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorDisassociateAsset**](#anchordisassociateasset) | **POST** /anchors/\{anchor\}/assets/delete/\{asset\} | /anchors/\{anchor\}/assets/delete/\{asset\} [POST]
[**anchorsCreateNewAnchor**](#anchorscreatenewanchor) | **POST** /anchors/create | /anchors/create [POST]
[**anchorsDeleteSpecificAnchor**](#anchorsdeletespecificanchor) | **POST** /anchors/\{anchor\}/delete | /anchors/\{anchor\}/delete [POST]
[**anchorsSnapshot**](#anchorssnapshot) | **GET** /anchors | /anchors [GET]


## **anchorDisassociateAsset** {#anchordisassociateasset}
> anchorDisassociateAsset(anchor, asset)

/anchors/\{anchor\}/assets/delete/\{asset\} [POST]

This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example {#anchordisassociateasset-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#anchordisassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#anchordisassociateasset-return-type}

null (empty response body)

### Authorization {#anchordisassociateasset-authorization}

No authorization required

### HTTP request headers {#anchordisassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **anchorsCreateNewAnchor** {#anchorscreatenewanchor}
> Anchor anchorsCreateNewAnchor(transferables, seededAnchor)

/anchors/create [POST]

This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.

### Example {#anchorscreatenewanchor-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#anchorscreatenewanchor-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **seededAnchor** | [**SeededAnchor**](../models/SeededAnchor)|  | [optional]

### Return type {#anchorscreatenewanchor-return-type}

[**Anchor**](../models/Anchor)

### Authorization {#anchorscreatenewanchor-authorization}

No authorization required

### HTTP request headers {#anchorscreatenewanchor-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **anchorsDeleteSpecificAnchor** {#anchorsdeletespecificanchor}
> anchorsDeleteSpecificAnchor(anchor)

/anchors/\{anchor\}/delete [POST]

This will delete a specific anchor!

### Example {#anchorsdeletespecificanchor-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#anchorsdeletespecificanchor-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type {#anchorsdeletespecificanchor-return-type}

null (empty response body)

### Authorization {#anchorsdeletespecificanchor-authorization}

No authorization required

### HTTP request headers {#anchorsdeletespecificanchor-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **anchorsSnapshot** {#anchorssnapshot}
> Anchors anchorsSnapshot(transferables)

/anchors [GET]

This will get a snapshot of all your anchors.

### Example {#anchorssnapshot-example}
```kotlin
// Import classes:
import app.pieces.pieces-os-client.infrastructure.*
import app.pieces.pieces-os-client.models.*

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

### Parameters {#anchorssnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#anchorssnapshot-return-type}

[**Anchors**](../models/Anchors)

### Authorization {#anchorssnapshot-authorization}

No authorization required

### HTTP request headers {#anchorssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

