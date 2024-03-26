# Backup API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup**](BackupApi#backup) | **POST** /backup | /backup [POST]
[**backupAsset**](BackupApi#backupasset) | **POST** /backup/asset | /backup/asset [POST]
[**backupRestoreSpecificBackup**](BackupApi#backuprestorespecificbackup) | **POST** /backup/\{backup\}/restore | /backup/\{backup\}/restore [POST]
[**backupRestoreSpecificBackupStreamed**](BackupApi#backuprestorespecificbackupstreamed) | **POST** /backup/\{backup\}/restore/streamed | /backup/\{backup\}/restore/streamed [POST]
[**backupSpecificBackupSnapshot**](BackupApi#backupspecificbackupsnapshot) | **GET** /backup/\{backup\} | /backup/\{backup\} [GET]


## **backup**
> backup(assets)

/backup [POST]



### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final assets = Assets(); // Assets | 

try {
    api_instance.backup(assets);
} catch (e) {
    print('Exception when calling BackupApi->backup: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](Assets)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupAsset**
> backupAsset(asset)

/backup/asset [POST]

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final asset = Asset(); // Asset | 

try {
    api_instance.backupAsset(asset);
} catch (e) {
    print('Exception when calling BackupApi->backupAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**Asset**](Asset)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupRestoreSpecificBackup**
> Backup backupRestoreSpecificBackup(backup, backup2)

/backup/\{backup\}/restore [POST]

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)
final backup2 = Backup(); // Backup | 

try {
    final result = api_instance.backupRestoreSpecificBackup(backup, backup2);
    print(result);
} catch (e) {
    print('Exception when calling BackupApi->backupRestoreSpecificBackup: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](Backup)|  | [optional] 

### Return type

[**Backup**](Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupRestoreSpecificBackupStreamed**
> BackupStreamedProgress backupRestoreSpecificBackupStreamed(backup, backup2)

/backup/\{backup\}/restore/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)
final backup2 = Backup(); // Backup | 

try {
    final result = api_instance.backupRestoreSpecificBackupStreamed(backup, backup2);
    print(result);
} catch (e) {
    print('Exception when calling BackupApi->backupRestoreSpecificBackupStreamed: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](Backup)|  | [optional] 

### Return type

[**BackupStreamedProgress**](BackupStreamedProgress)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupSpecificBackupSnapshot**
> Backup backupSpecificBackupSnapshot(backup)

/backup/\{backup\} [GET]

This will just get the metadata associated with a specific backup.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)

try {
    final result = api_instance.backupSpecificBackupSnapshot(backup);
    print(result);
} catch (e) {
    print('Exception when calling BackupApi->backupSpecificBackupSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type

[**Backup**](Backup)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



