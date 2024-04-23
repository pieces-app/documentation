---
title: Backup API | Dart SDK
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
> backup(assets)

/backup [POST]



### Example {#backup-example}
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

### Parameters {#backup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | [**Assets**](../models/Assets) |  | [optional] 

### Return type {#backup-return-type}

void (empty response body)

### Authorization {#backup-authorization}

No authorization required

### HTTP request headers {#backup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **backupAsset** {#backupasset}
> backupAsset(asset)

/backup/asset [POST]

### Example {#backupasset-example}
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

### Parameters {#backupasset-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | [**Asset**](../models/Asset) |  | [optional] 

### Return type {#backupasset-return-type}

void (empty response body)

### Authorization {#backupasset-authorization}

No authorization required

### HTTP request headers {#backupasset-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **backupRestoreSpecificBackup** {#backuprestorespecificbackup}
> Backup backupRestoreSpecificBackup(backup, backup2)

/backup/\{backup\}/restore [POST]

Given a backup identifier version_timestamp.  we will restore a given backup from the cloud and override your local database!!!  NOTE!!!! This will NOT sync, ie all local snippets will get replaced with the restored database.

### Example {#backuprestorespecificbackup-example}
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

### Parameters {#backuprestorespecificbackup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup) |  | [optional] 

### Return type {#backuprestorespecificbackup-return-type}

[**Backup**](../models/Backup)

### Authorization {#backuprestorespecificbackup-authorization}

No authorization required

### HTTP request headers {#backuprestorespecificbackup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **backupRestoreSpecificBackupStreamed** {#backuprestorespecificbackupstreamed}
> BackupStreamedProgress backupRestoreSpecificBackupStreamed(backup, backup2)

/backup/\{backup\}/restore/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backuprestorespecificbackupstreamed-example}
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

### Parameters {#backuprestorespecificbackupstreamed-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup) |  | [optional] 

### Return type {#backuprestorespecificbackupstreamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization {#backuprestorespecificbackupstreamed-authorization}

No authorization required

### HTTP request headers {#backuprestorespecificbackupstreamed-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **backupSpecificBackupSnapshot** {#backupspecificbackupsnapshot}
> Backup backupSpecificBackupSnapshot(backup)

/backup/\{backup\} [GET]

This will just get the metadata associated with a specific backup.

### Example {#backupspecificbackupsnapshot-example}
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

### Parameters {#backupspecificbackupsnapshot-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backupspecificbackupsnapshot-return-type}

[**Backup**](../models/Backup)

### Authorization {#backupspecificbackupsnapshot-authorization}

No authorization required

### HTTP request headers {#backupspecificbackupsnapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **backupSpecificCreationCancel** {#backupspecificcreationcancel}
> backupSpecificCreationCancel(backup)

/backup/\{backup\}/creation/cancel [POST]

This is Going to cancel a create backup (streamed) or not streamed that is currently in progress.  This will throw a 500 if there is not a backup in progress.  TODO: ADD mofe DESCRIPITON To this.

### Example {#backupspecificcreationcancel-example}
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

### Parameters {#backupspecificcreationcancel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backupspecificcreationcancel-return-type}

void (empty response body)

### Authorization {#backupspecificcreationcancel-authorization}

No authorization required

### HTTP request headers {#backupspecificcreationcancel-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain

## **backupSpecificCreationStatus** {#backupspecificcreationstatus}
> BackupStatus backupSpecificCreationStatus(backup)

/backup/\{backup\}/creation/status [GET]

TODO add a description:

### Example {#backupspecificcreationstatus-example}
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

### Parameters {#backupspecificcreationstatus-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backupspecificcreationstatus-return-type}

[**BackupStatus**](../models/BackupStatus)

### Authorization {#backupspecificcreationstatus-authorization}

No authorization required

### HTTP request headers {#backupspecificcreationstatus-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

## **backupSpecificRestorationCancel** {#backupspecificrestorationcancel}
> backupSpecificRestorationCancel(backup, backup2)

/backup/\{backup\}/restoration/cancel [POST]

This will cancel a Restoration that is in progress and restore to the original database.  Note: if there is not a restore in progress we will return a 500.  TODO add

### Example {#backupspecificrestorationcancel-example}
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

### Parameters {#backupspecificrestorationcancel-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup) |  | [optional] 

### Return type {#backupspecificrestorationcancel-return-type}

void (empty response body)

### Authorization {#backupspecificrestorationcancel-authorization}

No authorization required

### HTTP request headers {#backupspecificrestorationcancel-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **backupSpecificRestorationStatus** {#backupspecificrestorationstatus}
> BackupStatus backupSpecificRestorationStatus(backup)

/backup/\{backup\}/restoration/status [GET]

TODO add a description:

### Example {#backupspecificrestorationstatus-example}
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

### Parameters {#backupspecificrestorationstatus-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 

### Return type {#backupspecificrestorationstatus-return-type}

[**BackupStatus**](../models/BackupStatus)

### Authorization {#backupspecificrestorationstatus-authorization}

No authorization required

### HTTP request headers {#backupspecificrestorationstatus-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

