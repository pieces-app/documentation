---
title: Backup API | TypeScript SDK
---

# Backup API

All URIs are relative to `http://localhost:1000`

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



### Example {#backup-example}

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

### Parameters {#backup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Assets**|  |


### Return type {#backup-return-type}

void (empty response body)

### HTTP request headers {#backup-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#backup-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupAsset** {#backupasset}
> backupAsset()


### Example {#backupasset-example}

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

### Parameters {#backupasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **Asset**|  |


### Return type {#backupasset-return-type}

void (empty response body)

### HTTP request headers {#backupasset-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#backupasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, or they cannot Backup to the Cloud. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to backup. The User also need to be connected to their cloud to backup.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
> Backup backupRestoreSpecificBackup()

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example {#backuprestorespecificbackup-example}

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

### Parameters {#backuprestorespecificbackup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backuprestorespecificbackup-return-type}

[**Backup**](../models/Backup)

### HTTP request headers {#backuprestorespecificbackup-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#backuprestorespecificbackup-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |

## **backupRestoreSpecificBackupStreamed** {#backuprestorespecificbackupstreamed}
> BackupStreamedProgress backupRestoreSpecificBackupStreamed()

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backuprestorespecificbackupstreamed-example}

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

### Parameters {#backuprestorespecificbackupstreamed-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backuprestorespecificbackupstreamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### HTTP request headers {#backuprestorespecificbackupstreamed-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#backuprestorespecificbackupstreamed-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupSpecificBackupSnapshot** {#backupspecificbackupsnapshot}
> Backup backupSpecificBackupSnapshot()

This will just get the metadata associated with a specific backup.

### Example {#backupspecificbackupsnapshot-example}

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

### Parameters {#backupspecificbackupsnapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupspecificbackupsnapshot-return-type}

[**Backup**](../models/Backup)

### HTTP request headers {#backupspecificbackupsnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#backupspecificbackupsnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to change the beta status |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupSpecificCreationCancel** {#backupspecificcreationcancel}
> backupSpecificCreationCancel()

This is Going to cancel a create backup (streamed) or not streamed that is currently in progress.  This will throw a 500 if there is not a backup in progress.  TODO: ADD mofe DESCRIPITON To this.

### Example {#backupspecificcreationcancel-example}

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

### Parameters {#backupspecificcreationcancel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupspecificcreationcancel-return-type}

void (empty response body)

### HTTP request headers {#backupspecificcreationcancel-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details {#backupspecificcreationcancel-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificCreationStatus** {#backupspecificcreationstatus}
> BackupStatus backupSpecificCreationStatus()

TODO add a description:

### Example {#backupspecificcreationstatus-example}

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

### Parameters {#backupspecificcreationstatus-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupspecificcreationstatus-return-type}

[**BackupStatus**](../models/BackupStatus)

### HTTP request headers {#backupspecificcreationstatus-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#backupspecificcreationstatus-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificRestorationCancel** {#backupspecificrestorationcancel}
> backupSpecificRestorationCancel()

This will cancel a Restoration that is in progress and restore to the original database.  Note: if there is not a restore in progress we will return a 500.  TODO add

### Example {#backupspecificrestorationcancel-example}

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

### Parameters {#backupspecificrestorationcancel-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupspecificrestorationcancel-return-type}

void (empty response body)

### HTTP request headers {#backupspecificrestorationcancel-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#backupspecificrestorationcancel-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **backupSpecificRestorationStatus** {#backupspecificrestorationstatus}
> BackupStatus backupSpecificRestorationStatus()

TODO add a description:

### Example {#backupspecificrestorationstatus-example}

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

### Parameters {#backupspecificrestorationstatus-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupspecificrestorationstatus-return-type}

[**BackupStatus**](../models/BackupStatus)

### HTTP request headers {#backupspecificrestorationstatus-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#backupspecificrestorationstatus-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**404** | Internal Server Error |  -  |
**500** | Internal Server Error |  -  |


