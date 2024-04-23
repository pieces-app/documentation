---
title: Backups API | Dart SDK
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
> Backup backupsCreateNewBackup(seededBackup)

/backups/create [POST]

This take a local database and ensure that it is backed up to the cloud.

### Example {#backupscreatenewbackup-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final seededBackup = SeededBackup(); // SeededBackup | 

try {
    final result = api_instance.backupsCreateNewBackup(seededBackup);
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsCreateNewBackup: $e\n');
}
```

### Parameters {#backupscreatenewbackup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup) |  | [optional] 

### Return type {#backupscreatenewbackup-return-type}

[**Backup**](../models/Backup)

### Authorization {#backupscreatenewbackup-authorization}

No authorization required

### HTTP request headers {#backupscreatenewbackup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **backupsCreateNewBackupStreamed** {#backupscreatenewbackupstreamed}
> BackupStreamedProgress backupsCreateNewBackupStreamed(seededBackup)

/backups/create/streamed [POST]

This take a local database and ensure that it is backed up to the cloud.  NOTE: This is a streamed version of the /backups/create. and Since the Generator is unable to generate a streamed endpoint. this is a place holder, and will need to be implemented isolated from the code generator.

### Example {#backupscreatenewbackupstreamed-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final seededBackup = SeededBackup(); // SeededBackup | 

try {
    final result = api_instance.backupsCreateNewBackupStreamed(seededBackup);
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsCreateNewBackupStreamed: $e\n');
}
```

### Parameters {#backupscreatenewbackupstreamed-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededBackup** | [**SeededBackup**](../models/SeededBackup) |  | [optional] 

### Return type {#backupscreatenewbackupstreamed-return-type}

[**BackupStreamedProgress**](../models/BackupStreamedProgress)

### Authorization {#backupscreatenewbackupstreamed-authorization}

No authorization required

### HTTP request headers {#backupscreatenewbackupstreamed-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

## **backupsDeleteSpecificBackup** {#backupsdeletespecificbackup}
> backupsDeleteSpecificBackup(backup, backup2)

/backups/\{backup\}/delete [POST]

This will delete a specific backup from the cloud.

### Example {#backupsdeletespecificbackup-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();
final backup = backup_example; // String | This is a identifier that is used to identify a specific backup.(version_timestamp)
final backup2 = Backup(); // Backup | 

try {
    api_instance.backupsDeleteSpecificBackup(backup, backup2);
} catch (e) {
    print('Exception when calling BackupsApi->backupsDeleteSpecificBackup: $e\n');
}
```

### Parameters {#backupsdeletespecificbackup-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup** | **String** | This is a identifier that is used to identify a specific backup.(version_timestamp) | 
 **backup2** | [**Backup**](../models/Backup) |  | [optional] 

### Return type {#backupsdeletespecificbackup-return-type}

void (empty response body)

### Authorization {#backupsdeletespecificbackup-authorization}

No authorization required

### HTTP request headers {#backupsdeletespecificbackup-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: text/plain

## **backupsSnapshot** {#backupssnapshot}
> Backups backupsSnapshot()

/backups [GET]

This will get a snapshot of Backsup within the cloud.  This endpoint requires our user to be authenticated and connected to the cloud.

### Example {#backupssnapshot-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = BackupsApi();

try {
    final result = api_instance.backupsSnapshot();
    print(result);
} catch (e) {
    print('Exception when calling BackupsApi->backupsSnapshot: $e\n');
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
 - **Accept**: application/json, text/plain

