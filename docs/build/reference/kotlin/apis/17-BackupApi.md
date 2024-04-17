---
title: Backup API | Kotlin SDK
---

# Backup API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](#backup) | **POST** /backup | /backup [POST]
[**backupAsset**](#backupasset) | **POST** /backup/asset | /backup/asset [POST]
[**backupRestoreSpecificBackup**](#backuprestorespecificbackup) | **POST** /backup/\{backup\}/restore | /backup/\{backup\}/restore [POST]
[**backupRestoreSpecificBackupStreamed**](#backuprestorespecificbackupstreamed) | **POST** /backup/\{backup\}/restore/streamed | /backup/\{backup\}/restore/streamed [POST]
[**backupSpecificBackupSnapshot**](#backupspecificbackupsnapshot) | **GET** /backup/\{backup\} | /backup/\{backup\} [GET]
[**backupSpecificCreationCancel**](#backupspecificcreationcancel) | **POST** /backup/\{backup\}/creation/cancel | /backup/\{backup\}/creation/cancel [POST]
[**backupSpecificCreationStatus**](#backupspecificcreationstatus) | **GET** /backup/\{backup\}/creation/status | /backup/\{backup\}/creation/status [GET]
[**backupSpecificRestorationCancel**](#backupspecificrestorationcancel) | **POST** /backup/\{backup\}/restoration/cancel | /backup/\{backup\}/restoration/cancel [POST]
[**backupSpecificRestorationStatus**](#backupspecificrestorationstatus) | **GET** /backup/\{backup\}/restoration/status | /backup/\{backup\}/restoration/status [GET]


## **backup** {#backup}
> backup(assets)

/backup [POST]



### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val assets : Assets =  // Assets | 
try {
    apiInstance.backup(assets)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backup")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **backupAsset** {#backupasset}
> backupAsset(asset)

/backup/asset [POST]

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val asset : Asset =  // Asset | 
try {
    apiInstance.backupAsset(asset)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**Asset**](../models/Asset)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
> Backup backupRestoreSpecificBackup(backup, backup2)

/backup/\{backup\}/restore [POST]

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    val result : Backup = apiInstance.backupRestoreSpecificBackup(backup, backup2)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupRestoreSpecificBackup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupRestoreSpecificBackup")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](../models/Backup)|  | [optional]

### Return type

[**Backup**](../models/Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **backupRestoreSpecificBackupStreamed** {#backuprestorespecificbackupstreamed}
> BackupStreamedProgress backupRestoreSpecificBackupStreamed(backup, backup2)

/backup/\{backup\}/restore/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    val result : BackupStreamedProgress = apiInstance.backupRestoreSpecificBackupStreamed(backup, backup2)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupRestoreSpecificBackupStreamed")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupRestoreSpecificBackupStreamed")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](../models/Backup)|  | [optional]

### Return type

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

## **backupSpecificBackupSnapshot** {#backupspecificbackupsnapshot}
> Backup backupSpecificBackupSnapshot(backup)

/backup/\{backup\} [GET]

This will just get the metadata associated with a specific backup.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
try {
    val result : Backup = apiInstance.backupSpecificBackupSnapshot(backup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupSpecificBackupSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupSpecificBackupSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |

### Return type

[**Backup**](../models/Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **backupSpecificCreationCancel** {#backupspecificcreationcancel}
> backupSpecificCreationCancel(backup)

/backup/\{backup\}/creation/cancel [POST]

This is Going to cancel a create backup (streamed) or not streamed that is currently in progress.  This will throw a 500 if there is not a backup in progress.  TODO: ADD mofe DESCRIPITON To this.

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
try {
    apiInstance.backupSpecificCreationCancel(backup)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupSpecificCreationCancel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupSpecificCreationCancel")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

## **backupSpecificCreationStatus** {#backupspecificcreationstatus}
> BackupStatus backupSpecificCreationStatus(backup)

/backup/\{backup\}/creation/status [GET]

TODO add a description:

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
try {
    val result : BackupStatus = apiInstance.backupSpecificCreationStatus(backup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupSpecificCreationStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupSpecificCreationStatus")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |

### Return type

[**BackupStatus**](../models/BackupStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

## **backupSpecificRestorationCancel** {#backupspecificrestorationcancel}
> backupSpecificRestorationCancel(backup, backup2)

/backup/\{backup\}/restoration/cancel [POST]

This will cancel a Restoration that is in progress and restore to the original database.  Note: if there is not a restore in progress we will return a 500.  TODO add

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    apiInstance.backupSpecificRestorationCancel(backup, backup2)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupSpecificRestorationCancel")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupSpecificRestorationCancel")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](../models/Backup)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **backupSpecificRestorationStatus** {#backupspecificrestorationstatus}
> BackupStatus backupSpecificRestorationStatus(backup)

/backup/\{backup\}/restoration/status [GET]

TODO add a description:

### Example
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = Backup API()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
try {
    val result : BackupStatus = apiInstance.backupSpecificRestorationStatus(backup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling Backup API#backupSpecificRestorationStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling Backup API#backupSpecificRestorationStatus")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |

### Return type

[**BackupStatus**](../models/BackupStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

