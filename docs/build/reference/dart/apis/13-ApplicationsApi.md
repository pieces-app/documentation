# Applications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**applicationsExternalRelated**](ApplicationsApi#applicationsexternalrelated) | **GET** /applications/external/related
[**applicationsExternalSnapshot**](ApplicationsApi#applicationsexternalsnapshot) | **GET** /applications/external
[**applicationsRegister - (Deprecated)**](ApplicationsApi#applicationsregister) | **POST** /applications/register
[**applicationsSessionClose - (Deprecated)**](ApplicationsApi#applicationssessionclose) | **POST** /applications/session/close
[**applicationsSessionOpen - (Deprecated)**](ApplicationsApi#applicationssessionopen) | **POST** /applications/session/open
[**applicationsSessionSnapshot - (Deprecated)**](ApplicationsApi#applicationssessionsnapshot) | **GET** /applications/sessions/\{session\}
[**applicationsSnapshot**](ApplicationsApi#applicationssnapshot) | **GET** /applications
[**applicationsSpecificApplicationSnapshot**](ApplicationsApi#applicationsspecificapplicationsnapshot) | **GET** /applications/\{application\}
[**applicationsUsageEngagementInteraction - (Deprecated)**](ApplicationsApi#applicationsusageengagementinteraction) | **POST** /applications/usage/engagement/interaction
[**applicationsUsageEngagementKeyboard - (Deprecated)**](ApplicationsApi#applicationsusageengagementkeyboard) | **POST** /applications/usage/engagement/keyboard
[**applicationsUsageInstallation - (Deprecated)**](ApplicationsApi#applicationsusageinstallation) | **POST** /applications/usage/installation
[**postApplicationsUsageUpdated - (Deprecated)**](ApplicationsApi#postapplicationsusageupdated) | **POST** /applications/usage/updated


## **applicationsExternalRelated** {#applicationsexternalrelated}
> DetectedExternalApplications applicationsExternalRelated()

/applications/external/related [GET]

Retrieves a list of external applications installed on the user's machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();

try {
    final result = api_instance.applicationsExternalRelated();
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsExternalRelated: $e\n');
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

Provides a snapshot of all external applications detected on the user's machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();

try {
    final result = api_instance.applicationsExternalSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsExternalSnapshot: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final application = Application(); // Application | This will accept a application.

try {
    final result = api_instance.applicationsRegister(application);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsRegister: $e\n');
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

Closes an active session, identified by a session UUID, marking the end of the user's current interaction with the Pieces application.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final body = String(); // String | This will accept a required session uuid.

try {
    final result = api_instance.applicationsSessionClose(body);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsSessionClose: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| This will accept a required session uuid. | [optional] 

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

Initiates a new session, marking the start of a user's interaction with the Pieces application.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();

try {
    final result = api_instance.applicationsSessionOpen();
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsSessionOpen: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final session = session_example; // String | This is a uuid that points to a session.

try {
    final result = api_instance.applicationsSessionSnapshot(session);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsSessionSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session** | **String**| This is a uuid that points to a session. | 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();

try {
    final result = api_instance.applicationsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsSnapshot: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final application = application_example; // String | This is a uuid that represents an application

try {
    final result = api_instance.applicationsSpecificApplicationSnapshot(application);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsSpecificApplicationSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**| This is a uuid that represents an application | 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final seededTrackedInteractionEvent = SeededTrackedInteractionEvent(); // SeededTrackedInteractionEvent | 

try {
    final result = api_instance.applicationsUsageEngagementInteraction(seededTrackedInteractionEvent);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsUsageEngagementInteraction: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final seededTrackedKeyboardEvent = SeededTrackedKeyboardEvent(); // SeededTrackedKeyboardEvent | 

try {
    final result = api_instance.applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent);
    print(result);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsUsageEngagementKeyboard: $e\n');
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final trackedApplicationInstall = TrackedApplicationInstall(); // TrackedApplicationInstall | 

try {
    api_instance.applicationsUsageInstallation(trackedApplicationInstall);
} catch (e) {
    print('Exception when calling ApplicationsApi->applicationsUsageInstallation: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationInstall** | [**TrackedApplicationInstall**](../models/TrackedApplicationInstall)|  | [optional] 

### Return type

void (empty response body)

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = ApplicationsApi();
final trackedApplicationUpdate = TrackedApplicationUpdate(); // TrackedApplicationUpdate | Sending over the previous application version, the current version, and the user.

try {
    api_instance.postApplicationsUsageUpdated(trackedApplicationUpdate);
} catch (e) {
    print('Exception when calling ApplicationsApi->postApplicationsUsageUpdated: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackedApplicationUpdate** | [**TrackedApplicationUpdate**](../models/TrackedApplicationUpdate)| Sending over the previous application version, the current version, and the user. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined



