---
title: OS API | Kotlin SDK
---

# OS API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkProvider**](#linkprovider) | **POST** /os/link_provider | /os/link_provider [POST]
[**osDeviceInformation**](#osdeviceinformation) | **GET** /os/device/information | /os/device/information [GET]
[**osPermissions**](#ospermissions) | **GET** /os/permissions | /os/permissions [GET]
[**osPermissionsRequest**](#ospermissionsrequest) | **POST** /os/permissions/request | /os/permissions/request [POST]
[**osRestart**](#osrestart) | **GET** /os/restart | Your GET endpoint
[**osUpdateCheck**](#osupdatecheck) | **POST** /os/update/check | /os/update/check [POST]
[**pickFiles**](#pickfiles) | **POST** /os/files/pick | /os/files/pick [POST]
[**pickFolders**](#pickfolders) | **POST** /os/folders/pick | /os/folders/pick [POST]
[**signIntoOS**](#signintoos) | **POST** /os/sign_in | 
[**signOutOfOS**](#signoutofos) | **POST** /os/sign_out | /os/sign_out [POST]


## **linkProvider** {#linkprovider}
> ReturnedUserProfile linkProvider(seededExternalProvider)

/os/link_provider [POST]

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
val seededExternalProvider : SeededExternalProvider =  // SeededExternalProvider | 
try {
    val result : ReturnedUserProfile = apiInstance.linkProvider(seededExternalProvider)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#linkProvider")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#linkProvider")
    e.printStackTrace()
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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    val result : OSDeviceInformationReturnable = apiInstance.osDeviceInformation()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#osDeviceInformation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#osDeviceInformation")
    e.printStackTrace()
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

This will only work on Macos and Windows.  And will get the permissions of the user&#39;s local machine w/ regard to anything needed to effectively run PiecesOS.  Note: this will let us know if we need to tell them to take action to enable any given permissions

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    val result : OSPermissions = apiInstance.osPermissions()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#osPermissions")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#osPermissions")
    e.printStackTrace()
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
> OSPermissions osPermissionsRequest(osPermissions)

/os/permissions/request [POST]

This will only work on Macos and Windows.  This will request permissions for the given inputs

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
val osPermissions : OSPermissions =  // OSPermissions | 
try {
    val result : OSPermissions = apiInstance.osPermissionsRequest(osPermissions)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#osPermissionsRequest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#osPermissionsRequest")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **osPermissions** | [**OSPermissions**](../models/OSPermissions)|  | [optional]

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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    apiInstance.osRestart()
} catch (e: ClientException) {
    println("4xx response calling OS API#osRestart")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#osRestart")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **osUpdateCheck** {#osupdatecheck}
> CheckedOSUpdate osUpdateCheck(uncheckedOSUpdate)

/os/update/check [POST]

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
val uncheckedOSUpdate : UncheckedOSUpdate =  // UncheckedOSUpdate | 
try {
    val result : CheckedOSUpdate = apiInstance.osUpdateCheck(uncheckedOSUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#osUpdateCheck")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#osUpdateCheck")
    e.printStackTrace()
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
> kotlin.collections.List&lt;kotlin.String&gt; pickFiles(filePickerInput)

/os/files/pick [POST]

This will trigger a filer picker and return the string paths of the files that were selected.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
val filePickerInput : FilePickerInput =  // FilePickerInput | 
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.pickFiles(filePickerInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#pickFiles")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#pickFiles")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | [**FilePickerInput**](../models/FilePickerInput)|  | [optional]

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **pickFolders** {#pickfolders}
> kotlin.collections.List&lt;kotlin.String&gt; pickFolders()

/os/folders/pick [POST]

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.pickFolders()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#pickFolders")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#pickFolders")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **signIntoOS** {#signintoos}
> UserProfile signIntoOS()



A trigger that launches a Sign into OS Server

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    val result : UserProfile = apiInstance.signIntoOS()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#signIntoOS")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#signIntoOS")
    e.printStackTrace()
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
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = OS API()
try {
    val result : Users = apiInstance.signOutOfOS()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OS API#signOutOfOS")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OS API#signOutOfOS")
    e.printStackTrace()
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

