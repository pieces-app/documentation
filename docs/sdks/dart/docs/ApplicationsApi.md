# core_openapi.api.ApplicationsApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsExternalRelated**](ApplicationsApi#applicationsexternalrelated) | **GET** /applications/external/related | /applications/external/related [GET]
[**applicationsExternalSnapshot**](ApplicationsApi#applicationsexternalsnapshot) | **GET** /applications/external | /applications/external [GET]
[**applicationsRegister**](ApplicationsApi#applicationsregister) | **POST** /applications/register | /applications/register [POST]
[**applicationsSessionClose**](ApplicationsApi#applicationssessionclose) | **POST** /applications/session/close | /applications/session/close [POST]
[**applicationsSessionOpen**](ApplicationsApi#applicationssessionopen) | **POST** /applications/session/open | /applications/session/open [POST]
[**applicationsSessionSnapshot**](ApplicationsApi#applicationssessionsnapshot) | **GET** /applications/sessions/{session} | /applications/sessions/{session} [GET]
[**applicationsSnapshot**](ApplicationsApi#applicationssnapshot) | **GET** /applications | /applications [GET]
[**applicationsSpecificApplicationSnapshot**](ApplicationsApi#applicationsspecificapplicationsnapshot) | **GET** /applications/{application} | /applications/{application} [GET]
[**applicationsUsageEngagementInteraction**](ApplicationsApi#applicationsusageengagementinteraction) | **POST** /applications/usage/engagement/interaction | /applications/usage/engagement/interaction [POST] Scoped to Apps
[**applicationsUsageEngagementKeyboard**](ApplicationsApi#applicationsusageengagementkeyboard) | **POST** /applications/usage/engagement/keyboard | /applications/usage/engagement/keyboard [POST] Scoped to Apps
[**applicationsUsageInstallation**](ApplicationsApi#applicationsusageinstallation) | **POST** /applications/usage/installation | /applications/usage/installation [POST]
[**postApplicationsUsageUpdated**](ApplicationsApi#postapplicationsusageupdated) | **POST** /applications/usage/updated | /applications/usage/updated [POST]


# **applicationsExternalRelated**
> DetectedExternalApplications applicationsExternalRelated()

/applications/external/related [GET]

This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.

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

[**DetectedExternalApplications**](DetectedExternalApplications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsExternalSnapshot**
> DetectedExternalApplications applicationsExternalSnapshot()

/applications/external [GET]

This will get a snapshot of your installed applications on your local Machine. Applications like \"Microsoft Teams classic\", \"Google Chat\", \"Obsidian\", etc...

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

[**DetectedExternalApplications**](DetectedExternalApplications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsRegister**
> Application applicationsRegister(application)

/applications/register [POST]

This will register a connected applicaiton.

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
 **application** | [**Application**](Application)| This will accept a application. | [optional] 

### Return type

[**Application**](Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsSessionClose**
> Session applicationsSessionClose(body)

/applications/session/close [POST]

This will close your opened session! Going to want to accept a session uuid here.

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

[**Session**](Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsSessionOpen**
> Session applicationsSessionOpen()

/applications/session/open [POST]

This will open a new session. A session is when someone is using the pieces application.

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

[**Session**](Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsSessionSnapshot**
> Session applicationsSessionSnapshot(session)

/applications/sessions/{session} [GET]

This is an endpoint to get a snapshot of a specific session.

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

[**Session**](Session)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsSnapshot**
> Applications applicationsSnapshot()

/applications [GET]



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

[**Applications**](Applications)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsSpecificApplicationSnapshot**
> Application applicationsSpecificApplicationSnapshot(application)

/applications/{application} [GET]

This will retrieve snapshot of a single application.

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

[**Application**](Application)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsUsageEngagementInteraction**
> TrackedInteractionEvent applicationsUsageEngagementInteraction(seededTrackedInteractionEvent)

/applications/usage/engagement/interaction [POST] Scoped to Apps

This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).

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
 **seededTrackedInteractionEvent** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent)|  | [optional] 

### Return type

[**TrackedInteractionEvent**](TrackedInteractionEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsUsageEngagementKeyboard**
> TrackedKeyboardEvent applicationsUsageEngagementKeyboard(seededTrackedKeyboardEvent)

/applications/usage/engagement/keyboard [POST] Scoped to Apps

This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.

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
 **seededTrackedKeyboardEvent** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent)|  | [optional] 

### Return type

[**TrackedKeyboardEvent**](TrackedKeyboardEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **applicationsUsageInstallation**
> applicationsUsageInstallation(trackedApplicationInstall)

/applications/usage/installation [POST]

This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces

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
 **trackedApplicationInstall** | [**TrackedApplicationInstall**](TrackedApplicationInstall)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **postApplicationsUsageUpdated**
> postApplicationsUsageUpdated(trackedApplicationUpdate)

/applications/usage/updated [POST]

This is an endpoint to determine when an application has been updated 

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
 **trackedApplicationUpdate** | [**TrackedApplicationUpdate**](TrackedApplicationUpdate)| Sending over the previous application version, the current version, and the user. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

