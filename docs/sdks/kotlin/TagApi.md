# TagApi

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagAssociateAsset**](TagApi#tagAssociateAsset) | **POST** /tag/\{tag\}/assets/associate/\{asset\} | /tag/\{tag\}/assets/associate/\{asset\} [POST]
[**tagAssociatePerson**](TagApi#tagAssociatePerson) | **POST** /tag/\{tag\}/persons/associate/\{person\} | /tag/\{tag\}/persons/associate/\{person\} [POST]
[**tagDisassociateAsset**](TagApi#tagDisassociateAsset) | **POST** /tag/\{tag\}/assets/disassociate/\{asset\} | /tag/\{tag\}/assets/disassociate/\{asset\} [POST]
[**tagDisassociatePerson**](TagApi#tagDisassociatePerson) | **POST** /tag/\{tag\}/persons/disassociate/\{person\} | /tag/\{tag\}/persons/disassociate/\{person\} [POST]
[**tagScoresIncrement**](TagApi#tagScoresIncrement) | **POST** /tag/\{tag\}/scores/increment | &#39;/tag/\{tag\}/scores/increment&#39; [POST]
[**tagUpdate**](TagApi#tagUpdate) | **POST** /tag/update | /tag/update [POST]
[**tagsSpecificTagSnapshot**](TagApi#tagsSpecificTagSnapshot) | **GET** /tag/\{tag\} | /tag/\{tag\} [GET]


<a id="tagAssociateAsset"></a>
## **tagAssociateAsset**
> tagAssociateAsset(asset, tag)

/tag/\{tag\}/assets/associate/\{asset\} [POST]

This will associate a tag with a asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val tag : kotlin.String = tag_example // kotlin.String | tag id
try {
    apiInstance.tagAssociateAsset(asset, tag)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagAssociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagAssociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **tag** | **kotlin.String**| tag id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagAssociatePerson"></a>
## **tagAssociatePerson**
> tagAssociatePerson(tag, person)

/tag/\{tag\}/persons/associate/\{person\} [POST]

This will associate a tag with a person.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.tagAssociatePerson(tag, person)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagAssociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagAssociatePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagDisassociateAsset"></a>
## **tagDisassociateAsset**
> tagDisassociateAsset(tag, asset)

/tag/\{tag\}/assets/disassociate/\{asset\} [POST]

This will enable us to dissassociate a tag from a asset.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.tagDisassociateAsset(tag, asset)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagDisassociatePerson"></a>
## **tagDisassociatePerson**
> tagDisassociatePerson(tag, person)

/tag/\{tag\}/persons/disassociate/\{person\} [POST]

This will enable us to dissassociate a tag from a person.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.tagDisassociatePerson(tag, person)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagDisassociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagDisassociatePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="tagScoresIncrement"></a>
## **tagScoresIncrement**
> tagScoresIncrement(tag, seededScoreIncrement)

&#39;/tag/\{tag\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.tagScoresIncrement(tag, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **seededScoreIncrement** | [**SeededScoreIncrement**](SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="tagUpdate"></a>
## **tagUpdate**
> Tag tagUpdate(transferables, tag)

/tag/update [POST]

This will update a specific tag.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val tag : Tag =  // Tag | 
try {
    val result : Tag = apiInstance.tagUpdate(transferables, tag)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **tag** | [**Tag**](Tag)|  | [optional]

### Return type

[**Tag**](Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="tagsSpecificTagSnapshot"></a>
## **tagsSpecificTagSnapshot**
> Tag tagsSpecificTagSnapshot(tag, transferables)

/tag/\{tag\} [GET]

This will get a specific tag.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TagApi()
val tag : kotlin.String = tag_example // kotlin.String | tag id
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Tag = apiInstance.tagsSpecificTagSnapshot(tag, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TagApi#tagsSpecificTagSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TagApi#tagsSpecificTagSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **kotlin.String**| tag id |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**Tag**](Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

