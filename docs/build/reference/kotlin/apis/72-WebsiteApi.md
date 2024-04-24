---
title: Website API | Kotlin SDK
---

# Website API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**websiteAssociateAsset**](#websiteassociateasset) | **POST** /website/\{website\}/assets/associate/\{asset\} | /website/\{website\}/assets/associate/\{asset\} [POST]
[**websiteAssociateConversation**](#websiteassociateconversation) | **POST** /website/\{website\}/conversations/associate/\{conversation\} | /website/\{website\}/conversations/associate/\{conversation\} [POST]
[**websiteAssociatePerson**](#websiteassociateperson) | **POST** /website/\{website\}/persons/associate/\{person\} | /website/\{website\}/persons/associate/\{person\} [POST]
[**websiteAssociateWorkstreamSummary**](#websiteassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**websiteDisassociateAsset**](#websitedisassociateasset) | **POST** /website/\{website\}/assets/disassociate/\{asset\} | /website/\{website\}/assets/disassociate/\{asset\} [POST]
[**websiteDisassociateConversation**](#websitedisassociateconversation) | **POST** /website/\{website\}/conversations/disassociate/\{conversation\} | /website/\{website\}/conversations/disassociate/\{conversation\} [POST]
[**websiteDisassociatePerson**](#websitedisassociateperson) | **POST** /website/\{website\}/persons/disassociate/\{person\} | /website/\{website\}/persons/disassociate/\{person\} [POST]
[**websiteDisassociateWorkstreamSummary**](#websitedisassociateworkstreamsummary) | **POST** /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} | /website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**websiteScoresIncrement**](#websitescoresincrement) | **POST** /website/\{website\}/scores/increment | '/website/\{website\}/scores/increment' [POST]
[**websiteUpdate**](#websiteupdate) | **POST** /website/update | /website/update [POST]
[**websitesSpecificWebsiteSnapshot**](#websitesspecificwebsitesnapshot) | **GET** /website/\{website\} | /website/\{website\} [GET]


## **websiteAssociateAsset** {#websiteassociateasset}
> websiteAssociateAsset(asset, website)

/website/\{website\}/assets/associate/\{asset\} [POST]

This will associate a website with a asset.

### Example {#websiteassociateasset-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.websiteAssociateAsset(asset, website)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteAssociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteAssociateAsset")
    e.printStackTrace()
}
```

### Parameters {#websiteassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |
 **website** | **kotlin.String**| website id |

### Return type {#websiteassociateasset-return-type}

null (empty response body)

### Authorization {#websiteassociateasset-authorization}

No authorization required

### HTTP request headers {#websiteassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteAssociateConversation** {#websiteassociateconversation}
> websiteAssociateConversation(website, conversation)

/website/\{website\}/conversations/associate/\{conversation\} [POST]

This will associate a website with a conversation.

### Example {#websiteassociateconversation-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.websiteAssociateConversation(website, conversation)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteAssociateConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteAssociateConversation")
    e.printStackTrace()
}
```

### Parameters {#websiteassociateconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type {#websiteassociateconversation-return-type}

null (empty response body)

### Authorization {#websiteassociateconversation-authorization}

No authorization required

### HTTP request headers {#websiteassociateconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteAssociatePerson** {#websiteassociateperson}
> websiteAssociatePerson(website, person)

/website/\{website\}/persons/associate/\{person\} [POST]

This will associate a website with a person.

### Example {#websiteassociateperson-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.websiteAssociatePerson(website, person)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteAssociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteAssociatePerson")
    e.printStackTrace()
}
```

### Parameters {#websiteassociateperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type {#websiteassociateperson-return-type}

null (empty response body)

### Authorization {#websiteassociateperson-authorization}

No authorization required

### HTTP request headers {#websiteassociateperson-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteAssociateWorkstreamSummary** {#websiteassociateworkstreamsummary}
> websiteAssociateWorkstreamSummary(website, workstreamSummary)

/website/\{website\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websiteassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.websiteAssociateWorkstreamSummary(website, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteAssociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteAssociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#websiteassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#websiteassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#websiteassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#websiteassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteDisassociateAsset** {#websitedisassociateasset}
> websiteDisassociateAsset(website, asset)

/website/\{website\}/assets/disassociate/\{asset\} [POST]

This will enable us to dissassociate a website from a asset.

### Example {#websitedisassociateasset-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.websiteDisassociateAsset(website, asset)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters {#websitedisassociateasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type {#websitedisassociateasset-return-type}

null (empty response body)

### Authorization {#websitedisassociateasset-authorization}

No authorization required

### HTTP request headers {#websitedisassociateasset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteDisassociateConversation** {#websitedisassociateconversation}
> websiteDisassociateConversation(website, conversation)

/website/\{website\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to dissassociate a website from a conversation.

### Example {#websitedisassociateconversation-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.websiteDisassociateConversation(website, conversation)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteDisassociateConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteDisassociateConversation")
    e.printStackTrace()
}
```

### Parameters {#websitedisassociateconversation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type {#websitedisassociateconversation-return-type}

null (empty response body)

### Authorization {#websitedisassociateconversation-authorization}

No authorization required

### HTTP request headers {#websitedisassociateconversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteDisassociatePerson** {#websitedisassociateperson}
> websiteDisassociatePerson(website, person)

/website/\{website\}/persons/disassociate/\{person\} [POST]

This will enable us to dissassociate a website from a person.

### Example {#websitedisassociateperson-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.websiteDisassociatePerson(website, person)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteDisassociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteDisassociatePerson")
    e.printStackTrace()
}
```

### Parameters {#websitedisassociateperson-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type {#websitedisassociateperson-return-type}

null (empty response body)

### Authorization {#websitedisassociateperson-authorization}

No authorization required

### HTTP request headers {#websitedisassociateperson-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteDisassociateWorkstreamSummary** {#websitedisassociateworkstreamsummary}
> websiteDisassociateWorkstreamSummary(website, workstreamSummary)

/website/\{website\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example {#websitedisassociateworkstreamsummary-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
try {
    apiInstance.websiteDisassociateWorkstreamSummary(website, workstreamSummary)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteDisassociateWorkstreamSummary")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteDisassociateWorkstreamSummary")
    e.printStackTrace()
}
```

### Parameters {#websitedisassociateworkstreamsummary-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |

### Return type {#websitedisassociateworkstreamsummary-return-type}

null (empty response body)

### Authorization {#websitedisassociateworkstreamsummary-authorization}

No authorization required

### HTTP request headers {#websitedisassociateworkstreamsummary-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **websiteScoresIncrement** {#websitescoresincrement}
> websiteScoresIncrement(website, seededScoreIncrement)

&#39;/website/\{website\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example {#websitescoresincrement-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.websiteScoresIncrement(website, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteScoresIncrement")
    e.printStackTrace()
}
```

### Parameters {#websitescoresincrement-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type {#websitescoresincrement-return-type}

null (empty response body)

### Authorization {#websitescoresincrement-authorization}

No authorization required

### HTTP request headers {#websitescoresincrement-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **websiteUpdate** {#websiteupdate}
> Website websiteUpdate(transferables, website)

/website/update [POST]

This will update a specific website.

### Example {#websiteupdate-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val website : Website =  // Website | 
try {
    val result : Website = apiInstance.websiteUpdate(transferables, website)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websiteUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websiteUpdate")
    e.printStackTrace()
}
```

### Parameters {#websiteupdate-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **website** | [**Website**](../models/Website)|  | [optional]

### Return type {#websiteupdate-return-type}

[**Website**](../models/Website)

### Authorization {#websiteupdate-authorization}

No authorization required

### HTTP request headers {#websiteupdate-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **websitesSpecificWebsiteSnapshot** {#websitesspecificwebsitesnapshot}
> Website websitesSpecificWebsiteSnapshot(website, transferables)

/website/\{website\} [GET]

This will get a snapshot of a single website.

### Example {#websitesspecificwebsitesnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WebsiteApi()
val website : kotlin.String = website_example // kotlin.String | website id
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : Website = apiInstance.websitesSpecificWebsiteSnapshot(website, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebsiteApi#websitesSpecificWebsiteSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebsiteApi#websitesSpecificWebsiteSnapshot")
    e.printStackTrace()
}
```

### Parameters {#websitesspecificwebsitesnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **kotlin.String**| website id |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type {#websitesspecificwebsitesnapshot-return-type}

[**Website**](../models/Website)

### Authorization {#websitesspecificwebsitesnapshot-authorization}

No authorization required

### HTTP request headers {#websitesspecificwebsitesnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

