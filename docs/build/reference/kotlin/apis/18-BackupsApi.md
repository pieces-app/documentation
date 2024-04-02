# Backups API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsCreateNewBackup**](#backupscreatenewbackup) | **POST** /backups/create | /backups/create [POST]
[**backupsCreateNewBackupStreamed**](#backupscreatenewbackupstreamed) | **POST** /backups/create/streamed | /backups/create/streamed [POST]
[**backupsDeleteSpecificBackup**](#backupsdeletespecificbackup) | **POST** /backups/\{backup\}/delete | /backups/\{backup\}/delete [POST]
[**backupsSnapshot**](#backupssnapshot) | **GET** /backups | /backups [GET]


<a id="backupsCreateNewBackup"></a>
## **backupsCreateNewBackup**
> Backup backupsCreateNewBackup(seededBackup)

/backups/create [POST]

This take a local database and ensure that it is backed up to the cloud.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup)|  | [optional]

### Return type

[**Backup**](../models/Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupsCreateNewBackupStreamed"></a>
## **backupsCreateNewBackupStreamed**
> BackupStreamedProgress backupsCreateNewBackupStreamed(seededBackup)

/backups/create/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup)|  | [optional]

### Return type

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupsDeleteSpecificBackup"></a>
## **backupsDeleteSpecificBackup**
> backupsDeleteSpecificBackup(backup, backup2)

/backups/\{backup\}/delete [POST]

This will delete a specific backup from the cloud.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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
 - **Accept**: application/json

<a id="backupsSnapshot"></a>
## **backupsSnapshot**
> Backups backupsSnapshot()

/backups [GET]

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**Backups**](../models/Backups)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

