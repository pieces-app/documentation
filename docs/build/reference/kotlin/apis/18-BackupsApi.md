---
title: Backups API | Kotlin SDK
---

# Backups API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsCreateNewBackup**](#backupscreatenewbackup) | **POST** /backups/create | /backups/create [POST]
[**backupsCreateNewBackupStreamed**](#backupscreatenewbackupstreamed) | **POST** /backups/create/streamed | /backups/create/streamed [POST]
[**backupsDeleteSpecificBackup**](#backupsdeletespecificbackup) | **POST** /backups/\{backup\}/delete | /backups/\{backup\}/delete [POST]
[**backupsSnapshot**](#backupssnapshot) | **GET** /backups | /backups [GET]


## **backupsCreateNewBackup** {#backupscreatenewbackup}
> Backup backupsCreateNewBackup(seededBackup)

/backups/create [POST]

This take a local database and ensure that it is backed up to the cloud.

### Example {#backupscreatenewbackup-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = BackupsApi()
val seededBackup : SeededBackup =  // SeededBackup | 
try {
    val result : Backup = apiInstance.backupsCreateNewBackup(seededBackup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupsApi#backupsCreateNewBackup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupsApi#backupsCreateNewBackup")
    e.printStackTrace()
}
```

### Parameters {#backupscreatenewbackup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup)|  | [optional]

### Return type {#backupscreatenewbackup-return-type}

[**Backup**](../models/Backup)

### Authorization {#backupscreatenewbackup-authorization}

No authorization required

### HTTP request headers {#backupscreatenewbackup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **backupsCreateNewBackupStreamed** {#backupscreatenewbackupstreamed}
> BackupStreamedProgress backupsCreateNewBackupStreamed(seededBackup)

/backups/create/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backupscreatenewbackupstreamed-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = BackupsApi()
val seededBackup : SeededBackup =  // SeededBackup | 
try {
    val result : BackupStreamedProgress = apiInstance.backupsCreateNewBackupStreamed(seededBackup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupsApi#backupsCreateNewBackupStreamed")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupsApi#backupsCreateNewBackupStreamed")
    e.printStackTrace()
}
```

### Parameters {#backupscreatenewbackupstreamed-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup)|  | [optional]

### Return type {#backupscreatenewbackupstreamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization {#backupscreatenewbackupstreamed-authorization}

No authorization required

### HTTP request headers {#backupscreatenewbackupstreamed-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **backupsDeleteSpecificBackup** {#backupsdeletespecificbackup}
> backupsDeleteSpecificBackup(backup, backup2)

/backups/\{backup\}/delete [POST]

This will delete a specific backup from the cloud.

### Example {#backupsdeletespecificbackup-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = BackupsApi()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    apiInstance.backupsDeleteSpecificBackup(backup, backup2)
} catch (e: ClientException) {
    println("4xx response calling BackupsApi#backupsDeleteSpecificBackup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupsApi#backupsDeleteSpecificBackup")
    e.printStackTrace()
}
```

### Parameters {#backupsdeletespecificbackup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](../models/Backup)|  | [optional]

### Return type {#backupsdeletespecificbackup-return-type}

null (empty response body)

### Authorization {#backupsdeletespecificbackup-authorization}

No authorization required

### HTTP request headers {#backupsdeletespecificbackup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

## **backupsSnapshot** {#backupssnapshot}
> Backups backupsSnapshot()

/backups [GET]

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example {#backupssnapshot-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = BackupsApi()
try {
    val result : Backups = apiInstance.backupsSnapshot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupsApi#backupsSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupsApi#backupsSnapshot")
    e.printStackTrace()
}
```

### Parameters {#backupssnapshot-parameters}
This endpoint does not need any parameter.

### Return type {#backupssnapshot-return-type}

[**Backups**](../models/Backups)

### Authorization {#backupssnapshot-authorization}

No authorization required

### HTTP request headers {#backupssnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json

