# OS API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**linkProvider**](OSApi#linkprovider) | **POST** /os/link_provider
[**osDeviceInformation**](OSApi#osdeviceinformation) | **GET** /os/device/information
[**osPermissions**](OSApi#ospermissions) | **GET** /os/permissions
[**osPermissionsRequest**](OSApi#ospermissionsrequest) | **POST** /os/permissions/request
[**osRestart**](OSApi#osrestart) | **GET** /os/restart
[**osUpdateCheck**](OSApi#osupdatecheck) | **POST** /os/update/check
[**pickFiles**](OSApi#pickfiles) | **POST** /os/files/pick
[**pickFolders**](OSApi#pickfolders) | **POST** /os/folders/pick
[**signIntoOS**](OSApi#signintoos) | **POST** /os/sign_in
[**signOutOfOS**](OSApi#signoutofos) | **POST** /os/sign_out


## **linkProvider** {#linkprovider}
> ReturnedUserProfile linkProvider(seededExternalProvider)

/os/link_provider [POST]

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();
final seededExternalProvider = SeededExternalProvider(); // SeededExternalProvider | 

try {
    final result = api_instance.linkProvider(seededExternalProvider);
    print(result);
} catch (e) {
    print('Exception when calling OSApi->linkProvider: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededExternalProvider** | [**SeededExternalProvider**](../models/SeededExternalProvider)|  | [optional] 

### Return type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **osDeviceInformation** {#osdeviceinformation}
> OSDeviceInformationReturnable osDeviceInformation()

/os/device/information [GET]

This will get information related to your specific device.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    final result = api_instance.osDeviceInformation();
    print(result);
} catch (e) {
    print('Exception when calling OSApi->osDeviceInformation: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OSDeviceInformationReturnable**](../models/OSDeviceInformationReturnable)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **osPermissions** {#ospermissions}
> OSPermissions osPermissions()

/os/permissions [GET]

This will only work on Macos and Windows.  And will get the permissions of the user's local machine w/ regard to anything needed to effectively run PiecesOS.  Note: this will let us know if we need to tell them to take action to enable any given permissions

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    final result = api_instance.osPermissions();
    print(result);
} catch (e) {
    print('Exception when calling OSApi->osPermissions: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OSPermissions**](../models/OSPermissions)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **osPermissionsRequest** {#ospermissionsrequest}
> OSPermissions osPermissionsRequest(oSPermissions)

/os/permissions/request [POST]

This will only work on Macos and Windows.  This will request permissions for the given inputs

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();
final oSPermissions = OSPermissions(); // OSPermissions | 

try {
    final result = api_instance.osPermissionsRequest(oSPermissions);
    print(result);
} catch (e) {
    print('Exception when calling OSApi->osPermissionsRequest: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oSPermissions** | [**OSPermissions**](../models/OSPermissions)|  | [optional] 

### Return type

[**OSPermissions**](../models/OSPermissions)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **osRestart** {#osrestart}
> osRestart()

Your GET endpoint

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    api_instance.osRestart();
} catch (e) {
    print('Exception when calling OSApi->osRestart: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **osUpdateCheck** {#osupdatecheck}
> CheckedOSUpdate osUpdateCheck(uncheckedOSUpdate)

/os/update/check [POST]

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();
final uncheckedOSUpdate = UncheckedOSUpdate(); // UncheckedOSUpdate | 

try {
    final result = api_instance.osUpdateCheck(uncheckedOSUpdate);
    print(result);
} catch (e) {
    print('Exception when calling OSApi->osUpdateCheck: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uncheckedOSUpdate** | [**UncheckedOSUpdate**](../models/UncheckedOSUpdate)|  | [optional] 

### Return type

[**CheckedOSUpdate**](../models/CheckedOSUpdate)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **pickFiles** {#pickfiles}
> List\<String\>** pickFiles(filePickerInput)

/os/files/pick [POST]

This will trigger a filer picker and return the string paths of the files that were selected.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();
final filePickerInput = FilePickerInput(); // FilePickerInput | 

try {
    final result = api_instance.pickFiles(filePickerInput);
    print(result);
} catch (e) {
    print('Exception when calling OSApi->pickFiles: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | [**FilePickerInput**](../models/FilePickerInput)|  | [optional] 

### Return type

**List\<String\>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **pickFolders** {#pickfolders}
> List\<String\>** pickFolders()

/os/folders/pick [POST]

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    final result = api_instance.pickFolders();
    print(result);
} catch (e) {
    print('Exception when calling OSApi->pickFolders: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List\<String\>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **signIntoOS** {#signintoos}
> UserProfile signIntoOS()



A trigger that launches a Sign into OS Server

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    final result = api_instance.signIntoOS();
    print(result);
} catch (e) {
    print('Exception when calling OSApi->signIntoOS: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](../models/UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **signOutOfOS** {#signoutofos}
> Users signOutOfOS()

/os/sign_out [POST]

A trigger that signs out a user from the OS

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = OSApi();

try {
    final result = api_instance.signOutOfOS();
    print(result);
} catch (e) {
    print('Exception when calling OSApi->signOutOfOS: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Users**](../models/Users)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



