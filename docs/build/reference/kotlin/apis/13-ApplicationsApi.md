---
title: Applications API | Kotlin SDK
---

# Applications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsExternalRelated**](#applicationsexternalrelated) | **GET** /applications/external/related | /applications/external/related [GET]
[**applicationsExternalSnapshot**](#applicationsexternalsnapshot) | **GET** /applications/external | /applications/external [GET]
[**applicationsRegister - (Deprecated)**](#applicationsregister) | **POST** /applications/register | /applications/register [POST]
[**applicationsSessionClose - (Deprecated)**](#applicationssessionclose) | **POST** /applications/session/close | /applications/session/close [POST]
[**applicationsSessionOpen - (Deprecated)**](#applicationssessionopen) | **POST** /applications/session/open | /applications/session/open [POST]
[**applicationsSessionSnapshot - (Deprecated)**](#applicationssessionsnapshot) | **GET** /applications/sessions/\{session\} | /applications/sessions/\{session\} [GET]
[**applicationsSnapshot**](#applicationssnapshot) | **GET** /applications | /applications [GET]
[**applicationsSpecificApplicationSnapshot**](#applicationsspecificapplicationsnapshot) | **GET** /applications/\{application\} | /applications/\{application\} [GET]
[**applicationsUsageEngagementInteraction - (Deprecated)**](#applicationsusageengagementinteraction) | **POST** /applications/usage/engagement/interaction | /applications/usage/engagement/interaction [POST] Scoped to Apps
[**applicationsUsageEngagementKeyboard - (Deprecated)**](#applicationsusageengagementkeyboard) | **POST** /applications/usage/engagement/keyboard | /applications/usage/engagement/keyboard [POST] Scoped to Apps
[**applicationsUsageInstallation - (Deprecated)**](#applicationsusageinstallation) | **POST** /applications/usage/installation | /applications/usage/installation [POST]
[**postApplicationsUsageUpdated - (Deprecated)**](#postapplicationsusageupdated) | **POST** /applications/usage/updated | /applications/usage/updated [POST]


## **applicationsExternalRelated** {#applicationsexternalrelated}
> DetectedExternalApplications applicationsExternalRelated()

/applications/external/related [GET]

Retrieves a list of external applications installed on the user&#39;s machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
try {
    val result : DetectedExternalApplications = apiInstance.applicationsExternalRelated()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsExternalRelated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsExternalRelated")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsExternalSnapshot** {#applicationsexternalsnapshot}
> DetectedExternalApplications applicationsExternalSnapshot()

/applications/external [GET]

Provides a snapshot of all external applications detected on the user&#39;s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
try {
    val result : DetectedExternalApplications = apiInstance.applicationsExternalSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsExternalSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsExternalSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsRegister - (Deprecated)** {#applicationsregister}
> Application applicationsRegister(application)

/applications/register [POST]

Registers a new application within the Pieces ecosystem.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val application : Application =  // Application | This will accept a application.
try {
    val result : Application = apiInstance.applicationsRegister(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsRegister")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsRegister")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](../models/Application)| This will accept a application. | [optional]

### Return type

[**Application**](../models/Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsSessionClose - (Deprecated)** {#applicationssessionclose}
> Session applicationsSessionClose(body)

/applications/session/close [POST]

Closes an active session, identified by a session UUID, marking the end of the user&#39;s current interaction with the Pieces application.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | This will accept a required session uuid.
try {
    val result : Session = apiInstance.applicationsSessionClose(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsSessionClose")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsSessionClose")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**| This will accept a required session uuid. | [optional]

### Return type

[**Session**](../models/Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsSessionOpen - (Deprecated)** {#applicationssessionopen}
> Session applicationsSessionOpen()

/applications/session/open [POST]

Initiates a new session, marking the start of a user&#39;s interaction with the Pieces application.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
try {
    val result : Session = apiInstance.applicationsSessionOpen()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsSessionOpen")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsSessionOpen")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Session**](../models/Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSessionSnapshot - (Deprecated)** {#applicationssessionsnapshot}
> Session applicationsSessionSnapshot(session)

/applications/sessions/\{session\} [GET]

Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val session : kotlin.String = session_example // kotlin.String | This is a uuid that points to a session.
try {
    val result : Session = apiInstance.applicationsSessionSnapshot(session)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsSessionSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsSessionSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | **kotlin.String**| This is a uuid that points to a session. |

### Return type

[**Session**](../models/Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSnapshot** {#applicationssnapshot}
> Applications applicationsSnapshot()

/applications [GET]

Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
try {
    val result : Applications = apiInstance.applicationsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsSnapshot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Applications**](../models/Applications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSpecificApplicationSnapshot** {#applicationsspecificapplicationsnapshot}
> Application applicationsSpecificApplicationSnapshot(application)

/applications/\{application\} [GET]

Obtains a snapshot with information about a specific application, identified by its UUID.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val application : kotlin.String = application_example // kotlin.String | This is a uuid that represents an application
try {
    val result : Application = apiInstance.applicationsSpecificApplicationSnapshot(application)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsSpecificApplicationSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsSpecificApplicationSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |

### Return type

[**Application**](../models/Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsUsageEngagementInteraction - (Deprecated)** {#applicationsusageengagementinteraction}
> TrackedInteractionEvent applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)

/applications/usage/engagement/interaction [POST] Scoped to Apps

Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val seededTrackedInteractionEvent : SeededTrackedInteractionEvent =  // SeededTrackedInteractionEvent | 
try {
    val result : TrackedInteractionEvent = apiInstance.applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsUsageEngagementInteraction")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsUsageEngagementInteraction")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedInteractionEvent** | [**SeededTrackedInteractionEvent**](../models/SeededTrackedInteractionEvent)|  | [optional]

### Return type

[**TrackedInteractionEvent**](../models/TrackedInteractionEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsUsageEngagementKeyboard - (Deprecated)** {#applicationsusageengagementkeyboard}
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)

/applications/usage/engagement/keyboard [POST] Scoped to Apps

Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val seededTrackedKeyboardEvent : SeededTrackedKeyboardEvent =  // SeededTrackedKeyboardEvent | 
try {
    val result : TrackedKeyboardEvent = apiInstance.applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsUsageEngagementKeyboard")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsUsageEngagementKeyboard")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedKeyboardEvent** | [**SeededTrackedKeyboardEvent**](../models/SeededTrackedKeyboardEvent)|  | [optional]

### Return type

[**TrackedKeyboardEvent**](../models/TrackedKeyboardEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsUsageInstallation - (Deprecated)** {#applicationsusageinstallation}
> applicationsUsageInstallation(trackedApplicationInstall)

/applications/usage/installation [POST]

Logs the installation events of the Pieces application.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val trackedApplicationInstall : TrackedApplicationInstall =  // TrackedApplicationInstall | 
try {
    apiInstance.applicationsUsageInstallation(trackedApplicationInstall)
} catch (e: ClientException) {
    println("4xx response calling Applications API#applicationsUsageInstallation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#applicationsUsageInstallation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationInstall** | [**TrackedApplicationInstall**](../models/TrackedApplicationInstall)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **postApplicationsUsageUpdated - (Deprecated)** {#postapplicationsusageupdated}
> postApplicationsUsageUpdated(trackedApplicationUpdate)

/applications/usage/updated [POST]

Tracks updates to the Pieces application, including version changes.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Applications API()
val trackedApplicationUpdate : TrackedApplicationUpdate =  // TrackedApplicationUpdate | Sending over the previous application version, the current version, and the user.
try {
    apiInstance.postApplicationsUsageUpdated(trackedApplicationUpdate)
} catch (e: ClientException) {
    println("4xx response calling Applications API#postApplicationsUsageUpdated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Applications API#postApplicationsUsageUpdated")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationUpdate** | [**TrackedApplicationUpdate**](../models/TrackedApplicationUpdate)| Sending over the previous application version, the current version, and the user. | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

