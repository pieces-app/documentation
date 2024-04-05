# OS API

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
> ReturnedUserProfile linkProvider()

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

const body: Pieces.LinkProviderRequest = {
    // SeededExternalProvider (optional)
    seededExternalProvider: ,
};

apiInstance.linkProvider(body).then((data: ReturnedUserProfile) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededExternalProvider** | **SeededExternalProvider**|  |


### Return type

**ReturnedUserProfile**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized, this means your user is not authenticated |  -  |
**500** | Internal Server Error |  -  |



## **osDeviceInformation**
> OSDeviceInformationReturnable osDeviceInformation()

This will get information related to your specific device.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

apiInstance.osDeviceInformation().then((data: OSDeviceInformationReturnable) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**OSDeviceInformationReturnable**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **osRestart**
> osRestart()

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

apiInstance.osRestart().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **osUpdateCheck**
> CheckedOSUpdate osUpdateCheck()

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

const body: Pieces.OsUpdateCheckRequest = {
    // UncheckedOSUpdate (optional)
    uncheckedOSUpdate: ,
};

apiInstance.osUpdateCheck(body).then((data: CheckedOSUpdate) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uncheckedOSUpdate** | **UncheckedOSUpdate**|  |


### Return type

**CheckedOSUpdate**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **pickFiles**
> Array\<string\> pickFiles()

This will trigger a filer picker and return the string paths of the files that were selected.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

const body: Pieces.PickFilesRequest = {
    // FilePickerInput (optional)
    filePickerInput: ,
};

apiInstance.pickFiles(body).then((data: Array\<string\>) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | **FilePickerInput**|  |


### Return type

**Array\<string\>**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **pickFolders**
> Array\<string\> pickFolders()

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

apiInstance.pickFolders().then((data: Array\<string\>) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**Array\<string\>**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **signIntoOS**
> UserProfile signIntoOS()

A trigger that launches a Sign into OS Server

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

apiInstance.signIntoOS().then((data: UserProfile) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**UserProfile**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **signOutOfOS**
> Users signOutOfOS()

A trigger that signs out a user from the OS

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.OSApi(configuration);

apiInstance.signOutOfOS().then((data: Users) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**Users**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




