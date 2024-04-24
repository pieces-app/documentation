---
title: Applications API | Kotlin SDK
---

# Applications API

All URIs are relative to `http://localhost:1000`

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

### Example {#applicationsexternalrelated-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsexternalrelated-parameters}
This endpoint does not need any parameter.

### Return type {#applicationsexternalrelated-return-type}

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### Authorization {#applicationsexternalrelated-authorization}

No authorization required

### HTTP request headers {#applicationsexternalrelated-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsExternalSnapshot** {#applicationsexternalsnapshot}
> DetectedExternalApplications applicationsExternalSnapshot()

/applications/external [GET]

Provides a snapshot of all external applications detected on the user&#39;s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.

### Example {#applicationsexternalsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsexternalsnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#applicationsexternalsnapshot-return-type}

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### Authorization {#applicationsexternalsnapshot-authorization}

No authorization required

### HTTP request headers {#applicationsexternalsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsRegister - (Deprecated)** {#applicationsregister}
> Application applicationsRegister(application)

/applications/register [POST]

Registers a new application within the Pieces ecosystem.

### Example {#applicationsregister-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsregister-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**Application**](../models/Application)| This will accept a application. | [optional]

### Return type {#applicationsregister-return-type}

[**Application**](../models/Application)

### Authorization {#applicationsregister-authorization}

No authorization required

### HTTP request headers {#applicationsregister-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsSessionClose - (Deprecated)** {#applicationssessionclose}
> Session applicationsSessionClose(body)

/applications/session/close [POST]

Closes an active session, identified by a session UUID, marking the end of the user&#39;s current interaction with the Pieces application.

### Example {#applicationssessionclose-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationssessionclose-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**| This will accept a required session uuid. | [optional]

### Return type {#applicationssessionclose-return-type}

[**Session**](../models/Session)

### Authorization {#applicationssessionclose-authorization}

No authorization required

### HTTP request headers {#applicationssessionclose-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsSessionOpen - (Deprecated)** {#applicationssessionopen}
> Session applicationsSessionOpen()

/applications/session/open [POST]

Initiates a new session, marking the start of a user&#39;s interaction with the Pieces application.

### Example {#applicationssessionopen-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationssessionopen-parameters}
This endpoint does not need any parameter.

### Return type {#applicationssessionopen-return-type}

[**Session**](../models/Session)

### Authorization {#applicationssessionopen-authorization}

No authorization required

### HTTP request headers {#applicationssessionopen-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSessionSnapshot - (Deprecated)** {#applicationssessionsnapshot}
> Session applicationsSessionSnapshot(session)

/applications/sessions/\{session\} [GET]

Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.

### Example {#applicationssessionsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationssessionsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | **kotlin.String**| This is a uuid that points to a session. |

### Return type {#applicationssessionsnapshot-return-type}

[**Session**](../models/Session)

### Authorization {#applicationssessionsnapshot-authorization}

No authorization required

### HTTP request headers {#applicationssessionsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSnapshot** {#applicationssnapshot}
> Applications applicationsSnapshot()

/applications [GET]

Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.

### Example {#applicationssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#applicationssnapshot-return-type}

[**Applications**](../models/Applications)

### Authorization {#applicationssnapshot-authorization}

No authorization required

### HTTP request headers {#applicationssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsSpecificApplicationSnapshot** {#applicationsspecificapplicationsnapshot}
> Application applicationsSpecificApplicationSnapshot(application)

/applications/\{application\} [GET]

Obtains a snapshot with information about a specific application, identified by its UUID.

### Example {#applicationsspecificapplicationsnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsspecificapplicationsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **kotlin.String**| This is a uuid that represents an application |

### Return type {#applicationsspecificapplicationsnapshot-return-type}

[**Application**](../models/Application)

### Authorization {#applicationsspecificapplicationsnapshot-authorization}

No authorization required

### HTTP request headers {#applicationsspecificapplicationsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **applicationsUsageEngagementInteraction - (Deprecated)** {#applicationsusageengagementinteraction}
> TrackedInteractionEvent applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)

/applications/usage/engagement/interaction [POST] Scoped to Apps

Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.

### Example {#applicationsusageengagementinteraction-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsusageengagementinteraction-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedInteractionEvent** | [**SeededTrackedInteractionEvent**](../models/SeededTrackedInteractionEvent)|  | [optional]

### Return type {#applicationsusageengagementinteraction-return-type}

[**TrackedInteractionEvent**](../models/TrackedInteractionEvent)

### Authorization {#applicationsusageengagementinteraction-authorization}

No authorization required

### HTTP request headers {#applicationsusageengagementinteraction-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsUsageEngagementKeyboard - (Deprecated)** {#applicationsusageengagementkeyboard}
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)

/applications/usage/engagement/keyboard [POST] Scoped to Apps

Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.

### Example {#applicationsusageengagementkeyboard-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsusageengagementkeyboard-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedKeyboardEvent** | [**SeededTrackedKeyboardEvent**](../models/SeededTrackedKeyboardEvent)|  | [optional]

### Return type {#applicationsusageengagementkeyboard-return-type}

[**TrackedKeyboardEvent**](../models/TrackedKeyboardEvent)

### Authorization {#applicationsusageengagementkeyboard-authorization}

No authorization required

### HTTP request headers {#applicationsusageengagementkeyboard-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **applicationsUsageInstallation - (Deprecated)** {#applicationsusageinstallation}
> applicationsUsageInstallation(trackedApplicationInstall)

/applications/usage/installation [POST]

Logs the installation events of the Pieces application.

### Example {#applicationsusageinstallation-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#applicationsusageinstallation-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationInstall** | [**TrackedApplicationInstall**](../models/TrackedApplicationInstall)|  | [optional]

### Return type {#applicationsusageinstallation-return-type}

null (empty response body)

### Authorization {#applicationsusageinstallation-authorization}

No authorization required

### HTTP request headers {#applicationsusageinstallation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **postApplicationsUsageUpdated - (Deprecated)** {#postapplicationsusageupdated}
> postApplicationsUsageUpdated(trackedApplicationUpdate)

/applications/usage/updated [POST]

Tracks updates to the Pieces application, including version changes.

### Example {#postapplicationsusageupdated-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

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

### Parameters {#postapplicationsusageupdated-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationUpdate** | [**TrackedApplicationUpdate**](../models/TrackedApplicationUpdate)| Sending over the previous application version, the current version, and the user. | [optional]

### Return type {#postapplicationsusageupdated-return-type}

null (empty response body)

### Authorization {#postapplicationsusageupdated-authorization}

No authorization required

### HTTP request headers {#postapplicationsusageupdated-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

