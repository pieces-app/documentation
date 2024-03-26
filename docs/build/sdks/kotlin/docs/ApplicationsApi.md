# Applications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsExternalRelated**](ApplicationsApi.md#applicationsExternalRelated) | **GET** /applications/external/related | /applications/external/related [GET]
[**applicationsExternalSnapshot**](ApplicationsApi.md#applicationsExternalSnapshot) | **GET** /applications/external | /applications/external [GET]
[**applicationsRegister**](ApplicationsApi.md#applicationsRegister) | **POST** /applications/register | /applications/register [POST]
[**applicationsSessionClose**](ApplicationsApi.md#applicationsSessionClose) | **POST** /applications/session/close | /applications/session/close [POST]
[**applicationsSessionOpen**](ApplicationsApi.md#applicationsSessionOpen) | **POST** /applications/session/open | /applications/session/open [POST]
[**applicationsSessionSnapshot**](ApplicationsApi.md#applicationsSessionSnapshot) | **GET** /applications/sessions/\{session\} | /applications/sessions/\{session\} [GET]
[**applicationsSnapshot**](ApplicationsApi.md#applicationsSnapshot) | **GET** /applications | /applications [GET]
[**applicationsSpecificApplicationSnapshot**](ApplicationsApi.md#applicationsSpecificApplicationSnapshot) | **GET** /applications/\{application\} | /applications/\{application\} [GET]
[**applicationsUsageEngagementInteraction**](ApplicationsApi.md#applicationsUsageEngagementInteraction) | **POST** /applications/usage/engagement/interaction | /applications/usage/engagement/interaction [POST] Scoped to Apps
[**applicationsUsageEngagementKeyboard**](ApplicationsApi.md#applicationsUsageEngagementKeyboard) | **POST** /applications/usage/engagement/keyboard | /applications/usage/engagement/keyboard [POST] Scoped to Apps
[**applicationsUsageInstallation**](ApplicationsApi.md#applicationsUsageInstallation) | **POST** /applications/usage/installation | /applications/usage/installation [POST]
[**postApplicationsUsageUpdated**](ApplicationsApi.md#postApplicationsUsageUpdated) | **POST** /applications/usage/updated | /applications/usage/updated [POST]


<a id="applicationsExternalRelated"></a>
## **applicationsExternalRelated**
> DetectedExternalApplications applicationsExternalRelated()

/applications/external/related [GET]

This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
try {
    val result : DetectedExternalApplications = apiInstance.applicationsExternalRelated()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsExternalRelated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsExternalRelated")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DetectedExternalApplications**](DetectedExternalApplications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsExternalSnapshot"></a>
## **applicationsExternalSnapshot**
> DetectedExternalApplications applicationsExternalSnapshot()

/applications/external [GET]

This will get a snapshot of your installed applications on your local Machine. Applications like \&quot;Microsoft Teams classic\&quot;, \&quot;Google Chat\&quot;, \&quot;Obsidian\&quot;, etc...

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
try {
    val result : DetectedExternalApplications = apiInstance.applicationsExternalSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsExternalSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsExternalSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DetectedExternalApplications**](DetectedExternalApplications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsRegister"></a>
## **applicationsRegister**
> Application applicationsRegister(application)

/applications/register [POST]

This will register a connected applicaiton.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val application : Application =  // Application | This will accept a application.
try {
    val result : Application = apiInstance.applicationsRegister(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsRegister")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsRegister")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](Application.md)| This will accept a application. | [optional]

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="applicationsSessionClose"></a>
## **applicationsSessionClose**
> Session applicationsSessionClose(body)

/applications/session/close [POST]

This will close your opened session! Going to want to accept a session uuid here.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | This will accept a required session uuid.
try {
    val result : Session = apiInstance.applicationsSessionClose(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsSessionClose")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsSessionClose")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**| This will accept a required session uuid. | [optional]

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="applicationsSessionOpen"></a>
## **applicationsSessionOpen**
> Session applicationsSessionOpen()

/applications/session/open [POST]

This will open a new session. A session is when someone is using the pieces application.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
try {
    val result : Session = apiInstance.applicationsSessionOpen()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsSessionOpen")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsSessionOpen")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsSessionSnapshot"></a>
## **applicationsSessionSnapshot**
> Session applicationsSessionSnapshot(session)

/applications/sessions/\{session\} [GET]

This is an endpoint to get a snapshot of a specific session.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val session : kotlin.String = session_example // kotlin.String | This is a uuid that points to a session.
try {
    val result : Session = apiInstance.applicationsSessionSnapshot(session)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsSessionSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsSessionSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | **kotlin.String**| This is a uuid that points to a session. |

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsSnapshot"></a>
## **applicationsSnapshot**
> Applications applicationsSnapshot()

/applications [GET]



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
try {
    val result : Applications = apiInstance.applicationsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Applications**](Applications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsSpecificApplicationSnapshot"></a>
## **applicationsSpecificApplicationSnapshot**
> Application applicationsSpecificApplicationSnapshot(application)

/applications/\{application\} [GET]

This will retrieve snapshot of a single application.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val application : kotlin.String = application_example // kotlin.String | This is a uuid that represents an application
try {
    val result : Application = apiInstance.applicationsSpecificApplicationSnapshot(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsSpecificApplicationSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsSpecificApplicationSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="applicationsUsageEngagementInteraction"></a>
## **applicationsUsageEngagementInteraction**
> TrackedInteractionEvent applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)

/applications/usage/engagement/interaction [POST] Scoped to Apps

This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val seededTrackedInteractionEvent : SeededTrackedInteractionEvent =  // SeededTrackedInteractionEvent | 
try {
    val result : TrackedInteractionEvent = apiInstance.applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsUsageEngagementInteraction")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsUsageEngagementInteraction")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedInteractionEvent** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent.md)|  | [optional]

### Return type

[**TrackedInteractionEvent**](TrackedInteractionEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="applicationsUsageEngagementKeyboard"></a>
## **applicationsUsageEngagementKeyboard**
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)

/applications/usage/engagement/keyboard [POST] Scoped to Apps

This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val seededTrackedKeyboardEvent : SeededTrackedKeyboardEvent =  // SeededTrackedKeyboardEvent | 
try {
    val result : TrackedKeyboardEvent = apiInstance.applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsUsageEngagementKeyboard")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsUsageEngagementKeyboard")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedKeyboardEvent** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent.md)|  | [optional]

### Return type

[**TrackedKeyboardEvent**](TrackedKeyboardEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="applicationsUsageInstallation"></a>
## **applicationsUsageInstallation**
> applicationsUsageInstallation(trackedApplicationInstall)

/applications/usage/installation [POST]

This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val trackedApplicationInstall : TrackedApplicationInstall =  // TrackedApplicationInstall | 
try {
    apiInstance.applicationsUsageInstallation(trackedApplicationInstall)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#applicationsUsageInstallation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#applicationsUsageInstallation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationInstall** | [**TrackedApplicationInstall**](TrackedApplicationInstall.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a id="postApplicationsUsageUpdated"></a>
## **postApplicationsUsageUpdated**
> postApplicationsUsageUpdated(trackedApplicationUpdate)

/applications/usage/updated [POST]

This is an endpoint to determine when an application has been updated 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ApplicationsApi()
val trackedApplicationUpdate : TrackedApplicationUpdate =  // TrackedApplicationUpdate | Sending over the previous application version, the current version, and the user.
try {
    apiInstance.postApplicationsUsageUpdated(trackedApplicationUpdate)
} catch (e: ClientException) {
    println("4xx response calling ApplicationsApi#postApplicationsUsageUpdated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ApplicationsApi#postApplicationsUsageUpdated")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationUpdate** | [**TrackedApplicationUpdate**](TrackedApplicationUpdate.md)| Sending over the previous application version, the current version, and the user. | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

