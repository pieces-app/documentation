# Backup Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](BackupApi#backup) | **POST** /backup | /backup [POST]
[**backupAsset**](BackupApi#backupasset) | **POST** /backup/asset | /backup/asset [POST]
[**backupRestoreSpecificBackup**](BackupApi#backuprestorespecificbackup) | **POST** /backup/\{backup\}/restore | /backup/\{backup\}/restore [POST]
[**backupRestoreSpecificBackupStreamed**](BackupApi#backuprestorespecificbackupstreamed) | **POST** /backup/\{backup\}/restore/streamed | /backup/\{backup\}/restore/streamed [POST]
[**backupSpecificBackupSnapshot**](BackupApi#backupspecificbackupsnapshot) | **GET** /backup/\{backup\} | /backup/\{backup\} [GET]
[**backupSpecificCreationCancel**](BackupApi#backupspecificcreationcancel) | **POST** /backup/\{backup\}/creation/cancel | /backup/\{backup\}/creation/cancel [POST]
[**backupSpecificCreationStatus**](BackupApi#backupspecificcreationstatus) | **GET** /backup/\{backup\}/creation/status | /backup/\{backup\}/creation/status [GET]
[**backupSpecificRestorationCancel**](BackupApi#backupspecificrestorationcancel) | **POST** /backup/\{backup\}/restoration/cancel | /backup/\{backup\}/restoration/cancel [POST]
[**backupSpecificRestorationStatus**](BackupApi#backupspecificrestorationstatus) | **GET** /backup/\{backup\}/restoration/status | /backup/\{backup\}/restoration/status [GET]


## **backup** {#backup}
> backup()



### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupRequest = {
    // Assets (optional)
    assets: ,
};

apiInstance.backup(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Assets**|  |


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupAsset** {#backupasset}
> backupAsset()


### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupAssetRequest = {
    // Asset (optional)
    asset: ,
};

apiInstance.backupAsset(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **Asset**|  |


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
> Backup backupRestoreSpecificBackup()

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupRestoreSpecificBackupRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
    // Backup (optional)
    backup2: ,
};

apiInstance.backupRestoreSpecificBackup(body).then((data: Backup) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

[**Backup**](../models/Backup)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |

## **backupRestoreSpecificBackupStreamed** {#backuprestorespecificbackupstreamed}
> BackupStreamedProgress backupRestoreSpecificBackupStreamed()

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupRestoreSpecificBackupStreamedRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
    // Backup (optional)
    backup2: ,
};

apiInstance.backupRestoreSpecificBackupStreamed(body).then((data: BackupStreamedProgress) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupSpecificBackupSnapshot** {#backupspecificbackupsnapshot}
> Backup backupSpecificBackupSnapshot()

This will just get the metadata associated with a specific backup.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupSpecificBackupSnapshotRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
};

apiInstance.backupSpecificBackupSnapshot(body).then((data: Backup) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

[**Backup**](../models/Backup)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupSpecificCreationCancel** {#backupspecificcreationcancel}
> backupSpecificCreationCancel()

This is Going to cancel a create backup (streamed) or not streamed that is currently in progress.  This will throw a 500 if there is not a backup in progress.  TODO: ADD mofe DESCRIPITON To this.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupSpecificCreationCancelRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
};

apiInstance.backupSpecificCreationCancel(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


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

## **backupSpecificCreationStatus** {#backupspecificcreationstatus}
> BackupStatus backupSpecificCreationStatus()

TODO add a description:

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupSpecificCreationStatusRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
};

apiInstance.backupSpecificCreationStatus(body).then((data: BackupStatus) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

[**BackupStatus**](../models/BackupStatus)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificRestorationCancel** {#backupspecificrestorationcancel}
> backupSpecificRestorationCancel()

This will cancel a Restoration that is in progress and restore to the original database.  Note: if there is not a restore in progress we will return a 500.  TODO add

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupSpecificRestorationCancelRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
    // Backup (optional)
    backup2: ,
};

apiInstance.backupSpecificRestorationCancel(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificRestorationStatus** {#backupspecificrestorationstatus}
> BackupStatus backupSpecificRestorationStatus()

TODO add a description:

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupApi(configuration)

const body: Pieces.BackupSpecificRestorationStatusRequest = {
    // string | This is a identifier that is used to identify a specific backup.(version_timestamp)
    backup: backup_example,
};

apiInstance.backupSpecificRestorationStatus(body).then((data: BackupStatus) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return Model type

[**BackupStatus**](../models/BackupStatus)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |


