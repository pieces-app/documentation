# OS Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**linkProvider**](OSApi#linkprovider) | **POST** /os/link_provider
[**osDeviceInformation**](OSApi#osdeviceinformation) | **GET** /os/device/information
[**osRestart**](OSApi#osrestart) | **GET** /os/restart
[**osUpdateCheck**](OSApi#osupdatecheck) | **POST** /os/update/check
[**pickFiles**](OSApi#pickfiles) | **POST** /os/files/pick
[**pickFolders**](OSApi#pickfolders) | **POST** /os/folders/pick
[**signIntoOS**](OSApi#signintoos) | **POST** /os/sign_in
[**signOutOfOS**](OSApi#signoutofos) | **POST** /os/sign_out


## **linkProvider** {#linkprovider}
> ReturnedUserProfile linkProvider()

This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededExternalProvider** | **SeededExternalProvider**|  |


### Return Model type

[**ReturnedUserProfile**](../models/ReturnedUserProfile)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Unauthorized, this means your user is not authenticated |  -  |
**500** | Internal Server Error |  -  |

## **osDeviceInformation** {#osdeviceinformation}
> OSDeviceInformationReturnable osDeviceInformation()

This will get information related to your specific device.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.osDeviceInformation().then((data: OSDeviceInformationReturnable) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**OSDeviceInformationReturnable**](../models/OSDeviceInformationReturnable)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **osRestart** {#osrestart}
> osRestart()

This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.osRestart().then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **osUpdateCheck** {#osupdatecheck}
> CheckedOSUpdate osUpdateCheck()

This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uncheckedOSUpdate** | **UncheckedOSUpdate**|  |


### Return Model type

[**CheckedOSUpdate**](../models/CheckedOSUpdate)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **pickFiles** {#pickfiles}
> Array\<string\> pickFiles()

This will trigger a filer picker and return the string paths of the files that were selected.

### Example Model

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

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePickerInput** | **FilePickerInput**|  |


### Return Model type

**Array\<string\>**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **pickFolders** {#pickfolders}
> Array\<string\> pickFolders()

This will trigger a folder picker and return the string paths of the folders that were selected.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.pickFolders().then((data: Array\<string\>) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

**Array\<string\>**

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **signIntoOS** {#signintoos}
> UserProfile signIntoOS()

A trigger that launches a Sign into OS Server

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.signIntoOS().then((data: UserProfile) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**UserProfile**](../models/UserProfile)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **signOutOfOS** {#signoutofos}
> Users signOutOfOS()

A trigger that signs out a user from the OS

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.OSApi(configuration)

apiInstance.signOutOfOS().then((data: Users) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Users**](../models/Users)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


