# Backup API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**backup**](BackupApi#backup) | **POST** /backup
[**backupAsset**](BackupApi#backupasset) | **POST** /backup/asset
[**backupRestoreSpecificBackup**](BackupApi#backuprestorespecificbackup) | **POST** /backup/\{backup\}/restore
[**backupRestoreSpecificBackupStreamed**](BackupApi#backuprestorespecificbackupstreamed) | **POST** /backup/\{backup\}/restore/streamed
[**backupSpecificBackupSnapshot**](BackupApi#backupspecificbackupsnapshot) | **GET** /backup/\{backup\}
[**backupSpecificCreationCancel**](BackupApi#backupspecificcreationcancel) | **POST** /backup/\{backup\}/creation/cancel
[**backupSpecificCreationStatus**](BackupApi#backupspecificcreationstatus) | **GET** /backup/\{backup\}/creation/status
[**backupSpecificRestorationCancel**](BackupApi#backupspecificrestorationcancel) | **POST** /backup/\{backup\}/restoration/cancel
[**backupSpecificRestorationStatus**](BackupApi#backupspecificrestorationstatus) | **GET** /backup/\{backup\}/restoration/status


## **backup** {#backup}
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
 **assets** | [**Assets**](../models/Assets)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupAsset** {#backupasset}
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
 **asset** | [**Asset**](../models/Asset)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
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
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)

try {
    api_instance.backupSpecificCreationCancel(backup);
} catch (e) {
    print('Exception when calling BackupApi->backupSpecificCreationCancel: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **backupSpecificCreationStatus** {#backupspecificcreationstatus}
> BackupStatus backupSpecificCreationStatus(backup)

/backup/\{backup\}/creation/status [GET]

TODO add a description:

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)

try {
    final result = api_instance.backupSpecificCreationStatus(backup);
    print(result);
} catch (e) {
    print('Exception when calling BackupApi->backupSpecificCreationStatus: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

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
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)
final backup2 = Backup(); // Backup | 

try {
    api_instance.backupSpecificRestorationCancel(backup, backup2);
} catch (e) {
    print('Exception when calling BackupApi->backupSpecificRestorationCancel: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **backupSpecificRestorationStatus** {#backupspecificrestorationstatus}
> BackupStatus backupSpecificRestorationStatus(backup)

/backup/\{backup\}/restoration/status [GET]

TODO add a description:

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)

try {
    final result = api_instance.backupSpecificRestorationStatus(backup);
    print(result);
} catch (e) {
    print('Exception when calling BackupApi->backupSpecificRestorationStatus: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String**| This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type

[**BackupStatus**](../models/BackupStatus)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



