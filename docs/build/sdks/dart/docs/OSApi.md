# OS API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkProvider**](OSApi#linkprovider) | **POST** /os/link_provider | /os/link_provider [POST]
[**osDeviceInformation**](OSApi#osdeviceinformation) | **GET** /os/device/information | /os/device/information [GET]
[**osRestart**](OSApi#osrestart) | **GET** /os/restart | Your GET endpoint
[**osUpdateCheck**](OSApi#osupdatecheck) | **POST** /os/update/check | /os/update/check [POST]
[**pickFiles**](OSApi#pickfiles) | **POST** /os/files/pick | /os/files/pick [POST]
[**pickFolders**](OSApi#pickfolders) | **POST** /os/folders/pick | /os/folders/pick [POST]
[**signIntoOS**](OSApi#signintoos) | **POST** /os/sign_in | 
[**signOutOfOS**](OSApi#signoutofos) | **POST** /os/sign_out | /os/sign_out [POST]


## **linkProvider**
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
 **seededExternalProvider** | [**SeededExternalProvider**](SeededExternalProvider)|  | [optional] 

### Return type

[**ReturnedUserProfile**](ReturnedUserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **osDeviceInformation**
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

[**OSDeviceInformationReturnable**](OSDeviceInformationReturnable)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **osRestart**
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



## **osUpdateCheck**
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
 **uncheckedOSUpdate** | [**UncheckedOSUpdate**](UncheckedOSUpdate)|  | [optional] 

### Return type

[**CheckedOSUpdate**](CheckedOSUpdate)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **pickFiles**
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
 **filePickerInput** | [**FilePickerInput**](FilePickerInput)|  | [optional] 

### Return type

**List\<String\>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **pickFolders**
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



## **signIntoOS**
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

[**UserProfile**](UserProfile)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **signOutOfOS**
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

[**Users**](Users)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



