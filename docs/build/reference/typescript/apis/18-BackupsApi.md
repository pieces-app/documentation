---
title: Backups API | TypeScript SDK
---

# Backups API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsCreateNewBackup**](BackupsApi#backupscreatenewbackup) | **POST** /backups/create | /backups/create [POST]
[**backupsCreateNewBackupStreamed**](BackupsApi#backupscreatenewbackupstreamed) | **POST** /backups/create/streamed | /backups/create/streamed [POST]
[**backupsDeleteSpecificBackup**](BackupsApi#backupsdeletespecificbackup) | **POST** /backups/\{backup\}/delete | /backups/\{backup\}/delete [POST]
[**backupsSnapshot**](BackupsApi#backupssnapshot) | **GET** /backups | /backups [GET]


## **backupsCreateNewBackup** {#backupscreatenewbackup}
> Backup backupsCreateNewBackup()

This take a local database and ensure that it is backed up to the cloud.

### Example {#backupscreatenewbackup-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupsApi(configuration)

const body: Pieces.BackupsCreateNewBackupRequest = {
// SeededBackup (optional)
seededBackup: ,
};

apiInstance.backupsCreateNewBackup(body).then((data: Backup) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#backupscreatenewbackup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | **SeededBackup**|  |


### Return type {#backupscreatenewbackup-return-type}

[**Backup**](../models/Backup)

### HTTP request headers {#backupscreatenewbackup-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#backupscreatenewbackup-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |

## **backupsCreateNewBackupStreamed** {#backupscreatenewbackupstreamed}
> BackupStreamedProgress backupsCreateNewBackupStreamed()

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backupscreatenewbackupstreamed-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupsApi(configuration)

const body: Pieces.BackupsCreateNewBackupStreamedRequest = {
// SeededBackup (optional)
seededBackup: ,
};

apiInstance.backupsCreateNewBackupStreamed(body).then((data: BackupStreamedProgress) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#backupscreatenewbackupstreamed-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | **SeededBackup**|  |


### Return type {#backupscreatenewbackupstreamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### HTTP request headers {#backupscreatenewbackupstreamed-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#backupscreatenewbackupstreamed-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupsDeleteSpecificBackup** {#backupsdeletespecificbackup}
> backupsDeleteSpecificBackup()

This will delete a specific backup from the cloud.

### Example {#backupsdeletespecificbackup-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupsApi(configuration)

const body: Pieces.BackupsDeleteSpecificBackupRequest = {
// string | This is a identifier that is used to identify a specific backup.(version_timestamp)
backup: backup_example,
// Backup (optional)
backup2: ,
};

apiInstance.backupsDeleteSpecificBackup(body).then((data: void (empty response body)) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#backupsdeletespecificbackup-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup2** | **Backup**|  |
 **backup** | [**string**] | This is a identifier that is used to identify a specific backup.(version_timestamp) | defaults to undefined


### Return type {#backupsdeletespecificbackup-return-type}

void (empty response body)

### HTTP request headers {#backupsdeletespecificbackup-http-request-headers}

- **Content-Type**: application/json
- **Accept**: text/plain


### HTTP response details {#backupsdeletespecificbackup-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operation with the cloud |  -  |

## **backupsSnapshot** {#backupssnapshot}
> Backups backupsSnapshot()

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example {#backupssnapshot-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.BackupsApi(configuration)

apiInstance.backupsSnapshot().then((data: Backups) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#backupssnapshot-parameters}

This endpoint does not need any parameters.


### Return type {#backupssnapshot-return-type}

[**Backups**](../models/Backups)

### HTTP request headers {#backupssnapshot-http-request-headers}

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


### HTTP response details {#backupssnapshot-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**511** | Authentication Required, This means that you user needs to be authenticated with OS in order to perform this action |  -  |
**505** | HTTP Version Not Supported, This means that your user needs to update their local os, or they cannot perform backup operations with the cloud |  -  |


