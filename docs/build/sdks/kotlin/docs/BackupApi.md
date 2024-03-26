# Backup API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](BackupApi.md#backup) | **POST** /backup | /backup [POST]
[**backupAsset**](BackupApi.md#backupAsset) | **POST** /backup/asset | /backup/asset [POST]
[**backupRestoreSpecificBackup**](BackupApi.md#backupRestoreSpecificBackup) | **POST** /backup/\{backup\}/restore | /backup/\{backup\}/restore [POST]
[**backupRestoreSpecificBackupStreamed**](BackupApi.md#backupRestoreSpecificBackupStreamed) | **POST** /backup/\{backup\}/restore/streamed | /backup/\{backup\}/restore/streamed [POST]
[**backupSpecificBackupSnapshot**](BackupApi.md#backupSpecificBackupSnapshot) | **GET** /backup/\{backup\} | /backup/\{backup\} [GET]


<a id="backup"></a>
## **backup**
> backup(assets)

/backup [POST]



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BackupApi()
val assets : Assets =  // Assets | 
try {
    apiInstance.backup(assets)
} catch (e: ClientException) {
    println("4xx response calling BackupApi#backup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupApi#backup")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](Assets.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupAsset"></a>
## **backupAsset**
> backupAsset(asset)

/backup/asset [POST]

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BackupApi()
val asset : Asset =  // Asset | 
try {
    apiInstance.backupAsset(asset)
} catch (e: ClientException) {
    println("4xx response calling BackupApi#backupAsset")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupApi#backupAsset")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**Asset**](Asset.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupRestoreSpecificBackup"></a>
## **backupRestoreSpecificBackup**
> Backup backupRestoreSpecificBackup(backup, backup2)

/backup/\{backup\}/restore [POST]

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BackupApi()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    val result : Backup = apiInstance.backupRestoreSpecificBackup(backup, backup2)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupApi#backupRestoreSpecificBackup")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupApi#backupRestoreSpecificBackup")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](Backup.md)|  | [optional]

### Return type

[**Backup**](Backup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupRestoreSpecificBackupStreamed"></a>
## **backupRestoreSpecificBackupStreamed**
> BackupStreamedProgress backupRestoreSpecificBackupStreamed(backup, backup2)

/backup/\{backup\}/restore/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BackupApi()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
val backup2 : Backup =  // Backup | 
try {
    val result : BackupStreamedProgress = apiInstance.backupRestoreSpecificBackupStreamed(backup, backup2)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupApi#backupRestoreSpecificBackupStreamed")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupApi#backupRestoreSpecificBackupStreamed")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |
 **backup2** | [**Backup**](Backup.md)|  | [optional]

### Return type

[**BackupStreamedProgress**](BackupStreamedProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="backupSpecificBackupSnapshot"></a>
## **backupSpecificBackupSnapshot**
> Backup backupSpecificBackupSnapshot(backup)

/backup/\{backup\} [GET]

This will just get the metadata associated with a specific backup.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BackupApi()
val backup : kotlin.String = backup_example // kotlin.String | This is a identifier that is used to identify a specific backup.(version_timestamp)
try {
    val result : Backup = apiInstance.backupSpecificBackupSnapshot(backup)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BackupApi#backupSpecificBackupSnapshot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BackupApi#backupSpecificBackupSnapshot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **kotlin.String**| This is a identifier that is used to identify a specific backup.(version_timestamp) |

### Return type

[**Backup**](Backup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

