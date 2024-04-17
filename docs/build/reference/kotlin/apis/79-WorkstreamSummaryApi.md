---
title: WorkstreamSummary API | Kotlin SDK
---

# WorkstreamSummary API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesSpecificWorkstreamSummarySnapshot**](#workstreamsummariesspecificworkstreamsummarysnapshot) | **GET** /workstream_summary/\{workstream_summary\} | /workstream_summary/\{workstream_summary\} [GET]
[**workstreamSummaryAssociateAnchor**](#workstreamsummaryassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]
[**workstreamSummaryAssociateAsset**](#workstreamsummaryassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]
[**workstreamSummaryAssociateConversation**](#workstreamsummaryassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]
[**workstreamSummaryAssociatePerson**](#workstreamsummaryassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]
[**workstreamSummaryAssociateRange**](#workstreamsummaryassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]
[**workstreamSummaryAssociateWebsite**](#workstreamsummaryassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]
[**workstreamSummaryAssociateWorkstreamEvent**](#workstreamsummaryassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]
[**workstreamSummaryDisassociateAnchor**](#workstreamsummarydisassociateanchor) | **POST** /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} | /workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]
[**workstreamSummaryDisassociateAsset**](#workstreamsummarydisassociateasset) | **POST** /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} | /workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]
[**workstreamSummaryDisassociateConversation**](#workstreamsummarydisassociateconversation) | **POST** /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} | /workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]
[**workstreamSummaryDisassociatePerson**](#workstreamsummarydisassociateperson) | **POST** /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} | /workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]
[**workstreamSummaryDisassociateRange**](#workstreamsummarydisassociaterange) | **POST** /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} | /workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]
[**workstreamSummaryDisassociateWebsite**](#workstreamsummarydisassociatewebsite) | **POST** /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} | /workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]
[**workstreamSummaryDisassociateWorkstreamEvent**](#workstreamsummarydisassociateworkstreamevent) | **POST** /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} | /workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]
[**workstreamSummaryScoresIncrement**](#workstreamsummaryscoresincrement) | **POST** /workstream_summary/\{workstream_summary\}/scores/increment | '/workstream_summary/\{workstream_summary\}/scores/increment' [POST]
[**workstreamSummaryUpdate**](#workstreamsummaryupdate) | **POST** /workstream_summary/update | /workstream_summary/update [POST]


## **workstreamSummariesSpecificWorkstreamSummarySnapshot** {#workstreamsummariesspecificworkstreamsummarysnapshot}
> WorkstreamSummary workstreamSummariesSpecificWorkstreamSummarySnapshot(workstreamSummary, transferables)

/workstream_summary/\{workstream_summary\} [GET]

This will get a snapshot of a single workstream_summary.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
try {
    val result : WorkstreamSummary = apiInstance.workstreamSummariesSpecificWorkstreamSummarySnapshot(workstreamSummary, transferables)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummariesSpecificWorkstreamSummarySnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummariesSpecificWorkstreamSummarySnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]

### Return type

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **workstreamSummaryAssociateAnchor** {#workstreamsummaryassociateanchor}
> workstreamSummaryAssociateAnchor(workstreamSummary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/associate/\{anchor\} [POST]

This will associate a anchor with a workstream_summary. This will do the same thing as the anchor equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
try {
    apiInstance.workstreamSummaryAssociateAnchor(workstreamSummary, anchor)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateAnchor")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociateAsset** {#workstreamsummaryassociateasset}
> workstreamSummaryAssociateAsset(workstreamSummary, asset)

/workstream_summary/\{workstream_summary\}/assets/associate/\{asset\} [POST]

This will associate an asset with a workstream_summary. This will do the same thing as the asset equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.workstreamSummaryAssociateAsset(workstreamSummary, asset)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociateConversation** {#workstreamsummaryassociateconversation}
> workstreamSummaryAssociateConversation(workstreamSummary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/associate/\{conversation\} [POST]

This will associate an conversation with a workstream_summary. This will do the same thing as the conversation equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.workstreamSummaryAssociateConversation(workstreamSummary, conversation)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateConversation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociatePerson** {#workstreamsummaryassociateperson}
> workstreamSummaryAssociatePerson(workstreamSummary, person)

/workstream_summary/\{workstream_summary\}/persons/associate/\{person\} [POST]

This will associate an person with a workstream_summary. This will do the same thing as the person equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.workstreamSummaryAssociatePerson(workstreamSummary, person)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociatePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociateRange** {#workstreamsummaryassociaterange}
> workstreamSummaryAssociateRange(workstreamSummary, range)

/workstream_summary/\{workstream_summary\}/ranges/associate/\{range\} [POST]

This will associate a range with a workstream_summary. This will do the same thing as the range equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    apiInstance.workstreamSummaryAssociateRange(workstreamSummary, range)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateRange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateRange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociateWebsite** {#workstreamsummaryassociatewebsite}
> workstreamSummaryAssociateWebsite(workstreamSummary, website)

/workstream_summary/\{workstream_summary\}/websites/associate/\{website\} [POST]

This will associate a website with a workstream_summary. This will do the same thing as the website equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.workstreamSummaryAssociateWebsite(workstreamSummary, website)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryAssociateWorkstreamEvent** {#workstreamsummaryassociateworkstreamevent}
> workstreamSummaryAssociateWorkstreamEvent(workstreamSummary, workstreamEvent)

/workstream_summary/\{workstream_summary\}/workstream_events/associate/\{workstream_event\} [POST]

This will associate a workstream_summary with a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
try {
    apiInstance.workstreamSummaryAssociateWorkstreamEvent(workstreamSummary, workstreamEvent)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryAssociateWorkstreamEvent")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryAssociateWorkstreamEvent")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateAnchor** {#workstreamsummarydisassociateanchor}
> workstreamSummaryDisassociateAnchor(workstreamSummary, anchor)

/workstream_summary/\{workstream_summary\}/anchors/disassociate/\{anchor\} [POST]

This will enable us to disassociate a anchor from a workstream_summary. This will do the same thing as the anchor equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val anchor : kotlin.String = anchor_example // kotlin.String | This is the specific uuid of an anchor.
try {
    apiInstance.workstreamSummaryDisassociateAnchor(workstreamSummary, anchor)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateAnchor")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateAnchor")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **anchor** | **kotlin.String**| This is the specific uuid of an anchor. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateAsset** {#workstreamsummarydisassociateasset}
> workstreamSummaryDisassociateAsset(workstreamSummary, asset)

/workstream_summary/\{workstream_summary\}/assets/disassociate/\{asset\} [POST]

This will enable us to disassociate a asset from a workstream_summary. This will do the same thing as the asset equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val asset : java.util.UUID = 2254f2c8-5797-40e8-ac56-41166dc0e159 // java.util.UUID | The id (uuid) of the asset that you are trying to access.
try {
    apiInstance.workstreamSummaryDisassociateAsset(workstreamSummary, asset)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **asset** | **java.util.UUID**| The id (uuid) of the asset that you are trying to access. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateConversation** {#workstreamsummarydisassociateconversation}
> workstreamSummaryDisassociateConversation(workstreamSummary, conversation)

/workstream_summary/\{workstream_summary\}/conversations/disassociate/\{conversation\} [POST]

This will enable us to disassociate a conversation from a workstream_summary. This will do the same thing as the conversation equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val conversation : kotlin.String = conversation_example // kotlin.String | This is the uuid of a conversation.
try {
    apiInstance.workstreamSummaryDisassociateConversation(workstreamSummary, conversation)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateConversation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateConversation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **conversation** | **kotlin.String**| This is the uuid of a conversation. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociatePerson** {#workstreamsummarydisassociateperson}
> workstreamSummaryDisassociatePerson(workstreamSummary, person)

/workstream_summary/\{workstream_summary\}/persons/disassociate/\{person\} [POST]

This will enable us to disassociate a person from a workstream_summary. This will do the same thing as the person equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val person : kotlin.String = person_example // kotlin.String | This is a uuid that represents a person.
try {
    apiInstance.workstreamSummaryDisassociatePerson(workstreamSummary, person)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociatePerson")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociatePerson")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **person** | **kotlin.String**| This is a uuid that represents a person. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateRange** {#workstreamsummarydisassociaterange}
> workstreamSummaryDisassociateRange(workstreamSummary, range)

/workstream_summary/\{workstream_summary\}/ranges/disassociate/\{range\} [POST]

This will enable us to disassociate a range from a workstream_summary. This will do the same thing as the range equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val range : kotlin.String = range_example // kotlin.String | This is a identifier that is used to identify a specific range.
try {
    apiInstance.workstreamSummaryDisassociateRange(workstreamSummary, range)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateRange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateRange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **range** | **kotlin.String**| This is a identifier that is used to identify a specific range. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateWebsite** {#workstreamsummarydisassociatewebsite}
> workstreamSummaryDisassociateWebsite(workstreamSummary, website)

/workstream_summary/\{workstream_summary\}/websites/disassociate/\{website\} [POST]

This will enable us to disassociate a website from a workstream_summary. This will do the same thing as the website equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val website : kotlin.String = website_example // kotlin.String | website id
try {
    apiInstance.workstreamSummaryDisassociateWebsite(workstreamSummary, website)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateWebsite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateWebsite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **website** | **kotlin.String**| website id |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryDisassociateWorkstreamEvent** {#workstreamsummarydisassociateworkstreamevent}
> workstreamSummaryDisassociateWorkstreamEvent(workstreamSummary, workstreamEvent)

/workstream_summary/\{workstream_summary\}/workstream_events/disassociate/\{workstream_event\} [POST]

This will enable us to disassociate a workstream_summary from a workstream_event. This will do the same thing as the workstream_event equivalent.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val workstreamEvent : kotlin.String = workstreamEvent_example // kotlin.String | This is a identifier that is used to identify a specific workstream_event.
try {
    apiInstance.workstreamSummaryDisassociateWorkstreamEvent(workstreamSummary, workstreamEvent)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryDisassociateWorkstreamEvent")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryDisassociateWorkstreamEvent")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **workstreamEvent** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_event. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **workstreamSummaryScoresIncrement** {#workstreamsummaryscoresincrement}
> workstreamSummaryScoresIncrement(workstreamSummary, seededScoreIncrement)

&#39;/workstream_summary/\{workstream_summary\}/scores/increment&#39; [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val workstreamSummary : kotlin.String = workstreamSummary_example // kotlin.String | This is a identifier that is used to identify a specific workstream_summary.
val seededScoreIncrement : SeededScoreIncrement =  // SeededScoreIncrement | 
try {
    apiInstance.workstreamSummaryScoresIncrement(workstreamSummary, seededScoreIncrement)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryScoresIncrement")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryScoresIncrement")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | **kotlin.String**| This is a identifier that is used to identify a specific workstream_summary. |
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **workstreamSummaryUpdate** {#workstreamsummaryupdate}
> WorkstreamSummary workstreamSummaryUpdate(transferables, workstreamSummary)

/workstream_summary/update [POST]

This will update a specific workstream_summary.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = WorkstreamSummary API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val workstreamSummary : WorkstreamSummary =  // WorkstreamSummary | 
try {
    val result : WorkstreamSummary = apiInstance.workstreamSummaryUpdate(transferables, workstreamSummary)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WorkstreamSummary API#workstreamSummaryUpdate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WorkstreamSummary API#workstreamSummaryUpdate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **workstreamSummary** | [**WorkstreamSummary**](../models/WorkstreamSummary)|  | [optional]

### Return type

[**WorkstreamSummary**](../models/WorkstreamSummary)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

