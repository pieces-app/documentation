# OS API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkProvider**](OSApi.md#linkProvider) | **POST** /os/link_provider | /os/link_provider [POST]
[**osDeviceInformation**](OSApi.md#osDeviceInformation) | **GET** /os/device/information | /os/device/information [GET]
[**osRestart**](OSApi.md#osRestart) | **GET** /os/restart | Your GET endpoint
[**osUpdateCheck**](OSApi.md#osUpdateCheck) | **POST** /os/update/check | /os/update/check [POST]
[**pickFiles**](OSApi.md#pickFiles) | **POST** /os/files/pick | /os/files/pick [POST]
[**pickFolders**](OSApi.md#pickFolders) | **POST** /os/folders/pick | /os/folders/pick [POST]
[**signIntoOS**](OSApi.md#signIntoOS) | **POST** /os/sign_in | 
[**signOutOfOS**](OSApi.md#signOutOfOS) | **POST** /os/sign_out | /os/sign_out [POST]


<a id="linkProvider"></a>
## **linkProvider**
> ReturnedUserProfile linkProvider(seededExternalProvider)

/os/link_provider [POST]

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
val seededExternalProvider : SeededExternalProvider =  // SeededExternalProvider | 
try {
    val result : ReturnedUserProfile = apiInstance.linkProvider(seededExternalProvider)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#linkProvider")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#linkProvider")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededExternalProvider** | [**SeededExternalProvider**](SeededExternalProvider.md)|  | [optional]

### Return type

[**ReturnedUserProfile**](ReturnedUserProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="osDeviceInformation"></a>
## **osDeviceInformation**
> OSDeviceInformationReturnable osDeviceInformation()

/os/device/information [GET]

This will get information related to your specific device.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
try {
    val result : OSDeviceInformationReturnable = apiInstance.osDeviceInformation()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#osDeviceInformation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#osDeviceInformation")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OSDeviceInformationReturnable**](OSDeviceInformationReturnable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="osRestart"></a>
## **osRestart**
> osRestart()

Your GET endpoint

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
try {
    apiInstance.osRestart()
} catch (e: ClientException) {
    println("4xx response calling OSApi#osRestart")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#osRestart")
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
 - **Accept**: application/json

<a id="osUpdateCheck"></a>
## **osUpdateCheck**
> CheckedOSUpdate osUpdateCheck(uncheckedOSUpdate)

/os/update/check [POST]

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
val uncheckedOSUpdate : UncheckedOSUpdate =  // UncheckedOSUpdate | 
try {
    val result : CheckedOSUpdate = apiInstance.osUpdateCheck(uncheckedOSUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#osUpdateCheck")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#osUpdateCheck")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uncheckedOSUpdate** | [**UncheckedOSUpdate**](UncheckedOSUpdate.md)|  | [optional]

### Return type

[**CheckedOSUpdate**](CheckedOSUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="pickFiles"></a>
## **pickFiles**
> kotlin.collections.List&lt;kotlin.String&gt; pickFiles(filePickerInput)

/os/files/pick [POST]

This will trigger a filer picker and return the string paths of the files that were selected.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
val filePickerInput : FilePickerInput =  // FilePickerInput | 
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.pickFiles(filePickerInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#pickFiles")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#pickFiles")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | [**FilePickerInput**](FilePickerInput.md)|  | [optional]

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="pickFolders"></a>
## **pickFolders**
> kotlin.collections.List&lt;kotlin.String&gt; pickFolders()

/os/folders/pick [POST]

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
try {
    val result : kotlin.collections.List<kotlin.String> = apiInstance.pickFolders()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#pickFolders")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#pickFolders")
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

<a id="signIntoOS"></a>
## **signIntoOS**
> UserProfile signIntoOS()



A trigger that launches a Sign into OS Server

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
try {
    val result : UserProfile = apiInstance.signIntoOS()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#signIntoOS")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#signIntoOS")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="signOutOfOS"></a>
## **signOutOfOS**
> Users signOutOfOS()

/os/sign_out [POST]

A trigger that signs out a user from the OS

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = OSApi()
try {
    val result : Users = apiInstance.signOutOfOS()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OSApi#signOutOfOS")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OSApi#signOutOfOS")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

