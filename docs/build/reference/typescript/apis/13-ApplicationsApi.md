---
title: Applications API | TypeScript SDK
---

# Applications API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsExternalRelated**](ApplicationsApi#applicationsexternalrelated) | **GET** /applications/external/related | /applications/external/related [GET]
[**applicationsExternalSnapshot**](ApplicationsApi#applicationsexternalsnapshot) | **GET** /applications/external | /applications/external [GET]
[**applicationsRegister - (Deprecated)**](ApplicationsApi#applicationsregister) | **POST** /applications/register | /applications/register [POST]
[**applicationsSessionClose - (Deprecated)**](ApplicationsApi#applicationssessionclose) | **POST** /applications/session/close | /applications/session/close [POST]
[**applicationsSessionOpen - (Deprecated)**](ApplicationsApi#applicationssessionopen) | **POST** /applications/session/open | /applications/session/open [POST]
[**applicationsSessionSnapshot - (Deprecated)**](ApplicationsApi#applicationssessionsnapshot) | **GET** /applications/sessions/\{session\} | /applications/sessions/\{session\} [GET]
[**applicationsSnapshot**](ApplicationsApi#applicationssnapshot) | **GET** /applications | /applications [GET]
[**applicationsSpecificApplicationSnapshot**](ApplicationsApi#applicationsspecificapplicationsnapshot) | **GET** /applications/\{application\} | /applications/\{application\} [GET]
[**applicationsUsageEngagementInteraction - (Deprecated)**](ApplicationsApi#applicationsusageengagementinteraction) | **POST** /applications/usage/engagement/interaction | /applications/usage/engagement/interaction [POST] Scoped to Apps
[**applicationsUsageEngagementKeyboard - (Deprecated)**](ApplicationsApi#applicationsusageengagementkeyboard) | **POST** /applications/usage/engagement/keyboard | /applications/usage/engagement/keyboard [POST] Scoped to Apps
[**applicationsUsageInstallation - (Deprecated)**](ApplicationsApi#applicationsusageinstallation) | **POST** /applications/usage/installation | /applications/usage/installation [POST]
[**postApplicationsUsageUpdated - (Deprecated)**](ApplicationsApi#postapplicationsusageupdated) | **POST** /applications/usage/updated | /applications/usage/updated [POST]


## **applicationsExternalRelated** {#applicationsexternalrelated}
> DetectedExternalApplications applicationsExternalRelated()

Retrieves a list of external applications installed on the user\'s machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.

### Example {#applicationsexternalrelated-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

apiInstance.applicationsExternalRelated().then((data: DetectedExternalApplications) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsexternalrelated-parameters}

This endpoint does not need any parameters.


### Return type {#applicationsexternalrelated-return-type}

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### HTTP request headers {#applicationsexternalrelated-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#applicationsexternalrelated-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **applicationsExternalSnapshot** {#applicationsexternalsnapshot}
> DetectedExternalApplications applicationsExternalSnapshot()

Provides a snapshot of all external applications detected on the user\'s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.

### Example {#applicationsexternalsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

apiInstance.applicationsExternalSnapshot().then((data: DetectedExternalApplications) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsexternalsnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#applicationsexternalsnapshot-return-type}

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### HTTP request headers {#applicationsexternalsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#applicationsexternalsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **applicationsRegister** - (Deprecated) {#applicationsregister}
> Application applicationsRegister()

Registers a new application within the Pieces ecosystem.

### Example {#applicationsregister-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsRegisterRequest = {
// Application | This will accept a application. (optional)
application: ,
};

apiInstance.applicationsRegister(body).then((data: Application) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsregister-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **Application**| This will accept a application. |


### Return type {#applicationsregister-return-type}

[**Application**](../models/Application)

### HTTP request headers {#applicationsregister-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#applicationsregister-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionClose** - (Deprecated) {#applicationssessionclose}
> Session applicationsSessionClose()

Closes an active session, identified by a session UUID, marking the end of the user\'s current interaction with the Pieces application.

### Example {#applicationssessionclose-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsSessionCloseRequest = {
// string | This will accept a required session uuid. (optional)
body: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

apiInstance.applicationsSessionClose(body).then((data: Session) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationssessionclose-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| This will accept a required session uuid. |


### Return type {#applicationssessionclose-return-type}

[**Session**](../models/Session)

### HTTP request headers {#applicationssessionclose-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#applicationssessionclose-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionOpen** - (Deprecated) {#applicationssessionopen}
> Session applicationsSessionOpen()

Initiates a new session, marking the start of a user\'s interaction with the Pieces application.

### Example {#applicationssessionopen-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

apiInstance.applicationsSessionOpen().then((data: Session) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationssessionopen-parameters}

This endpoint does not need any parameters.


### Return type {#applicationssessionopen-return-type}

[**Session**](../models/Session)

### HTTP request headers {#applicationssessionopen-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#applicationssessionopen-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionSnapshot** - (Deprecated) {#applicationssessionsnapshot}
> Session applicationsSessionSnapshot()

Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.

### Example {#applicationssessionsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsSessionSnapshotRequest = {
// string | This is a uuid that points to a session.
session: session_example,
};

apiInstance.applicationsSessionSnapshot(body).then((data: Session) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationssessionsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | [**string**] | This is a uuid that points to a session. | defaults to undefined


### Return type {#applicationssessionsnapshot-return-type}

[**Session**](../models/Session)

### HTTP request headers {#applicationssessionsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#applicationssessionsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSnapshot** {#applicationssnapshot}
> Applications applicationsSnapshot()

Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.

### Example {#applicationssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

apiInstance.applicationsSnapshot().then((data: Applications) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#applicationssnapshot-return-type}

[**Applications**](../models/Applications)

### HTTP request headers {#applicationssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#applicationssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSpecificApplicationSnapshot** {#applicationsspecificapplicationsnapshot}
> Application applicationsSpecificApplicationSnapshot()

Obtains a snapshot with information about a specific application, identified by its UUID.

### Example {#applicationsspecificapplicationsnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsSpecificApplicationSnapshotRequest = {
// string | This is a uuid that represents an application
application: application_example,
};

apiInstance.applicationsSpecificApplicationSnapshot(body).then((data: Application) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsspecificapplicationsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return type {#applicationsspecificapplicationsnapshot-return-type}

[**Application**](../models/Application)

### HTTP request headers {#applicationsspecificapplicationsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#applicationsspecificapplicationsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageEngagementInteraction** - (Deprecated) {#applicationsusageengagementinteraction}
> TrackedInteractionEvent applicationsUsageEngagementInteraction()

Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.

### Example {#applicationsusageengagementinteraction-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsUsageEngagementInteractionRequest = {
// SeededTrackedInteractionEvent |  (optional)
seededTrackedInteractionEvent: ,
};

apiInstance.applicationsUsageEngagementInteraction(body).then((data: TrackedInteractionEvent) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsusageengagementinteraction-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedInteractionEvent** | **SeededTrackedInteractionEvent**|  |


### Return type {#applicationsusageengagementinteraction-return-type}

[**TrackedInteractionEvent**](../models/TrackedInteractionEvent)

### HTTP request headers {#applicationsusageengagementinteraction-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#applicationsusageengagementinteraction-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageEngagementKeyboard** - (Deprecated) {#applicationsusageengagementkeyboard}
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard()

Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.

### Example {#applicationsusageengagementkeyboard-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsUsageEngagementKeyboardRequest = {
// SeededTrackedKeyboardEvent |  (optional)
seededTrackedKeyboardEvent: ,
};

apiInstance.applicationsUsageEngagementKeyboard(body).then((data: TrackedKeyboardEvent) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsusageengagementkeyboard-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedKeyboardEvent** | **SeededTrackedKeyboardEvent**|  |


### Return type {#applicationsusageengagementkeyboard-return-type}

[**TrackedKeyboardEvent**](../models/TrackedKeyboardEvent)

### HTTP request headers {#applicationsusageengagementkeyboard-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#applicationsusageengagementkeyboard-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageInstallation** - (Deprecated) {#applicationsusageinstallation}
> applicationsUsageInstallation()

Logs the installation events of the Pieces application.

### Example {#applicationsusageinstallation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.ApplicationsUsageInstallationRequest = {
// TrackedApplicationInstall |  (optional)
trackedApplicationInstall: ,
};

apiInstance.applicationsUsageInstallation(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#applicationsusageinstallation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationInstall** | **TrackedApplicationInstall**|  |


### Return type {#applicationsusageinstallation-return-type}

void (empty response body)

### HTTP request headers {#applicationsusageinstallation-http-request-headers}

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details {#applicationsusageinstallation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **postApplicationsUsageUpdated** - (Deprecated) {#postapplicationsusageupdated}
> postApplicationsUsageUpdated()

Tracks updates to the Pieces application, including version changes.

### Example {#postapplicationsusageupdated-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ApplicationsApi(configuration)

const body: Pieces.PostApplicationsUsageUpdatedRequest = {
// TrackedApplicationUpdate | Sending over the previous application version, the current version, and the user. (optional)
trackedApplicationUpdate: ,
};

apiInstance.postApplicationsUsageUpdated(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#postapplicationsusageupdated-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationUpdate** | **TrackedApplicationUpdate**| Sending over the previous application version, the current version, and the user. |


### Return type {#postapplicationsusageupdated-return-type}

void (empty response body)

### HTTP request headers {#postapplicationsusageupdated-http-request-headers}

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details {#postapplicationsusageupdated-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


