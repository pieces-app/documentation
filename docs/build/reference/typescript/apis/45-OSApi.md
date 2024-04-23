---
title: OS API | TypeScript SDK
---

# OS API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkProvider**](OSApi#linkprovider) | **POST** /os/link_provider | /os/link_provider [POST]
[**osDeviceInformation**](OSApi#osdeviceinformation) | **GET** /os/device/information | /os/device/information [GET]
[**osPermissions**](OSApi#ospermissions) | **GET** /os/permissions | /os/permissions [GET]
[**osPermissionsRequest**](OSApi#ospermissionsrequest) | **POST** /os/permissions/request | /os/permissions/request [POST]
[**osRestart**](OSApi#osrestart) | **GET** /os/restart | Your GET endpoint
[**osUpdateCheck**](OSApi#osupdatecheck) | **POST** /os/update/check | /os/update/check [POST]
[**pickFiles**](OSApi#pickfiles) | **POST** /os/files/pick | /os/files/pick [POST]
[**pickFolders**](OSApi#pickfolders) | **POST** /os/folders/pick | /os/folders/pick [POST]
[**signIntoOS**](OSApi#signintoos) | **POST** /os/sign_in | 
[**signOutOfOS**](OSApi#signoutofos) | **POST** /os/sign_out | /os/sign_out [POST]


## **linkProvider** {#linkprovider}
> ReturnedUserProfile linkProvider()

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example {#linkprovider-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

const body: Pieces.LinkProviderRequest = {
// SeededExternalProvider (optional)
seededExternalProvider: ,
};

apiInstance.linkProvider(body).then((data: ReturnedUserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#linkprovider-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededExternalProvider** | **SeededExternalProvider**|  |


### Return type {#linkprovider-return-type}

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### HTTP request headers {#linkprovider-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#linkprovider-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Unauthorized, this means your user is not authenticated |  -  |
**500** | Internal Server Error |  -  |

## **osDeviceInformation** {#osdeviceinformation}
> OSDeviceInformationReturnable osDeviceInformation()

This will get information related to your specific device.

### Example {#osdeviceinformation-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.osDeviceInformation().then((data: OSDeviceInformationReturnable) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#osdeviceinformation-parameters}

This endpoint does not need any parameters.


### Return type {#osdeviceinformation-return-type}

[**OSDeviceInformationReturnable**](../models/OSDeviceInformationReturnable)

### HTTP request headers {#osdeviceinformation-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#osdeviceinformation-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **osPermissions** {#ospermissions}
> OSPermissions osPermissions()

This will only work on Macos and Windows.  And will get the permissions of the user\'s local machine w/ regard to anything needed to effectively run PiecesOS.  Note: this will let us know if we need to tell them to take action to enable any given permissions

### Example {#ospermissions-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.osPermissions().then((data: OSPermissions) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#ospermissions-parameters}

This endpoint does not need any parameters.


### Return type {#ospermissions-return-type}

[**OSPermissions**](../models/OSPermissions)

### HTTP request headers {#ospermissions-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#ospermissions-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **osPermissionsRequest** {#ospermissionsrequest}
> OSPermissions osPermissionsRequest()

This will only work on Macos and Windows.  This will request permissions for the given inputs

### Example {#ospermissionsrequest-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

const body: Pieces.OsPermissionsRequestRequest = {
// OSPermissions (optional)
oSPermissions: ,
};

apiInstance.osPermissionsRequest(body).then((data: OSPermissions) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#ospermissionsrequest-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oSPermissions** | **OSPermissions**|  |


### Return type {#ospermissionsrequest-return-type}

[**OSPermissions**](../models/OSPermissions)

### HTTP request headers {#ospermissionsrequest-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#ospermissionsrequest-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **osRestart** {#osrestart}
> osRestart()

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example {#osrestart-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.osRestart().then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#osrestart-parameters}

This endpoint does not need any parameters.


### Return type {#osrestart-return-type}

void (empty response body)

### HTTP request headers {#osrestart-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#osrestart-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **osUpdateCheck** {#osupdatecheck}
> CheckedOSUpdate osUpdateCheck()

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example {#osupdatecheck-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

const body: Pieces.OsUpdateCheckRequest = {
// UncheckedOSUpdate (optional)
uncheckedOSUpdate: ,
};

apiInstance.osUpdateCheck(body).then((data: CheckedOSUpdate) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#osupdatecheck-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uncheckedOSUpdate** | **UncheckedOSUpdate**|  |


### Return type {#osupdatecheck-return-type}

[**CheckedOSUpdate**](../models/CheckedOSUpdate)

### HTTP request headers {#osupdatecheck-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#osupdatecheck-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **pickFiles** {#pickfiles}
> Array\<string\> pickFiles()

This will trigger a filer picker and return the string paths of the files that were selected.

### Example {#pickfiles-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

const body: Pieces.PickFilesRequest = {
// FilePickerInput (optional)
filePickerInput: ,
};

apiInstance.pickFiles(body).then((data: Array\<string\>) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#pickfiles-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | **FilePickerInput**|  |


### Return type {#pickfiles-return-type}

**Array\<string\>**

### HTTP request headers {#pickfiles-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#pickfiles-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **pickFolders** {#pickfolders}
> Array\<string\> pickFolders()

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example {#pickfolders-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.pickFolders().then((data: Array\<string\>) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#pickfolders-parameters}

This endpoint does not need any parameters.


### Return type {#pickfolders-return-type}

**Array\<string\>**

### HTTP request headers {#pickfolders-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#pickfolders-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **signIntoOS** {#signintoos}
> UserProfile signIntoOS()

A trigger that launches a Sign into OS Server

### Example {#signintoos-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.signIntoOS().then((data: UserProfile) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#signintoos-parameters}

This endpoint does not need any parameters.


### Return type {#signintoos-return-type}

[**UserProfile**](../models/UserProfile)

### HTTP request headers {#signintoos-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#signintoos-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **signOutOfOS** {#signoutofos}
> Users signOutOfOS()

A trigger that signs out a user from the OS

### Example {#signoutofos-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.signOutOfOS().then((data: Users) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#signoutofos-parameters}

This endpoint does not need any parameters.


### Return type {#signoutofos-return-type}

[**Users**](../models/Users)

### HTTP request headers {#signoutofos-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details {#signoutofos-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


