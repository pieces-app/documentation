# Backup API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**backup****](BackupApi#backup) | **POST** /backup
[**backupAsset****](BackupApi#backupasset) | **POST** /backup/asset
[**backupRestoreSpecificBackup****](BackupApi#backuprestorespecificbackup) | **POST** /backup/\{backup\}/restore
[**backupRestoreSpecificBackupStreamed****](BackupApi#backuprestorespecificbackupstreamed) | **POST** /backup/\{backup\}/restore/streamed
[**backupSpecificBackupSnapshot****](BackupApi#backupspecificbackupsnapshot) | **GET** /backup/\{backup\}


## **backup** {#backup}
> backup()



### Example

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Assets**|  |


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupAsset** {#backupasset}
> backupAsset()


### Example

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **Asset**|  |


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
> Backup backupRestoreSpecificBackup()

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type

[**Backup**](../models/Backup)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **backupRestoreSpecificBackupStreamed** {#backuprestorespecificbackupstreamed}
> BackupStreamedProgress backupRestoreSpecificBackupStreamed()

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificBackupSnapshot** {#backupspecificbackupsnapshot}
> Backup backupSpecificBackupSnapshot()

This will just get the metadata associated with a specific backup.

### Example

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type

[**Backup**](../models/Backup)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


