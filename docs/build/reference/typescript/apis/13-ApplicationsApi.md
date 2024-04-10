# Applications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**applicationsExternalRelated**](ApplicationsApi#applicationsexternalrelated) | **GET** /applications/external/related
[**applicationsExternalSnapshot**](ApplicationsApi#applicationsexternalsnapshot) | **GET** /applications/external
[**applicationsRegister**](ApplicationsApi#applicationsregister) | **POST** /applications/register
[**applicationsSessionClose**](ApplicationsApi#applicationssessionclose) | **POST** /applications/session/close
[**applicationsSessionOpen**](ApplicationsApi#applicationssessionopen) | **POST** /applications/session/open
[**applicationsSessionSnapshot**](ApplicationsApi#applicationssessionsnapshot) | **GET** /applications/sessions/\{session\}
[**applicationsSnapshot**](ApplicationsApi#applicationssnapshot) | **GET** /applications
[**applicationsSpecificApplicationSnapshot**](ApplicationsApi#applicationsspecificapplicationsnapshot) | **GET** /applications/\{application\}
[**applicationsUsageEngagementInteraction**](ApplicationsApi#applicationsusageengagementinteraction) | **POST** /applications/usage/engagement/interaction
[**applicationsUsageEngagementKeyboard**](ApplicationsApi#applicationsusageengagementkeyboard) | **POST** /applications/usage/engagement/keyboard
[**applicationsUsageInstallation**](ApplicationsApi#applicationsusageinstallation) | **POST** /applications/usage/installation
[**postApplicationsUsageUpdated**](ApplicationsApi#postapplicationsusageupdated) | **POST** /applications/usage/updated


## **applicationsExternalRelated**
> DetectedExternalApplications applicationsExternalRelated()

Retrieves a list of external applications installed on the user\'s machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

apiInstance.applicationsExternalRelated().then((data: DetectedExternalApplications) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **applicationsExternalSnapshot**
> DetectedExternalApplications applicationsExternalSnapshot()

Provides a snapshot of all external applications detected on the user\'s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

apiInstance.applicationsExternalSnapshot().then((data: DetectedExternalApplications) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**DetectedExternalApplications**](../models/DetectedExternalApplications)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **applicationsRegister**
> Application applicationsRegister()

Registers a new application within the Pieces ecosystem.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsRegisterRequest = {
    // Application | This will accept a application. (optional)
    application: ,
};

apiInstance.applicationsRegister(body).then((data: Application) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **application** | **Application**| This will accept a application. |


### Return type

[**Application**](../models/Application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionClose**
> Session applicationsSessionClose()

Closes an active session, identified by a session UUID, marking the end of the user\'s current interaction with the Pieces application.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsSessionCloseRequest = {
    // string | This will accept a required session uuid. (optional)
    body: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

apiInstance.applicationsSessionClose(body).then((data: Session) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **body** | **string**| This will accept a required session uuid. |


### Return type

[**Session**](../models/Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionOpen**
> Session applicationsSessionOpen()

Initiates a new session, marking the start of a user\'s interaction with the Pieces application.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

apiInstance.applicationsSessionOpen().then((data: Session) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Session**](../models/Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSessionSnapshot**
> Session applicationsSessionSnapshot()

Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsSessionSnapshotRequest = {
    // string | This is a uuid that points to a session.
    session: session_example,
};

apiInstance.applicationsSessionSnapshot(body).then((data: Session) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **session** | [**string**] | This is a uuid that points to a session. | defaults to undefined


### Return type

[**Session**](../models/Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSnapshot**
> Applications applicationsSnapshot()

Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

apiInstance.applicationsSnapshot().then((data: Applications) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Applications**](../models/Applications)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsSpecificApplicationSnapshot**
> Application applicationsSpecificApplicationSnapshot()

Obtains a snapshot with information about a specific application, identified by its UUID.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsSpecificApplicationSnapshotRequest = {
    // string | This is a uuid that represents an application
    application: application_example,
};

apiInstance.applicationsSpecificApplicationSnapshot(body).then((data: Application) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return type

[**Application**](../models/Application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageEngagementInteraction**
> TrackedInteractionEvent applicationsUsageEngagementInteraction()

Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsUsageEngagementInteractionRequest = {
    // SeededTrackedInteractionEvent |  (optional)
    seededTrackedInteractionEvent: ,
};

apiInstance.applicationsUsageEngagementInteraction(body).then((data: TrackedInteractionEvent) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededTrackedInteractionEvent** | **SeededTrackedInteractionEvent**|  |


### Return type

[**TrackedInteractionEvent**](../models/TrackedInteractionEvent)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageEngagementKeyboard**
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard()

Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsUsageEngagementKeyboardRequest = {
    // SeededTrackedKeyboardEvent |  (optional)
    seededTrackedKeyboardEvent: ,
};

apiInstance.applicationsUsageEngagementKeyboard(body).then((data: TrackedKeyboardEvent) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededTrackedKeyboardEvent** | **SeededTrackedKeyboardEvent**|  |


### Return type

[**TrackedKeyboardEvent**](../models/TrackedKeyboardEvent)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **applicationsUsageInstallation**
> applicationsUsageInstallation()

Logs the installation events of the Pieces application.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.ApplicationsUsageInstallationRequest = {
    // TrackedApplicationInstall |  (optional)
    trackedApplicationInstall: ,
};

apiInstance.applicationsUsageInstallation(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **trackedApplicationInstall** | **TrackedApplicationInstall**|  |


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **postApplicationsUsageUpdated**
> postApplicationsUsageUpdated()

Tracks updates to the Pieces application, including version changes.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ApplicationsApi(configuration);

const body: Pieces.PostApplicationsUsageUpdatedRequest = {
    // TrackedApplicationUpdate | Sending over the previous application version, the current version, and the user. (optional)
    trackedApplicationUpdate: ,
};

apiInstance.postApplicationsUsageUpdated(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **trackedApplicationUpdate** | **TrackedApplicationUpdate**| Sending over the previous application version, the current version, and the user. |


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


